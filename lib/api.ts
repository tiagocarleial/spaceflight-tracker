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

  return {
    id: apiLaunch.id,
    name: apiLaunch.name,
    rocket: rocketName,
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
