/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AitiGuruTest.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'AitiGuruTest.view.main.MainController',
        'AitiGuruTest.view.main.MainModel',
        'AitiGuruTest.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        // layout: {
        //     align: 'stretchmax'
        // },
        title: {
            bind: {
                text: '{name}'
            },
        }, 
        
        items: [{
            xtype: 'button',
            handler: function (button, e) {
                function makeid(length) {
                    let result = '';
                    const characters = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijhlmnopqrstuvwxyz';
                    const charactersLength = characters.length;
                    let counter = 0;
                    while (counter < length) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                      counter += 1;
                    }
                    return result;
                }
                
                var idProp = makeid(5)
                var even = (Math.floor(Math.random() * 90 + 10)) % 2 === 0
                var tabPanel = Ext.getCmp('mainpanel');
                tabPanel.add({title: "Товар", xtype: "mainlist", id: idProp, closable: true})
                console.log(idProp)
            },
            text: 'Товар'
        }, {
            xtype: 'button',
            text: "Выход",
            listeners: [
            {
                click: 'onClickButton'
            }]
        }]
    },


    items: [{xtype: "mainpanel"}]
});
