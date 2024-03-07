import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './mentor.css';
import mentor_img from '../img/mentor-profile.jpg'

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const MentorProfile = () => {

const navigate = useNavigate();
const goToBookShedule = useCallback( () =>{
    navigate('/booksession')
}, [navigate]);

    return ( 
        <div className="mentor-profile">
            < Topbar />
            < Sidebar />
            <div className="mentor-profile-container">
              <div className="profile-title">Profile</div>
              <div className="mentor-information">
                    <div className="mentor-profile-picture">
                        <img src={mentor_img }alt="" />
                    </div>

                    <div className="mentor-details">
                        <div className="mentor-info">
                            <div className="mentor-name">Anne-J</div>
                            <div className="mentor-status">Mentor</div>
                            <div className="mentor-category">Government</div>
                        </div>
                        <div className="book-session" onClick={goToBookShedule}>
                            <input type="button" value={'Book Session'} />
                        </div>
                    </div>
                </div>

                <div className="mentor-personal-details">
                    <div className="title">Personal Information</div>
                     <div className="mentor-personal-names">
                        
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> First Name</div>
                            <div className="mentor-firstname-name"> Jasmine</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Last Name</div>
                            <div className="mentor-firstname-name"> Anne</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Nationality</div>
                            <div className="mentor-firstname-name"> Rwanda</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> City</div>
                            <div className="mentor-firstname-name"> Kigali</div>
                        </div>
                    </div>
                </div>


                <div className="mentor-personal-details">
                    <div className="title">Career Profile</div>
                    <div className="mentor-personal-names">
                        
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Position Held</div>
                            <div className="mentor-firstname-name"> Project Managing Director</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Company Name</div>
                            <div className="mentor-firstname-name"> Decarbonify Ltd</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Field of Study </div>
                            <div className="mentor-firstname-name"> Software Engeneering</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Indunstry</div>
                            <div className="mentor-firstname-name"> Business & Entrepreneurship</div>
                        </div>
                        <div className="mentor-names-details">
                            <div className="mentor-firstname-heading"> Years of Experience</div>
                            <div className="mentor-firstname-name"> 5</div>
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

            </div>
        </div>
     );
}
 
export default MentorProfile;