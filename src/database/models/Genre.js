module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        'genres', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            ranking: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '1'
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        }, {
            timestamps: false
        }
    )
    return Genre
}