#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const MyString = process.argv[3];

fs.writeFile(filePath, MyString, (err) => {
  if (err) {
    console.log(err);
  }
});
