import CommentShow from "./CommentShow";
import Comments from './Comments';
import Comment from './Comment';

const CommentList = ({ comments, commentId, serviceId, deleteComment, updateComment }) => {
    return (
        <>
            {
              comments.map( c => 
                <>
                    <CommentShow
                        {...c}
                        serviceId={serviceId}
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
