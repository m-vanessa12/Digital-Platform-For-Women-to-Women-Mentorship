import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import profile_img from '../img/profile.jpg';
import './userstyle.css';

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Users = () => {
    const navigate = useNavigate();
    const goToMenteeProfile = useCallback( () =>{
        navigate('/menteeprofile')
    }, [navigate]);
    return ( 
        <div className="platform-users">
            <Topbar />
            <Sidebar />
            <div className="users-container">
                <div className="users-sorting">
                    <div className="sort-resources">
                        <span>Sort Resources</span>
                        <select name="" id="">
                            <option value="">Recent Post</option>
                            <option value="">Old Post</option>
                            <option value="">A - Z</option>
                            <option value="">Z - A</option>
                        </select>
                    </div>

                </div>

                <div className="users-display">

                    <div className="users-cards">
                        <div className="main-info">
                            <div className="users-info">
                                <div className="user-profile">
                                    <img src={profile_img} alt="" />
                                </div>
                                <div className="user-names">Mukamanzi Vanessa</div>
                                <div className="user-category">Mentor</div>

                            </div>
                            <div className="users-connect">
                                <button onClick={goToMenteeProfile}>View Profile</button>
                            </div>
                        </div>
                        <div className="users-bio">
                            <span>I am a dedicated project manager at BK Tech House and I create 
                                content related to youth empowerment as a part time self-work. </span>
                        </div>
                    </div>
                    <div className="users-cards">
                        <div className="main-info">
                            <div className="users-info">
                                <div className="user-profile">
                                    <img src={profile_img} alt="" />
                                </div>
                                <div className="user-names">Jasmine Anne</div>
                                <div className="user-category">Mentee</div>

                            </div>
                            <div className="users-connect">
                                <button>View Profile</button>
                            </div>
                        </div>
                        <div className="users-bio">
                            <span>I am a dedicated project manager at BK Tech House and I create 
                                content related to youth empowerment as a part time self-work. </span>
                        </div>
                    </div>
                    <div className="users-cards">
                        <div className="main-info">
                            <div className="users-info">
                                <div className="user-profile">
                                    <img src={profile_img} alt="" />
                                </div>
                                <div className="user-names">Jasmine Anne</div>
                                <div className="user-category">Mentee</div>

                            </div>
                            <div className="users-connect">
                                <button>View Profile</button>
                            </div>
                        </div>
                        <div className="users-bio">
                            <span>I am a dedicated project manager at BK Tech House and I create 
                                content related to youth empowerment as a part time self-work. </span>
                        </div>
                    </div>
                    <div className="users-cards">
                        <div className="main-info">
                            <div className="users-info">
                                <div className="user-profile">
                                    <img src={profile_img} alt="" />
                                </div>
                                <div className="user-names">Jasmine Anne</div>
                                <div className="user-category">Mentor</div>

                            </div>
                            <div className="users-connect">
                                <button>View Profile</button>
                                <button>Book Session</button>
                            </div>
                        </div>
                        <div className="users-bio">
                            <span>I am a dedicated project manager at BK Tech House and I create 
                                content related to youth empowerment as a part time self-work. </span>
                        </div>
                    </div>
                    <div className="users-cards">
                        <div className="main-info">
                            <div className="users-info">
                                <div className="user-profile">
                                    <img src={profile_img} alt="" />
                                </div>
                                <div className="user-names">Jasmine Anne</div>
                                <div className="user-category">Mentor</div>

                            </div>
                            <div className="users-connect">
                                <button>View Profile</button>
                            </div>
                        </div>
                        <div className="users-bio">
                            <span>I am a dedicated project manager at BK Tech House and I create 
                                content related to youth empowerment as a part time self-work. </span>
                        </div>
                    </div>
                    <div className="users-cards">
                        <div className="main-info">
                            <div className="users-info">
                                <div className="user-profile">
                                    <img src={profile_img} alt="" />
                                </div>
                                <div className="user-names">Jasmine Anne</div>
                                <div className="user-category">Mentor</div>

                            </div>
                            <div className="users-connect">
                                <button>View Profile</button>
                            </div>
                        </div>
                        <div className="users-bio">
                            <span>I am a dedicated project manager at BK Tech House and I create 
                                content related to youth empowerment as a part time self-work. </span>
                        </div>
                    </div>

                </div>            
            </div>
        </div>
     );
}
 
export default Users;