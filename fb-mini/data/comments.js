const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('comment', ({comment_userID, postID}) => ({
  id: casual.uuid,
  comment_userID: comment_userID,
  post_id: postID,
  post_content: casual.string,
  parent_id: null,
  created_at: casual.moment,
  edited_at: casual.moment,
  commentLikes: casual.integer(from = 0, to = 500)
}))


const commentData = []

for (let i = 0; i < 20; ++i) {
  const comment_userID = casual.random_element(userData).id;
  const postID = casual.random_element(postData).id;
  commentData.push(casual.comment({comment_userID, postID}))
}

module.exports = comment