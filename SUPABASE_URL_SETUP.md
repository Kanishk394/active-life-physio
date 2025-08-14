# How to Add Vercel URL to Supabase - Step by Step

## Visual Guide:

### Step 1: Open Supabase Dashboard
- Go to: https://supabase.com/dashboard
- Login with your account
- You'll see your project: **active-life-physio** (or similar name)
- **CLICK** on your project

### Step 2: Find Settings
- On the **LEFT SIDE** of the screen, you'll see a menu
- Look for a **gear icon** ⚙️ or text that says "Settings"
- **CLICK** on "Settings"

### Step 3: Find API Section
- After clicking Settings, you'll see a submenu appear
- Look for "API" in this submenu
- **CLICK** on "API"

### Step 4: Find Site URL Field
- Scroll down on the API page
- You'll see several sections:
  - Project URL
  - Project API keys
  - **Site URL** ← This is what you need!

### Step 5: Add Your Vercel URL
- In the "Site URL" field, you'll see it might be empty or have localhost
- **REPLACE** it with: `https://active-life-physio.vercel.app`
- **CLICK** the "Save" button

## What You're Looking For:
```
Site URL: [                                    ] [Save]
          ↑
          Type your Vercel URL here
```

## Your Vercel URL will be:
`https://active-life-physio.vercel.app`

## Why This is Important:
- Allows your website to communicate with Supabase
- Prevents CORS errors
- Enables appointment booking and testimonials to work

## If You Can't Find It:
1. Make sure you're logged into the correct Supabase account
2. Make sure you're in the right project
3. The Settings icon looks like a gear ⚙️
4. API is usually the first or second option under Settings