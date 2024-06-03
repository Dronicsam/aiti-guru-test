/**
 * This view is an example list of people.
 */
Ext.define("AitiGuruTest.view.list.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",
  reference: "mainlist",
  id: "mainlist",
  requires: [
    "AitiGuruTest.store.Products",
    "AitiGuruTest.view.list.ListController",
  ],
  controller: "list",

  store: {
    type: "products",
  },
  columns: [
    { text: "ID", dataIndex: "id" },
    { text: "Имя", dataIndex: "name", flex: 1 },
    { text: "Описание", dataIndex: "description", flex: 1 },
    { text: "Цена", dataIndex: "price", flex: 1 },
    {
      text: "Кол-во",
      dataIndex: "amount",
      flex: 1,
      renderer: function (value, metaData) {
        if (parseInt(value) == 0) {
          metaData.tdStyle = "background-color:#ffaaaa";
        }
        return value;
      },
    },
  ],

  listeners: {
    select: {
      fn: function () {
        // Ext.getCmp("productcard").destroy()
        Ext.create({
          xtype: "productcard",
        });
        var data = this.getSelection()[0].data;
        Ext.getCmp("itemId").setValue(data.id);
        Ext.getCmp("amountId").setValue(data.amount);
        Ext.getCmp("descId").setValue(data.description);
        Ext.getCmp("productcard").setTitle(`Карточка товара: ${data.name}`);
        Ext.getCmp("priceId").setValue(data.price);
      },
      extraArg: true,
    },
  },
});
