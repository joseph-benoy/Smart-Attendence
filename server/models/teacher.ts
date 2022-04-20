import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dept, deptId } from './dept';
import type { session, sessionId } from './session';

export interface teacherAttributes {
  id: number;
  name: string;
  email: string;
  did: number;
  password: string;
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
  password!: string;

  // teacher belongsTo dept via did
  did_dept!: dept;
  getDid_dept!: Sequelize.BelongsToGetAssociationMixin<dept>;
  setDid_dept!: Sequelize.BelongsToSetAssociationMixin<dept, deptId>;
  createDid_dept!: Sequelize.BelongsToCreateAssociationMixin<dept>;
  // teacher hasMany session via tid
  sessions!: session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<session, sessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<session, sessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<session, sessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<session, sessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<session, sessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<session, sessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<session, sessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;

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
      allowNull: false,
      references: {
        model: 'dept',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING(500),
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
      {
        name: "did",
        using: "BTREE",
        fields: [
          { name: "did" },
        ]
      },
    ]
  });
  }
}
