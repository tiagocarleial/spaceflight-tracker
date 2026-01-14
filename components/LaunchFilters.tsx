'use client';

import { useState } from 'react';

export interface FilterState {
  agency: string;
  status: string;
  search: string;
}

interface LaunchFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  agencies: Array<{ id: number; name: string }>;
}

const STATUS_OPTIONS = [
  { value: '', label: 'All Status' },
  { value: 'Go', label: 'Go for Launch' },
  { value: 'TBD', label: 'To Be Determined' },
  { value: 'Hold', label: 'On Hold' },
];

export default function LaunchFilters({ onFilterChange, agencies }: LaunchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    agency: '',
    status: '',
    search: '',
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = { agency: '', status: '', search: '' };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = filters.agency || filters.status || filters.search;

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Search */}
        <div>
          <label htmlFor="search" className="block text-xs font-medium text-gray-400 mb-1">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search missions..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-2.5 py-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Agency Filter */}
        <div>
          <label htmlFor="agency" className="block text-xs font-medium text-gray-400 mb-1">
            Agency
          </label>
          <select
            id="agency"
            value={filters.agency}
            onChange={(e) => handleFilterChange('agency', e.target.value)}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-2.5 py-1 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All Agencies</option>
            {agencies.map((agency) => (
              <option key={agency.id} value={agency.name}>
                {agency.name}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label htmlFor="status" className="block text-xs font-medium text-gray-400 mb-1">
            Status
          </label>
          <select
            id="status"
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-2.5 py-1 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            {STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-2 flex flex-wrap gap-2">
          {filters.search && (
            <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
              Search: {filters.search}
              <button
                onClick={() => handleFilterChange('search', '')}
                className="hover:text-blue-300"
              >
                ×
              </button>
            </span>
          )}
          {filters.agency && (
            <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
              Agency: {filters.agency}
              <button
                onClick={() => handleFilterChange('agency', '')}
                className="hover:text-purple-300"
              >
                ×
              </button>
            </span>
          )}
          {filters.status && (
            <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              Status: {STATUS_OPTIONS.find(s => s.value === filters.status)?.label}
              <button
                onClick={() => handleFilterChange('status', '')}
                className="hover:text-green-300"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
