// store under the 'text' variable an array-like collection - each element of this collection is each HTML element that makes up our current web page
const text = document.querySelectorAll(
  'h1, h2, h3, h4, h6, p, li, td, caption, span, a'
);

// loop over each HTML element on the page
for (let i = 0; i < text.length; i++) {
  // store in 'arrOfWords' variable an array of substrings, or in other words, an array of each word contained text[i] delimited by spaces
  let iText = text[i].innerHTML;
  let arrOfWords = iText.split(' ');

  // // pass arrOfWords into removeHTML:
  // const removeHTML = function(input) {
  //   // check in an if conditional to make sure the current word is not an HTML tag
  //   // if current word starts with '<', skip it, and keep skipping subsequent words until we reach the closing HTML tag
  //   // detect array elements that contain opening HTML tags (i.e. starts '<') and array elements that contain closing HTML tags (i.e. '</')
  //   // slice up to the opening element, and concat this with the slice 
  //   for (k = 0; k < input.length; k++) {
  //     if (input[k][0] === '<') {

  //     }
  //   }
  // }

  // iterate over arrOfWords and 'bionicize' each element of arrOfWords- mutate each of current's elements, adding <b> tags to the first half of each word
  for (let j = 0; j < arrOfWords.length; j++) {
    // add handling of edge case of 1-character strings

    // store under a variable all the kinds of HTML elements we don't want: img, a, link
    const toRemove = document.querySelectorAll('a','img','link')

    // use removeChild DOM manipulation to remove these elements from 


if(arrOfWords[j][0] !== "<" && !isLinkOrImage(text[i])) {
    let bionicWord = Math.floor(arrOfWords[j].length / 2) + 1;
    let bionic =
      '<b>' +
      arrOfWords[j].slice(0, bionicWord) +
      '</b>' +
      arrOfWords[j].slice(bionicWord);
    // console.log(bionic);
    arrOfWords[j] = bionic;
  }
}
  // construct a new string by doing the following:
  // to an empty string, append each element of arrOfWords, concatting a space in between each one

  text[i].innerHTML = arrOfWords.join(' ')
}

//create a function with the getElementsByTagName() by passing in an ellement from arrOfWords and returning all elements  with the ta tag name
//with "img" or "embed" (make case insensitive)
//after returning those elements then we add in line 30 to arrOfWords[0][j] !== "<" && !isLinkOrImage(text[i])
function isLinkOrImage (element){
 return element.tagName.toLowerCase() === 'img' || element.tagName.toLowerCase() === 'link' || element.tagName.toLowerCase() === 'a'|| element.tagName.toLowerCase() === 'href';
}
 
