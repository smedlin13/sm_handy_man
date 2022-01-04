import CommentShow from "./CommentShow";
import Comments from './Comments';
import Comment from './Comment';

const CommentList = ({ comments, serviceId, deleteComment, updateComment }) => {
    return (
        <>
            {
              comments.map( c => 
                <>
                    <CommentShow
                        {...c}
                        
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        />
                </>
              )  
            }

        </>

    )

}

export default CommentList; 