import './profileform.css';
import Topbar from '../sidebar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import profile_img from '../img/img-profile.png';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const MenteeProfileCreate = () => {

    // integration space
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        photo: '',
        phoneNumber: '',
        country: '',
        city: '',
        universityName: '',
        degreeType: '',
        fieldOfStudy: '',
        skills: [],
        interests: [],
    });
    
    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'skills') {
            const selectedSkill = value;
            // Ensure selectedSkill is not already in the formData.skills array
            if (!formData.skills.includes(selectedSkill)) {
                // If it's not present, add it to the array
                setFormData(prevState => ({
                    ...prevState,
                    [name]: [...prevState.skills, selectedSkill]
                }));
            }
        } else if (name === 'interests') {
            const selectedInterest = value;
            // Ensure selectedInterest is not already in the formData.interests array
            if (!formData.interests.includes(selectedInterest)) {
                // If it's not present, add it to the array
                setFormData(prevState => ({
                    ...prevState,
                    [name]: [...prevState.interests, selectedInterest]
                }));
            }
        } else {
            // For other fields, update the form data normally
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    
    

    const signUpData = JSON.parse(localStorage.getItem('signUpData'));

    // Set default values for first name, last name, and email based on sign-up data
    useEffect(() => {
        if (signUpData) {
            setFormData(prevState => ({
                ...prevState,
                firstName: signUpData.firstName,
                lastName: signUpData.lastName,
                email: signUpData.email
            }));
        }
    }, [signUpData]);

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('token');
        const formDataToSend = new FormData();

        // Append each field to the formDataToSend object
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'photo') {
                // If it's a file, directly append it
                formDataToSend.append(key, value);
            } else if (Array.isArray(value)) {
                // If it's an array, append each item separately
                value.forEach((item, index) => {
                    formDataToSend.append(`${key}[${index}]`, item);
                });
            } else {
                // Otherwise, append as is
                formDataToSend.append(key, value);
            }
        });

        // Send formDataToSend to the backend
        await axios.post('http://localhost:3000/api/mentee', formDataToSend, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        // After successful submission, navigate to '/users'
        navigate('/users');
    } catch (error) {
        console.log(error);
    }
};

    
    // it ends here
    // const goToUsers = useCallback( () =>{
    //     navigate('/users')
    // }, [navigate]);
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

            <form className="create-profile" onSubmit={handleSubmit}>
                <div className="profiletitle">Create Your Profile</div>
                <div className="profile-picture">
                    <div className="pro-img" onClick={handleImageClick}>
                    {/* <img src={profile_img} alt="" /> */}
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="" />  
                    ) : (
                        <img src={profile_img} alt="" />  
                    )}

                    <input type="file" ref={inputRef} name="photo" onChange={handleImageChange}/>
                    </div>
                    <button>Upload Picture</button>
                </div>

                {/* Personal details */}
                <div className="personal-details">
                    <div className="details-title">1. Personal Details</div>
                    <div className="personal-info">
                    {/* <div className="first-name">
                        <span>First Name</span>
                        <input type="text" placeholder='e.g vanessa' name="firstName" value={formData.firstName} onChange={handleChange}/>
                    </div>
                    <div className="first-name">
                        <span>Last Name</span>
                        <input type="text" placeholder='e.g Mukamanzi' name="lastName" value={formData.lastName} onChange={handleChange}/>
                    </div>
                    <div className="first-name">
                        <span>Email</span>
                        <input type="email" placeholder='e.g vanessa@gmail.com' name="email" value={formData.email} onChange={handleChange}/>
                    </div> */}
                    <div className="first-name">
                        <span>Phone Number</span>
                        <input type="text" placeholder='e.g 078XX99XX1' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                    </div>
                    <div className="first-name">
                        <span>Country</span>
                        <input type="text" placeholder='e.g Rwanda' name="country" value={formData.country} onChange={handleChange}/>
                    </div>
                    <div className="first-name">
                        <span>City</span>
                        <input type="text" placeholder='e.g Kigali' name="city" value={formData.city} onChange={handleChange}/>
                    </div>
                    </div>
                </div>

                  {/* Background Education */}
             <div className="background-education">
                
                <div className="education-title">2. Background Education</div>
                
                <div className="education-details">

                     <div className="education-info">
                        <span>University Name</span>
                        <input type="text" placeholder='e.g African Leadership University' name="universityName" value={formData.universityName} onChange={handleChange}/>
                    </div>
                     <div className="education-info">
                        <span>Degree Type</span>
                        <input type="text" placeholder='e.g B.A' name="degreeType" value={formData.degreeType} onChange={handleChange}/>
                    </div>
                     <div className="education-info">
                        <span>Field of Study</span>
                        <input type="text" placeholder='e.g Computer Science' name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange}/>
                    </div>
              </div>
            </div>

        {/* ----------------- Skills and Expertise ----------------------*/}
             <div className="skills-expertise">

                <div className="skills-title">3. Skills and Expertise</div>
                <div className="skills-details">
                     <div className="skills-info">
                        <select id="" name="skills" value={formData.skills} onChange={handleChange}>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Financial Literac">Financial Literacy</option>
                        </select>
                    </div>
                     <div className="skills-info" >
                        <select name="skills" value={formData.skills} onChange={handleChange}id="">
                            <option value="Communication">Communication</option>
                            <option value="Problem-solving">Problem-solving</option>
                            <option value="Teamwork">Teamwork</option>
                            <option value="Leadership">Leadership</option>
                        </select>
                    </div>
                     <div className="skills-info">
                        <select name="skills" value={formData.skills} onChange={handleChange} id="">
                            <option value="Scientific Research Expertise">Scientific Research Expertise</option>
                            <option value="Educational Expertise">Educational Expertise</option>
                            <option value="Financial Expertise">Financial Expertise</option>
                            <option value="Art and Design Expertise">Art and Design Expertise</option>
                            <option value="Scientific Research Expertise">Scientific Research Expertise</option>
                        </select>
                    </div>
                </div>
            </div>
 {/*------------------------- INTEREST -------------------------------------*/}
             <div className="skills-expertise">

                <div className="skills-title">4. Interests</div>
                <div className="skills-details">
                     <div className="skills-info">
                        <select id="" name="interests" value={formData.interests} onChange={handleChange}>
                            <option value="Reading">Reading</option>
                            <option value="Learning Languages">Learning Languages</option>
                            <option value="History">History</option>
                            <option value="Chess">Chess</option>
                        </select>
                    </div>
                     <div className="skills-info" >
                        <select id="" name="interests" value={formData.interests} onChange={handleChange}>
                            <option value="Writing">Writing</option>
                            <option value="Photography">Photography</option>
                            <option value="Music">Music</option>
                            <option value="Drawing">Drawing</option>
                        </select>
                    </div>
                     <div className="skills-info">
                        <select id="" name="interests" value={formData.interests} onChange={handleChange}>
                            <option value="Volunteering">Volunteering</option>
                            <option value="Travelling">Travelling</option>
                            <option value="Cooking and Baking">Cooking and Baking</option>
                            <option value="Film and Theater">Film and Theater</option>
                        </select>
                    </div>
                </div>
            </div>

 {/*-------------------------- WPROFILE SHORT BIO SPACE ----------------------*/}

                <div className="short-bio">
                  <div className="message">5. Tell us about yourself(Optional)</div>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Tell Mentors about yourself'></textarea>              

                </div>

 {/* -----------------SUBMIITNG PROFILE INFO BUTTONS------------------------------ */}

            <div className="submit-profile">
                <div className="buttons-space">
                    <input type="submit" value={'SKIP'} className='skip' onClick={goToCommunity}/>
                    <input type="submit" value={'SAVE PROFILE'}/>
                </div>
            </div>

            </form>
        </div>
     );
}
 
export default MenteeProfileCreate;