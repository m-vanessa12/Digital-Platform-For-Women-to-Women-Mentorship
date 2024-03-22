import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './mentee.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile_img from '../img/profile.jpg'
import { useParams } from 'react-router-dom';
    
const Mentee = ({ goToMenteeProfile }) => { 
    const { menteeId } = useParams();
    // console.log('Mentee ID in Mentee component:', menteeId);
    const [menteeInfo, setMenteeInfo] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (menteeId) {
            axios.get(`http://localhost:3000/api/mentees/${menteeId}`)
            .then(response => {
                // console.log('Response from backend:', response); // Log the response data
                setMenteeInfo(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching mentee information:', error); // Log the error
                setIsLoading(false);
            });
        } else {
            console.warn('Mentee ID is undefined');
            setIsLoading(false);
        }
    }, [menteeInfo]);
    



    return ( 
        <div className="mentee-profiles">
            <Topbar />
            <Sidebar />
            <div className="mentee-personal-profile">

            {menteeInfo && (
                    <>


                <div className="profile-title">Profile</div>
                <div className="personal-information">
                    <div className="mentee-profile-picture">
                        <img src={menteeInfo.photo} alt="" />
                    </div>

                    <div className="mentee-details">
                        <div className="mentee-info">
                            <div className="mentee-name">{menteeInfo.name}</div>
                            <div className="mentee-status">{menteeInfo.role}</div>

                        </div>
                        <div className="notify-interest">
                            <input type="button" value={'Notify Interests'} />
                        </div>

                    </div>
                </div>
              
                <div className="mentee-personal-details">
                    <div className="title">Personal Information</div>
                    <div className="personal-names">
                        
                        <div className="names-details">
                            <div className="firstname-heading"> First Name</div>
                            <div className="firstname-name"> {menteeInfo.firstName}</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Last Name</div>
                            <div className="firstname-name"> {menteeInfo.lastName}</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Current Status</div>
                            <div className="firstname-name"> Student</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Nationality</div>
                            <div className="firstname-name"> {menteeInfo.country}</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> City</div>
                            <div className="firstname-name"> {menteeInfo.city}</div>
                        </div>
                    </div>
                </div>
                <div className="mentee-personal-details">
                    <div className="title">Education</div>
                    <div className="personal-names">
                        
                        <div className="names-details">
                            <div className="firstname-heading"> University</div>
                            <div className="firstname-name"> {menteeInfo.universityName}</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Degree Type</div>
                            <div className="firstname-name">{menteeInfo.degreeType}</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Field</div>
                            <div className="firstname-name">{menteeInfo.fieldOfStudy}</div>
                        </div>
                    </div>
                </div>

                <div className="skills-expertise">
                    <div className="title">Skills & Expertise</div>
                    <div className="skills-expertise-details">
                    <div className="mentee-skills">
                        <div className="skill-list"></div>
                        <div className="acquired-skill">UI/UX Design</div>
                    </div>
                    <div className="mentee-skills">
                        <div className="skill-list"></div>
                        <div className="acquired-skill">Graphic Design</div>
                    </div>
                    <div className="mentee-skills">
                        <div className="skill-list"></div>
                        <div className="acquired-skill">Problem Solving</div>
                    </div>
                    <div className="mentee-skills">
                        <div className="skill-list"></div>
                        <div className="acquired-skill">Scientific Reasearch</div>
                    </div>

                    </div>
                </div>


                <div className="personal-interest">
                    <div className="title">Personal Interests</div>
                    <div className="interests-details">
                    <div className="mentee-interests">
                        <div className="interests-list"></div>
                        <div className="interested-field">Reading</div>
                    </div>
                    <div className="mentee-interests">
                        <div className="interests-list"></div>
                        <div className="interested-field">Writing</div>
                    </div>
                    <div className="mentee-interests">
                        <div className="interests-list"></div>
                        <div className="interested-field">Volunteering</div>
                    </div>

                    </div>
                </div>

                </>

                )}
               
            </div>

        </div>
     );
}
 
export default Mentee;