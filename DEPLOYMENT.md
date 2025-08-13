# Deployment Guide

## GitHub Repository Setup

### 1. Initialize Git Repository
```bash
cd E:\active-life-physio
git init
git add .
git commit -m "Initial commit: Active Life Physiotherapy Clinic website"
git branch -M main
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Repository name: `active-life-physio`
3. Description: `Modern physiotherapy clinic website with appointment booking and testimonials`
4. Make it **Public**
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### 3. Connect Local to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/active-life-physio.git
git push -u origin main
```

## Hosting Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select `active-life-physio` repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"
7. Your site will be live at: `https://random-name.netlify.app`

### Option 2: Vercel (Recommended for React/Next.js)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `active-life-physio` repository
5. Deploy settings:
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: (leave empty)
6. Click "Deploy"
7. Your site will be live at: `https://active-life-physio.vercel.app`

#### Vercel Configuration
- `vercel.json` file included for optimal deployment
- Automatic HTTPS and CDN
- Custom domain support
- Environment variables support

### Option 3: GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Save
6. Your site will be live at: `https://YOUR_USERNAME.github.io/active-life-physio`

## Environment Setup

### Supabase Configuration
After deployment, update your Supabase project:
1. Go to Supabase dashboard
2. Settings → API
3. Add your deployed domain to "Site URL"
4. Update CORS settings if needed

### Custom Domain (Optional)
1. Purchase domain from any registrar
2. In your hosting platform:
   - Netlify: Site settings → Domain management
   - Vercel: Project settings → Domains
   - GitHub Pages: Repository settings → Pages → Custom domain

## Post-Deployment Checklist

- [ ] Test appointment booking functionality
- [ ] Test testimonial submission
- [ ] Verify WhatsApp integration
- [ ] Check admin dashboard access
- [ ] Test on mobile devices
- [ ] Verify all images load correctly
- [ ] Check contact form functionality

## Repository URL Structure
```
https://github.com/YOUR_USERNAME/active-life-physio
├── Live Site: https://your-domain.com
├── Admin Panel: https://your-domain.com/pages/admin.html
└── Supabase Dashboard: https://supabase.com/dashboard
```

## Maintenance

### Regular Updates
- Monitor appointment submissions
- Approve/reject testimonials
- Update clinic information as needed
- Backup Supabase data regularly

### Analytics (Optional)
Add Google Analytics to track:
- Appointment bookings
- Page views
- User engagement
- Mobile vs desktop usage