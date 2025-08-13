@echo off
echo Setting up GitHub repository for Active Life Physiotherapy...
echo.

echo Step 1: Initializing Git repository...
git init

echo Step 2: Adding all files...
git add .

echo Step 3: Creating initial commit...
git commit -m "Initial commit: Active Life Physiotherapy Clinic website with Supabase backend"

echo Step 4: Setting up main branch...
git branch -M main

echo.
echo ========================================
echo NEXT STEPS:
echo ========================================
echo 1. Go to https://github.com/new
echo 2. Create a new repository named: active-life-physio
echo 3. Make it public
echo 4. DO NOT initialize with README (we already have one)
echo 5. Copy the repository URL
echo 6. Run: git remote add origin YOUR_REPO_URL
echo 7. Run: git push -u origin main
echo.
echo Repository is ready for GitHub!
pause