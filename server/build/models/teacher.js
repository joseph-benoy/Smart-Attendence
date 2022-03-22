import { DataTypes, Model } from 'sequelize';
export class teacher extends Model {
    static initModel(sequelize) {
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
