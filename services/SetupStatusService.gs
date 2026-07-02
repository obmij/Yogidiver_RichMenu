const SetupStatusService = {
  get() {
    const required = [
      CONFIG.LINE_CHANNEL_ACCESS_TOKEN_KEY,
      CONFIG.LINE_CHANNEL_SECRET_KEY
    ];

    const missing = required.filter(key => !AppProperties.has(key));

    return {
      ok: missing.length === 0,
      missing: missing,
      required: required
    };
  }
};
