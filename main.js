// store under the 'text' variable an array-like collection - each element of this collection is each HTML element that makes up our current web page
const text = document.querySelectorAll('h1, h2, h3, h4, h6, p, li, td, caption, span, a');

// loop over each HTML element on the page
for (let i = 0; i < text.length; i++) {

	// declare a variable 'current', initialize as empty string
	let current = '';
	let start = 0;
  for (let j = 0; j <= text[i].innerHTML.length; j++) {
    if (text[i].innerHTML[j] === ' ' || j === text[i].innerHTML.length) {
      // add handling of edge case of 1-character strings
      let bionic = '<b>'
      bionic += current.slice(0, (Math.floor(current.length % 2) + 1));
      bionic += '</b>'
      bionic += current.slice((Math.floor(current.length % 2) + 1))
      console.log(bionic);
      text[i].innerHTML = text[i].innerHTML.replace(`${current}`, `${bionic}`)
      current = '';
    } else {
    current += text[i].innerHTML[j];
    start = j + 1;
    }
  }

// iterate over the text on the page, iterate over each word, adding each letter to current until we hit a space
// text[i].innerHTML

// take the length of current, divided in half, rounded down (Math.floor(current.length % 2)) - this number gives us the number of characters to be bolded
// replace each word, bolding the first half of the letters

// slice current from 0 to the number determined in previous line - replace this in the innerHTML but surrounded by a span tag, making it bold

// replace current with 

}































// // store under the 'text' variable an array-like collection - each element of this collection is each HTML element that makes up our current web page
// const text = document.querySelectorAll('h1, h2, h3, h4, h6, p, li, td, caption, span, a');

// // loop over each HTML element on the page
// for (let i = 0; i < text.length; i++) {

// // declare a variable 'current', initialize as empty string
// let current = 'iterate';

// // iterate over the text on the page, iterate over each word, adding each letter to current until we hit a space
// text[i].innerHTML

// // take the length of current, divided in half, rounded down (Math.floor(current.length % 2)) - this number gives us the number of characters to be bolded
// // replace each word, bolding the first half of the letters

// // slice current from 0 to the number determined in previous line - replace this in the innerHTML but surrounded by a span tag, making it bold

// // replace current with 

// }





// const current = "";
// const elem = document.createElement("b");
// elem.innerText = contentString;
// document.body.appendChild(elem);













