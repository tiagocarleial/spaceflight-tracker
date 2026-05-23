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
    name: 'LEGO Icons NASA Artemis Space Launch System',
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
  {
    name: 'SpaceX Falcon 9 Diecast Rocket Model',
    asin: 'B0D2N2RQZ7',
    affiliateLink: 'https://www.amazon.com/yuanpulalala-Starship-Diecast-Simulation-Desktop/dp/B0D2N2RQZ7?crid=2XFFYM9296MYJ&dib=eyJ2IjoiMSJ9.cDEMWp7yu1pPCbnhD2EOccilM1_bbp3JEJ90e2BrZWzALVett4dFF_WsA6-oJ-M8hDsMS0lBOBlfl5twD7hzDAcLn9Vyp-mJOsI6_TtkHoL6BS1aHkuzuFAstvTCSet8-18AEEGH4fTwfJr3U45QpxuqyyF9VI-VR8MxvQmidtwu5IBxCscQaqsF2e1ZvmoUQeOwsEP_WU2CZGxP9RWD-SohsDLfpc2MYedpBhH937a1RW00vVHkkm2B1C0W75RLd7PgcZ_uoVyeQ4oShSEc8o8bHc_sRooNWRAde6lbMUE.ME21gtbhayv9Ox_UOJwAfx7A_F0PXdpF8bxTTHrJTO0&dib_tag=se&keywords=yuanpulalala%2BSpaceX%2BFalcon%2B9&qid=1779557887&sprefix=yuanpulalala%2Bspacex%2Bfalcon%2B9%2Caps%2C286&sr=8-1&th=1&linkCode=ll2&tag=tiagoolivei07-20&linkId=f5644eaacf90f7a4106124f4b1ded4d8&language=en_US&ref_=as_li_ss_tl',
    imageUrl: 'https://m.media-amazon.com/images/I/61HUoB-jz4L._AC_SL1200_.jpg',
    description: 'Authentic 1:400 scale diecast metal replica with detailed boosters, simulation launch pad and display stand',
    badge: 'Diecast Replica',
    pieces: 'Metal Model',
    age: 'Collectible',
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
 * Get all products in random order (shuffled)
 */
export function getShuffledProducts(): Product[] {
  const shuffled = [...amazonProducts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get a specific product by ASIN
 */
export function getProductByAsin(asin: string): Product | undefined {
  return amazonProducts.find(product => product.asin === asin);
}
