import './signup-login.css';
import email_icon from '../icons/mail.png';
import google_icon from '../icons/google.png';
import profile_icon from '../icons/profile.png';
import password_icon from '../icons/password.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', formData);
            const { message, token } = response.data;
            if (message === 'Login Successful') {
                localStorage.setItem('token', token); // Store token in local storage
                navigate('/profile-create'); // Redirect to profile page or any other page
            } else {
                // If the message indicates an error, show a toast notification and do not navigate
                toast.error(message); // Show the message received from the backend
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Show a toast notification when login fails
            toast.error('An error occurred during login.');
        }
    };

    // const goToProfile = () => {
    //     navigate('/profile-create');
    // };

    const goToSignUp = () => {
        navigate('/signup');
    };

    return ( 
        <div className="container" id='radius'>
             <ToastContainer />
             
            <div className="content"> 
                <div className="background-overlay">
                    <h1>Welcome to WomenT</h1>
                    <p>Women-to-Women Mentorship platform. This a place to get empowered and mentored </p>
                    <button>Read More</button>
                </div>
            </div>  

            <form className="form" onSubmit={handleSubmit}>
                <div className="texts">
                    <h1>Login</h1>
                    <div className="subtitle">Let's get you connected & mentored</div>
            
                    <div className="google">
                        <img src={google_icon} alt="" />
                        <input type="button" value="Sign in with Google" />
                    </div>  
                    <div className="underline">
                        <div className="line"></div> 
                        <div className="or">Or</div> 
                        <div className="line"></div>        
                    </div>       
                </div>
                <div className="inputs">
                    <div className="inputfield">
                        <img src={email_icon} alt="" />
                        <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="inputfield">
                        <img src={password_icon} alt="" />
                        <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
                    </div>
                </div>
                <div className="submit-container">
                    <input type="submit" value='Login'/>
                    <div className="account">Don't have an account? <span onClick={goToSignUp}>Sign-Up</span></div>
                </div>
            </form>
        </div>
    );
};

export default Login;
