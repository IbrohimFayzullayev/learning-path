// import * as func from './buy.js';
// let d = 10;
// buyProduct();
// func.product();
// console.log(func.a);
// console.log(func.c);

// import myFunc from './buy.js';
// import { cart } from './buy.js';
// console.log(cart);
// myFunc('Phone', 10);
// console.log(cart);

// console.log('Salom');

// async function salom() {
//   const country = await fetch('https://restcountries.com/v2/name/uzbekistan');
//   let countryJson = await country.json();
//   console.log(countryJson[0]);
// }
// salom();

// const country = await fetch('https://restcountries.com/v2/name/uzbekistan');
// let countryJson = await country.json();
// console.log(countryJson[0]);

// console.log('Hello');

const online = (function () {
  const cart = [];
  const maxsulotlarSoni = 100;
  const ishchilarSoni = 10;
  const pulMiqdori = 10_000_000;

  const sotibOlish = function (nomi, soni) {
    cart.push({ nomi, soni });
    console.log(`Siz ${nomi} maxsulotni ${soni} ta sotib oldingiz`);
  };
  return { sotibOlish, cart, maxsulotlarSoni };
})();
console.log(online.cart);
online.sotibOlish('Apple', 10);
online.sotibOlish('Samsung', 20);
console.log(online.cart);
