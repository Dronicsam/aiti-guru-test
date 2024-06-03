Ext.define("AitiGuruTest.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
  onClickButton: function () {
    localStorage.removeItem("login", null);
    localStorage.removeItem("password", null);
    // Remove the localStorage key/value
    localStorage.removeItem("TutorialLoggedIn");

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
    Ext.create({
      xtype: "login",
    });
  },

  onAddItem: function () {
    function makeid(length) {
      let result = "";
      const characters = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijhlmnopqrstuvwxyz";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
        counter += 1;
      }
      return result;
    }

    var idList = makeid(5);
    var idPage = makeid(10);
    var tabPanel = Ext.getCmp("mainpanel");
    tabPanel.add({
      title: "Товары",
      xtype: "panel",
      items: [
        { xtype: "wpage", id: idPage },
        { xtype: "mainlist", id: idList },
      ],
      ui: "navigation",
      closable: true,
    });
  },
});
