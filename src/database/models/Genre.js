module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genres', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER(10),
        },
        active: {
            type: DataTypes.INTEGER(1),
        }
    }, {
        timestamps: false
    })

    return Genre
}