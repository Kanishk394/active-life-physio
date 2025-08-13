// Supabase Edge Function for WhatsApp notifications
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { record } = await req.json()
    
    // WhatsApp Cloud API credentials (get from Meta Developer Console)
    const WHATSAPP_TOKEN = Deno.env.get('WHATSAPP_TOKEN')
    const PHONE_NUMBER_ID = Deno.env.get('PHONE_NUMBER_ID')
    const RECIPIENT_NUMBER = '919811366344'

    const message = `🏥 *NEW APPOINTMENT REQUEST*

👤 *Name:* ${record.name}
📞 *Phone:* ${record.phone}
📧 *Email:* ${record.email || 'Not provided'}
🩺 *Service:* ${record.service}
📅 *Date:* ${record.preferred_date}
⏰ *Time:* ${record.preferred_time}
📝 *Message:* ${record.message || 'No additional information'}

*Please confirm this appointment.*`

    const response = await fetch(`https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: RECIPIENT_NUMBER,
        type: 'text',
        text: { body: message }
      })
    })

    const result = await response.json()
    
    return new Response(
      JSON.stringify({ success: true, result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})