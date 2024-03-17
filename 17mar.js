//JSCLOCK

let a = new Date()
let h= a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
console.log(h, m, s, d)

function JSClock() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    let temp = String(hour % 12);
    if (temp === "0") {
      temp = "12";
    }
    temp += (minute < 10 ? ":0" : ":") + minute;
    temp += (second < 10 ? ":0" : ":") + second;
    temp += hour >= 12 ? " P.M." : " A.M.";
    return temp;
  }
let arr= JSClock()
console.log(arr);
  

//Text Formatting--> Strings

let hex= "\xA9"; // Hexadecimal escape sequences
console.log(hex);

let uni= "\u00A9"; //Unicode escape sequences
console.log(uni);

let rus="\u0434\u0434"; // simple unicde escapes
console.log(rus);


// Unicode code point escapes 
let codepoint= "\u{2F804}"
console.log(codepoint);

let emo= "\u{1F600}";
console.log(emo);

//String Objects

const firstString = "2 + 2";
const secondString = new String("2 + 2");
console.log(firstString);
console.log(secondString);

const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // This has no effect, because strings are immutable
console.log(hello[0]);


const icons = '☃★♲';

console.log(icons.codePointAt(1));


const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);