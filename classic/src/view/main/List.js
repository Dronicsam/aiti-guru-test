/**
 * This view is an example list of people.
 */
Ext.define('AitiGuruTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id: "mainlist",
    requires: [
        'AitiGuruTest.store.Personnel'
    ],

    // title: 'Список товаров',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID',  dataIndex: 'name' },
        { text: 'Имя', dataIndex: 'email', flex: 1 },
        { text: 'Описание', dataIndex: 'phone', flex: 1 },
        { text: 'Цена', dataIndex: 'email', flex: 1 },
        { text: 'Кол-во', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
