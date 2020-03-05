"use strict"
const {Card} = require('../models')

function authorization(req, res, next) {
    let id = req.params.id
    let option = {
        where: {id:id}
    }
    Card.findOne(option)
    .then(data => {
        if (data) {
            console.log(data)
            console.log(data.UserId)
            console.log(req.userData)
            console.log(req.userData.id)
            if (data.UserId === req.userData.id) {
                next()
            } else {
                next({
                    name: 'Not authorized'
                })
            }
        } else {
            next({
                name: 'Not authorized'
            })
        }
    })
    .catch()
}

module.exports = authorization