import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Personcreditcard extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    personcreditcardid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'businessentityid'
      }
    },
    creditcardid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'creditcard',
        key: 'creditcardid'
      }
    }
  }, {
    sequelize,
    tableName: 'personcreditcard',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_personcreditcard",
        unique: true,
        fields: [
          { name: "personcreditcardid" },
        ]
      },
    ]
  });
  }
}
