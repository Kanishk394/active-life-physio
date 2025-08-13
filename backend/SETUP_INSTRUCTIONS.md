# Supabase Backend Setup Instructions

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login and create a new project
3. Wait for project to be ready (2-3 minutes)

## 2. Setup Database

1. Go to SQL Editor in your Supabase dashboard
2. Copy and paste the content from `supabase-schema.sql`
3. Click "Run" to create the appointments table

## 3. Get API Keys

1. Go to Settings > API in your Supabase dashboard
2. Copy your:
   - Project URL
   - Anon public key

## 4. Update Frontend Configuration

1. Open `js/supabase-config.js`
2. Replace:
   - `YOUR_SUPABASE_URL` with your Project URL
   - `YOUR_SUPABASE_ANON_KEY` with your Anon public key

## 5. Setup WhatsApp Notifications (Optional)

### Option A: WhatsApp Cloud API (Free)
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create a new app > Business > WhatsApp
3. Get your:
   - Access Token
   - Phone Number ID
4. Add these to Supabase Edge Functions environment variables

### Option B: Keep Current WhatsApp Integration
- Your current setup opens WhatsApp with pre-filled message
- This works without additional setup

## 6. Deploy Edge Function (For WhatsApp API)

1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link project: `supabase link --project-ref YOUR_PROJECT_REF`
4. Deploy function: `supabase functions deploy whatsapp-notification`

## 7. Create Database Trigger (For WhatsApp API)

```sql
-- Create trigger to call Edge Function on new appointment
CREATE OR REPLACE FUNCTION notify_whatsapp()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/whatsapp-notification',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb,
      body := json_build_object('record', NEW)::jsonb
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER appointment_whatsapp_trigger
  AFTER INSERT ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION notify_whatsapp();
```

## 8. Test Your Setup

1. Open your appointment page
2. Fill and submit the form
3. Check Supabase dashboard > Table Editor > appointments
4. Your appointment should appear there
5. Check admin dashboard at `pages/admin.html`

## 9. Deploy Your Site

### Frontend Hosting Options:
- **Netlify**: Drag and drop your project folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Push to GitHub and enable Pages

Your backend (Supabase) is already hosted in the cloud!

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **No data in Supabase**: Verify API keys in `supabase-config.js`
- **WhatsApp not working**: Check Edge Function logs in Supabase dashboard