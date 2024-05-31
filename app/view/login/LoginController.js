

var myForm = new Ext.form.Panel({
    width: 300,
    height: 40,
    title: 'Ошибка. Неверные данные',
    floating: true,
    closable : true,
    listeners: {
        beforeclose: function() {
            window.location.reload()
        }
    }
});

Ext.define('AitiGuruTest.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    onLoginClick: function(event, target, options) {
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.
        // Set the localStorage value to true
        var data = {"login":localStorage.getItem("login"), "password": localStorage.getItem("password")}
        if(data.login === "admin" && data.password === "padmin"){
            localStorage.setItem("TutorialLoggedIn", true)
            // Remove Login Window
            this.getView().destroy();

            // Add the main view to the viewport
            Ext.create({
                xtype: 'app-main'
            });
        }else{
            myForm.show()
            localStorage.removeItem("login")
            localStorage.removeItem("password")
        }

    },
});