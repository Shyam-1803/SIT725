const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Simple endpoint example
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Addition endpoint (GET)
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Please provide valid numbers');
  }
  
  const result = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

// Subtraction endpoint (GET)
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Please provide valid numbers');
  }
  
  const result = num1 - num2;
  res.send(`The difference of ${num1} and ${num2} is ${result}`);
});

// Addition endpoint (POST)
app.post('/add', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Please provide valid numbers');
  }
  
  const result = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});