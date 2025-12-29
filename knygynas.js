"use strict";

let books = [
  { title: "abramas", price: 10.25 },

  { title: "zudikas", price: 5.15 },

  { title: "galvazudziai", price: 7.32 },

  { title: "darbininkas", price: 54.01 },

  { title: "cirkas", price: 77.17 },
];
// 1
function booksTitle() {
  return books.map((b, i) => i + 1 + ". " + b.title);
}
console.log(booksTitle(books));

// 2

function bookLength() {
  return books.length;
}
console.log(bookLength());

//3
function addBook() {
  return books.push({
    title: "Knyga #6",
    price: 2.75,
  });
}
console.log(addBook());
console.log(books);

//4
function lastBook() {
  let { title, price } = books.at(-1);
  console.log(title, price);
}
lastBook();

//5
function totalPrice() {
  return books.reduce((total, book) => total + book.price, 0).toFixed(2);
}
console.log(totalPrice());
// 6
// function booksDiscount(arr) {
//   let priceBooks = arr.filter((book) => book.price > 10);
//   let discountedBooks = priceBooks.map((book) => {
//     return {
//       title: book.title,
//       price: book.price * 0.75,
//     };
//   });

//   return discountedBooks;
// }
// console.log(booksDiscount(books));
// 6 This better
function booksDiscount(arr) {
  console.log("!!! Nukainuota !!!");
  arr.forEach((book) => {
    if (book.price > 10) {
      let discountedPrice = (book.price * 0.75).toFixed(2); // 25% nuolaida
      console.log(
        `Knyga: ${book.title} Sena kaina: ${book.price} Pardavimo kaina: ${discountedPrice} Pritaikyta nuolaida -25%`
      );
    }
  });
}
console.log(booksDiscount(books));
//7
function sortPrice() {
  let r = [...books].sort((a, b) => a.price - b.price);
  console.log(r);
}
sortPrice();
// 8
books.sort(function (a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});

console.log(books);

//9
function booksPrice(arr) {
  return arr.filter((book) => book.price > 7.5);
}
console.log(booksPrice(books));
