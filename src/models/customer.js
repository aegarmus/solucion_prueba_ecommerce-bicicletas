import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Customer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    personid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'businessentityid'
      }
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'store',
        key: 'businessentityid'
      }
    },
    territoryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'salesterritory',
        key: 'territoryid'
      }
    }
  }, {
    sequelize,
    tableName: 'customer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_customer",
        unique: true,
        fields: [
          { name: "customerid" },
        ]
      },
    ]
  });
  }
}
