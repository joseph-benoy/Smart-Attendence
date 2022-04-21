import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { session, sessionId } from './session';
import type { student, studentId } from './student';

export interface attendanceAttributes {
  id: number;
  sid: number;
  stid: number;
  logtime: Date;
}

export type attendancePk = "id";
export type attendanceId = attendance[attendancePk];
export type attendanceOptionalAttributes = "id";
export type attendanceCreationAttributes = Optional<attendanceAttributes, attendanceOptionalAttributes>;

export class attendance extends Model<attendanceAttributes, attendanceCreationAttributes> implements attendanceAttributes {
  id!: number;
  sid!: number;
  stid!: number;
  logtime!: Date;

  // attendance belongsTo session via sid
  sid_session!: session;
  getSid_session!: Sequelize.BelongsToGetAssociationMixin<session>;
  setSid_session!: Sequelize.BelongsToSetAssociationMixin<session, sessionId>;
  createSid_session!: Sequelize.BelongsToCreateAssociationMixin<session>;
  // attendance belongsTo student via stid
  st!: student;
  getSt!: Sequelize.BelongsToGetAssociationMixin<student>;
  setSt!: Sequelize.BelongsToSetAssociationMixin<student, studentId>;
  createSt!: Sequelize.BelongsToCreateAssociationMixin<student>;

  static initModel(sequelize: Sequelize.Sequelize): typeof attendance {
    return attendance.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'session',
        key: 'id'
      }
    },
    stid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    logtime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'attendance',
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
        name: "attendance_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "sid" },
        ]
      },
      {
        name: "attendance_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "stid" },
        ]
      },
    ]
  });
  }
}
