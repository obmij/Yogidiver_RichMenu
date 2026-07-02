const SetupStatusService = {
  get() {
    const missing = [];
    const tokenKey = CONFIG.LINE_CHANNEL_ACCESS_TOKEN_KEY;

    if (!AppProperties.has(tokenKey) && !LineService.looksLikeToken(tokenKey)) {
      missing.push('LINE_CHANNEL_ACCESS_TOKEN');
    }

    return {
      ok: missing.length === 0,
      missing: missing,
      required: ['LINE_CHANNEL_ACCESS_TOKEN']
    };
  }
};
