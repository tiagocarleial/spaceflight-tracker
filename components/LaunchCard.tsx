'use client';

import { Launch } from '@/types/launch';
import { useCountdown } from '@/hooks/useCountdown';
import Link from 'next/link';

interface LaunchCardProps {
  launch: Launch;
}

export default function LaunchCard({ launch }: LaunchCardProps) {
  const timeLeft = useCountdown(launch.launchDate);

  // Map rocket name to ID for routing
  const getRocketId = (): string | null => {
    if (launch.rocketId) return launch.rocketId;

    // Fallback: map rocket name to ID
    const rocketNameMap: Record<string, string> = {
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
      'PSLV-DL': 'pslv',
      'Spectrum': 'spectrum',
      'GSLV Mk-2': 'gslvmk2',
      'GSLV Mk II': 'gslvmk2',
      'GSLV Mk. II': 'gslvmk2',
      'GSLV Mk-3': 'gslvmk3',
      'GSLV Mk III': 'gslvmk3',
      'GSLV Mk. III': 'gslvmk3',
      'LVM3': 'gslvmk3',
      'Electron': 'electron',
      'Smart Dragon 3': 'smartdragon3',
      'Vulcan VC4S': 'vulcanvc4s',
      'Ariane 6': 'ariane6',
      'Ariane 64': 'ariane6',
      'Firefly Alpha': 'fireflyalpha',
      'Kairos': 'kairos',
      'Kinetica-2': 'kinetica2',
      'Kinetica': 'kinetica2',
      'Proton-M': 'protonm',
      'Proton M': 'protonm',
      'Soyuz 2.1': 'soyuz21',
      'Soyuz 2': 'soyuz21',
      'Soyuz-5': 'soyuz5',
      'Soyuz 5': 'soyuz5',
      'Vikram-1': 'vikram1',
      'Vikram': 'vikram1',
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

    for (const [name, id] of Object.entries(rocketNameMap)) {
      if (launch.rocket.includes(name)) {
        return id;
      }
    }

    return null;
  };

  const rocketId = getRocketId();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Go':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'TBD':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hold':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Success':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Failure':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const formatCountdown = () => {
    const prefix = timeLeft.total < 0 ? 'T+' : 'T-';

    if (timeLeft.days > 0) {
      return `${prefix}${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`;
    } else if (timeLeft.hours > 0) {
      return `${prefix}${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
    } else {
      return `${prefix}${timeLeft.minutes}m ${timeLeft.seconds}s`;
    }
  };

  const isFalcon9 = launch.rocket.includes('Falcon 9') && !launch.rocket.includes('Falcon Heavy');
  const isFalconHeavy = launch.rocket.includes('Falcon Heavy');
  const isStarship = launch.rocket.includes('Starship');
  const isSLS = launch.rocket.includes('Space Launch System') || launch.rocket.includes('SLS');
  const isPSLV = launch.rocket.includes('PSLV');
  const isNewGlenn = launch.rocket.includes('New Glenn');
  const isLongMarch2C = launch.rocket.includes('Long March 2C');
  const isLongMarch3BE = launch.rocket.includes('Long March 3B/E');
  const isLongMarch7 = launch.rocket.includes('Long March 7');
  const isLongMarch12 = launch.rocket.includes('Long March 12');
  const isCeres1S = launch.rocket.includes('Ceres-1S');
  const isCeres2 = launch.rocket.includes('Ceres-2');
  const isNewShepard = launch.rocket.includes('New Shepard');
  const isSpectrum = launch.rocket.includes('Spectrum');
  const isGSLVMk2 = launch.rocket.includes('GSLV Mk-2') || launch.rocket.includes('GSLV Mk II') || launch.rocket.includes('GSLV Mk. II');
  const isGSLVMk3 = launch.rocket.includes('GSLV Mk-3') || launch.rocket.includes('GSLV Mk III') || launch.rocket.includes('GSLV Mk. III') || launch.rocket.includes('LVM3');
  const isElectron = launch.rocket.includes('Electron');
  const isSmartDragon3 = launch.rocket.includes('Smart Dragon 3');
  const isVulcanVC4S = launch.rocket.includes('Vulcan VC4S');
  const isAriane6 = launch.rocket.includes('Ariane 6') || launch.rocket.includes('Ariane 64');
  const isFireflyAlpha = launch.rocket.includes('Firefly Alpha');
  const isKairos = launch.rocket.includes('Kairos') || launch.rocket.includes('Kii-based');
  const isKinetica2 = launch.rocket.includes('Kinetica');
  const isProtonM = launch.rocket.includes('Proton');
  const isSoyuz21 = launch.rocket.includes('Soyuz 2');
  const isSoyuz5 = launch.rocket.includes('Soyuz-5') || launch.rocket.includes('Soyuz 5');
  const isVikram1 = launch.rocket.includes('Vikram');
  const isNeutron = launch.rocket.includes('Neutron');
  const isGaganyaan = launch.rocket.includes('Gaganyaan');
  const isAtlasV = launch.rocket.includes('Atlas V');
  const isMinotaurIV = launch.rocket.includes('Minotaur IV') || launch.rocket.includes('Minotaur 4');
  const isPegasusXL = launch.rocket.includes('Pegasus XL');
  const isTianlong3 = launch.rocket.includes('Tianlong-3') || launch.rocket.includes('Tianlong 3');
  const isVegaC = launch.rocket.includes('Vega-C') || launch.rocket.includes('Vega C');

  const getRocketImage = () => {
    if (isFalcon9) return '/images/falcon9.png';
    if (isFalconHeavy) return '/images/falconHeavy.png';
    if (isStarship) return '/images/starship.png';
    if (isSLS) return '/images/slsBlock1.png';
    if (isPSLV) return '/images/pslv.png';
    if (isNewGlenn) return '/images/newGlenn.png';
    if (isLongMarch2C) return '/images/longMarch2c.png';
    if (isLongMarch3BE) return '/images/LongMarch3be.png';
    if (isLongMarch7) return '/images/longMarch7.png';
    if (isLongMarch12) return '/images/longMarch12.png';
    if (isCeres1S) return '/images/ceres1s.png';
    if (isCeres2) return '/images/ceres2.png';
    if (isNewShepard) return '/images/newShepard.png';
    if (isSpectrum) return '/images/spectrum.png';
    if (isGSLVMk2) return '/images/GSLVMk-2.png';
    if (isGSLVMk3) return '/images/GSLVMk-3.png';
    if (isElectron) return '/images/electron.png';
    if (isSmartDragon3) return '/images/smartDragon3.png';
    if (isVulcanVC4S) return '/images/vulcanVC4S.png';
    if (isAriane6) return '/images/ariane64.png';
    if (isFireflyAlpha) return '/images/fireflyAlpha.png';
    if (isKairos) return '/images/kairos.png';
    if (isKinetica2) return '/images/kinetica2.png';
    if (isProtonM) return '/images/protonMBlokDM03.png';
    if (isSoyuz21) return '/images/soyuz21.png';
    if (isSoyuz5) return '/images/soyuz5.png';
    if (isVikram1) return '/images/vikram1.png';
    if (isNeutron) return '/images/neutron.png';
    if (isGaganyaan) return '/images/gaganyaan.png';
    if (isAtlasV) return '/images/atlasVN22.png';
    if (isMinotaurIV) return '/images/minotaurIV.png';
    if (isPegasusXL) return '/images/pegasusXL.png';
    if (isTianlong3) return '/images/tianlong3.png';
    if (isVegaC) return '/images/vegaC.png';
    return null;
  };

  const rocketImage = getRocketImage();

  return (
    <div
      id={`launch-${launch.id}`}
      className="group relative bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 flex flex-col h-full overflow-hidden">
      {/* Background Image for Rockets */}
      {rocketImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity group-hover:opacity-100"
            style={{ backgroundImage: `url(${rocketImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/50 to-gray-900/30" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(launch.status)}`}>
          {launch.status}
        </span>
        <span className={`font-mono text-sm font-bold ${timeLeft.total < 0 ? 'text-green-400' : 'text-blue-400'}`} suppressHydrationWarning>
          {formatCountdown()}
        </span>
      </div>

      {/* Mission Name */}
      <h3 className="text-xl font-bold text-white mb-2">{launch.name}</h3>

      {/* Rocket Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-start">
          <span className="text-gray-400 text-sm w-20 flex-shrink-0">Rocket:</span>
          <span className="text-gray-200 text-sm font-medium">{launch.rocket}</span>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 text-sm w-20 flex-shrink-0">Operator:</span>
          <span className="text-gray-200 text-sm font-medium">{launch.operator}</span>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 text-sm w-20 flex-shrink-0">Location:</span>
          <span className="text-gray-200 text-sm">{launch.location}</span>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 text-sm w-20 flex-shrink-0">Launch:</span>
          <span className="text-gray-200 text-sm">{formatDate(launch.launchDate)}</span>
        </div>
        {launch.recovery && (
          <div className="flex items-start">
            <span className="text-gray-400 text-sm w-20 flex-shrink-0">Recovery:</span>
            <span className="text-gray-200 text-sm">{launch.recovery}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{launch.description}</p>

      {/* Spacer to push buttons to bottom */}
      <div className="flex-grow"></div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto">
        {/* Show Watch Live button prominently when within 1h30min before launch or up to 1h after */}
        {launch.livestream && timeLeft.total > -3600000 && timeLeft.total <= 5400000 ? (
          <>
            <button
              onClick={() => window.open(launch.livestream, '_blank')}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors animate-pulse"
            >
              🔴 Watch Live
            </button>
            {rocketId ? (
              <Link href={`/rockets/${rocketId}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                  Details
                </button>
              </Link>
            ) : (
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors opacity-50 cursor-not-allowed">
                Details
              </button>
            )}
          </>
        ) : (
          <>
            {rocketId ? (
              <Link href={`/rockets/${rocketId}`} className="flex-1">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                  Details
                </button>
              </Link>
            ) : (
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors opacity-50 cursor-not-allowed">
                Details
              </button>
            )}
            {launch.livestream && (
              <button
                onClick={() => window.open(launch.livestream, '_blank')}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                Watch Live
              </button>
            )}
          </>
        )}
      </div>
      </div>
    </div>
  );
}
