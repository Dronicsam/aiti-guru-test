/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("AitiGuruTest.view.main.Main", {
  extend: "Ext.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "AitiGuruTest.view.main.MainController",
    "AitiGuruTest.model.main.MainModel",
  ],

  controller: "main",
  viewModel: "main",
  plugins: "viewport",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,
  header: {
    title: {
      bind: {
        text: "{name}",
      },
    },

    items: [
      {
        xtype: "button",
        text: "Товар",
        listeners: [
          {
            click: "onAddItem",
          },
        ],
      },
      {
        xtype: "button",
        text: "Выход",
        listeners: [
          {
            click: "onClickButton",
          },
        ],
      },
    ],
  },

  items: [{ xtype: "mainpanel" }],
});
