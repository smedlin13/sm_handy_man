import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList'; 

const Comments = ({ serviceId }) => {
    const [comments, setComments] = useState([])

    useEffect( () => {
        axios.get(`/api/services/${serviceId}/comments`)
        .then ( res => setComments(res.data) )
        .catch ( err => console.log(err) )
    }, [])

    const addComment = (comment) => {
        axios.post(`/api/services/${serviceId}/comments`, { comment })
        .then ( res => 
          setComments([...comments, res.data]))
        .catch ( err => console.log(err) )
    }


    const deleteComment = (id) => {
        axios.delete(`/api/services/${serviceId}/comments/${id}`)
        .then( res => setComments( comments.filter( c => c.id !== id)))
        .catch ( err => console.log(err) )
    }

    const updateComment = (id, comment) => {
        axios.put(`/api/services/${serviceId}/comments/${id}`, { comment })
        .then( res => {
            const newUpdatedComments = comments.map( c => {
                if( c.id === id) {
                    return res.data
                }
                return c
            })
            setComments(newUpdatedComments)
        })
        .catch ( err => console.log(err) )
    }

    return (
        <>
        <h3>Comments:</h3>
        <CommentForm addComment={addComment} />
        <CommentList
             comments={comments}
             serviceId={serviceId}
             deleteComment={deleteComment}
             updateComment={updateComment}
             />
        </>
    )
}

export default Comments;