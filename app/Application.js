Ext.define("AitiGuruTest.Application", {
  extend: "Ext.app.Application",

  name: "AitiGuruTest",

  stores: [],

  launch: function () {
    var loggedIn;
    loggedIn = localStorage.getItem("TutorialLoggedIn");
    if (loggedIn === "true") {
      Ext.create({
        xtype: "app-main",
      });
    } else {
      Ext.create({
        xtype: "login",
      });
    }
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      },
    );
  },
});
