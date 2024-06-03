Ext.define("AitiGuruTest.view.workpage.WpageController", {
  extend: "Ext.app.ViewController",
  alias: "controller.workpage",
  onIdChange: function (value) {
    var store = value.up().up().down("grid").getStore();
    if (value.value.length !== 0) {
      store.addFilter({
        id: "idFilters",
        property: "id",
        value: value.value,
        exactMatch: true,
        caseSensitive: true,
      });
      store.load();
    } else {
      store.filters.removeAtKey("idFilters");
    }
  },
  onDescChange: function (value) {
    var store = value.up().up().down("grid").getStore();
    if (value.value.length !== 0) {
      store.addFilter({
        id: "descFilters",
        property: "description",
        value: value.value,
      });
      store.load();
    } else {
      store.filters.removeAtKey("descFilters");
    }
  },
});
