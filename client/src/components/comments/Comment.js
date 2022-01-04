import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({id, updateComment, deleteComment, author, body }) => {
  const [editing, setEdit] = useState(false)
  return (
    <>
      <h2>{author}</h2>
      <h3>Comment: {body}</h3>
      {
        editing ? 
        <>
        <CommentForm
        id={id}
        author={author}
        body={body}
        updateComment={updateComment}
        setEdit={setEdit}
        />
        <button onClick={ () => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={ () => setEdit(true) }>Edit</button>
      }
      <button onClick={ () => deleteComment(id) }>Delete</button>
    </>
  )
}

export default Comment;