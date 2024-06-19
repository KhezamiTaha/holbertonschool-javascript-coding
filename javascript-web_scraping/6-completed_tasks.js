#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }

  const data = JSON.parse(body);

  const taskCounts = {};

  data.forEach(task => {
    if (task.completed) {
      if (taskCounts[task.userId]) {
        taskCounts[task.userId]++;
      } else {
        taskCounts[task.userId] = 1;
      }
    }
  });

  console.log(taskCounts);
});
