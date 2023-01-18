import fs from "fs";

const contents = fs.readFileSync("test.txt");

console.log(contents.toString());

var emailPattern = /@softwire\.com\b/g;

const found = contents.toString().match(emailPattern);

console.log(found.length);

