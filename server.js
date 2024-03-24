const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Serve static files (main.html and style.css)
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handle expense data
let totalAmount = 7000; // Initial balance

app.post('/addExpense', (req, res) => {
  const { name, amount } = req.body;
  totalAmount += parseInt(amount);
  res.send({ totalAmount });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
