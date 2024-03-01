import './profileform.css';
import Topbar from '../sidebar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import profile_img from '../img/profile.jpg';
import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const MenteeProfileCreate = () => {

    const navigate = useNavigate();
    const goToUsers = useCallback( () =>{
        navigate('/users')
    }, [navigate]);
    const navigates = useNavigate();
    const goToCommunity = useCallback( () =>{
        navigate('/community')
    }, [navigate]);

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () =>{
        inputRef.current.click();
    }
    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }

    return ( 
        <div className="profile-container">
            <Topbar />
            <Sidebar />

            <div className="create-profile">
                <div className="profiletitle">Create Your Profile</div>
                <div className="profile-picture">
                    <div className="pro-img" onClick={handleImageClick}>
                    {/* <img src={profile_img} alt="" /> */}
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="" />  
                    ) : (
                        <img src={profile_img} alt="" />  
                    )}

                    <input type="file" ref={inputRef} onChange={handleImageChange}/>
                    </div>
                    <button>Upload Picture</button>
                </div>

                {/* Personal details */}
                <div className="personal-details">
                    <div className="details-title">1. Personal Details</div>
                    <div className="personal-info">
                    <div className="first-name">
                        <span>First Name</span>
                        <input type="text" placeholder='e.g vanessa' />
                    </div>
                    <div className="first-name">
                        <span>Last Name</span>
                        <input type="text" placeholder='e.g Mukamanzi' />
                    </div>
                    <div className="first-name">
                        <span>Email</span>
                        <input type="Email" placeholder='e.g vanessa@gmail.com' />
                    </div>
                    <div className="first-name">
                        <span>Phone Number</span>
                        <input type="text" placeholder='e.g 078XX99XX1' />
                    </div>
                    <div className="first-name">
                        <span>Country</span>
                        <input type="text" placeholder='e.g Rwanda' />
                    </div>
                    <div className="first-name">
                        <span>City</span>
                        <input type="text" placeholder='e.g Kigali' />
                    </div>
                    </div>
                </div>

                  {/* Background Education */}
             <div className="background-education">
                
                <div className="education-title">2. Background Education</div>
                
                <div className="education-details">

                     <div className="education-info">
                        <span>University Name</span>
                        <input type="text" placeholder='e.g African Leadership University' />
                    </div>
                     <div className="education-info">
                        <span>Degree Type</span>
                        <input type="text" placeholder='e.g B.A' />
                    </div>
                     <div className="education-info">
                        <span>Field of Study</span>
                        <input type="text" placeholder='e.g Computer Science' />
                    </div>
              </div>
            </div>

        {/* ----------------- Skills and Expertise ----------------------*/}
             <div className="skills-expertise">

                <div className="skills-title">3. Skills and Expertise</div>
                <div className="skills-details">
                     <div className="skills-info">
                        <select name="" id="">
                            <option value="">Graphic Design</option>
                            <option value="">Digtal Marketing</option>
                            <option value="">Project Management</option>
                            <option value="">Financial Literacy</option>
                        </select>
                    </div>
                     <div className="skills-info">
                        <select name="" id="">
                            <option value="">Communication</option>
                            <option value="">Problem-solving</option>
                            <option value="">Teamwork</option>
                            <option value="">Leadership</option>
                        </select>
                    </div>
                     <div className="skills-info">
                        <select name="" id="">
                            <option value="">Scientific Research Expertise</option>
                            <option value="">Educational Expertise</option>
                            <option value="">Financial Expertise</option>
                            <option value="">Art and Design Expertise</option>
                            <option value="">Scientific Research Expertise</option>
                        </select>
                    </div>
                </div>
            </div>
 {/*------------------------- INTEREST -------------------------------------*/}
             <div className="skills-expertise">

                <div className="skills-title">4. Interests</div>
                <div className="skills-details">
                     <div className="skills-info">
                        <select name="" id="">
                            <option value="">Reading</option>
                            <option value="">Learning Languages</option>
                            <option value="">History</option>
                            <option value="">Chess</option>
                        </select>
                    </div>
                     <div className="skills-info">
                        <select name="" id="">
                            <option value="">Writing</option>
                            <option value="">Photography</option>
                            <option value="">Music</option>
                            <option value="">Drawing</option>
                        </select>
                    </div>
                     <div className="skills-info">
                        <select name="" id="">
                            <option value="">Volunteering</option>
                            <option value="">Travelling</option>
                            <option value="">Cooking and Baking</option>
                            <option value="">Film and Theater </option>
                        </select>
                    </div>
                </div>
            </div>

 {/*-------------------------- WPROFILE SHORT BIO SPACE ----------------------*/}

                <div className="short-bio">
                  <div className="message">5. Tell us about yourself</div>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Tell Mentors about yourself'>t</textarea>              

                </div>

 {/* -----------------SUBMIITNG PROFILE INFO BUTTONS------------------------------ */}

            <div className="submit-profile">
                <div className="buttons-space">
                    <input type="submit" value={'SKIP'} className='skip' onClick={goToCommunity}/>
                    <input type="submit" value={'SAVE PROFILE'} onClick={goToUsers}/>
                </div>
            </div>

            </div>
        </div>
     );
}
 
export default MenteeProfileCreate;