import './navigationbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
// import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { faPerson} from '@fortawesome/free-solid-svg-icons';
import { faFile} from '@fortawesome/free-solid-svg-icons';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const goToResources = useCallback( () => {
        navigate('/resources')
    }, [navigate]);
    
    const navigateTo = useNavigate();
    const goToUsers = useCallback( () => {
        navigateTo('/users')
    }, [navigateTo]);

    const goTo = useNavigate();
    const goToCommunity = useCallback( () => {
        navigateTo('/community')
    }, [navigateTo]);
    return ( 
        <div className="sidemenu">
            <div className="sides">
                <div className="sidebar-items">
                   <FontAwesomeIcon icon={faHome} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Home</span>
                </div>
                <div className="sidebar-items">
                <FontAwesomeIcon icon={faPerson} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Settings</span>
                </div>
            </div>                 
            <div className="sides">
                <div className="sidebar-items" onClick={goToUsers}>
                <FontAwesomeIcon icon={faPeopleGroup} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Mentorship</span>
                </div>
                <div className="sidebar-items" onClick={goToCommunity}>
                <FontAwesomeIcon icon={faComment} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Community</span>
                </div>
                <div className="sidebar-items" onClick={goToResources}>
                <FontAwesomeIcon icon={faFile} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Resources</span>
                </div>
            </div>                 
        </div>
     );
}
 
export default Sidebar;