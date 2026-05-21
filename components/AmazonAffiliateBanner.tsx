'use client';

import { useState } from 'react';

interface AmazonProduct {
  title: string;
  description: string;
  searchTerm: string;
  icon: string;
  color: string;
}

const products: AmazonProduct[] = [
  {
    title: 'Space Books & Guides',
    description: 'Explore the cosmos through expert literature',
    searchTerm: 'space+exploration+books',
    icon: 'fa-book',
    color: 'blue',
  },
  {
    title: 'Telescopes & Binoculars',
    description: 'Observe launches and celestial objects',
    searchTerm: 'telescope+astronomy',
    icon: 'fa-binoculars',
    color: 'purple',
  },
  {
    title: 'Space Models & Toys',
    description: 'Collectible rockets and spacecraft',
    searchTerm: 'space+rocket+model',
    icon: 'fa-rocket',
    color: 'orange',
  },
  {
    title: 'Astronomy Tools',
    description: 'Star charts, planispheres, and more',
    searchTerm: 'astronomy+equipment',
    icon: 'fa-compass',
    color: 'green',
  },
];

export default function AmazonAffiliateBanner() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const affiliateTag = 'tiagoolivei07-20';

  const createAmazonLink = (searchTerm: string) => {
    return `https://www.amazon.com/s?k=${searchTerm}&tag=${affiliateTag}`;
  };

  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 border-y border-gray-700 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5">
              <i className="fa-brands fa-amazon text-yellow-400 text-sm"></i>
              <span className="text-yellow-400 text-xs font-medium">Featured Space Products</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Enhance Your Space Experience
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Discover telescopes, books, models, and tools to explore the universe
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => {
              const colorClasses = {
                blue: 'from-blue-500/10 to-blue-600/5 border-blue-500/30 hover:border-blue-400',
                purple: 'from-purple-500/10 to-purple-600/5 border-purple-500/30 hover:border-purple-400',
                orange: 'from-orange-500/10 to-orange-600/5 border-orange-500/30 hover:border-orange-400',
                green: 'from-green-500/10 to-green-600/5 border-green-500/30 hover:border-green-400',
              };

              const iconColorClasses = {
                blue: 'text-blue-400',
                purple: 'text-purple-400',
                orange: 'text-orange-400',
                green: 'text-green-400',
              };

              return (
                <a
                  key={index}
                  href={createAmazonLink(product.searchTerm)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`
                    group relative bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses]}
                    border rounded-xl p-5 transition-all duration-300
                    hover:shadow-lg hover:scale-105 cursor-pointer
                    ${hoveredIndex === index ? 'transform scale-105' : ''}
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center
                      bg-gray-800/50 border border-gray-700
                      group-hover:scale-110 transition-transform
                    `}>
                      <i className={`fa-solid ${product.icon} ${iconColorClasses[product.color as keyof typeof iconColorClasses]} text-xl`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold mb-2 text-sm md:text-base">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-4">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <span className={iconColorClasses[product.color as keyof typeof iconColorClasses]}>
                      Shop Now
                    </span>
                    <i className={`fa-solid fa-arrow-right ${iconColorClasses[product.color as keyof typeof iconColorClasses]} group-hover:translate-x-1 transition-transform`}></i>
                  </div>

                  {/* Amazon Badge */}
                  <div className="absolute top-3 right-3 opacity-50 group-hover:opacity-100 transition-opacity">
                    <i className="fa-brands fa-amazon text-gray-400 text-lg"></i>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-gray-500 text-xs mt-6">
            As an Amazon Associate, we earn from qualifying purchases. Prices and availability subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}
