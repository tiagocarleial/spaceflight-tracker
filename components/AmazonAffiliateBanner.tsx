'use client';

import { useState } from 'react';

/**
 * Amazon Affiliate Product Banner
 * Display-style rectangular banner featuring LEGO Space Shuttle
 */
export default function AmazonAffiliateBanner() {
  const [isHovered, setIsHovered] = useState(false);

  // Product details
  const product = {
    name: 'LEGO Icons NASA Space Shuttle Discovery',
    asin: 'B0CRWGX5NH',
    affiliateLink: 'https://www.amazon.com/dp/B0CRWGX5NH?tag=tiagoolivei07-20&linkCode=ll2&linkId=b72017a00c3d1f501c948aa9e042ef56',
    imageUrl: 'https://m.media-amazon.com/images/I/81b4hg2iyRL._AC_SL1500_.jpg',
    description: 'Authentic replica with 2,354 pieces, opening payload bay & deployable Hubble Telescope',
    badge: 'Official NASA Product',
  };

  return (
    <section className="bg-gray-900 py-3 md:py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Banner Container */}
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`
                relative bg-gradient-to-br from-gray-800 to-gray-900
                border-2 border-yellow-500/30 rounded-xl overflow-hidden
                transition-all duration-300 shadow-lg
                min-h-[180px] md:min-h-[200px]
                ${isHovered ? 'border-yellow-500/60 shadow-2xl shadow-yellow-500/20 scale-[1.01]' : ''}
              `}
            >
              {/* Badge */}
              <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                <div className="bg-yellow-500 text-gray-900 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1">
                  <i className="fa-solid fa-star text-[8px] md:text-xs"></i>
                  <span>{product.badge}</span>
                </div>
              </div>

              {/* Amazon Logo */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10">
                <div className="bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg shadow-lg">
                  <svg
                    viewBox="0 0 603 182"
                    className="h-3 md:h-4 w-auto"
                    fill="#FF9900"
                  >
                    <g fillRule="evenodd">
                      <path d="M374.003 141.502c-30.829 22.71-75.531 34.818-113.997 34.818-53.923 0-102.485-19.943-139.229-53.135-2.884-2.604-.298-6.153 3.159-4.128 39.586 23.028 88.549 36.897 139.11 36.897 34.104 0 71.618-7.072 106.151-21.719 5.197-2.206 9.555 3.412 4.806 7.267"></path>
                      <path d="M387.23 126.302c-3.937-5.046-26.095-2.387-36.068-1.204-3.032.359-3.495-2.27-.765-4.174 17.653-12.419 46.625-8.838 50.013-4.674 3.391 4.176-.888 33.163-17.424 47-2.542 2.127-4.967.997-3.841-1.822 3.728-9.316 12.084-30.18 8.085-35.126"></path>
                      <path
                        d="M347.202 24.582v-10.798c0-1.64 1.25-2.738 2.738-2.738h48.506c1.554 0 2.793 1.124 2.793 2.738v9.253c-.013 1.551-1.325 3.58-3.646 6.793l-25.138 35.872c9.336-.226 19.196 1.166 27.658 5.946 1.913 1.083 2.431 2.673 2.576 4.236v11.516c0 1.577-1.731 3.424-3.553 2.465-14.968-7.863-34.848-8.715-51.416.125-1.705.912-3.501-.9-3.501-2.477V75.992c0-1.756.025-4.761 1.782-7.425l29.122-41.764h-25.337c-1.554 0-2.793-1.111-2.793-2.726l.209.505zM123.857 104.195h-14.68c-1.406-.1-2.527-1.174-2.632-2.542V13.795c0-1.516 1.277-2.726 2.856-2.726h13.674c1.431.075 2.58 1.174 2.684 2.567v11.807h.274c3.583-11.043 10.311-16.197 19.382-16.197 9.209 0 14.955 5.154 19.109 16.197 3.584-11.043 11.718-16.197 20.378-16.197 6.188 0 12.947 2.555 17.101 8.285 4.703 6.456 3.733 15.829 3.733 24.063l-.013 46.134c0 1.516-1.276 2.738-2.856 2.738h-14.668c-1.481-.1-2.657-1.26-2.657-2.738V48.128c0-3.234.3-11.306-.423-14.39-.971-5.154-3.857-6.606-7.603-6.606-3.135 0-6.414 2.093-7.74 5.443-1.327 3.347-1.203 8.951-1.203 14.102v51.05c0 1.516-1.277 2.738-2.856 2.738h-14.668c-1.494-.1-2.657-1.26-2.657-2.738l-.012-51.05c0-10.756 1.764-26.562-8.024-26.562-9.922 0-9.534 11.319-9.534 26.562v51.05c0 1.516-1.289 2.738-2.868 2.738l-.547-.012zM532.967 8.505c21.793 0 33.585 18.719 33.585 42.506 0 22.982-13.013 41.214-33.585 41.214-21.37 0-33.012-18.719-33.012-42.02 0-23.469 11.78-41.7 33.012-41.7zm.137 15.314c-10.759 0-11.432 14.665-11.432 23.793 0 9.142-.137 28.698 11.295 28.698 11.293 0 11.83-15.748 11.83-25.349 0-6.319-.274-13.889-1.74-19.955-1.19-5.281-3.583-7.187-7.953-7.187zm58.479 80.376h-14.63c-1.481-.1-2.657-1.26-2.657-2.738l-.013-87.84c.15-1.406 1.352-2.492 2.857-2.492h13.623c1.302.062 2.392 1.011 2.619 2.255v13.452h.274c3.995-11.867 9.609-17.509 20.378-17.509 6.712 0 13.262 2.418 17.465 9.073 3.995 6.169 3.995 16.575 3.995 24.063v50.129c-.2 1.344-1.402 2.418-2.856 2.418h-14.718c-1.364-.1-2.468-1.123-2.619-2.418V49.38c0-10.593.971-26.075-8.024-26.075-3.135 0-6.015 2.093-7.466 5.281-1.839 4.023-2.082 8.014-2.082 12.397v60.257c-.012 1.516-1.301 2.738-2.881 2.738l-.265.017zm-222.534 0c-1.913.175-3.508-1.36-3.708-3.247a3.507 3.507 0 01.013-.663V11.283c0-1.677 1.364-3.11 3.06-3.172l13.361-.012c1.789.087 3.234 1.447 3.334 3.16v12.41h.274c5.067-11.867 12.177-17.509 23.481-17.509 7.728 0 15.268 2.806 20.117 10.5 4.429 7.036 4.429 18.864 4.429 27.353v54.001c-.187 1.627-1.577 2.893-3.222 2.893h-14.843c-1.652-.125-2.968-1.397-3.084-2.98V50.066c0-10.919 1.251-26.886-9.534-26.886-3.708 0-7.117 2.48-8.816 6.256-2.145 4.764-2.431 9.528-2.431 14.793v56.488c0 1.516-1.252 2.738-2.819 2.738l-14.88.036h-.732zm-96.372-71.578c0-10.18-.274-18.601-7.604-26.075-5.88-6.331-15.255-8.585-22.585-8.585-14.232 0-30.124 5.314-33.585 23.02-.362 1.826.9 2.793 1.988 3.072l14.469 1.552c1.364-.262 2.256-1.552 2.543-2.905 1.327-6.494 6.699-9.625 12.862-9.625 3.297 0 7.042 1.164 9.062 4.023 2.319 3.185 1.988 7.533 1.988 11.231v2.018c-10.062.799-23.211 1.339-32.564 5.362-10.659 4.561-18.125 13.965-18.125 27.608 0 17.508 10.485 26.236 23.931 26.236 11.369 0 17.601-2.68 26.376-11.668 2.879 4.561 3.82 6.743 9.076 10.58 1.177.612 2.693.549 3.795-.262l.062-.062c3.135-2.68 8.779-7.62 11.931-10.237 1.165-1.002 1.002-2.555.137-3.883-2.581-3.397-5.292-6.231-5.292-12.623l.025-33.848.012.062zm-18.648 22.557c0 5.928.137 10.868-2.881 16.007-2.444 4.186-6.302 6.743-10.61 6.743-5.891 0-9.349-4.486-9.349-11.105 0-13.077 11.718-15.458 22.828-15.458l.012 3.813zm145.38-22.557c0-10.18-.274-18.601-7.604-26.075-5.88-6.331-15.255-8.585-22.572-8.585-14.232 0-30.137 5.314-33.598 23.02-.362 1.826.9 2.793 1.988 3.072l14.469 1.552c1.364-.262 2.256-1.552 2.543-2.905 1.327-6.494 6.7-9.625 12.862-9.625 3.297 0 7.042 1.164 9.062 4.023 2.319 3.185 1.988 7.533 1.988 11.231v2.018c-10.062.799-23.211 1.339-32.564 5.362-10.659 4.561-18.125 13.965-18.125 27.608 0 17.508 10.485 26.236 23.931 26.236 11.369 0 17.601-2.68 26.376-11.668 2.879 4.561 3.82 6.743 9.076 10.58 1.177.612 2.693.549 3.795-.262l.062-.062c3.135-2.68 8.779-7.62 11.931-10.237 1.165-1.002 1.002-2.555.137-3.883-2.581-3.397-5.292-6.231-5.292-12.623l.025-33.848.012.062h-.002zm-18.648 22.557c0 5.928.137 10.868-2.881 16.007-2.444 4.186-6.302 6.743-10.61 6.743-5.891 0-9.349-4.486-9.349-11.105 0-13.077 11.718-15.458 22.828-15.458l.012 3.813z"
                        fill="#221F1F"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-5 gap-3 md:gap-4 p-4 md:p-5">
                {/* Product Image - Left Side */}
                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={`
                        w-full h-auto max-w-[140px] md:max-w-[180px] mx-auto
                        transition-transform duration-300
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}
                    />
                  </div>
                </div>

                {/* Product Details - Right Side */}
                <div className="md:col-span-3 flex flex-col justify-center gap-2 md:gap-3">
                  {/* Product Name */}
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs md:text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5">
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-md px-2 py-0.5 md:px-2.5 md:py-1 text-blue-300 text-[10px] md:text-xs font-medium flex items-center gap-1">
                      <i className="fa-solid fa-cube text-[8px] md:text-xs"></i>
                      <span>2,354 Pieces</span>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-2 py-0.5 md:px-2.5 md:py-1 text-purple-300 text-[10px] md:text-xs font-medium flex items-center gap-1">
                      <i className="fa-solid fa-star text-[8px] md:text-xs"></i>
                      <span>Ages 18+</span>
                    </div>
                    <div className="bg-orange-500/20 border border-orange-500/40 rounded-md px-2 py-0.5 md:px-2.5 md:py-1 text-orange-300 text-[10px] md:text-xs font-medium flex items-center gap-1">
                      <i className="fa-solid fa-box text-[8px] md:text-xs"></i>
                      <span>Collector's Item</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-1">
                    <div
                      className={`
                        inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-lg
                        bg-gradient-to-r from-yellow-500 to-orange-500
                        text-gray-900 font-bold text-sm md:text-base
                        transition-all duration-300
                        ${isHovered ? 'shadow-lg shadow-yellow-500/50 scale-105' : 'shadow-md'}
                      `}
                    >
                      <span>View on Amazon</span>
                      <i className={`fa-solid fa-arrow-right text-xs transition-transform ${isHovered ? 'translate-x-1' : ''}`}></i>
                    </div>
                  </div>

                  {/* Prime Badge */}
                  <div className="flex items-center gap-1.5 text-blue-400 text-[10px] md:text-xs">
                    <i className="fa-solid fa-shipping-fast"></i>
                    <span className="font-medium">Eligible for Amazon Prime</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0
                  transition-opacity duration-300 pointer-events-none
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
              ></div>
            </div>
          </a>

          {/* Disclaimer */}
          <p className="text-center text-gray-500 text-[10px] md:text-xs mt-2">
            As an Amazon Associate, we earn from qualifying purchases. Price and availability subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}
