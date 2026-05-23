'use client';

import { Launch } from '@/types/launch';
import { useCountdown } from '@/hooks/useCountdown';
import Link from 'next/link';
import { useState } from 'react';

interface LaunchCardProps {
  launch: Launch;
}

const ARIANE6_YOUTUBE_ID = '4semT-bMKP0';
const FALCON9_YOUTUBE_ID = 'DbtmyKl3nRg';
const STARLINK_1713_YOUTUBE_ID = 'BqY16cVb91A';
const STARLINK_6103_YOUTUBE_ID = 'cAXyUENc_ms';
const STARLINK_1036_YOUTUBE_ID = '5C-ojFRB7BY';
const STARLINK_6104_YOUTUBE_ID = 'ybbp7LwLNRA';
const STARLINK_1725_YOUTUBE_ID = 'RMZdxpWNcq4';
const STARLINK_1726_YOUTUBE_ID = 'haOQTDezHZo';
const HASTE_DART_YOUTUBE_ID = 'UP45i7BSxBk';
const STARLINK_6108_YOUTUBE_ID = 'kySMar3NiVI';
const FIREFLY_ALPHA_STAIRWAY_YOUTUBE_ID= '8oRLF-jL0QE';
const KAIROS_FLIGHT3_YOUTUBE_ID = 'FHulTZT73us';
const STARLINK_1041_YOUTUBE_ID = 'mohksHgKRBQ';
const ELECTRON_BLACKSKY_YOUTUBE_ID = 'VQhLu0hOB14';
const STARLINK_1718_YOUTUBE_ID = '4bvsh6a6xdA';
const STARLINK_1731_YOUTUBE_ID = '9-_Dj6F_bAs';
const STARLINK_1048_YOUTUBE_ID = '1wAHx4eCiSw';
const STARLINK_1046_YOUTUBE_ID = 'djZIkcLXvjU';
const STARLINK_1724_YOUTUBE_ID = 'AMAZ2ivrIBI';
const STARLINK_1033_YOUTUBE_ID = 'H-EWvczQJBE';
const ELECTRON_STRIX8_YOUTUBE_ID = 'EfUFYq2i4us';
const STARLINK_1715_YOUTUBE_ID = 'ycPLsr6A8kw';
const PROGRESS_MS33_YOUTUBE_ID = 'iUYFJSfNrmE';
const STARLINK_1062_YOUTUBE_ID = 'xT1aSiu3MCY';
const STARLINK_1717_YOUTUBE_ID = 'gnsvRgCQijE';
const ELECTRON_DAUGHTER_YOUTUBE_ID = 'qJGdUrhxi6U';
const SPECTRUM_ONWARD_YOUTUBE_ID = 'MsbZj8PxmUk';
const ATLAS_V_AMAZON_LEO_YOUTUBE_ID = '6SiX9UPKq8Y';
const STARLINK_1044_YOUTUBE_ID = 'tArfYI_wUsU';
const MERIDIAN_M21L_YOUTUBE_ID = '83D0qjisYEo';
const ARTEMIS_II_YOUTUBE_ID = 'Tf_UjBMIzNo';
const STARLINK_1735_YOUTUBE_ID = 'H2Dofm5HhJk';
const MINOTAUR_IV_STP_S29A_YOUTUBE_ID = 'tVZbxI3q3Sg';
const STARLINK_1727_YOUTUBE_ID = 'C9PsD7HP33w';
const NEWGLENN_BLUEBIRD2_YOUTUBE_ID = 'Th6CEXFBW9Q';
const STARLINK_1722_YOUTUBE_ID = 'HGjxJTLsjIQ';
const GPS_III_SV10_YOUTUBE_ID = 'q8kuBDUd-fM';
const STARLINK_1714_YOUTUBE_ID = 'gw8bTsnujaA';
const ELECTRON_KAKUSHIN_YOUTUBE_ID = '6Ijsdu_B4gw';
const VIASAT3_F3_YOUTUBE_ID = 'n14D0CYfocE';
const ATLAS_V_AMAZON_LA06_YOUTUBE_ID = 'u5qUzkJb1tk';
const STARLINK_1736_YOUTUBE_ID = 'aICKQg1K8Yk';
const ARIANE64_AMAZON_LE02_YOUTUBE_ID = '-XFZXWr9QMI';
const STARLINK_1038_YOUTUBE_ID = 'F6t613w-Pow';
const CAS500_2_YOUTUBE_ID = 'eI10xHO4f8E';
const STARLINK_1729_YOUTUBE_ID = 'IhlqOzOj6qM';
const DRAGON_CRS2_SPX34_YOUTUBE_ID = 'sduVCfNEg7o';
const STARLINK_1737_YOUTUBE_ID = 'hAbo8i2iky0';
const SMILE_YOUTUBE_ID = 'MLUJ7W4Uz-8';
const STARLINK_1742_YOUTUBE_ID = 'RM2r6SzRJCI';
const STARLINK_1031_YOUTUBE_ID = '0z38uvKyoi0';
const STARSHIP_FLIGHT12_YOUTUBE_ID = 'mhJRzQsLZGg';
const ELECTRON_STRIX9_YOUTUBE_ID = 'oyrrCpLFU88';
const SHENZHOU_23_YOUTUBE_ID = 'qyrqe_vl0Vs';


