import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './mentee.css';
import profile_img from '../img/profile.jpg'

const Mentee = () => {
    return ( 
        <div className="mentee-profiles">
            <Topbar />
            <Sidebar />
            <div className="mentee-personal-profile">
                <div className="profile-title">Profile</div>
                <div className="personal-information">
                    <div className="mentee-profile-picture">
                        <img src={profile_img }alt="" />
                    </div>

                    <div className="mentee-details">
                        <div className="mentee-info">
                            <div className="mentee-name">Vanessa-M</div>
                            <div className="mentee-status">Mentee</div>
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
                            <div className="firstname-name"> Vanessa</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Last Name</div>
                            <div className="firstname-name"> Mukamanzi</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Current Status</div>
                            <div className="firstname-name"> Student</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> Nationality</div>
                            <div className="firstname-name"> Rwanda</div>
                        </div>
                        <div className="names-details">
                            <div className="firstname-heading"> City</div>
                            <div className="firstname-name"> Kigali</div>
                        </div>
                    </div>
                </div>
                <div className="mentee-personal-details">
                    <div className="title">Education</div>
                    <div className="personal-names">
                        
                        <div className="names-details">
                            <div className="firstname-heading"> University</div>
                            <div className="firstname-name"> African Leadership</div>
                        </div>
                        {/* <div className="names-details">
                            <div className="firstname-heading"> Degree Type</div>
                            <div className="firstname-name"> B.A of Art</div>
                        </div> */}
                        <div className="names-details">
                            <div className="firstname-heading"> Field</div>
                            <div className="firstname-name"> Computer Sience</div>
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

                
            </div>

        </div>
     );
}
 
export default Mentee;