const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create public directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
}

// Copy mastercard build files to public/mastercard
const mastercardBuildDir = path.join(__dirname, 'mastercard/build');
const publicMastercardDir = path.join(__dirname, 'public/mastercard');

// Create the mastercard directory in public if it doesn't exist
if (!fs.existsSync(publicMastercardDir)) {
  fs.mkdirSync(publicMastercardDir, { recursive: true });
}

// Copy all files from mastercard/build to public/mastercard
console.log('Copying Mastercard files...');
execSync(`cp -R ${mastercardBuildDir}/* ${publicMastercardDir}`);

// Copy unitedhealthcaregroup files to public/unitedhealthcaregroup
const unitedhealthcaregroupDir = path.join(__dirname, 'unitedhealthcaregroup/public');
const publicUnitedhealthcaregroupDir = path.join(__dirname, 'public/unitedhealthcaregroup');

// Check if source directory exists before copying
if (fs.existsSync(unitedhealthcaregroupDir)) {
  // Create the unitedhealthcaregroup directory in public if it doesn't exist
  if (!fs.existsSync(publicUnitedhealthcaregroupDir)) {
    fs.mkdirSync(publicUnitedhealthcaregroupDir, { recursive: true });
  }
  
  // Copy all files from unitedhealthcaregroup/public to public/unitedhealthcaregroup
  console.log('Copying UnitedHealthcare files...');
  execSync(`cp -R ${unitedhealthcaregroupDir}/* ${publicUnitedhealthcaregroupDir}`);
}

// Copy athenahealth files to public/athenahealth
const athenahealthDir = path.join(__dirname, 'athenahealth/public');
const publicAthenahealthDir = path.join(__dirname, 'public/athenahealth');

// Check if source directory exists before copying
if (fs.existsSync(athenahealthDir)) {
  // Create the athenahealth directory in public if it doesn't exist
  if (!fs.existsSync(publicAthenahealthDir)) {
    fs.mkdirSync(publicAthenahealthDir, { recursive: true });
  }
  
  // Copy all files from athenahealth/public to public/athenahealth
  console.log('Copying Athenahealth files...');
  execSync(`cp -R ${athenahealthDir}/* ${publicAthenahealthDir}`);
}

// Copy Capital One files to public/capitalone
const capitaloneDir = path.join(__dirname, 'capitalone/public');
const publicCapitaloneDir = path.join(__dirname, 'public/capitalone');

// Check if source directory exists before copying
if (fs.existsSync(capitaloneDir)) {
  // Create the capitalone directory in public if it doesn't exist
  if (!fs.existsSync(publicCapitaloneDir)) {
    fs.mkdirSync(publicCapitaloneDir, { recursive: true });
  }
  
  // Copy all files from capitalone/public to public/capitalone
  console.log('Copying Capital One files...');
  execSync(`cp -R ${capitaloneDir}/* ${publicCapitaloneDir}`);
}

// Create index.html in the public folder
const indexHtml = `
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
    <a href="/athenahealth" class="button" style="background-color: #00AEEF;">Go to Athenahealth Demo</a>
    <a href="/capitalone" class="button" style="background-color: #0076be;">Go to Capital One Workshop</a>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'public/index.html'), indexHtml);
console.log('Created index.html');

// Create a netlify redirect file to handle SPA routing
const redirects = `
/mastercard/*  /mastercard/index.html  200
/unitedhealthcaregroup/*  /unitedhealthcaregroup/index.html  200
/athenahealth/*  /athenahealth/index.html  200
/capitalone/*  /capitalone/index.html  200
/*  /index.html  200
`;

fs.writeFileSync(path.join(__dirname, 'public/_redirects'), redirects);
console.log('Created _redirects file');

console.log('Build completed successfully!');