Ext.define("AitiGuruTest.view.product.Product", {
  extend: "Ext.window.Window",
  xtype: "productcard",
  requires: ["AitiGuruTest.view.product.ProductController", "Ext.form.Panel"],
  id: "productcard",
  controller: "product",
  bodyPadding: 10,
  header: {
    title: "123",
    id: "titleId",
    renderer: function (val, metadata, record) {
      metadata.style = "cursor: auto;";
      return val;
    },
  },
  modal: true,
  autoShow: true,
  closable: false,
  items: {
    xtype: "form",
    id: "productform",
    reference: "form",
    items: [
      {
        fieldLabel: "ID:",
        xtype: "textfield",
        name: "itemId",
        id: "itemId",
        readOnly: true,
        value: "123",
        inputWrapCls: "",
        triggerWrapCls: "",
        fieldStyle: "background:none",
      },
      {
        fieldLabel: "Наименование:",
        xtype: "textfield",
        name: "itemDesc",
        id: "descId",
        readOnly: true,
        value: "123",
        inputWrapCls: "",
        triggerWrapCls: "",
        fieldStyle: "background:none",
      },
      {
        xtype: "numberfield",
        id: "priceId",
        name: "itemPrice",
        fieldLabel: "Цена:",
      },
      {
        xtype: "numberfield",
        id: "amountId",
        name: "itemAmount",
        fieldLabel: "Кол-во",
      },
    ],
    buttons: [
      {
        text: "Сохранить",
        formBind: true,
        listeners: [
          {
            click: { fn: "onCancelClick", extraArg: "yes" },
          },
        ],
      },
      {
        text: "Отмена",
        formBind: true,
        listeners: [
          {
            click: { fn: "onCancelClick", extraArg: "yes" },
          },
        ],
      },
    ],
  },
});
