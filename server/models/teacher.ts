import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface teacherAttributes {
  id: number;
  name: string;
  email: string;
  did: number;
}

export type teacherPk = "id";
export type teacherId = teacher[teacherPk];
export type teacherOptionalAttributes = "id";
export type teacherCreationAttributes = Optional<teacherAttributes, teacherOptionalAttributes>;

export class teacher extends Model<teacherAttributes, teacherCreationAttributes> implements teacherAttributes {
  id!: number;
  name!: string;
  email!: string;
  did!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof teacher {
    return teacher.init({
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
    did: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'teacher',
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
