const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling that is not properly done
    console.error('An error occurred:', error);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const success = Math.random() < 0.5; 
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 100);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});