exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table 
    .string('name')
    .notNullable()

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('username')
    .unique()
    .notNullable()
  
  table
    .string('password')
    .notNullable()

  table 
    .string('bio')

  table
    .integer('numFollowers')
    .notNullable()

  table
    .string('age')
  
  table 
    .string('pronouns')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
