let sampleA = 'Its not great, but it ain\'t bad! A very stripped down monosynth from Roland\'s classic SH-series. Its single oscillator only has PWM, ramp, square and noise waveforms. It has a similar architecture to the SH-101, the VCA can switch between gate or envelope, the VCF is pretty standard, and there is a sample-hold function which is great for voltage controlled filtering into acid and back!';
let sampleB = 'Another cool feature is its external input which will allow you to filter external audio through its VCF. Because they are pretty old now they will most likely have some functional problems like sticky keys, and noisy knobs and signal. It is used by Orbital, Vince Clarke, BT, Conemelt, Josh Wink, Banco De Gaia, Mr. Oizo, Ladytron, Jimmy Edgar, Dave Holmes, Freddy Fresh, OMD, and 808 State.';
let sampleC = 'Demo basslines for techno/house styles, from the Future Music CD, issue 53.';


// store under the 'text' variable an array-like collection - each element of this collection is each HTML element that makes up our current web page
const text = [sampleA, sampleB, sampleC];

// loop over each HTML element on the page
for (let i = 0; i < text.length; i++) {

	// store in 'arrOfWords' variable an array of substrings, or in other words, an array of each word contained text[i] delimited by spaces
	let iText = text[i]
    let arrOfWords = iText.split(' ')

  // iterate over arrOfWords and 'bionicize' each element of arrOfWords- mutate each of current's elements, adding <b> tags to the first half of each word
  for (let j = 0; j < arrOfWords.length; j++) {
      // add handling of edge case of 1-character strings
      
      let bionicWord = Math.floor(arrOfWords[j].length % 2) + 1
      let bionic = '<b>' + arrOfWords[j].slice(0, bionicWord) + '</b>' + arrOfWords[j].slice(bionicWord)
      console.log(bionic);
      arrOfWords[j] = bionic;
        
  }
  // construct a new string by doing the following:
  // to an empty string, append each element of arrOfWords, concatting a space in between each one
  
 iText = arrOfWords.join(' ')
}

console.log(sampleA);
// iterate over the text on the page, iterate over each word, adding each letter to current until we hit a space
// text[i].innerHTML

// take the length of current, divided in half, rounded down (Math.floor(current.length % 2)) - this number gives us the number of characters to be bolded
// replace each word, bolding the first half of the letters

// slice current from 0 to the number determined in previous line - replace this in the innerHTML but surrounded by a span tag, making it bold

// replace current with 

