const input = `Publication Date,Title,Authors
29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien
01/08/1996,A Game of Thrones,George Raymond Martin
21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling`;

const expectedOutput = `| Pub Date    |                         Title | Authors               |
|=====================================================================|
| 29 Jul 1954 |             Lord of the Rings | John Ronald Reuel ... |
| 01 Aug 1996 |             A Game of Thrones | George Raymond Martin |
| 21 Jun 2003 | Harry Potter and the Order... |        Joanne Rowling |`;

const output = convertToTable(input);

console.log("Expected:");
console.log(expectedOutput);
console.log();

console.log("Actual:");
console.log(output);
console.log();

console.log(`The result ${output === expectedOutput ? "DID" : "DID NOT"} match the expected result`);

function convertToTable(input) {
    const [headers, ...lines] = input.split(/[\r\n]+/);
    const rows = lines.map(line => line.split(","))
    const rowsWithDates = rows.map(row => {
        const dateAsArrayOfStrings = row[0].split("/");
        console.log(dateAsArrayOfStrings);
        const date = new Date();
        date.setUTCFullYear(dateAsArrayOfStrings[2], dateAsArrayOfStrings[1] - 1, dateAsArrayOfStrings[0]);
        return [date, row[1], row[2]];
    });

    return getTableHeaders() + rowsWithDates.map(row => formatLine(row[0], row[1], row[2])).join("\n");
}

function getTableHeaders() {
    return `| Pub Date    |                         Title | Authors               |
|=====================================================================|
`;
}

function formatLine(date, title, author) {
    const dateString = date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    return `| ${dateString} | ${limitLength(title, 29).padStart(29)} | ${limitLength(author, 21).padStart(21)} |`;
}

function limitLength(text, length) {
    if (text.length > length) {
        return text.slice(0, length - 3) + "...";
    }
    return text;
}