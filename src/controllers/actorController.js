const db = require('../database/models')

module.exports = {
    list: (req, res, next) => {
        db.actors.findAll()
            .then(actores => {
                res.render('actorsList', {
                    actors: actores
                })
            })
            .catch(err => console.log(err))
    },
    detail: (req, res, next) => {
        db.actors.findByPk(+req.params.id)
            .then(actor => {
                res.render('actorDetail', {
                    actor: actor
                })
            })
            .catch(err => console.log(err))
    }
}