const db = require('../database/models')
const {
    Op
} = require('sequelize')

module.exports = {
    list: (req, res, next) => {
        db.movies.findAll()
            .then((peliculas) => {
                res.render('moviesList', {
                    movies: peliculas
                });
            })
            .catch(err => console.error(err))
    },
    new: (req, res, next) => {
        db.movies.findAll({
                order: [
                    ['release_date', 'ASC']
                ]
            })
            .then((peliculas) => {
                res.render('newestMovie', {
                    movies: peliculas
                })
            })
            .catch(err => console.error(err))
    },
    recommended: (req, res, next) => {
        db.movies.findAll({
                //Para mostrar las peliculas con rating mayor a 8
                where: {
                    rating: {
                        [Op.gte]: 8
                    }
                },
                order: [
                    ['rating', 'DESC']
                ],
                limit: 5
            })
            .then((peliculas) => {
                res.render('recommendedMovie', {
                    movies: peliculas
                })
            })
            .catch(err => console.error(err))
    },
    detail: async (req, res, next) => {
        //Otra forma de hacer promesas asincronas, el async-await en vez del .then .catch
        try {

            const pelicula = await db.movies.findByPk(+req.params.id)
            res.render('movieDetail', {
                movie: pelicula
            });

        } catch (error) {
            console.error(error)
        }

    }
}