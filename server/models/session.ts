import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course, courseId } from './course';

export interface sessionAttributes {
  id: number;
  name: string;
  date: string;
  start: string;
  end: string;
  cid: number;
  sem: number;
  before: number;
  validity: number;
  uuid: string;
}

export type sessionPk = "id";
export type sessionId = session[sessionPk];
export type sessionOptionalAttributes = "id";
export type sessionCreationAttributes = Optional<sessionAttributes, sessionOptionalAttributes>;

export class session extends Model<sessionAttributes, sessionCreationAttributes> implements sessionAttributes {
  id!: number;
  name!: string;
  date!: string;
  start!: string;
  end!: string;
  cid!: number;
  sem!: number;
  before!: number;
  validity!: number;
  uuid!: string;

  // session belongsTo course via cid
  cid_course!: course;
  getCid_course!: Sequelize.BelongsToGetAssociationMixin<course>;
  setCid_course!: Sequelize.BelongsToSetAssociationMixin<course, courseId>;
  createCid_course!: Sequelize.BelongsToCreateAssociationMixin<course>;

  static initModel(sequelize: Sequelize.Sequelize): typeof session {
    return session.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    start: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end: {
      type: DataTypes.TIME,
      allowNull: false
    },
    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'id'
      }
    },
    sem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    before: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    validity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'session',
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
        name: "session_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "cid" },
        ]
      },
    ]
  });
  }
}
