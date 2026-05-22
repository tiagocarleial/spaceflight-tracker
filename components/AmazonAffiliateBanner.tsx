'use client';

import { useState } from 'react';

interface Product {
  name: string;
  asin: string;
  affiliateLink: string;
  imageUrl: string;
  description: string;
  badge: string;
  pieces: string;
  age: string;
}

interface AmazonAffiliateBannerProps {
  product?: Product;
}

/**
 * Amazon Affiliate Product Banner
 * Display-style rectangular banner featuring LEGO products
 */
export default function AmazonAffiliateBanner({ product: customProduct }: AmazonAffiliateBannerProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Default product (Artemis Space Launch System)
  const defaultProduct: Product = {
    name: 'LEGO Icons NASA Artemis Space Launch System',
    asin: 'B0CRWGX5NH',
    affiliateLink: 'https://www.amazon.com/dp/B0CRWGX5NH?tag=tiagoolivei07-20&linkCode=ll2&linkId=b72017a00c3d1f501c948aa9e042ef56',
    imageUrl: 'https://m.media-amazon.com/images/I/81b4hg2iyRL._AC_SL1500_.jpg',
    description: 'Authentic replica with 2,354 pieces, opening payload bay & deployable Hubble Telescope',
    badge: 'Official NASA Product',
    pieces: '2,354 Pieces',
    age: 'Ages 18+',
  };

  const product = customProduct || defaultProduct;

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
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png"
                    alt="Amazon"
                    className="h-3 md:h-4 w-auto"
                  />
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
                      <span>{product.pieces}</span>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/40 rounded-md px-2 py-0.5 md:px-2.5 md:py-1 text-purple-300 text-[10px] md:text-xs font-medium flex items-center gap-1">
                      <i className="fa-solid fa-star text-[8px] md:text-xs"></i>
                      <span>{product.age}</span>
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
