import './commentstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 

const AddCommentComponent = ({ closeModel }) => {
    const [commentContent, setCommentContent] = useState('');
    const location = useLocation();
    const discussionId = location.pathname.split('/').pop();
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/api/comments', {
                discussion: discussionId,
                content: commentContent
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Comment added successfully:', response.data);
            setComments(prevComments => [...prevComments, response.data]);
            // Close the modal or perform any other action after adding the comment
            closeModel(false);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/discussion-comments/${discussionId}`);
                console.log('Response:', response);
                setComments(response.data.comments);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [discussionId]);

    console.log('Comments:', comments);

    return (
        <div className="comments-space">
            <div className="comments">
                <button onClick={() => closeModel(false)}>
                    <FontAwesomeIcon icon={faClose} style={{ width: '20px', height: '20px', color: '#fff' }} />
                </button>
                <div className="comments-items">
                    <div className="comment-title">Discussion Replies</div>
                    <div className="comment-subtitle">This is where I will fetch the posted discussion</div>
                    <div className="add-comment">
                        <textarea
                            name="content"
                            cols="30"
                            rows="10"
                            placeholder='Add your comment here'
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="send-comment">
                        <input type="submit" value={'Add Comment'} onClick={handleCommentSubmit} />
                    </div>
                    <div className="replied-comment">
                        {comments.map(comment => (
                            <div className="comment-info" key={comment.commentId}>
                                <div className="comment-comment">{comment.content}</div>
                                <div className="comment-time">{comment.createdAt}</div>
                                <div className="comment-ower">{comment.creator}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCommentComponent;
