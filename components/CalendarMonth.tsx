'use client';

import { useState } from 'react';
import { Launch } from '@/types/launch';
import LaunchListItem from './LaunchListItem';

interface CalendarMonthProps {
  year: number;
  month: number; // 0-11 (JavaScript month numbering)
  launches: Launch[];
  onSelectLaunch: (launchId: string) => void;
}

export default function CalendarMonth({ year, month, launches, onSelectLaunch }: CalendarMonthProps) {
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  // Gerar dias do mês
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday

  // Agrupar lançamentos por data
  const launchesByDate = launches.reduce((acc, launch) => {
    const date = new Date(launch.launchDate);
    if (date.getFullYear() === year && date.getMonth() === month) {
      const dateKey = date.getDate().toString();
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(launch);
    }
    return acc;
  }, {} as Record<string, Launch[]>);

  const monthName = new Date(year, month).toLocaleString('en-US', { month: 'long', year: 'numeric' });

  // Check if a date is today
  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
      {/* Nome do mês */}
      <h3 className="text-lg font-bold text-white mb-4 text-center">{monthName}</h3>

      {/* Dias da semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-gray-400 text-xs text-center font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Grid de dias */}
      <div className="grid grid-cols-7 gap-1">
        {/* Espaços vazios antes do primeiro dia */}
        {Array.from({ length: startingDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Dias do mês */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateKey = day.toString();
          const hasLaunches = !!launchesByDate[dateKey];
          const isExpanded = expandedDate === dateKey;
          const todayHighlight = isToday(day);

          return (
            <div key={day} className="relative">
              <button
                onClick={() => hasLaunches && setExpandedDate(isExpanded ? null : dateKey)}
                className={`
                  w-full aspect-square flex items-center justify-center rounded
                  text-sm transition-colors
                  ${hasLaunches ? 'font-bold text-white bg-blue-600/20 hover:bg-blue-600/30 cursor-pointer' : 'text-gray-500 cursor-default'}
                  ${todayHighlight ? 'ring-2 ring-blue-400' : ''}
                  ${isExpanded ? 'bg-blue-600/40' : ''}
                `}
                disabled={!hasLaunches}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>

      {/* Lista expandida de lançamentos */}
      {expandedDate && launchesByDate[expandedDate] && (
        <div className="mt-4 space-y-2 border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-400 mb-2">
            {launchesByDate[expandedDate].length} launch{launchesByDate[expandedDate].length !== 1 ? 'es' : ''} on day {expandedDate}
          </p>
          {launchesByDate[expandedDate].map((launch) => (
            <LaunchListItem
              key={launch.id}
              launch={launch}
              onClick={onSelectLaunch}
            />
          ))}
        </div>
      )}
    </div>
  );
}
