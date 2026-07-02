/**
 * Script Properties helper.
 */
const AppProperties = {
  get(key) {
    return PropertiesService.getScriptProperties().getProperty(key);
  },

  set(key, value) {
    PropertiesService.getScriptProperties().setProperty(key, String(value));
    return value;
  },

  remove(key) {
    PropertiesService.getScriptProperties().deleteProperty(key);
  },

  has(key) {
    return !!this.get(key);
  },

  requireValue(key) {
    if (!key) {
      throw new Error('Missing property key name in config.gs.');
    }

    const value = this.get(key);
    if (!value) {
      throw new Error('Missing Script Property: ' + key);
    }
    return value;
  }
};
