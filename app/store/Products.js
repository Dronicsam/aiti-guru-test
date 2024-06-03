Ext.define("AitiGuruTest.store.Products", {
  extend: "Ext.data.Store",

  alias: "store.products",

  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "description", type: "string" },
    { name: "price", type: "float" },
    { name: "amount", type: "int" },
  ],
  storeId: "products-store",
  data: {
    items: [
      {
        id: 1,
        name: "Notebook Lenovo",
        description: "ThinkPad",
        price: 13.2,
        amount: 12,
      },
      {
        id: 2,
        name: "Logitech Keyboard",
        description: "Great for work and perfect for gaming",
        price: 12311,
        amount: 1,
      },
      {
        id: 3,
        name: "Mousepad",
        description: "Black mousepad",
        price: 12311,
        amount: 1,
      },
      {
        id: 4,
        name: "Network adapter",
        description: "Great internet speed",
        price: 12311,
        amount: 0,
      },
    ],
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
