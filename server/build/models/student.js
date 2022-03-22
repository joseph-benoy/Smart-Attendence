import { DataTypes, Model } from 'sequelize';
export class student extends Model {
    static initModel(sequelize) {
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
                    name: "cid",
                    using: "BTREE",
                    fields: [
                        { name: "cid" },
                    ]
                },
            ]
        });
    }
}
