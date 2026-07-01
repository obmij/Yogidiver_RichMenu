const AssetService = {
  set(key, url) {
    const propertyKey = ASSET_PROPERTY_KEYS[key];
    if (!propertyKey) {
      throw new Error('Unknown asset key: ' + key);
    }
    AppProperties.set(propertyKey, url || '');
    return this.list();
  },

  setMany(values) {
    Object.keys(values || {}).forEach(key => {
      this.set(key, values[key]);
    });
    return this.list();
  },

  list() {
    return AssetResolver.list();
  }
};
