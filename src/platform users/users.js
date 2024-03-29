import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import profile_img from '../img/img-profile.png';
import './userstyle.css';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();
    
    const goToMenteeProfile = useCallback((menteeId) => {
        if (menteeId) {
            // Append the menteeId to the URL when navigating
            navigate(`/mentees/${menteeId}`);
        } else {
            console.error('Mentee ID is undefined');
        }
    }, [navigate]);
    

    const [mentees, setMentees] = useState([]);

    useEffect(() => {
        const fetchMentees = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/profiles');
                setMentees(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching mentees:', error);
            }
        };
        fetchMentees();
    }, []);
    console.log(mentees)

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
                   {mentees.map(mentee => (                   
                        <div className="users-cards" key={mentee._id} >
                        
                            <div className="main-info">
                                <div className="users-info">
                                    <div className="user-profile">
                                        <img src={profile_img} alt="" />
                                    </div>
                                    <div className="user-names">{mentee.name}</div>
                                    <div className="user-category">{mentee.role}</div>
                                </div>
                                <div className="users-connect">
                                    <button onClick={() => goToMenteeProfile(mentee._id)}>View Profile</button>
                                    
                                </div>
                            </div>
                            <div className="users-bio">
                                <span>{mentee.interests} </span>
                            </div>
                        </div>
                    ))}
                </div>            
            </div>
        </div>
    );
}
 
export default Users;
