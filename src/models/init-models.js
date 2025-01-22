import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Address from  "./address.js";
import _Creditcard from  "./creditcard.js";
import _Customer from  "./customer.js";
import _Person from  "./person.js";
import _Personcreditcard from  "./personcreditcard.js";
import _Product from  "./product.js";
import _Productcategory from  "./productcategory.js";
import _Productsubcategory from  "./productsubcategory.js";
import _Salesorderdetails from  "./salesorderdetails.js";
import _Salesorderheader from  "./salesorderheader.js";
import _Salesterritory from  "./salesterritory.js";
import _Store from  "./store.js";
import { dbConfig } from "../config/db.config.js";

export const initModels = (sequelize) => {
  const Address = _Address.init(sequelize, DataTypes);
  const Creditcard = _Creditcard.init(sequelize, DataTypes);
  const Customer = _Customer.init(sequelize, DataTypes);
  const Person = _Person.init(sequelize, DataTypes);
  const Personcreditcard = _Personcreditcard.init(sequelize, DataTypes);
  const Product = _Product.init(sequelize, DataTypes);
  const Productcategory = _Productcategory.init(sequelize, DataTypes);
  const Productsubcategory = _Productsubcategory.init(sequelize, DataTypes);
  const Salesorderdetails = _Salesorderdetails.init(sequelize, DataTypes);
  const Salesorderheader = _Salesorderheader.init(sequelize, DataTypes);
  const Salesterritory = _Salesterritory.init(sequelize, DataTypes);
  const Store = _Store.init(sequelize, DataTypes);

  Salesorderheader.belongsTo(Address, { as: "shiptoaddress", foreignKey: "shiptoaddressid"});
  Address.hasMany(Salesorderheader, { as: "salesorderheaders", foreignKey: "shiptoaddressid"});
  Personcreditcard.belongsTo(Creditcard, { as: "creditcard", foreignKey: "creditcardid"});
  Creditcard.hasMany(Personcreditcard, { as: "personcreditcards", foreignKey: "creditcardid"});
  Salesorderheader.belongsTo(Creditcard, { as: "creditcard", foreignKey: "creditcardid"});
  Creditcard.hasMany(Salesorderheader, { as: "salesorderheaders", foreignKey: "creditcardid"});
  Customer.belongsTo(Person, { as: "person", foreignKey: "personid"});
  Person.hasMany(Customer, { as: "customers", foreignKey: "personid"});
  Personcreditcard.belongsTo(Person, { as: "businessentity", foreignKey: "businessentityid"});
  Person.hasMany(Personcreditcard, { as: "personcreditcards", foreignKey: "businessentityid"});
  Salesorderdetails.belongsTo(Product, { as: "product", foreignKey: "productid"});
  Product.hasMany(Salesorderdetails, { as: "salesorderdetails", foreignKey: "productid"});
  Productsubcategory.belongsTo(Productcategory, { as: "productcategory", foreignKey: "productcategoryid"});
  Productcategory.hasMany(Productsubcategory, { as: "productsubcategories", foreignKey: "productcategoryid"});
  Product.belongsTo(Productsubcategory, { as: "productsubcategory", foreignKey: "productsubcategoryid"});
  Productsubcategory.hasMany(Product, { as: "products", foreignKey: "productsubcategoryid"});
  Salesorderdetails.belongsTo(Salesorderheader, { as: "salesorder", foreignKey: "salesorderid"});
  Salesorderheader.hasMany(Salesorderdetails, { as: "salesorderdetails", foreignKey: "salesorderid"});
  Customer.belongsTo(Salesterritory, { as: "territory", foreignKey: "territoryid"});
  Salesterritory.hasMany(Customer, { as: "customers", foreignKey: "territoryid"});
  Salesorderheader.belongsTo(Salesterritory, { as: "territory", foreignKey: "territoryid"});
  Salesterritory.hasMany(Salesorderheader, { as: "salesorderheaders", foreignKey: "territoryid"});
  Customer.belongsTo(Store, { as: "store", foreignKey: "storeid"});
  Store.hasMany(Customer, { as: "customers", foreignKey: "storeid"});

  return {
    Address,
    Creditcard,
    Customer,
    Person,
    Personcreditcard,
    Product,
    Productcategory,
    Productsubcategory,
    Salesorderdetails,
    Salesorderheader,
    Salesterritory,
    Store,
  };
}

export const models = initModels(dbConfig)
