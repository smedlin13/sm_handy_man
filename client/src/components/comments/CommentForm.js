import {useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, author, body, title, updateComment, setEdit }) => {
    const [comment, setComment] = useState({ author: '', body: '', title: ''})
    
    useEffect ( () => {
        if (id) {
            setComment({ author, body, title})
        }
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateComment(id, comment)
            setEdit(false)
        } else {
            addComment(comment)
        }
        setComment({author: '',  body: '', title: '' })
    }

    
    return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Author:</label>
            <input
                name='author'
                value={comment.author}
                onChange={(e) => setComment({ ...comment, author: e.target.value })}
                required
            />
            <label>Title:</label>
            <input
                name='title'
                value={comment.title}
                onChange={(e) => setComment({ ...comment, title: e.target.value })}
                required
            />
            <label>Body:</label>
            <textarea
            name='body'
            value={comment.body}
            onChange={(e) => setComment({ ...comment, body: e.target.value })}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default CommentForm;