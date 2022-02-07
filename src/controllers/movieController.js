const db = require('../database/models')

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

    },
    recommended: (req, res, next) => {

    },
    detail: (req, res, next) => {

    }
}