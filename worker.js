export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // ── 自分のIPを除外 ──────────────────────────────────────
    const clientIp = request.headers.get('CF-Connecting-IP') || '';
    const EXCLUDED_IPS = [
      '180.16.10.147',
      '2400:4152:2a4:dc00:60f5:91c8:632:4fbe',
    ];
    if (EXCLUDED_IPS.includes(clientIp)) {
      return new Response('ok', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      });
    }
    // ────────────────────────────────────────────────────────

    const cf = request.cf || {};
    const country = cf.country || 'unknown';
    const ua = request.headers.get('User-Agent') || '';
    const device = /Mobi|Android|iPhone|iPad|iPod/i.test(ua) ? 'mobile' : 'pc';
    const body = await request.json();

    const SB_URL = 'https://itraumqgammtgiouipak.supabase.co';
    const SB_KEY = 'sb_publishable_ySnnol1KpqNs2yBxqkOVHQ_NZP_J8ZN';

    await fetch(`${SB_URL}/rest/v1/omupan_events`, {
      method: 'POST',
      headers: {
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ ...body, country, device })
    });

    return new Response('ok', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
};
