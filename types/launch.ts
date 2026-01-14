export type LaunchStatus = 'Go' | 'TBD' | 'Hold' | 'Success' | 'Failure';

export interface Launch {
  id: string;
  name: string;
  rocket: string;
  rocketId?: string; // Optional ID linking to Rocket
  operator: string;
  location: string;
  launchDate: string; // ISO date string
  status: LaunchStatus;
  description: string;
  image?: string;
  livestream?: string;
  recovery?: string;
}
