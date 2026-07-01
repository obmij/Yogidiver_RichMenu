const AssetResolver = {
  image(data) {
    if (!data) return '';
    if (data.image) return data.image;
    if (data.imageKey && typeof ASSETS !== 'undefined') {
      return ASSETS[data.imageKey] || '';
    }
    return '';
  }
};
