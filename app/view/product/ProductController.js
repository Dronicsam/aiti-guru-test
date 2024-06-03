Ext.define("AitiGuruTest.view.product.ProductController", {
  extend: "Ext.app.ViewController",
  alias: "controller.product",
  onCancelClick: function (event) {
    event.up("productcard").destroy();
  },
  onSaveClick: function (value) {
    var store = Ext.data.StoreManager.lookup("products-store");
    var data = value.up("form").getForm().getValues();
    store.each(function (record, idx) {
      val = record.get("id");
      var price = record.get('price')
      var amount = record.get('amount');
      if (val == data.itemId) {
        if(data.itemPrice < 0 || data.itemAmount < 0){
          Ext.MessageBox.alert("Ошибка!", "Введены неверные данные. Числа должны быть больше или равны 0");
        }else{
          if(price !== data.itemPrice || amount !== data.itemAmount){
            Ext.MessageBox.alert("Внимание!", "Есть изменённые данные");
            record.set("price", data.itemPrice);
            record.set("amount", data.itemAmount);
          }
          store.reload();
          value.up("productcard").destroy();
        }
      }
    });
  },
});
