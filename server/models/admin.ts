import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface adminAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type adminPk = "id";
export type adminId = admin[adminPk];
export type adminOptionalAttributes = "id";
export type adminCreationAttributes = Optional<adminAttributes, adminOptionalAttributes>;

export class admin extends Model<adminAttributes, adminCreationAttributes> implements adminAttributes {
  id!: number;
  name!: string;
  email!: string;
  password!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof admin {
    return admin.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
