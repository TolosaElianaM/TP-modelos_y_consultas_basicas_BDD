module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define('Movies', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(10, 2),
        },
        awards: {
            type: DataTypes.INTEGER,
        },
        release_date: {
            type: DataTypes.DATE,
        },
        length: {
            type: DataTypes.INTEGER,
        },
        genre_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        timestamps: false
    })

    return Movie
}