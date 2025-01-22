import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Product extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    productnumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    safetystocklevel: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    reorderpoint: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    standardcost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    listprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    sizeunitmeasurecode: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    daystomanufacture: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    productsubcategoryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productsubcategory',
        key: 'productsubcategoryid'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_product",
        unique: true,
        fields: [
          { name: "productid" },
        ]
      },
    ]
  });
  }
}
