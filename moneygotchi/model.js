const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../user/model')

const MoneyGotchi = db.define('moneygotchi', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  love: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  water: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dollars: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
  {
    timestamps: false
  }
)

MoneyGotchi.belongsTo(User)
User.hasOne(MoneyGotchi)

module.exports = MoneyGotchi