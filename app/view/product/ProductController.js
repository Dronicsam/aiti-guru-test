Ext.define("AitiGuruTest.view.product.ProductController", {
  extend: "Ext.app.ViewController",
  alias: "controller.product",
  onCancelClick: function (event) {
    Ext.getCmp("mainlist").getSelectionModel().deselectAll();
    event.up("productcard").destroy();
  },
});
