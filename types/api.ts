// The Space Devs API response types
export interface ApiLaunchServiceProvider {
  id: number;
  name: string;
  type: string;
}

export interface ApiRocket {
  id: number;
  configuration: {
    id: number;
    name: string;
    family: string;
    full_name: string;
    variant: string;
  };
}

export interface ApiLocation {
  id: number;
  name: string;
  country_code: string;
}

export interface ApiPad {
  id: number;
  name: string;
  location: ApiLocation;
}

export interface ApiMission {
  id: number;
  name: string;
  description: string;
  type: string;
  orbit?: {
    id: number;
    name: string;
    abbrev: string;
  };
}

export interface ApiStatus {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface ApiLaunch {
  id: string;
  name: string;
  net: string; // Network Estimated Time (ISO date)
  window_end: string;
  window_start: string;
  status: ApiStatus;
  launch_service_provider: ApiLaunchServiceProvider;
  rocket: ApiRocket;
  pad: ApiPad;
  mission: ApiMission | null;
  webcast_live: boolean;
  image: string | null;
  infographic: string | null;
  vidURLs?: Array<{ url: string }>;
}

export interface ApiLaunchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiLaunch[];
}
