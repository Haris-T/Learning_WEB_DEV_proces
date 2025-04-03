// "use strict"
const body = document.body;
// // .append method can append strings while .appendChild can only append elements 
// body.append("Hello World ");
// body.append("Hello World", " Bye");

// //creating an Element
const div = document.createElement('div');
div.innerText = "Hello world im in div";
div.textContent = "Hello world im text content";

body.append(div)

// const div = document.querySelector('div');

// console.log(div.textContent);
// console.log(div.innerText);

const spanHi = document.querySelector('#Hi')

console.log(spanHi.getAttribute("title"))
console.log(spanHi.id)

spanHi.setAttribute('id', 'hi')
spanHi.id = "Hi"