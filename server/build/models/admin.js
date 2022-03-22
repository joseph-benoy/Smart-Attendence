import { DataTypes, Model } from 'sequelize';
export class admin extends Model {
    static initModel(sequelize) {
        return admin.init({
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
            password: {
                type: DataTypes.STRING(500),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'admin',
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
