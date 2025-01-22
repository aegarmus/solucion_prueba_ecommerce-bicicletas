import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Address extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    addressid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addressline1: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    addressline2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    postalcode: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'address',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_address",
        unique: true,
        fields: [
          { name: "addressid" },
        ]
      },
    ]
  });
  }
}
