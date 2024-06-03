Ext.define('AitiGuruTest.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: [
        'id', 'name', 'description', 'price', 'amount' 
    ],

    data: { items: [
        {id: 1, name: "Мышь", description: "Игоры", price: 13.0, amount: 12},
        {id: 2, name: "Клава", description: "Работова", price: 12311, amount: 1},
        {id: 3, name: "Клава", description: "Работова", price: 12311, amount: 1},
        {id: 4, name: "Микрофон", description: "Говорение", price: 12311, amount: 0},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
