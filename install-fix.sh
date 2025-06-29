#!/bin/bash

# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# Install dependencies with legacy peer deps to resolve conflicts
npm install --legacy-peer-deps

echo "Dependencies installed successfully!"
echo "You can now run: npm run dev"
