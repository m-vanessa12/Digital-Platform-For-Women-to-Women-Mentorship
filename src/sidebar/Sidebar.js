import './navigationbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPeopleGroup, faPerson, faFile, faComment, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useContext } from 'react'; // Import useContext
//import { AuthContext } from '../Auth/AuthContext'; // Import AuthContext

const Sidebar = () => {
    const navigate = useNavigate();
    // const { logout } = useContext(AuthContext); // Access the logout function from AuthContext

    const goToIntroductory = useCallback(() => {
        navigate('/introductory');
    }, [navigate]);

    const goToProfile = useCallback(() => {
        navigate('/mentors');
    }, [navigate]);

    const goToUsers = useCallback(() => {
        navigate('/users');
    }, [navigate]);

    const goToCommunity = useCallback(() => {
        navigate('/community');
    }, [navigate]);

    const goToResources = useCallback(() => {
        navigate('/resources');
    }, [navigate]);

    // Logout function
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Call the logout function from AuthContext
        // logout();

        // Redirect the user to the login page
        // navigate('/login');
    };
    return ( 
        <div className="sidemenu">
            <div className="sides">
                <div className="sidebar-items" onClick={goToIntroductory}>
                   <FontAwesomeIcon icon={faHome} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Home</span>
                </div>
                <div className="sidebar-items" onClick={goToProfile}>
                <FontAwesomeIcon icon={faPerson} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Profile</span>
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
                <div className="sidebar-items" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOut} style={{ width: '18px', height: '22px', padding: '15px'}}  />           
                    <span>Logout</span>
                </div>
            </div>                 
        </div>
     );
}
 
export default Sidebar;