import './navigationbar.css';
import notification_icon from '../icons/notification.png';
import add_post_icon from '../icons/plus.png';
import profile_img from '../img/profile-setting.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';



const Topbar = () => {
    const navigate = useNavigate();
    const goToCreateDiscusion = useCallback( ()=> {
        navigate('/create-discusion')
    }, [navigate]);

    const navigateprofile = useNavigate();
    const goToProfile = useCallback( ()=> {
        navigateprofile('/profile-create')
    }, [navigateprofile]);

    return ( 
        <div className="navbar">
        <div className="title">WomenT</div>
            <div className="items">
                <div className="search">
                <FontAwesomeIcon icon={faSearch} style={{ width: '18px', height: '22px', padding: '12px'}} />
                <input type="text" placeholder='what are you looking for' />
                </div>
                <div className="notifications">
                    <FontAwesomeIcon icon={faBell} style={{ width: '18px', height: '22px', padding: '6px' }} />
                </div>
                <div className="plus" onClick={goToCreateDiscusion}>
                    <FontAwesomeIcon icon={faPlus} style={{ width: '18px', height: '22px', padding: '8px', color: '#fff' }} />
                </div>
                <div className="profile" onClick={goToProfile}>
                    <img src={profile_img} alt="" /> 

                </div>
            </div>

        </div>
     );
}
 
export default Topbar;


