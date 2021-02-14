export const PROMO_IMAGES = [
  "https://raw.githubusercontent.com/DmitryOlkhovoi/Pixel-Art-Editor/master/images/resized-image-Promo1.jpeg",
  "https://raw.githubusercontent.com/DmitryOlkhovoi/Pixel-Art-Editor/master/images/resized-image-Promo2.jpeg",
  "https://raw.githubusercontent.com/DmitryOlkhovoi/Pixel-Art-Editor/master/images/resized-image-Promo3.jpeg",
];

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function getRandomPromoImage() {
  return PROMO_IMAGES[getRandomIntInclusive(0, 2)];
}