Ext.define("AitiGuruTest.view.product.Product", {
  extend: "Ext.window.Window",
  xtype: "productcard",
  requires: ["AitiGuruTest.view.product.ProductController", "Ext.form.Panel"],

  controller: "product",
  bodyPadding: 10,
  title: "Окно входа",
  closable: true,
  autoShow: true,

  items: {
    xtype: "form",
    reference: "form",
    items: [
      {
        xtype: "textfield",
        name: "login",
        fieldLabel: "Цена:",
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        fieldLabel: "Кол-во",
        allowBlank: false,
      },
    ],
    buttons: [
      {
        text: "Вход",
        formBind: true,
        listeners: [
          {
            click: function () {
              var data = this.up("form").getForm().getValues();
              for (let i in data) {
                localStorage.setItem(i, data[i]);
              }
            },
          },
          {
            click: "onLoginClick",
          },
        ],
      },
      {
        text: "Вход",
        formBind: true,
        listeners: [
          {
            click: function () {
              var data = this.up("form").getForm().getValues();
              for (let i in data) {
                localStorage.setItem(i, data[i]);
              }
            },
          },
          {
            click: "onLoginClick",
          },
        ],
      },
    ],
  },
});
