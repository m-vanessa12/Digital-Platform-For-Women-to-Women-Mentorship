import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import profile_img from '../img/img-profile.png';
import './userstyle.css';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, } from 'react-router-dom';

const MentorUsers = () => {
    const navigate = useNavigate();
    
    const goToMentorProfile = useCallback((mentorId) => {
        if (mentorId) {
            // Append the mentorId to the URL when navigating
            navigate(`/mentors/${mentorId}`);
        } else {
            console.error('Mentor ID is undefined');
        }
    }, [navigate]);
    

    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/all-mentors');
                setMentors(response.data);
            } catch (error) {
                console.error('Error fetching mentors:', error);
            }
        };
        fetchMentors();
    }, []);


    return ( 
        <div className="platform-users">
            <Topbar />
            <Sidebar />
            <div className="users-container">
                <div className="users-sorting">
                    <div className="sort-resources">
                        <span>Filter by Category</span>
                        <select name="" id="">
                            <option value="">Filter by Category</option>
                            <option value="">Mentors</option>
                            <option value="">Mentees</option>
                            <option value="">Recent Joined</option>
                        </select>
                    </div>
                </div>

                <div className="users-display">
                    {mentors.map(mentor => (                   
                        <div className="users-cards" key={mentor._id} >
                        
                            <div className="main-info">
                                <div className="users-info">
                                    <div className="user-profile">
                                        <img src={profile_img} alt="" />
                                    </div>
                                    <div className="user-names">{mentor.name}</div>
                                    <div className="user-category">{mentor.role}</div>
                                </div>
                                <div className="users-connect">
                                    <button onClick={() => goToMentorProfile(mentor._id)}>View Profile</button>
                                    
                                </div>
                            </div>
                            <div className="users-bio">
                                <span>{mentor.qualifications} </span>
                            </div>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    );
}
 
export default MentorUsers;
