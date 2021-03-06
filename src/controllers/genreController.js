const db = require('../database/models')

module.exports = {
    list: (req, res, next) => {
        db.genres.findAll()
            .then(generos => {
                res.render('genresList', {
                    genres: generos
                })
            })
            .catch(err => console.log(err))
    },
    detail: (req, res, next) => {
        db.genres.findByPk(+req.params.id)
            .then(genero => {
                res.render('genreDetail', {
                    genre: genero
                })
            })
            .catch(err => console.log(err))
    }
}