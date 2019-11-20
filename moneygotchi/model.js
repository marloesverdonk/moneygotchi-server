const Sequelize = require('sequelize')
const db = require('../db')

const MoneyGotchi = db.define(
  'moneygotchi',
  {
    name: Sequelize.STRING,
  },
  {
    timestamps: false
  }
)

module.exports = MoneyGotchi