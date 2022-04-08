let a = 5;
let c = 7;
const buyProduct = function () {
  console.log('Siz mahsulotni sotib oldingiz');
};
export { buyProduct };
// console.log(a);
// buyProduct('Salom ');
// export { buyProduct as product, a, c };
export let cart = [];
export default function (maxsulot, soni) {
  let d = 'qalay';
  cart.push({ maxsulot, soni });
  console.log(`Sizn ${maxsulot} dan ${soni} ta sotib oldingiz`);
  // console.log(cart);
}
