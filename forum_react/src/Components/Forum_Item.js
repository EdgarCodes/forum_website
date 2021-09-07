import React from 'react'
import {Container} from 'react-bootstrap'
import '../CSS/Forum_List.css';

const Forum_Item = (props) => {
    const thread = props.forum_info
    return (
        <Container className = "forum_item">
            <div className = "forum_item_title">
                <h1>{thread.post_title}</h1>
                <p>By {thread.user_id}, {thread.posted_at} </p>
            </div>
            <div className = "forum_item_info">
                <div className = "forum_item_update">
                    <p>Replies: 153</p>
                    <p>Views: 293</p>
                </div>
                <div className = "temp_block"/>
                <div className = "forum_item_reply">
                    <h1>Midnightsmints</h1>
                    <p>Today at 8:00pm</p>
                </div>
            </div>
        </Container>
    )
}

export default Forum_Item