export default function LaunchCard({ launch }: LaunchCardProps) {
  const timeLeft = useCountdown(launch.launchDate);
  const [videoModalId, setVideoModalId] = useState<string | null>(null);

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
  const isCrew12 = isFalcon9 && launch.name.toLowerCase().includes('crew-12');
  const isStarlink1713 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-13');
  const isStarlink6103 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 6-103');
  const isStarlink1036 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-36');
  const isStarlink6104 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 6-104');
  const isStarlink1725 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-25');
  const isStarlink1726 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-26');
  const isStarlink6108= isFalcon9 && launch.name.toLowerCase().includes('starlink group 6-108');
  const isStarlink1041= isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-41');
  const isStarlink1718 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-18');
  const isStarlink1731 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-31');
  const isStarlink1048 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-48');
  const isStarlink1046 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-46');
  const isStarlink1724 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-24');
  const isStarlink1033 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-33');
  const isStarlink1715 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-15');
  const isStarlink1062 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-62');
  const isStarlink1717 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-17');
  const isStarlink1044 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-44');
  const isStarlink1735 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-35');
  const isStarlink1727 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-27');
  const isStarlink1722 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-22');
  const isStarlink1714 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-14');
  const isStarlink1736 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-36');
  const isStarlink1737 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-37');
  const isStarlink1729 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-29');
  const isStarlink1038 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-38');
  const isCAS5002 = isFalcon9 && launch.name.toLowerCase().includes('cas500-2');
  const isDragonCRS2SpX34 = isFalcon9 && launch.name.toLowerCase().includes('dragon crs-2 spx-34');
  const isSMILE = launch.name.toLowerCase().includes('smile') || launch.name.toLowerCase().includes('magnetosphere ionosphere');
  const isStarlink1742 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 17-42');
  const isStarlink1031 = isFalcon9 && launch.name.toLowerCase().includes('starlink group 10-31');
  const isGPSIIISV10 = isFalcon9 && launch.name.toLowerCase().includes('gps iii sv10');
  const isHASTE = launch.name.toLowerCase().includes('haste');
  const isFIREFLY = launch.name.toLowerCase().includes('stairway to seven');
  const isKairosFlight3 = launch.name.toLowerCase().includes('kairos') && launch.name.toLowerCase().includes('flight 3');
  const isElectronBlackSky = launch.name.toLowerCase().includes('insight at speed is a friend indeed');
  const isFalconHeavy = launch.rocket.includes('Falcon Heavy');
  const isViaSat3F3 = isFalconHeavy && launch.name.toLowerCase().includes('viasat-3 f3');
  const isStarship = launch.rocket.includes('Starship');
  const isStarshipFlight12 = isStarship && launch.name.toLowerCase().includes('flight 12');
  const isSLS = launch.rocket.includes('Space Launch System') || launch.rocket.includes('SLS');
  const isArtemisII = isSLS && launch.name.toLowerCase().includes('artemis ii');
  const isPSLV = launch.rocket.includes('PSLV');
  const isNewGlenn = launch.rocket.includes('New Glenn');
  const isNewGlennBlueBird2 = isNewGlenn && launch.name.toLowerCase().includes('bluebird block 2');
  const isLongMarch2F = launch.rocket.includes('Long March 2F');
  const isShenzhou23 = isLongMarch2F && launch.name.toLowerCase().includes('shenzhou 23');
  const isLongMarch2C = launch.rocket.includes('Long March 2C');
  const isLongMarch3BE = launch.rocket.includes('Long March 3B/E');
  const isLongMarch6A = launch.rocket.includes('Long March 6A');
  const isLongMarch7 = launch.rocket.includes('Long March 7');
  const isLongMarch12 = launch.rocket.includes('Long March 12');
  const isKuaizhou1A = launch.rocket.includes('Kuaizhou 1A');
  const isCeres1S = launch.rocket.includes('Ceres-1S');
  const isCeres2 = launch.rocket.includes('Ceres-2');
  const isNewShepard = launch.rocket.includes('New Shepard');
  const isSpectrum = launch.rocket.includes('Spectrum');
  const isGSLVMk2 = launch.rocket.includes('GSLV Mk-2') || launch.rocket.includes('GSLV Mk II') || launch.rocket.includes('GSLV Mk. II');
  const isGSLVMk3 = launch.rocket.includes('GSLV Mk-3') || launch.rocket.includes('GSLV Mk III') || launch.rocket.includes('GSLV Mk. III') || launch.rocket.includes('LVM3');
  const isElectron = launch.rocket.includes('Electron');
  const isElectronStriX8 = isElectron && (launch.name.toLowerCase().includes('eight days a week') || launch.name.toLowerCase().includes('strix launch 8'));
  const isElectronStriX9 = isElectron && (launch.name.toLowerCase().includes('viva la strix') || launch.name.toLowerCase().includes('strix launch 9'));
  const isElectronDaughter = isElectron && (launch.name.toLowerCase().includes('daughter of the stars') || launch.name.toLowerCase().includes('leo-pnt pathfinder'));
  const isElectronKakushin = isElectron && launch.name.toLowerCase().includes('kakushin rising');
  const isSpectrumOnward = isSpectrum && launch.name.toLowerCase().includes('onward and upward');
  const isSmartDragon3 = launch.rocket.includes('Smart Dragon 3');
  const isVulcanVC4S = launch.rocket.includes('Vulcan VC4S');
  const isAriane6 = launch.rocket.includes('Ariane 6') || launch.rocket.includes('Ariane 64');
  const isAriane64AmazonLE02 = isAriane6 && launch.name.toLowerCase().includes('amazon leo') && launch.name.toLowerCase().includes('le-02');
  const isFireflyAlpha = launch.rocket.includes('Firefly Alpha');
  const isKairos = launch.rocket.includes('Kairos') || launch.rocket.includes('Kii-based');
  const isKinetica2 = launch.rocket.includes('Kinetica');
  const isProtonM = launch.rocket.includes('Proton');
  const isSoyuz21 = launch.rocket.includes('Soyuz 2');
  const isProgressMS33 = isSoyuz21 && (launch.name.toLowerCase().includes('progress ms-33') || launch.name.toLowerCase().includes('progress ms33'));
  const isMeridianM21L = isSoyuz21 && (launch.name.toLowerCase().includes('meridian-m no.21l') || launch.name.toLowerCase().includes('meridian'));
  const isSoyuz5 = launch.rocket.includes('Soyuz-5') || launch.rocket.includes('Soyuz 5');
  const isVikram1 = launch.rocket.includes('Vikram');
  const isNeutron = launch.rocket.includes('Neutron');
  const isGaganyaan = launch.rocket.includes('Gaganyaan');
  const isAtlasV = launch.rocket.includes('Atlas V');
  const isAtlasVAmazonLeo = isAtlasV && launch.name.toLowerCase().includes('amazon leo');
  const isAtlasVAmazonLA06 = isAtlasV && launch.name.toLowerCase().includes('la-06');
  const isMinotaurIV = launch.rocket.includes('Minotaur IV') || launch.rocket.includes('Minotaur 4');
  const isMinotaurIVSTP = isMinotaurIV && (launch.name.toLowerCase().includes('stp-s29a') || launch.name.toLowerCase().includes('stp s29a'));
  const isPegasusXL = launch.rocket.includes('Pegasus XL');
  const isTianlong3 = launch.rocket.includes('Tianlong-3') || launch.rocket.includes('Tianlong 3');
  const isVegaC = launch.rocket.includes('Vega-C') || launch.rocket.includes('Vega C');

  // Check if this launch has a Watch Now button
  const hasWatchNow = isAriane6 || isCrew12 || isStarlink1713 || isStarlink6103 || isStarlink1036 || isStarlink1041 ||
                      isStarlink6104 || isStarlink1725 || isStarlink1726 || isHASTE || isStarlink6108 || isFIREFLY || isKairosFlight3 || isElectronBlackSky || isStarlink1718 || isStarlink1731 || isStarlink1048 || isStarlink1046 || isStarlink1724 || isStarlink1033 || isElectronStriX8 || isStarlink1715 || isProgressMS33 || isStarlink1062 || isStarlink1717 || isElectronDaughter || isSpectrumOnward || isAtlasVAmazonLeo || isStarlink1044 || isMeridianM21L || isArtemisII || isStarlink1735 || isMinotaurIVSTP || isStarlink1727 || isNewGlennBlueBird2 || isStarlink1722 || isGPSIIISV10 || isStarlink1714 || isElectronKakushin || isViaSat3F3 || isAtlasVAmazonLA06 || isStarlink1736 || isAriane64AmazonLE02 || isStarlink1038 || isCAS5002 || isStarlink1729 || isDragonCRS2SpX34 || isStarlink1737 || isSMILE || isStarlink1742 || isStarlink1031 || isStarshipFlight12 || isElectronStriX9 || isShenzhou23;

  const getRocketImage = () => {
    if (isFalcon9) return '/images/falcon9.png';
    if (isFalconHeavy) return '/images/falconHeavy.png';
    if (isStarship) return '/images/starship.png';
    if (isSLS) return '/images/slsBlock1.png';
    if (isPSLV) return '/images/pslv.png';
    if (isNewGlenn) return '/images/newGlenn.png';
    if (isLongMarch2C) return '/images/longMarch2c.png';
    if (isLongMarch3BE) return '/images/LongMarch3be.png';
    if (isLongMarch6A) return '/images/longMarch6A.png';
    if (isLongMarch7) return '/images/longMarch7.png';
    if (isLongMarch12) return '/images/longMarch12.png';
    if (isKuaizhou1A) return '/images/kuaizhou1A.png';
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
            role="img"
            aria-label={`${launch.rocket} rocket`}
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
              <Link href={`/rockets/${rocketId}`} className={hasWatchNow ? 'flex-1' : 'flex-1'}>
                <button className={`${hasWatchNow ? 'w-full' : 'w-full'} bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors`}>
                  Details
                </button>
              </Link>
            ) : (
              <button className={`${hasWatchNow ? 'flex-1' : 'w-full'} bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors opacity-50 cursor-not-allowed`}>
                Details
              </button>
            )}
            {isAriane6 && (
              <button
                onClick={() => setVideoModalId(ARIANE6_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isCrew12 && (
              <button
                onClick={() => setVideoModalId(FALCON9_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1713 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1713_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink6103 && (
              <button
                onClick={() => setVideoModalId(STARLINK_6103_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1036 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1036_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink6104 && (
              <button
                onClick={() => setVideoModalId(STARLINK_6104_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1725 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1725_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1726 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1726_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isHASTE && (
              <button
                onClick={() => setVideoModalId(HASTE_DART_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink6108 && (
              <button
                onClick={() => setVideoModalId(STARLINK_6108_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isFIREFLY && (
              <button
                onClick={() => setVideoModalId(FIREFLY_ALPHA_STAIRWAY_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isKairosFlight3 && (
              <button
                onClick={() => setVideoModalId(KAIROS_FLIGHT3_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1041 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1041_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isElectronBlackSky && (
              <button
                onClick={() => setVideoModalId(ELECTRON_BLACKSKY_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1718 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1718_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1731 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1731_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1048 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1048_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1046 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1046_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1724 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1724_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1033 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1033_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isElectronStriX8 && (
              <button
                onClick={() => setVideoModalId(ELECTRON_STRIX8_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1715 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1715_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isProgressMS33 && (
              <button
                onClick={() => setVideoModalId(PROGRESS_MS33_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1062 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1062_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1717 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1717_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isElectronDaughter && (
              <button
                onClick={() => setVideoModalId(ELECTRON_DAUGHTER_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isSpectrumOnward && (
              <button
                onClick={() => setVideoModalId(SPECTRUM_ONWARD_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isAtlasVAmazonLeo && (
              <button
                onClick={() => setVideoModalId(ATLAS_V_AMAZON_LEO_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1044 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1044_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isMeridianM21L && (
              <button
                onClick={() => setVideoModalId(MERIDIAN_M21L_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isArtemisII && (
              <button
                onClick={() => setVideoModalId(ARTEMIS_II_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1735 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1735_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isMinotaurIVSTP && (
              <button
                onClick={() => setVideoModalId(MINOTAUR_IV_STP_S29A_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1727 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1727_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isNewGlennBlueBird2 && (
              <button
                onClick={() => setVideoModalId(NEWGLENN_BLUEBIRD2_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1722 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1722_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isGPSIIISV10 && (
              <button
                onClick={() => setVideoModalId(GPS_III_SV10_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1714 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1714_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isElectronKakushin && (
              <button
                onClick={() => setVideoModalId(ELECTRON_KAKUSHIN_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isViaSat3F3 && (
              <button
                onClick={() => setVideoModalId(VIASAT3_F3_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isAtlasVAmazonLA06 && (
              <button
                onClick={() => setVideoModalId(ATLAS_V_AMAZON_LA06_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1736 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1736_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isAriane64AmazonLE02 && (
              <button
                onClick={() => setVideoModalId(ARIANE64_AMAZON_LE02_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1038 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1038_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isCAS5002 && (
              <button
                onClick={() => setVideoModalId(CAS500_2_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1729 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1729_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isDragonCRS2SpX34 && (
              <button
                onClick={() => setVideoModalId(DRAGON_CRS2_SPX34_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1737 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1737_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isSMILE && (
              <button
                onClick={() => setVideoModalId(SMILE_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1742 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1742_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarlink1031 && (
              <button
                onClick={() => setVideoModalId(STARLINK_1031_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isStarshipFlight12 && (
              <button
                onClick={() => setVideoModalId(STARSHIP_FLIGHT12_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isElectronStriX9 && (
              <button
                onClick={() => setVideoModalId(ELECTRON_STRIX9_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {isShenzhou23 && (
              <button
                onClick={() => setVideoModalId(SHENZHOU_23_YOUTUBE_ID)}
                className="flex-1 bg-red-700 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
              >
                ▶ Watch Now
              </button>
            )}
            {launch.livestream && !hasWatchNow && (
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

      {/* YouTube Modal */}
      {videoModalId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoModalId(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalId(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoModalId}?autoplay=1`}
                title="Launch Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
