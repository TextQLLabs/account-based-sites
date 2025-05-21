# Account-Based Marketing Sites

This repository contains marketing sites tailored for specific TextQL clients. Each client has their own directory with a customized site that highlights TextQL's value proposition for their specific industry and use cases.

## Sites Available

- `/mastercard` - A site designed for Mastercard CIOs, focusing on fraud detection, data operations, and ROI metrics

## Development

To run the development server:

```bash
npm install
npm run dev
```

Then visit:
- http://localhost:3000/mastercard - For the Mastercard CIO site

## Project Structure

- `/mastercard` - Contains the Mastercard CIO website
- More client sites can be added in similar directories

## Adding New Client Sites

1. Create a new directory with the client name
2. Add the site implementation in that directory
3. Update the main server.js to handle routing for the new site