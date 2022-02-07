module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        'movies', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            rating: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            awards: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: '0'
            },
            release_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            length: {
                type: DataTypes.INTEGER
            },
            genre_id: {
                type: DataTypes.INTEGER
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
        }, {
            timestamps: false
        })

    return Movie
}