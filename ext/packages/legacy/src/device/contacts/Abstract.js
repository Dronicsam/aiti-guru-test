/**
 * @private
 */
Ext.define("Ext.device.contacts.Abstract", {
  mixins: ["Ext.mixin.Observable"],

  config: {
    /**
     * @cfg {Boolean} includeImages
     * True to include images when you get the contacts store. Please beware that this can be very slow.
     */
    includeImages: false,
  },

  /**
   * Returns an Array of contact objects.
   * @return {Object[]} An array of contact objects.
   */
  getContacts: function (config) {
    if (!this._store) {
      this._store = [
        {
          first: "Peter",
          last: "Venkman",
          emails: {
            work: "peter.venkman@gb.com",
          },
        },
        {
          first: "Egon",
          last: "Spengler",
          emails: {
            work: "egon.spengler@gb.com",
          },
        },
      ];
    }

    config.success.call(config.scope || this, this._store);
  },

  /**
   * Returns base64 encoded image thumbnail for a contact specified in config.id
   * **This method is for Sencha Native Packager only**
   *
   * @return {String} base64 string
   */

  getThumbnail: function (config) {
    config.callback.call(config.scope || this, "");
  },

  /**
   * Returns localized, user readable label for a contact field (i.e. "Mobile", "Home")
   * **This method is for Sencha Native Packager only**
   *
   * @return {String} user readable string
   */
  getLocalizedLabel: function (config) {
    config.callback.call(
      config.scope || this,
      config.label.toUpperCase(),
      config.label,
    );
  },
});
