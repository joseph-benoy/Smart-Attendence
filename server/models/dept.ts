import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { course, courseId } from './course';

export interface deptAttributes {
  id: number;
  name: string;
}

export type deptPk = "id";
export type deptId = dept[deptPk];
export type deptOptionalAttributes = "id";
export type deptCreationAttributes = Optional<deptAttributes, deptOptionalAttributes>;

export class dept extends Model<deptAttributes, deptCreationAttributes> implements deptAttributes {
  id!: number;
  name!: string;

  // dept hasMany course via did
  courses!: course[];
  getCourses!: Sequelize.HasManyGetAssociationsMixin<course>;
  setCourses!: Sequelize.HasManySetAssociationsMixin<course, courseId>;
  addCourse!: Sequelize.HasManyAddAssociationMixin<course, courseId>;
  addCourses!: Sequelize.HasManyAddAssociationsMixin<course, courseId>;
  createCourse!: Sequelize.HasManyCreateAssociationMixin<course>;
  removeCourse!: Sequelize.HasManyRemoveAssociationMixin<course, courseId>;
  removeCourses!: Sequelize.HasManyRemoveAssociationsMixin<course, courseId>;
  hasCourse!: Sequelize.HasManyHasAssociationMixin<course, courseId>;
  hasCourses!: Sequelize.HasManyHasAssociationsMixin<course, courseId>;
  countCourses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof dept {
    return dept.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dept',
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
    ]
  });
  }
}
