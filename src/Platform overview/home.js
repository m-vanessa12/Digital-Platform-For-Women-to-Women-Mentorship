import './home.css';
import Topbar from '../sidebar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faPerson} from '@fortawesome/free-solid-svg-icons';


const PlatformHome = () => {
    return ( 
        <div className="platform-overview">
            <Topbar />
            <Sidebar />

            <div className="welcome">
                <div className="welcome-title">HerMentorship</div>
                <div className="welcome-message">Join our vibrant community where every step you take is supported, every achievement celebrated, and every potential unleashed. Together, let's shape a future where women lead with confidence and vision.</div>
            </div>

            <div className="introductory-part">
                <div className="introductory-titles">
                    <div className="introductory-main">Platform Features</div>
                    <div className="introductory-sub-title">Discover What HerMentorship Platform Has to Offer</div>                
                </div>

                <div className="platform-features">

                    <div className="feature-meaning"> 
                        <div className="feature-icon">
                        <FontAwesomeIcon icon={faFile} style={{ width: '30px', height: '26px', padding: '5px', color: '#0061F5'}}  />           
                        </div> 
                        <div className="feature-name">Resources Library</div> 
                        <div className="feature-explaination">Access a wealth of knowledge to fuel your growth and inspire action.</div>       
                        <div className="check">
                            <span>Check out</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ width: '18px', height: '18px', padding: '3px', color: '#fff'}}  />           
                        </div>
                    </div>               
                    <div className="feature-meaning"> 
                        <div className="feature-icon">
                        <FontAwesomeIcon icon={faPeopleGroup} style={{ width: '30px', height: '26px', padding: '5px', color: '#0061F5'}}  />           
                        </div> 
                        <div className="feature-name">Mentorship</div> 
                        <div className="feature-explaination">Find the perfect mentor match to guide you on your journey to success.</div>       
                        <div className="check">
                            <span>Check out</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ width: '18px', height: '18px', padding: '3px', color: '#fff'}}  />           
                        </div>
                    </div>               
                    <div className="feature-meaning"> 
                        <div className="feature-icon">
                        <FontAwesomeIcon icon={faComment} style={{ width: '30px', height: '26px', padding: '5px', color: '#0061F5'}}  />           
                        </div> 
                        <div className="feature-name">Community/Forum</div> 
                        <div className="feature-explaination">Our discussion forum is a place for you to connect, exchange ideas with peers. </div>       
                        <div className="check">
                            <span>Check out</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ width: '18px', height: '18px', padding: '3px', color: '#fff'}}  />           
                        </div>
                    </div>               
                    <div className="feature-meaning"> 
                        <div className="feature-icon">
                        <FontAwesomeIcon icon={faPlus} style={{ width: '30px', height: '26px', padding: '5px', color: '#0061F5'}}  />           
                        </div> 
                        <div className="feature-name">Share a Discussion</div> 
                        <div className="feature-explaination">Get to share your thougts and ideas and let the community learn from you.</div>       
                        <div className="check">
                            <span>Check out</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ width: '18px', height: '18px', padding: '3px', color: '#fff'}}  />           
                        </div>
                    </div>    
                    <div className="feature-meaning"> 
                        <div className="feature-icon">
                        <FontAwesomeIcon icon={faPerson} style={{ width: '30px', height: '26px', padding: '5px', color: '#0061F5'}}  />           
                        </div> 
                        <div className="feature-name">Personal Profile</div> 
                        <div className="feature-explaination">Create your profile and let the community get to know you.</div>       
                        <div className="check">
                            <span>Check out</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ width: '18px', height: '18px', padding: '3px', color: '#fff'}}  />           
                        </div>
                    </div>    

                    <div className="feature-meaning"> 
                        <div className="feature-icon">
                        <FontAwesomeIcon icon={faHome} style={{ width: '30px', height: '26px', padding: '5px', color: '#0061F5'}}  />           
                        </div> 
                        <div className="feature-name">Home</div> 
                        <div className="feature-explaination">Our Introductory space, will help you get the overview on the platform.</div>       
                        <div className="check">
                            <span>Check out</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ width: '18px', height: '18px', padding: '3px', color: '#fff'}}  />           
                        </div>
                    </div>               

                </div>

            </div>


        </div>
     );
}
 
export default PlatformHome;