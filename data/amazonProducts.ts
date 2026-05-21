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

export const amazonProducts: Product[] = [
  {
    name: 'LEGO Icons NASA Space Shuttle Discovery',
    asin: 'B0CRWGX5NH',
    affiliateLink: 'https://www.amazon.com/dp/B0CRWGX5NH?tag=tiagoolivei07-20&linkCode=ll2&linkId=b72017a00c3d1f501c948aa9e042ef56',
    imageUrl: 'https://m.media-amazon.com/images/I/81b4hg2iyRL._AC_SL1500_.jpg',
    description: 'Authentic replica with 2,354 pieces, opening payload bay & deployable Hubble Telescope',
    badge: 'Official NASA Product',
    pieces: '2,354 Pieces',
    age: 'Ages 18+',
  },
  {
    name: 'LEGO Ideas NASA Apollo Saturn V',
    asin: 'B08GNXNPR6',
    affiliateLink: 'https://www.amazon.com/dp/B08GNXNPR6?tag=tiagoolivei07-20&linkCode=ll2&linkId=b46d910cf09c6f9330bbf2820360ef29',
    imageUrl: 'https://m.media-amazon.com/images/I/81jtA27x30L._AC_SL1500_.jpg',
    description: 'Iconic 1 meter tall rocket with 3 removable stages, lunar lander, and display stand',
    badge: 'Historic Moon Mission',
    pieces: '1,969 Pieces',
    age: 'Ages 14+',
  },
  {
    name: 'Space Shuttle Building Kit with Rocket Booster',
    asin: 'B0F32W3T1M',
    affiliateLink: 'https://www.amazon.com/dp/B0F32W3T1M?tag=tiagoolivei07-20&linkCode=ll2&linkId=5e6bb356be52e604f0f030f577c65b56',
    imageUrl: 'https://m.media-amazon.com/images/I/61klXS3jD2L._AC_SL1280_.jpg',
    description: 'Detailed space shuttle with external fuel tank, solid rocket boosters, and display stand',
    badge: 'Space Shuttle Launch',
    pieces: '1,230 Pieces',
    age: 'Ages 8+',
  },
  {
    name: 'LEGO International Space Station',
    asin: 'B083JWZNW7',
    affiliateLink: 'https://www.amazon.com/dp/B083JWZNW7?tag=tiagoolivei07-20&linkCode=ll2&linkId=391161a7e3792488f424041ae94a7dc7',
    imageUrl: 'https://m.media-amazon.com/images/I/71CCfgqrjEL._AC_SL1500_.jpg',
    description: 'Build the iconic orbiting laboratory with posable solar panels, rotating joints, and detailed modules',
    badge: 'Orbiting Laboratory',
    pieces: '864 Pieces',
    age: 'Ages 16+',
  },
];

/**
 * Get a random product from the available Amazon products
 */
export function getRandomProduct(): Product {
  const randomIndex = Math.floor(Math.random() * amazonProducts.length);
  return amazonProducts[randomIndex];
}

/**
 * Get a specific product by ASIN
 */
export function getProductByAsin(asin: string): Product | undefined {
  return amazonProducts.find(product => product.asin === asin);
}
