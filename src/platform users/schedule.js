import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './session.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

const Schedule = () => {

    return ( 
        <div className="schedule-session">
            <Topbar />
            <Sidebar />
            <div className="shedule-container">
                <div className="book-meeting">
                    <div className="session-title">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ width: '18px', height: '22px', padding: '5px', cursor: 'pointer'}}  /> 
                        <span>Schedule a Session</span>
                    </div>                   
                </div>

                <div className="book-time">
                    <div className="book-from">
                        <div className="start-from">From</div>
                         <div className="from-date">   
                            <span>12/05/2024</span>                       
                            <FontAwesomeIcon icon={faCalendar} style={{ width: '18px', height: '22px', color: '#747474', padding: '5px', cursor: 'pointer'}} />
                         </div>
                        <div className="from-time">
                            <select name="" id="">
                                <option value="">7:00 AM</option>
                                <option value="">7:30 AM</option>
                                <option value="">8:00 AM</option>
                                <option value="">8:30 AM</option>
                                <option value="">9:00 AM</option>
                                <option value="">9:30 AM</option>
                            </select>
                        </div>
                    </div>

                </div>
                
            </div>

        </div>
     );
}
 
export default Schedule;