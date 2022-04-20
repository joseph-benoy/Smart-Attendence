import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { attendance, attendanceId } from './attendance';
import type { course, courseId } from './course';

export interface studentAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  cid: number;
  sem: number;
}

export type studentPk = "id";
export type studentId = student[studentPk];
export type studentOptionalAttributes = "id";
export type studentCreationAttributes = Optional<studentAttributes, studentOptionalAttributes>;

export class student extends Model<studentAttributes, studentCreationAttributes> implements studentAttributes {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  cid!: number;
  sem!: number;

  // student belongsTo course via cid
  cid_course!: course;
  getCid_course!: Sequelize.BelongsToGetAssociationMixin<course>;
  setCid_course!: Sequelize.BelongsToSetAssociationMixin<course, courseId>;
  createCid_course!: Sequelize.BelongsToCreateAssociationMixin<course>;
  // student hasMany attendance via stid
  attendances!: attendance[];
  getAttendances!: Sequelize.HasManyGetAssociationsMixin<attendance>;
  setAttendances!: Sequelize.HasManySetAssociationsMixin<attendance, attendanceId>;
  addAttendance!: Sequelize.HasManyAddAssociationMixin<attendance, attendanceId>;
  addAttendances!: Sequelize.HasManyAddAssociationsMixin<attendance, attendanceId>;
  createAttendance!: Sequelize.HasManyCreateAssociationMixin<attendance>;
  removeAttendance!: Sequelize.HasManyRemoveAssociationMixin<attendance, attendanceId>;
  removeAttendances!: Sequelize.HasManyRemoveAssociationsMixin<attendance, attendanceId>;
  hasAttendance!: Sequelize.HasManyHasAssociationMixin<attendance, attendanceId>;
  hasAttendances!: Sequelize.HasManyHasAssociationsMixin<attendance, attendanceId>;
  countAttendances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof student {
    return student.init({
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
      unique: "student"
    },
    password: {
      type: DataTypes.STRING(500),
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
    }
  }, {
    sequelize,
    tableName: 'student',
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
        name: "student",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "student_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "cid" },
        ]
      },
    ]
  });
  }
}
