import React from 'react'
import '../CSS/Forum_List.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import ForumItem from './Forum_Item';

const Forum_List = () => {
    const url = 'http://127.0.0.1:8000/api/forums/'
    const [forums, setForums] = useState([])


    useEffect(() => {
        const get_forums = () => {
            axios.get(url).then((response) => {
                setForums(response.data)
            })
            .catch(e => console.log(`Error: ${e}`));
        }
        
        get_forums();
    }, [])

    return (
        <div className = "forum_list">
            <div className =  "forum_list_container">
                <div className = "forum_list_pages">

                </div>
                <div className = "forum_list_title">
                    <p>General Threads</p>
                </div>
            </div>
            <div>
                {forums.map((forum) => {
                    return <ForumItem forum_info={forum} key = {forum.forum_id}/>
                })}
            </div>
        </div>

    )
}

export default Forum_List
