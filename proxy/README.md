# LINE Webhook Proxy

Google Apps Script Web Apps can respond through an HTTP redirect. LINE's webhook verifier may reject that initial redirect as `302 Found`, even when normal message delivery works.

This Cloudflare Worker forwards LINE webhook POST requests to Apps Script, follows the Apps Script redirect, and returns a direct `200 OK` response to LINE.

## Deploy

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Create a Worker.
4. Replace the Worker code with `worker.js`.
5. Add an environment variable:

```text
APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

6. Deploy the Worker.
7. Copy the Worker URL, for example:

```text
https://yogidiver-line-webhook.YOUR_ACCOUNT.workers.dev
```

8. Set that Worker URL as the LINE Developers webhook URL.
9. Click Verify.

The Apps Script Web App remains the actual webhook handler. The Worker only removes the redirect problem and returns a direct `200 OK` to LINE.
