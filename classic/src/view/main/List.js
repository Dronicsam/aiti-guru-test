/**
 * This view is an example list of people.
 */
Ext.define('AitiGuruTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    reference: "mainlist",
    id: "mainlist",
    requires: [
        'AitiGuruTest.store.Products'
    ],

    store: {
        type: 'products'
    },
    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'description', flex: 1 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        { text: 'Кол-во', dataIndex: 'amount', flex: 1, renderer: function (value, metaData) {
            if (parseInt(value) == 0) {
                metaData.tdStyle = 'background-color:#ffaaaa';
            }
            return value
        }}        
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
