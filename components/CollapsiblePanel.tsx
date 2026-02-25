'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface CollapsiblePanelProps {
  title: string;
  position: 'left' | 'right' | 'bottom';
  defaultOpen?: boolean;
  mobileDefaultOpen?: boolean;
  children: ReactNode;
  className?: string;
  icon?: string;
}

export default function CollapsiblePanel({
  title,
  position,
  defaultOpen = true,
  mobileDefaultOpen = false,
  children,
  className = '',
  icon,
}: CollapsiblePanelProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize state after mount to avoid hydration errors
  useEffect(() => {
    setMounted(true);
    setIsOpen(isMobile ? mobileDefaultOpen : defaultOpen);
  }, []);

  // Update state when screen size changes
  useEffect(() => {
    if (mounted) {
      setIsOpen(isMobile ? mobileDefaultOpen : defaultOpen);
    }
  }, [isMobile, defaultOpen, mobileDefaultOpen, mounted]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Get transform classes based on position and state
  const getTransformClass = () => {
    if (!mounted) {
      // Return closed state during SSR
      switch (position) {
        case 'left':
          return '-translate-x-full';
        case 'right':
          return 'translate-x-full';
        case 'bottom':
          return 'translate-y-full';
      }
    }

    if (isOpen) {
      return 'translate-x-0 translate-y-0';
    }

    switch (position) {
      case 'left':
        return '-translate-x-full';
      case 'right':
        return 'translate-x-full';
      case 'bottom':
        return 'translate-y-full';
    }
  };

  // Get toggle button position classes
  const getToggleButtonPosition = () => {
    switch (position) {
      case 'left':
        return 'absolute -right-10 top-4';
      case 'right':
        return 'absolute -left-10 top-4';
      case 'bottom':
        return 'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full';
    }
  };

  // Get chevron icon direction
  const getChevronIcon = () => {
    if (position === 'bottom') {
      return isOpen ? 'fa-chevron-down' : 'fa-chevron-up';
    }

    if (position === 'left') {
      return isOpen ? 'fa-chevron-left' : 'fa-chevron-right';
    }

    // position === 'right'
    return isOpen ? 'fa-chevron-right' : 'fa-chevron-left';
  };

  // Get position-specific classes
  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-4';
      case 'right':
        return 'right-4';
      case 'bottom':
        return 'left-0 right-0 bottom-0';
    }
  };

  return (
    <div
      className={`absolute ${getPositionClasses()} ${className} transition-transform duration-300 ease-in-out ${getTransformClass()} pointer-events-auto`}
    >
      {/* Toggle Button */}
      <button
        onClick={togglePanel}
        className={`${getToggleButtonPosition()} bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-110 z-[1001]`}
        aria-label={`${isOpen ? 'Close' : 'Open'} ${title}`}
        aria-expanded={isOpen}
      >
        <i className={`fa-solid ${getChevronIcon()} text-sm`}></i>
      </button>

      {/* Panel Content */}
      <div className="bg-gray-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-gray-800">
        {/* Panel Header */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-700">
          {icon && <span className="text-xl">{icon}</span>}
          <h2 className="text-lg font-bold">{title}</h2>
        </div>

        {/* Panel Body */}
        <div className="pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
