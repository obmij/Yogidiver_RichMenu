const AssetResolver = {
  image(data) {
    if (!data) return '';
    if (data.image) return data.image;

    const key = data.imageKey;
    if (!key) return '';

    const hardcoded = typeof ASSETS !== 'undefined' ? ASSETS[key] : '';
    if (hardcoded) return hardcoded;

    const propertyKey = typeof ASSET_PROPERTY_KEYS !== 'undefined' ? ASSET_PROPERTY_KEYS[key] : '';
    if (!propertyKey) return '';

    return AppProperties.get(propertyKey) || '';
  },

  list() {
    const keys = Object.keys(ASSET_PROPERTY_KEYS);
    return keys.map(key => ({
      key,
      propertyKey: ASSET_PROPERTY_KEYS[key],
      url: this.image({ imageKey: key })
    }));
  }
};
