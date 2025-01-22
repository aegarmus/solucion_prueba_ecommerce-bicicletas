import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Store extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salespersonid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'store',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_store",
        unique: true,
        fields: [
          { name: "businessentityid" },
        ]
      },
    ]
  });
  }
}
