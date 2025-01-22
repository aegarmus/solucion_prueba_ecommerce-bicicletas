import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Salesorderdetails extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    salesorderdetailid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    salesorderid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'salesorderheader',
        key: 'salesorderid'
      }
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'productid'
      }
    },
    carriertrackingnumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    orderqty: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    specialofferid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unitprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    unitpricediscount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salesorderdetails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_salesorderdetails",
        unique: true,
        fields: [
          { name: "salesorderdetailid" },
        ]
      },
    ]
  });
  }
}
