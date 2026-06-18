#!/bin/bash

# Kidrove Workshop - Project Setup Script
# This script automates the setup process

echo "🚀 Kidrove Workshop - Setup Script"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${BLUE}Checking Node.js...${NC}"
if ! command -v node &> /dev/null
then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js v16+${NC}"
    echo "Visit: https://nodejs.org/"
    exit 1
fi
echo -e "${GREEN}✅ Node.js v$(node --version) found${NC}"

# Check npm
echo -e "${BLUE}Checking npm...${NC}"
if ! command -v npm &> /dev/null
then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm v$(npm --version) found${NC}"

# Install dependencies
echo ""
echo -e "${BLUE}Installing dependencies...${NC}"
npm run install-all

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dependencies installed${NC}"

# Create .env file if it doesn't exist
echo ""
echo -e "${BLUE}Checking environment configuration...${NC}"
if [ ! -f "backend/.env" ]; then
    echo -e "${BLUE}Creating backend/.env from example...${NC}"
    cp backend/.env.example backend/.env
    echo -e "${BLUE}⚠️  Please update backend/.env with your MongoDB Atlas connection string${NC}"
else
    echo -e "${GREEN}✅ backend/.env exists${NC}"
fi

# Summary
echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "1. Update backend/.env with your MongoDB Atlas connection string"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:5173"
echo ""
echo -e "${BLUE}For MongoDB Atlas:${NC}"
echo "- Go to: https://www.mongodb.com/cloud/atlas"
echo "- Create free account and cluster"
echo "- Copy connection string to backend/.env"
echo ""
echo -e "${BLUE}Documentation:${NC}"
echo "- Quick Start: GETTING_STARTED.md"
echo "- Setup Guide: GITHUB_SETUP.md"
echo "- Full Docs: README.md"
echo ""
