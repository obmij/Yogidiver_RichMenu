export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('OK', {
        status: 200,
        headers: { 'content-type': 'text/plain; charset=utf-8' }
      });
    }

    if (!env.APPS_SCRIPT_URL) {
      return new Response('Missing APPS_SCRIPT_URL', { status: 500 });
    }

    const body = await request.arrayBuffer();

    const upstream = await fetch(env.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'content-type': request.headers.get('content-type') || 'application/json'
      },
      body,
      redirect: 'follow'
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return new Response('Apps Script upstream error: ' + upstream.status + '\n' + text, {
        status: 502,
        headers: { 'content-type': 'text/plain; charset=utf-8' }
      });
    }

    return new Response('OK', {
      status: 200,
      headers: { 'content-type': 'text/plain; charset=utf-8' }
    });
  }
};
