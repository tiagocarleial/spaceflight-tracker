export type RocketStatus = 'Active' | 'Retired' | 'In Development';

export interface RocketSpecs {
  height: { meters: number; feet: number };
  diameter: { meters: number; feet: number };
  mass: { kg: number; lb: number };
  payloadToLEO?: { kg: number; lb: number };
  payloadToGTO?: { kg: number; lb: number };
  stages: number;
  thrust?: { kN: number; lbf: number };
}

export interface Rocket {
  id: string;
  name: string;
  family: string;
  fullName: string;
  variant?: string;
  operator: string;
  image: string;

  specs: RocketSpecs;

  description: string;
  firstFlight?: string;
  status: RocketStatus;
  successRate?: number;
  totalLaunches?: number;
  reusable: boolean;
}
