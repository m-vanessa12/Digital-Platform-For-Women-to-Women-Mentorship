
import './landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';
import registermockup_img from '../img/register-mockup.png'
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const goTologin = useCallback( () => {
        navigate('/login')
    }, [navigate]);
    const navigates = useNavigate();
    const goToSignUp = useCallback( () => {
        navigate('/signup')
    }, [navigate]);

    return ( 
        <div className="homepage">
            <div className="heading">
                <div className="logo">WomenT</div>
                <div className="links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="about-part">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="" onClick={goTologin}><button>Login</button></a></li>
                    </ul>
                </div>
            </div>

            <div className="hero-section">
                <div className="hero-content">
                    <div className="welcome-part">HerMentorship,</div>
                    <div className="platform-name">A Women-to-Women Mentorship Platform</div>
                    <div className="hero-message">Begin your journey with us and discover a world where women uplift each other. 
                    Whether you're a professional eager to share your expertise or a newcomer carving out your path — you belong here. 
                    Together, let's create a legacy of mentorship and breakthroughs.</div>
                    <div className="get-started" onClick={goToSignUp}>
                        <span>Get Started</span>
                        <FontAwesomeIcon icon={faArrowRight} style={{ width: '28px', height: '26px', color: '#fff'}} /> 
                     </div>
                </div>
                <div className="hero-mockup">
                    <img src={registermockup_img } alt="" />
                </div>
            </div>

            <div className="about-part" id='About'>
                <div className="about-heading">
                    <div className='about-title'>Why Our Platform ?</div>
                    <div className='about-inquiries'>Our mission is to create a community where every woman has access to the mentorship she needs to succeed. 
                        Whether it's breaking into a new industry, climbing the corporate ladder, or launching a business, 
                        we're here to provide the support and resources necessary to turn aspirations into achievements.</div>
                </div>

                <div className="impact-section">

                    <div className="our-impact">
                        <div className="impact-icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '30px', color: '#111F4D'}} /> 
                        </div>
                        <div className="impact-title">Personalized Mentorship</div>
                        <div className="impact-explaination">Offering tailored guidance and support to help women achieve their 
                        professional and personal development goals, 
                        fostering a culture of growth and empowerment.</div>
                    </div>
                    <div className="our-impact">
                        <div className="impact-icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '30px', color: '#111F4D'}} /> 
                        </div>
                        <div className="impact-title">Personalized Mentorship</div>
                        <div className="impact-explaination">Offering tailored guidance and support to help women achieve their 
                        professional and personal development goals, 
                        fostering a culture of growth and empowerment.</div>
                    </div>
                    <div className="our-impact">
                        <div className="impact-icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '30px', color: '#111F4D'}} /> 
                        </div>
                        <div className="impact-title">Personalized Mentorship</div>
                        <div className="impact-explaination">Offering tailored guidance and support to help women achieve their 
                        professional and personal development goals, 
                        fostering a culture of growth and empowerment.</div>
                    </div>
                    <div className="our-impact">
                        <div className="impact-icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '30px', color: '#111F4D'}} /> 
                        </div>
                        <div className="impact-title">Personalized Mentorship</div>
                        <div className="impact-explaination">Offering tailored guidance and support to help women achieve their 
                        professional and personal development goals, 
                        fostering a culture of growth and empowerment.</div>
                    </div>
                    <div className="our-impact">
                        <div className="impact-icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '30px', color: '#111F4D'}} /> 
                        </div>
                        <div className="impact-title">Personalized Mentorship</div>
                        <div className="impact-explaination">Offering tailored guidance and support to help women achieve their 
                        professional and personal development goals, 
                        fostering a culture of growth and empowerment.</div>
                    </div>
                    <div className="our-impact">
                        <div className="impact-icon">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ width: '30px', height: '30px', color: '#111F4D'}} /> 
                        </div>
                        <div className="impact-title">Personalized Mentorship</div>
                        <div className="impact-explaination">Offering tailored guidance and support to help women achieve their 
                        professional and personal development goals, 
                        fostering a culture of growth and empowerment.</div>
                    </div>

                </div>
            </div>

            <div className="contact-part">
                <div className="contact-content">
                    <div className="contact-title">Get In Touch</div>
                    <div className="contact-inquires">
                        <span>For questions about our platform, services, or how we can support your journey, please don't hesitate to reach out</span>
                    </div>

                    <div className="contact-address">

                      <div className="contact-address-phone">
                        <FontAwesomeIcon icon={faEnvelope} style={{ width: '30px', height: '35px', padding: '10px'}} />  
                        <div className='address-email'>vanessa@gmail</div>
                        </div>
                      <div className="contact-address-phone">
                        <FontAwesomeIcon icon={faPhone} style={{ width: '30px', height: '35px', padding: '10px'}} />  
                        <div className='address-email'>
                            <span>+250780705984</span></div>
                        </div>                       
                    </div>

                </div>
                <div className="contact-form">
                    <div className="persona-name">
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="persona-name">
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="persona-name">
                        <input type="text" placeholder='Phone' />
                    </div>
                    <div className="persona-name">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type message'></textarea>
                    </div>
                    <div className="contact-send">
                        <input type="button" value={'Send'} />
                    </div>
                </div>
            </div>
            <div className="footer">copyright@2024 vanessa mukamanzi</div>


        </div>
     );
}
 
export default HomePage;