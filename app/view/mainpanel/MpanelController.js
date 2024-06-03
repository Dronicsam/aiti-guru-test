Ext.define('AitiGuruTest.view.mainpanel.MpanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainpanel',
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
});