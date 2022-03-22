import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { dept, deptId } from './dept';
import type { student, studentId } from './student';

export interface courseAttributes {
  id: number;
  name: string;
  did: number;
}

export type coursePk = "id";
export type courseId = course[coursePk];
export type courseOptionalAttributes = "id";
export type courseCreationAttributes = Optional<courseAttributes, courseOptionalAttributes>;

export class course extends Model<courseAttributes, courseCreationAttributes> implements courseAttributes {
  id!: number;
  name!: string;
  did!: number;

  // course hasMany student via cid
  students!: student[];
  getStudents!: Sequelize.HasManyGetAssociationsMixin<student>;
  setStudents!: Sequelize.HasManySetAssociationsMixin<student, studentId>;
  addStudent!: Sequelize.HasManyAddAssociationMixin<student, studentId>;
  addStudents!: Sequelize.HasManyAddAssociationsMixin<student, studentId>;
  createStudent!: Sequelize.HasManyCreateAssociationMixin<student>;
  removeStudent!: Sequelize.HasManyRemoveAssociationMixin<student, studentId>;
  removeStudents!: Sequelize.HasManyRemoveAssociationsMixin<student, studentId>;
  hasStudent!: Sequelize.HasManyHasAssociationMixin<student, studentId>;
  hasStudents!: Sequelize.HasManyHasAssociationsMixin<student, studentId>;
  countStudents!: Sequelize.HasManyCountAssociationsMixin;
  // course belongsTo dept via did
  did_dept!: dept;
  getDid_dept!: Sequelize.BelongsToGetAssociationMixin<dept>;
  setDid_dept!: Sequelize.BelongsToSetAssociationMixin<dept, deptId>;
  createDid_dept!: Sequelize.BelongsToCreateAssociationMixin<dept>;

  static initModel(sequelize: Sequelize.Sequelize): typeof course {
    return course.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "name"
    },
    did: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dept',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'course',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
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
