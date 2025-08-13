# GitHub Setup Instructions

## Step 1: Install Git (if not installed)
Download and install Git from: https://git-scm.com/download/windows

## Step 2: Open Command Prompt or Git Bash
Navigate to your project folder:
```bash
cd E:\active-life-physio
```

## Step 3: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Active Life Physiotherapy Clinic website with Supabase backend"
git branch -M main
```

## Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `active-life-physio`
3. Description: `Modern physiotherapy clinic website with appointment booking and testimonials`
4. Make it **Public**
5. **DO NOT** check "Add a README file" (we already have one)
6. Click "Create repository"

## Step 5: Connect to GitHub
After creating the repository, GitHub will show you commands. Run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/active-life-physio.git
git push -u origin main
```

## Step 6: Deploy to Netlify (Recommended)
1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose GitHub and select your `active-life-physio` repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click "Deploy site"

## Your project will be live at:
- GitHub: `https://github.com/YOUR_USERNAME/active-life-physio`
- Live Site: `https://random-name.netlify.app` (you can customize this)

## Files Ready for GitHub:
✅ README.md - Project documentation
✅ LICENSE - MIT License
✅ .gitignore - Excludes unnecessary files
✅ All website files organized
✅ Backend setup instructions
✅ Deployment guide

Your project is ready to be pushed to GitHub!