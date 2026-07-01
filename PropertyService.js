/**
 * ==========================================================
 * PropertiesService.gs
 * ==========================================================
 */

const AppProperties = {

  get(key) {
    return PropertiesService
      .getScriptProperties()
      .getProperty(key);
  },

  set(key, value) {
    PropertiesService
      .getScriptProperties()
      .setProperty(key, value);
  },

  remove(key) {
    PropertiesService
      .getScriptProperties()
      .deleteProperty(key);
  }

};