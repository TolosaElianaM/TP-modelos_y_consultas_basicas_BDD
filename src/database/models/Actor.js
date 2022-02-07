module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        'actors', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true
            },
            favorite_movie_id: {
                type: DataTypes.INTEGER,
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
        }, {
            timestamps: false
        }
    )
    return Actor
}