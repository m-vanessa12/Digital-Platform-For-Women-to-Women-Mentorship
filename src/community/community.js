import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './community.css';
import profile_img from '../img/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


const Community = () => {

    return ( 
        <div className="community">
            <Topbar />
            <Sidebar/>

            <div className="discution-forum">
                <div className="person-discusion">

                    <div className="discusion-container">
                    <div className="owner-information">
                        <div className="owner-profile-set">
                            <div className="discusion-owner">
                                <img src={profile_img} alt="" />
                            </div>
                            <div className="discusion-owner-details">
                                <div className="discusion-owner-names">Vanessa Mukamanzi</div>
                                <div className="discusion-status-time">
                                    <div className="discucion-status">Mentee</div>
                                    <div className="discucion-dot"></div>
                                    <div className="posted-time">2 days ago</div>
                                </div>                          
                           </div>
                        </div>
                        <div className="discusion-access">
                        <FontAwesomeIcon icon={faEllipsisV} style={{ width: '18px', height: '22px', padding: '15px', marginLeft: '30px'}}  /> 
                        </div>
                    </div>

                    <div className="discusion-forum-content">
                        <div className="discusion-forum-title">Women Employment In Africa</div>
                        <div className="discusion-forum-contents">Due to the high unemployment rate, young people can find solutions differently. 
                        Every year, there are thousands of graduates. Graduates young people increase yearly while the number of job positions doesn't improve. 
                        The key that young people can consider is finding remote jobs in different countries. Technology increases every time, and this increases 
                        the number of job opportunities. The second solution is targeting internships in companies. Working as an intern in a company gives people 
                        chances of getting a job than someone outside a company. Not only that, an internship helps one to gain experience and skills, which makes 
                        one to be competitive in the market. The third one is to be creative and innovative and create our means of making money. For instance, 
                        selling things online. We young people need to open our eyes and do our best. The unemployment rate is high, but we can’t sit down and do nothing 
                        about it. We young people need to find solutions for whatever comes our way instead of sitting down and being discouraged by it.</div>
                    </div>
                    <div className="discusion-replies">
                        <div className="discusion-likes">
                        <FontAwesomeIcon icon={faThumbsUp} style={{ width: '22px', height: '25px', padding: '5px',color:'#5e5d5d'}}  /> 
                        <span>2 likes</span>

                        </div>
                        <div className="discusion-comments">
                        <FontAwesomeIcon icon={faComment} style={{ width: '22px', height: '25px', padding: '5px', color:'#5e5d5d'}}  /> 
                        <span>2 comments</span>
                        </div>
                    </div>
                    </div>
                    <div className="discusion-container">
                    <div className="owner-information">
                        <div className="owner-profile-set">
                            <div className="discusion-owner">
                                <img src={profile_img} alt="" />
                            </div>
                            <div className="discusion-owner-details">
                                <div className="discusion-owner-names">Vanessa Mukamanzi</div>
                                <div className="discusion-status-time">
                                    <div className="discucion-status">Mentee</div>
                                    <div className="discucion-dot"></div>
                                    <div className="posted-time">2 days ago</div>
                                </div>                          
                           </div>
                        </div>
                        <div className="discusion-access">
                        <FontAwesomeIcon icon={faEllipsisV} style={{ width: '18px', height: '22px', padding: '15px', marginLeft: '30px'}}  /> 
                        </div>
                    </div>

                    <div className="discusion-forum-content">
                        <div className="discusion-forum-title">Women Employment In Africa</div>
                        <div className="discusion-forum-contents">Due to the high unemployment rate, young people can find solutions differently. 
                        Every year, there are thousands of graduates. Graduates young people increase yearly while the number of job positions doesn't improve. 
                        The key that young people can consider is finding remote jobs in different countries. Technology increases every time, and this increases 
                        the number of job opportunities. The second solution is targeting internships in companies. Working as an intern in a company gives people 
                        chances of getting a job than someone outside a company. Not only that, an internship helps one to gain experience and skills, which makes 
                        one to be competitive in the market. The third one is to be creative and innovative and create our means of making money. For instance, 
                        selling things online. We young people need to open our eyes and do our best. The unemployment rate is high, but we can’t sit down and do nothing 
                        about it. We young people need to find solutions for whatever comes our way instead of sitting down and being discouraged by it.</div>
                    </div>
                    <div className="discusion-replies">
                        <div className="discusion-likes">
                        <FontAwesomeIcon icon={faThumbsUp} style={{ width: '22px', height: '25px', padding: '5px',color:'#5e5d5d'}}  /> 
                        <span>2 likes</span>

                        </div>
                        <div className="discusion-comments">
                        <FontAwesomeIcon icon={faComment} style={{ width: '22px', height: '25px', padding: '5px', color:'#5e5d5d'}}  /> 
                        <span>2 comments</span>
                        </div>
                    </div>
                    </div>



                </div>
            
            </div>
        </div>
     );
}
 
export default Community;