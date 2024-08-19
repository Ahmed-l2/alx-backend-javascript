#!/usr/bin/node
const fs = require('fs');
const { resolve } = require('path');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const lines = data.split('\n').slice(1, -1);
      console.log(`Number of students: ${lines.length}`);

      const cs = [];
      const swe = [];

      lines.forEach((line) => {
        if (line.includes('CS')) {
          const student = line.split(',')[0];
          cs.push(student);
        }
        if (line.includes('SWE')) {
          const student = line.split(',')[0];
          swe.push(student);
        }
      });

      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
      return resolve();
    });
  });
}

module.exports = countStudents;
