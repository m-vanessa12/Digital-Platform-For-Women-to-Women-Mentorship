import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './settingstyling.css'

const Settings = () => {
    return ( 
        <div className="settings">
            <Topbar />
            <Sidebar />
            <div className="setting-container">
                <div className="settings-heading">
                    <div className="settings-links">
                        <ul>
                            <li><a href="">Account</a></li>
                            <li><a href="about-part">Privacy</a></li>
                            <li><a href="">Notification</a></li>
                            <li><a href="">Change Password</a></li>
                        </ul>
                    </div>

                    <div className="accounts">
                        <div className="account-info">
                            <span>Name</span>
                            <input type="name" placeholder="Vanessa Mukamanzi"/>
                        </div>
                        <div className="account-info">
                            <span>Email</span>
                            <input type="name" placeholder="vanessa@gmail.com"/>
                        </div>
                        <div className="account-info">
                            <span>Password</span>
                            <input type="password" placeholder="*************"/>
                        </div>
                        <div className="update-btn">
                            <input type="button"  value={'Update'} />
                        </div>

                    </div>

                </div>

            </div>



        </div>
     );
}
 
export default Settings;