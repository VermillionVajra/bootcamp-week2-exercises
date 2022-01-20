const friend = require('../data/friends')

exports.seed = knex => knex('friends').del()
  .then(() => knex('friends').insert(friend))