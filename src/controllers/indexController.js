const db = require('../database/models')

module.exports = {
    index: function (req, res, next) {

        res.render('index')

    },
}