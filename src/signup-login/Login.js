import './signup-login.css';
import email_icon from '../icons/mail.png';
import google_icon from '../icons/google.png';
import profile_icon from '../icons/profile.png';
import password_icon from '../icons/password.png';

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
//import mentorship_img from '../img/mentorship.avif'

const Login = () => {
    const navigate = useNavigate();
    const goToProfile = useCallback( () =>{
        navigate('/profile-create')
    }, [navigate]);

    const navigates = useNavigate();
    const goToSignUp = useCallback( () =>{
        navigate('/signup')
    }, [navigates]);



    return ( 
        <div className="container" id='radius'>
            <div className="content"> 
            <div className="background-overlay">
            <h1>Welcome to WomenT</h1>
                <p>Women-to-Women Mentorship platform. This a place to get empowered and mentored </p>
                {/* <a href="#">Read More</a> */}
                <button>Read More</button>
            </div>
            </div>  

            <div className="form">
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
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="inputfield">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                <div className="submit-container">
                    <input type="submit" value='Login' onClick={goToProfile}/>
                    {/* <div className="submit">Sign Up</div> */}
                    <div className="account">Don't have an account? <span onClick={goToSignUp}>Sign-Up</span></div>
                </div>
            </div>

        </div>

     );
} 
export default Login;

