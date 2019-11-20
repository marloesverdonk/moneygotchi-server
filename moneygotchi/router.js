const { Router } = require('express')
const MoneyGotchi = require('./model')
const router = new Router()

router.post('/', (req, res, next) => {

  MoneyGotchi.create({
    name: req.body.name
  })
  .then(gotchi => {
    res.send(`Gotchi ${gotchi.name} created successfully` )
  })
  .catch(next)
})

router.get('/', (req, res, next) => {
  MoneyGotchi.findAll()
  .then(gotchis => {
    res.send(JSON.stringify(gotchis))
  })
  .catch(next)
})
module.exports = router