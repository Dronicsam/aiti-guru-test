Ext.define("AitiGuruTest.view.mainpanel.Mpanel", {
  extend: "Ext.tab.Panel",
  xtype: "mainpanel",
  id: "mainpanel",
  ui: "navigation",
  requires: ["AitiGuruTest.view.mainpanel.MpanelController", "Ext.tab.Panel"],

  controller: "mainpanel",
});
