import { ApiLaunch, ApiLaunchResponse } from '@/types/api';
import { Launch, LaunchStatus } from '@/types/launch';

const API_BASE_URL = 'https://ll.thespacedevs.com/2.3.0';

// Map API status to our LaunchStatus
function mapStatus(apiStatus: string): LaunchStatus {
  const statusMap: Record<string, LaunchStatus> = {
    'Go': 'Go',
    'Go for Launch': 'Go',
    'TBD': 'TBD',
    'TBC': 'TBD',
    'To Be Determined': 'TBD',
    'To Be Confirmed': 'TBD',
    'Hold': 'Hold',
    'In Flight': 'Go',
    'Success': 'Success',
    'Failure': 'Failure',
    'Partial Failure': 'Failure',
  };

  return statusMap[apiStatus] || 'TBD';
}

// Map rocket names from API to our rocket IDs
function getRocketIdFromName(rocketName: string): string | undefined {
  const rocketMap: Record<string, string> = {
    'Falcon 9': 'falcon9',
    'Falcon Heavy': 'falconheavy',
    'Starship': 'starship',
    'Long March 2C': 'longmarch2c',
    'Long March 3B/E': 'longmarch3be',
    'Long March 7': 'longmarch7',
    'Long March 12': 'longmarch12',
    'Ceres-1S': 'ceres1s',
    'Ceres-2': 'ceres2',
    'New Shepard': 'newshepard',
    'New Glenn': 'newglenn',
    'Space Launch System': 'sls',
    'SLS': 'sls',
    'PSLV': 'pslv',
    'Spectrum': 'spectrum',
    'GSLV Mk-2': 'gslvmk2',
    'GSLV Mk-3': 'gslvmk3',
    'Electron': 'electron',
    'Smart Dragon 3': 'smartdragon3',
    'Vulcan VC4S': 'vulcanvc4s',
    'Ariane 6': 'ariane6',
    'Firefly Alpha': 'fireflyalpha',
    'Kairos': 'kairos',
    'Kii-based Advanced & Instant ROcket System': 'kairos',
    'Kinetica-2': 'kinetica2',
    'Proton-M': 'protonm',
    'Soyuz 2.1': 'soyuz21',
    'Soyuz-5': 'soyuz5',
    'Vikram-1': 'vikram1',
    'Neutron': 'neutron',
    'Gaganyaan': 'gaganyaan',
    'Atlas V': 'atlasvn22',
    'Atlas V N22': 'atlasvn22',
    'Minotaur IV': 'minotauriv',
    'Minotaur 4': 'minotauriv',
    'Pegasus XL': 'pegasusxl',
    'Tianlong-3': 'tianlong3',
    'Tianlong 3': 'tianlong3',
    'Vega-C': 'vegac',
    'Vega C': 'vegac',
  };

  // Try exact match first
  if (rocketMap[rocketName]) {
    return rocketMap[rocketName];
  }

  // Try partial match
  for (const [name, id] of Object.entries(rocketMap)) {
    if (rocketName.includes(name)) {
      return id;
    }
  }

  return undefined;
}

// Transform API launch data to our Launch type
function transformLaunch(apiLaunch: ApiLaunch): Launch {
  const rocketName = apiLaunch.rocket?.configuration?.full_name ||
                     apiLaunch.rocket?.configuration?.name ||
                     'Unknown Rocket';

  const location = apiLaunch.pad?.name && apiLaunch.pad?.location?.name
    ? `${apiLaunch.pad.name}, ${apiLaunch.pad.location.name}`
    : 'Unknown Location';

  const description = apiLaunch.mission?.description || 'No mission description available.';
  const livestream = apiLaunch.vidURLs?.[0]?.url;
  const rocketId = getRocketIdFromName(rocketName);

  return {
    id: apiLaunch.id,
    name: apiLaunch.name,
    rocket: rocketName,
    rocketId: rocketId,
    operator: apiLaunch.launch_service_provider?.name || 'Unknown Operator',
    location: location,
    launchDate: apiLaunch.net,
    status: mapStatus(apiLaunch.status?.name || 'TBD'),
    description: description,
    image: apiLaunch.image || undefined,
    livestream: livestream,
  };
}

export interface FetchLaunchesParams {
  limit?: number;
  offset?: number;
  status?: string;
  lsp?: string; // Launch Service Provider (agency)
  search?: string;
}

export async function fetchUpcomingLaunches(params: FetchLaunchesParams = {}): Promise<{ launches: Launch[]; count: number }> {
  const {
    limit = 20,
    offset = 0,
    status,
    lsp,
    search,
  } = params;

  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  if (status) {
    queryParams.append('status', status);
  }

  if (lsp) {
    queryParams.append('lsp__name', lsp);
  }

  if (search) {
    queryParams.append('search', search);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/launches/upcoming/?${queryParams.toString()}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: ApiLaunchResponse = await response.json();

    return {
      launches: data.results.map(transformLaunch),
      count: data.count,
    };
  } catch (error) {
    console.error('Error fetching launches:', error);
    throw error;
  }
}

// Fetch list of launch service providers for filters
export async function fetchLaunchProviders(): Promise<Array<{ id: number; name: string }>> {
  try {
    const response = await fetch(`${API_BASE_URL}/agencies/?limit=100&featured=true`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.results.map((agency: any) => ({
      id: agency.id,
      name: agency.name,
    }));
  } catch (error) {
    console.error('Error fetching launch providers:', error);
    return [];
  }
}
