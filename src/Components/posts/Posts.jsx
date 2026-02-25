import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posts() {

    let [postList, setPost] = useState([])

    function getAllPosts() {
        axios.get('https://route-posts.routemisr.com/posts', {

            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            console.log('res', response.data)
            setPost(response.data.Posts)
        }).catch((err) => {
            console.log('err', err.response)
        })

    }
    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <>
            {postList.map((post) => {

                return <p>
                    {post.user.name}
                </p>
            })}
        </>

    )
}