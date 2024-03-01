import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './userstyle.css';
import mentee_profile from '../img/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


const MenteeProfile = () => {

    return ( 
        <div className="profile-information">
            <Topbar />
            <Sidebar />

            <div className="personal-profile">

                <div className="personal-profile-part1">

                    <div className="personal-info">
                        <div className="mentee-personal-info">
                            
                            <div className="mentee-profile-card">
                                <div className="mentee-profile">
                                    <div className="mentee-profilepic">
                                        <img src={mentee_profile} alt="" />
                                    </div>
                                    <div className="mentee-name">Vanessa Mukamanzi</div>
                                    <div className="mentee-status">Mentee</div>                               
                                </div>

                                <div className="interets-notify">
                                    <input type="button" value={'Notify Interest'}/>

                                </div>
                            </div>
                            <div className="mentee-profile-card">
                                    <div className="mentee-personal-details">
                                        <span>Nationality</span>
                                        <h2>Rwanda</h2>
                                    </div>
                                    <div className="mentee-personal-details">
                                        <span>City</span>
                                        <h2>Kigali</h2>
                                    </div>
                                    <div className="mentee-personal-details">
                                        <span>Spoken Language</span>
                                        <h2>Kinyarwanda, English</h2>
                                    </div>
                                    <div className="mentee-personal-details">
                                        <span>Current Status</span>
                                        <h2>Student, Employed</h2>
                                    </div>                               
                                    <div className="mentee-personal-details">
                                        <span>Hobbies</span>
                                        <h2>Drawing, Dancing</h2>
                                    </div>                               
                            </div>      
                        </div>
                        <div className="mentee-education">

                            <div className="background-education">
                                <div className="school-title">Background education</div>
                                                                
                                <div className="school-names">
                                    <FontAwesomeIcon icon={faSchool} style={{ width: '18px', height: '22px', padding: '5px'}}  />
                                    <span>African Leadership University</span>
                                 </div>                               
                            </div>

                            <div className="Mentee-skills">
                                <div className="school-title">Skills and Expertise</div>
                                                                
                                <div className="school-names">
                                    <FontAwesomeIcon icon={faCogs} style={{ width: '18px', height: '22px', padding: '5px'}}  />
                                    <span>African Leadership University</span>
                                 </div>                               
                                <div className="school-names">
                                    <FontAwesomeIcon icon={faCogs} style={{ width: '18px', height: '22px', padding: '5px'}}  />
                                    <span>African Leadership University</span>
                                 </div>                               
                                <div className="school-names">
                                    <FontAwesomeIcon icon={faCogs} style={{ width: '18px', height: '22px', padding: '5px'}}  />
                                    <span>African Leadership University</span>
                                </div>                                                              
                                <div className="school-names">
                                    <FontAwesomeIcon icon={faCogs} style={{ width: '18px', height: '22px', padding: '5px'}}  />
                                    <span>African Leadership University</span>
                                </div>                                                              
                            </div>


                        </div>
                    </div>

                </div>

                <div className="bio-interets">

                    
                </div>

                
            </div>


        </div>
     );
}
 
export default MenteeProfile;