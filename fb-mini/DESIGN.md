user{
    id: #
    name: string
    password: string
    username: string
    bio: string
    age: date
    email: string
    followers: int
    prof_pic: ?
    <!-- vip_status: bool -->
    pronouns: string
}
posts{
    post_id: #
    user_id: #
    likes: int
    reactions: ?
    <!-- location: string
    shares: int -->
}
friends{
    requester: id
    requestee: id
    status: string (accepted, requested, declined)
    reqDate: date

    -- friend mentions --> shortcut --
}
comments{
    post_id: #
    parent_id: #
    commenter_id: #
    comment_id: #
    post_cont: string
    <!-- commentNum: int -->
    likeNum: int
    create: date
    edited: date
}
<!-- saved{
    post_id: #
    user_id: #
    dateSaved: date
} -->

