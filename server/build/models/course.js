import { DataTypes, Model } from 'sequelize';
export class course extends Model {
    static initModel(sequelize) {
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
