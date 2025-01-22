import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Productsubcategory extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    productsubcategoryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productcategoryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productcategory',
        key: 'productcategoryid'
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productsubcategory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_productsubcategory",
        unique: true,
        fields: [
          { name: "productsubcategoryid" },
        ]
      },
    ]
  });
  }
}
