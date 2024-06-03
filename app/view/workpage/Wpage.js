Ext.define('AitiGuruTest.view.workpage.Wpage', {
    extend: 'Ext.form.Panel',
    xtype: 'wpage',
    id: "wpage",
    requires: [
        'AitiGuruTest.view.workpage.WpageController'
    ],
    header: {
        title: {
            bind: {
                text: '{name}'
            },
        },
    },
    bodyStyle: 'padding: 20px;',
    // bodyPadding: 30,
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        allowBlank: false  // requires a non-empty value
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email Address',
        vtype: 'email'  // requires value to be a valid email address format
    },    
]
});
