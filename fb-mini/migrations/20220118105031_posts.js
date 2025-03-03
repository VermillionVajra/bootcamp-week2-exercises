exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('postid')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))

    table
      .uuid('ownerid').references('users.id')
      .notNullable()

    table
      .string('post')
      .notNullable()

    table
      .string('date')
      .notNullable()

    table
      .integer('numLikes')
      .notNullable()

    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')
  