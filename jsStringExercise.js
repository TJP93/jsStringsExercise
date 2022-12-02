const sampleData = "Publication Date,Title,Authors 29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien 01/08/1996,A Game of Thrones,George Raymond Martin 21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling"

// use characters to create table
//string.split() to divide sample into parts?
// padStart and padEnd for layout spacing?


const date = Date.now();
const dateString = date.toLocalDateString();
const amount = 12.49;
 
const display = `Spent £${amount} on ${dateString}`;