# Vercel Deployment Guide

## Quick Setup

### 1. Push to GitHub (if not done)
```bash
cd E:\active-life-physio
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Select `active-life-physio` repository
5. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: (leave empty)
6. Click "Deploy"

## Environment Variables (Optional)
If you need to add environment variables:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add variables like:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anon key

## Custom Domain Setup
1. In Vercel dashboard → Your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## Vercel Features Enabled
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on Git push
- ✅ Preview deployments for branches
- ✅ Security headers configured
- ✅ Static file optimization

## Your Live URLs
- **Production**: `https://active-life-physio.vercel.app`
- **Admin Panel**: `https://active-life-physio.vercel.app/pages/admin.html`
- **Appointments**: `https://active-life-physio.vercel.app/pages/appointment.html`

## Post-Deployment Steps
1. Update Supabase Site URL:
   - Go to Supabase Dashboard
   - Settings → API
   - Site URL: `https://active-life-physio.vercel.app`
2. Test all functionality
3. Update any hardcoded URLs in your code

## Automatic Deployments
Every push to `main` branch will automatically deploy to production.
Create feature branches for testing:
```bash
git checkout -b feature/new-feature
# Make changes
git push origin feature/new-feature
```
This creates a preview deployment at: `https://active-life-physio-git-feature-new-feature-username.vercel.app`