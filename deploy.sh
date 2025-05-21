#!/bin/bash
echo "Deploying Account-Based Sites to Netlify..."
npm run build
NETLIFY_SITE_ID=$(grep -o '"site_id": "[^"]*' netlify.json | cut -d'"' -f4)
NETLIFY_AUTH_TOKEN=$(grep -o '"access_token": "[^"]*' netlify.json | cut -d'"' -f4)
npx netlify deploy --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN --dir=public --prod
echo "Deployment complete! Your site is live on Netlify."