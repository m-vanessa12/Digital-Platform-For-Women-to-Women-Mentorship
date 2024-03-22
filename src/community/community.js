import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './community.css';
import profile_img from '../img/img-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import AddComment from "./addComment";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Community = ({ currentUser }) => {
    const navigate = useNavigate(); // Use useNavigate hook
    const [openModal, setOpenModal] = useState(false);
    const [discussions, setDiscussions] = useState([]);
    const [userLikes, setUserLikes] = useState({});

    useEffect(() => {
        const fetchDiscussions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/forum');
                const discussionsWithLikes = response.data.discussions.map(discussion => ({
                    ...discussion,
                    likes: discussion.likesCount || 0,
                    name: `${discussion.createdBy.firstName || ''} ${discussion.createdBy.lastName || ''}`
                }));

                const userLikes = {};
                for (const discussion of discussionsWithLikes) {
                    const response = await axios.post('http://localhost:3000/api/likes', { discussionId: discussion._id });
                    userLikes[discussion._id] = response.data.liked;
                }

                setDiscussions(discussionsWithLikes);
                setUserLikes(userLikes);
            } catch (error) {
                console.error('Error fetching discussions:', error);
            }
        };
        fetchDiscussions();
    }, []);

    const handleCommentClick = (discussionId) => {
        console.log(discussionId)
        if (!currentUser || !currentUser.id) {
            console.error('User ID is not available');
           // return;
        }
        navigate(`/discussion-comments/${discussionId}`);
    };

    const handleLike = async (discussionId) => {
        try {
            const isLiked = userLikes[discussionId];
            const response = await axios.post('http://localhost:3000/api/likes', { discussionId });

            setUserLikes(prevUserLikes => ({
                ...prevUserLikes,
                [discussionId]: !isLiked
            }));

            setDiscussions(prevDiscussions => {
                return prevDiscussions.map(discussion => {
                    if (discussion._id === discussionId) {
                        return { ...discussion, likes: response.data.likes };
                    }
                    return discussion;
                });
            });
        } catch (error) {
            console.error(error);
        }
    };

    


    return ( 
        <div className="community">
            <Topbar />
            <Sidebar/>
            
            <div className="discution-forum">
                <div className="person-discusion"  >
                  {discussions.map(discussion => (
                    <div className="discusion-container" key={discussion._id}>
                    <div className="owner-information">
                        <div className="owner-profile-set">
                            <div className="discusion-owner">
                                <img src={profile_img} alt="" />
                            </div>
                            <div className="discusion-owner-details">
                                <div className="discusion-owner-names">{discussion.createdBy.name}</div>
                                <div className="discusion-status-time">
                                    <div className="discucion-status">{discussion.createdBy.role}</div>
                                    <div className="discucion-dot"></div>
                                    <div className="posted-time">
                                       {formatDistanceToNow(new Date(discussion.createdAt), { addSuffix: true })}
                                    </div>
                                </div>                          
                        </div>
                        </div>
                        <div className="discusion-access">
                        <FontAwesomeIcon icon={faEllipsisV} style={{ width: '18px', height: '22px', padding: '15px', marginLeft: '30px'}}  /> 
                        </div>
                    </div>

                    <div className="discusion-forum-content">
                        <div className="discusion-forum-title">{discussion.title}</div>
                        <div className="discusion-forum-contents">{discussion.content}</div>
                    </div>
                    <div className="discusion-replies">
                        <div className="discusion-likes" onClick={() => handleLike(discussion._id)}>
                        <FontAwesomeIcon 
                            icon={faThumbsUp} 
                            style={{ 
                                width: '22px', 
                                height: '25px', 
                                padding: '5px',
                                color: userLikes[discussion._id] ? '#007bff' : '#5e5d5d' // Change color based on userLikes state
                            }} 
                        />

                        <span>{discussion.likes}</span>
                        <span> likes</span>

                        </div>
                        <div className="discusion-comments">
                        <FontAwesomeIcon icon={faComment} style={{ width: '22px', height: '25px', padding: '5px', color:'#5e5d5d'}}  /> 
                        <span onClick={() => handleCommentClick(discussion._id)}> comments </span>
                        {openModal && <AddComment closeModel={setOpenModal} />}
                        {/* {openModal && clickedDiscussionId === discussion._id && <AddComment closeModel={setOpenModal} discussionId={clickedDiscussionId} userId={currentUser.id} />} */}
                        </div>
                    </div>
                    </div>

               ))}

                    </div>          
            
            </div>
        </div>
     );
}
 
export default Community;