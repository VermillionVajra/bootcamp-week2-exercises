const post = require('../data/posts')

console.log(postData)

exports.seed = knex => knex('posts').del()
  .then(() => knex('posts').insert(post))