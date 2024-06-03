Ext.define("AitiGuruTest.view.login.Login", {
  extend: "Ext.window.Window",
  xtype: "login",
  requires: ["AitiGuruTest.view.login.LoginController", "Ext.form.Panel"],

  controller: "login",
  bodyPadding: 10,
  title: "Окно входа",
  closable: false,
  autoShow: true,

  items: {
    xtype: "form",
    reference: "form",
    items: [
      {
        xtype: "textfield",
        name: "login",
        fieldLabel: "Логин",
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        inputType: "password",
        fieldLabel: "Пароль",
        allowBlank: false,
      },
      {
        xtype: "displayfield",
        hideEmptyLabel: false,
        value: "Введите ваш пароль",
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
    ],
  },
});
