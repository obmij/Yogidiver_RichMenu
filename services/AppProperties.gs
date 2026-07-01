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

  requireValue(key) {
    const value = this.get(key);
    if (!value) {
      throw new Error('Missing Script Property: ' + key);
    }
    return value;
  }
};
