import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Creditcard extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    creditcardid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cardtype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cardnumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    expmonth: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    expyear: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'creditcard',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_creditcard",
        unique: true,
        fields: [
          { name: "creditcardid" },
        ]
      },
    ]
  });
  }
}
