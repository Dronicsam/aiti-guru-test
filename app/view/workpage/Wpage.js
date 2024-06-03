Ext.define("AitiGuruTest.view.workpage.Wpage", {
  extend: "Ext.form.Panel",
  xtype: "wpage",
  id: "wpage",
  requires: ["AitiGuruTest.view.workpage.WpageController"],
  controller: "workpage",
  header: {
    title: {
      bind: {
        text: "Список товаров",
      },
    },
  },
  bodyStyle: "padding: 20px;",
  items: [
    {
      xtype: "textfield",
      name: "id",
      fieldLabel: "ID:",
      emptyText: "Введите фильтр...",
      maskRe: /[0-9.-]/,
      listeners: {
        change: {
          fn: "onIdChange",
        },
      },
    },
    {
      xtype: "textfield",
      name: "description",
      fieldLabel: "Описание:",
      emptyText: "Введите фильтр...",
      listeners: {
        change: {
          fn: "onDescChange",
        },
      },
    },
  ],
});
