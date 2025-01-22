import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Productcategory extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    productcategoryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productcategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_productcategory",
        unique: true,
        fields: [
          { name: "productcategoryid" },
        ]
      },
    ]
  });
  }
}
