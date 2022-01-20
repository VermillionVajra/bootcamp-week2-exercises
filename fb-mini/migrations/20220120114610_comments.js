exports.up = async knex => knex.schema.createTable('comments', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('comment_userID')
      .notNullable()
      .references('users.id')
    
    table
      .uuid('post_id')
      .notNullable()
      .references('posts.id')
    
    table
      .string('post_content')
    
    table 
      .uuid('parent_id')
      // .references('comments.id')
      .defaultTo(null)
    
    table
      .integer('commentLikes')
      .notNullable

    
    table.timestamps(true)
  
  }); 
  
  exports.down = async knex => knex.schema.dropTableIfExists('comments');
