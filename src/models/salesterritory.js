import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Salesterritory extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    territoryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    countryregioncode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    group: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salesytd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saleslastyear: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    costytd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    costlastyear: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salesterritory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_salesterritory",
        unique: true,
        fields: [
          { name: "territoryid" },
        ]
      },
    ]
  });
  }
}
