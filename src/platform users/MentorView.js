import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './mentor.css';
import mentor_img from '../img/img-profile.png'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Mentor = ( {goToMentorProfile} ) => {
    const  {mentorId} = useParams();
    const [mentorData, setMentorData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (mentorId){
            axios.get(`http://localhost:3000/api/mentors/${mentorId}`)
            .then(response => {
                setMentorData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching mentor information:', error); // Log the error
                setIsLoading(false);
            });
        } else {
            console.warn('Mentor ID is undefined');
            setIsLoading(false);
        }
    }, [mentorData]);

    return ( 
        <div className="mentor-profile">
            < Topbar />
            < Sidebar />
            <div className="mentor-profile-container">

            {mentorData && (
                    <>
              <div className="profile-title">Profile</div>
              <div className="mentor-information">
                    <div className="mentor-profile-picture">
                        <img src={mentor_img }alt="" />
                    </div>

                    <div className="mentor-details">
                        <div className="mentor-info">
                            <div className="mentor-name">{mentorData.name}</div>
                            <div className="mentor-status">{mentorData.role}</div>
                            <div className="mentor-category">Category: {mentorData.industry}</div>
                        </div>
                        <div className="book-session">
                            <input type="button" value={'Book Session'} />
                        </div>
                    </div>
                </div>

                <div className="mentor-personal-details">
                    <div className="title">Personal Information</div>
                     <div className="mentor-personal-names">
                        
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> First Name</div>
                            <div className="mentor-firstname-name"> {mentorData.firstName}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Last Name</div>
                            <div className="mentor-firstname-name"> {mentorData.lastName}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Nationality</div>
                            <div className="mentor-firstname-name"> {mentorData.country}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> City</div>
                            <div className="mentor-firstname-name">{mentorData.city}</div>
                        </div>
                    </div>
                </div>


                <div className="mentor-personal-details">
                    <div className="title">Career Profile</div>
                    <div className="mentor-personal-names">
                        
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Position Held</div>
                            <div className="mentor-firstname-name">{mentorData.position}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Company Name</div>
                            <div className="mentor-firstname-name">{mentorData.company}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Field of Study </div>
                            <div className="mentor-firstname-name"> {mentorData.fieldOfStudy}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Indunstry</div>
                            <div className="mentor-firstname-name">{mentorData.industry}</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Years of Experience</div>
                            <div className="mentor-firstname-name"> {mentorData.yearsExperience}</div>
                        </div>
                    </div>

                </div>

                <div className="qualifications-expertise">
                    <div className="title">Qualification, Expertise & Other</div>
                    <div className="qualifications-expertise-details">
                    <div className="mentor-qualifications">
                        <div className="qualification-list"></div>
                        <div className="qualification">UI/UX Design</div>
                    </div>
                    <div className="mentee-skills">
                        <div className="qualification-list"></div>
                        <div className="qualification">Graphic Design</div>
                    </div>
                    <div className="mentor-qualifications">
                        <div className="qualification-list"></div>
                        <div className="qualification">Problem Solving</div>
                    </div>
                    <div className="mentor-qualifications">
                        <div className="qualification-list"></div>
                        <div className="qualification">Scientific Reasearch</div>
                    </div>

                    </div>
                </div>

                <div className="mentor-personal-details">
                    <div className="title">Biography</div>
                    <div className="mentor-personal-names">
                        
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-name">{mentorData.bio}</div>
                        </div>
                    </div>

                </div>



                </>

)}

            </div>
        </div>
     );
}

export default Mentor;
