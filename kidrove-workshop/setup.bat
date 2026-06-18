@echo off
REM Kidrove Workshop - Project Setup Script for Windows

echo 🚀 Kidrove Workshop - Setup Script
echo ====================================
echo.

REM Check Node.js
echo Checking Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js v16+
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js v
node --version
echo.

REM Check npm
echo Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed
    pause
    exit /b 1
)
echo ✅ npm v
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
echo This may take a few minutes...
echo.
call npm run install-all

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed
echo.

REM Check .env file
echo Checking environment configuration...
if not exist "backend\.env" (
    echo Creating backend\.env from example...
    copy backend\.env.example backend\.env
    echo.
    echo ⚠️  Please update backend\.env with your MongoDB Atlas connection string
    echo.
    echo Edit the file: backend\.env
    echo.
) else (
    echo ✅ backend\.env exists
)

REM Summary
echo.
echo ✅ Setup Complete!
echo.
echo Next Steps:
echo 1. Update backend\.env with your MongoDB Atlas connection string
echo 2. Run: npm run dev
echo 3. Open: http://localhost:5173
echo.
echo For MongoDB Atlas:
echo - Go to: https://www.mongodb.com/cloud/atlas
echo - Create free account and cluster
echo - Copy connection string to backend\.env
echo.
echo Documentation:
echo - Quick Start: GETTING_STARTED.md
echo - Setup Guide: GITHUB_SETUP.md
echo - Full Docs: README.md
echo.
pause
