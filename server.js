const express = require('express');
const path = require('path');
const app = express();

// Serve static files from mastercard build directory
app.use('/mastercard', express.static(path.join(__dirname, 'mastercard/build')));

// Serve static files from unitedhealthcaregroup directory
app.use('/unitedhealthcaregroup', express.static(path.join(__dirname, 'unitedhealthcaregroup/public')));

// Serve static files from athenahealth directory
app.use('/athenahealth', express.static(path.join(__dirname, 'athenahealth/public')));

// Serve static files from capitalone directory
app.use('/capitalone', express.static(path.join(__dirname, 'capitalone/public')));

// Root route shows welcome message
app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TextQL Customer Workshops</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f9fafb;
          color: #1f2937;
        }
        .container {
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #0f766e;
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .button {
          display: inline-block;
          background-color: #0f766e;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.15s;
          margin: 0.5rem;
        }
        .button:hover {
          background-color: #0e6b61;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hey there!</h1>
        <p>You probably got here from a customer workshop invite! This is the entry point to our account-based sites.</p>
        <p>To explore a specific customer site, please use the links provided in your workshop invite.</p>
        <a href="/mastercard" class="button">Go to Mastercard Demo</a>
        <a href="/unitedhealthcaregroup" class="button" style="background-color: #005087;">Go to UnitedHealthcare Demo</a>
        <a href="/athenahealth" class="button" style="background-color: #00AEEF;">Go to athenahealth Demo</a>
        <a href="/capitalone" class="button" style="background-color: #0076be;">Go to Capital One Workshop</a>
      </div>
    </body>
    </html>
  `);
});

// For all other routes to mastercard, serve the index.html
app.get('/mastercard', function (req, res) {
  res.sendFile(path.join(__dirname, 'mastercard/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Available sites:`);
  console.log(`- Mastercard: http://localhost:${PORT}/mastercard`);
  console.log(`- UnitedHealthcare: http://localhost:${PORT}/unitedhealthcaregroup`);
  console.log(`- athenahealth: http://localhost:${PORT}/athenahealth`);
  console.log(`- Capital One: http://localhost:${PORT}/capitalone`);
});