const SB_URL = 'https://itraumqgammtgiouipak.supabase.co';
const SB_KEY = 'sb_publishable_ySnnol1KpqNs2yBxqkOVHQ_NZP_J8ZN';

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }
    try {
      const body = await request.json();
      const country = request.cf?.country || null;
      const res = await fetch(`${SB_URL}/rest/v1/omupan_events`, {
        method: 'POST',
        headers: {
          'apikey': SB_KEY,
          'Authorization': `Bearer ${SB_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          event:     body.event     ?? null,
          category:  body.category  ?? null,
          referrer:  body.referrer  ?? null,
          lang:      body.lang      ?? null,
          filename:  body.filename  ?? null,
          extra_val: body.extra_val ?? null,
          country:   country,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        return new Response(JSON.stringify({ error: err }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ ok: true, country }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  }
};
