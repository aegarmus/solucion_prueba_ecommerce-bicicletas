import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Salesorderheader extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    salesorderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    revisionnumber: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    orderdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shipdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    onlineorderflag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    purchaseordernumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    accountnumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    territoryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'salesterritory',
        key: 'territoryid'
      }
    },
    shiptoaddressid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'addressid'
      }
    },
    creditcardid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'creditcard',
        key: 'creditcardid'
      }
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    taxamt: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    freight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totaldue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salesorderheader',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_salesorderheader",
        unique: true,
        fields: [
          { name: "salesorderid" },
        ]
      },
    ]
  });
  }
}
