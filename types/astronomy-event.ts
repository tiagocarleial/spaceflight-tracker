export type EventType =
  | 'eclipse-solar'
  | 'eclipse-lunar'
  | 'meteor-shower'
  | 'moon-phase'
  | 'conjunction'
  | 'planet-visibility'
  | 'supermoon'
  | 'comet';

export interface AstronomyEvent {
  id: string;
  title: string;
  type: EventType;
  date: string;
  dateFormatted: string;
  description: string;
  visibility: string; // Where it's visible
  peakTime?: string; // For meteor showers, eclipses, etc.
  magnitude?: number; // For celestial brightness
  details: string[]; // Additional details
  imageUrl?: string;
}

export interface MoonPhase {
  date: string;
  phase: string; // New Moon, First Quarter, Full Moon, Last Quarter
  illumination: number; // 0-100
}

export interface ProcessedAstronomyEvent extends AstronomyEvent {
  isPast: boolean;
  daysUntil: number;
  category: string;
}
