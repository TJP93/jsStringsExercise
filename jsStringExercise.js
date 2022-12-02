// use characters to create table
//string.split() to divide sample into parts? Also use slice maybe?
// padStart and padEnd for layout spacing?

/*const date = new Date();
const dateString = date.toLocaleDateString('en-GB');
const amount = 12.49;
 
const display = `Spent £${amount} on ${dateString}`;
*/
// console.log(display);

const sampleData = `Publication Date,Title,Authors
29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien
01/08/1996,A Game of Thrones,George Raymond Martin
21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling`

let lines = sampleData.split("\n");

console.log(lines);
let lineOne = lines[1];
let lineTwo = lines[2];
let lineThree = lines[3];
let lineOneSplit = lineOne.split(",");
let lineTwoSplit = lineTwo.split(",");
let lineThreeSplit = lineThree.split(",");
console.log(lineOneSplit[2]);
let lotr = lineOneSplit[1];
let lotrpad = lotr.padStart(29);
let hp = lineThreeSplit[1];
let grrm = lineTwoSplit[2];
let got = lineTwoSplit[1];
let gotpad = got.padStart(29);
let tolkien = lineOneSplit[2];
let jkr = lineThreeSplit[2];
let equalslength = "====================================================================="; // 69 length plus the spaces and pipes = 73
console.log(equalslength.length);
let title = "Title".padStart(30);
let Authors = "Authors".padEnd(21);

let result = `|  Pub Date     | ${title}  | ${Authors} |
|  ${equalslength}  |
|  ${lineOneSplit[0]}   |  ${lotrpad}  | ${tolkien}  |
|  ${lineTwoSplit[0]}   |  ${gotpad}  |  ${grrm}  |
|  ${lineThreeSplit[0]}   |  ${hp}  |  ${jkr}  |`; 

console.log(result);