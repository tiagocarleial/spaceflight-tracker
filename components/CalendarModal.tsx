'use client';

import { useEffect } from 'react';
import { Launch } from '@/types/launch';
import CalendarMonth from './CalendarMonth';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  launches: Launch[];
  onSelectLaunch: (launchId: string) => void;
}

export default function CalendarModal({ isOpen, onClose, launches, onSelectLaunch }: CalendarModalProps) {
  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const today = new Date();

  // Calcular os 3 meses (atual + próximos 2)
  const getMonthYear = (offset: number) => {
    const date = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    return { year: date.getFullYear(), month: date.getMonth() };
  };

  const months = [
    getMonthYear(0), // Mês atual
    getMonthYear(1), // Próximo mês
    getMonthYear(2), // Mês seguinte
  ];

  // Handler para seleção de lançamento
  const handleLaunchSelect = (launchId: string) => {
    onSelectLaunch(launchId);
    onClose(); // Fecha após selecionar
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose} // Fechar ao clicar fora
    >
      <div
        className="bg-gray-800 rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Não fechar ao clicar dentro
      >
        {/* Header com título e botão X */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Launch Calendar</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close calendar"
          >
            <i className="fa-solid fa-xmark text-gray-400 text-xl"></i>
          </button>
        </div>

        {/* Grid de 3 meses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {months.map(({ year, month }) => (
            <CalendarMonth
              key={`${year}-${month}`}
              year={year}
              month={month}
              launches={launches}
              onSelectLaunch={handleLaunchSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
