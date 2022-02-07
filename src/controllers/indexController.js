const db = require('../database/models')

module.exports = {
    index: function (req, res, next) {
        db.Movies.findAll()
            .then(movies => {
                res.render('index', {
                    peliculas: movies
                })
            })
            .catch(err => console.error(err))
    },
}