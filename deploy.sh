#!/bin/bash

# ThePrimeagen Portfolio Deployment Script
# This script helps deploy the portfolio to various hosting platforms

echo "🚀 ThePrimeagen Portfolio Deployment Script"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Are you in the right directory?"
    exit 1
fi

echo "✅ Found index.html"
echo "📁 Project structure:"
ls -la

echo ""
echo "🔧 Checking files..."

# Check for required files
files=("index.html" "main.js" "README.md")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

echo ""
echo "📊 File sizes:"
du -h index.html main.js README.md 2>/dev/null || echo "Could not check file sizes"

echo ""
echo "🎯 Deployment Options:"
echo "1. Netlify (Drag & Drop)"
echo "2. Vercel (CLI)"
echo "3. GitHub Pages"
echo "4. Firebase Hosting"
echo "5. Local Server"
echo ""

read -p "Choose deployment option (1-5): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Netlify Deployment"
        echo "===================="
        echo "1. Go to https://netlify.com"
        echo "2. Drag the entire project folder to the deploy area"
        echo "3. Your site will be live in seconds!"
        echo ""
        echo "📋 Files to deploy:"
        ls -la
        ;;
        
    2)
        echo ""
        echo "⚡ Vercel Deployment"
        echo "==================="
        echo "1. Install Vercel CLI: npm i -g vercel"
        echo "2. Run: vercel"
        echo "3. Follow the prompts"
        echo "4. Your site will be deployed!"
        ;;
        
    3)
        echo ""
        echo "📄 GitHub Pages Deployment"
        echo "=========================="
        echo "1. Create a new GitHub repository"
        echo "2. Upload all files to the repository"
        echo "3. Go to Settings > Pages"
        echo "4. Select source branch (main/master)"
        echo "5. Your site will be available at username.github.io/repository"
        ;;
        
    4)
        echo ""
        echo "🔥 Firebase Deployment"
        echo "====================="
        echo "1. Install Firebase CLI: npm i -g firebase-tools"
        echo "2. Run: firebase login"
        echo "3. Run: firebase init hosting"
        echo "4. Run: firebase deploy"
        ;;
        
    5)
        echo ""
        echo "💻 Local Server"
        echo "==============="
        echo "Starting local development server..."
        if command -v python3 &> /dev/null; then
            echo "Using Python 3..."
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            echo "Using Python..."
            python -m http.server 8000
        elif command -v node &> /dev/null; then
            echo "Using Node.js..."
            npx http-server -p 8000
        else
            echo "❌ No suitable server found. Install Python or Node.js."
        fi
        ;;
        
    *)
        echo "❌ Invalid option. Please choose 1-5."
        exit 1
        ;;
esac

echo ""
echo "✨ Deployment complete!"
echo "🌟 Don't forget to customize the content for your needs!"