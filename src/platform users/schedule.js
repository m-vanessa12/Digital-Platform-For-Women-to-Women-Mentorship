import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import './session.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";

const Schedule = () => {

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const handleFromDateChange = (date) => {
        setFromDate(date);
    };

    const handleToDateChange = (date) => {
        setToDate(date);
    };

        // Function to filter dates in toDate DatePicker
        const filterToDate = (date) => {
            return fromDate ? date > fromDate : true;
        };
    
        // Function to filter dates in fromDate DatePicker
        const filterFromDate = (date) => {
            const currentDate = new Date();
            return currentDate <= date;
        };



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
                        <div className="start-from">Day</div>
                        <div className="choose-date">
                            <DatePicker
                            selected={fromDate}
                            onChange={handleFromDateChange}
                            dateFormat="dd/MM/yy"
                            customInput={<input className="custom-datepicker-input" />}
                            filterDate={filterFromDate}
                        />
                        </div>

                        {/* <div className="from-time">
                            <select name="" id="">
                                <option value="">7:00 AM</option>
                                <option value="">7:30 AM</option>
                                <option value="">8:00 AM</option>
                                <option value="">8:30 AM</option>
                                <option value="">9:00 AM</option>
                                <option value="">9:30 AM</option>
                            </select>
                        </div> */}
                    </div>
                    <div className="book-until">
                        <div className="start-from">Time</div>

                        <div className="from-time">
                            <select name="" id="">
                                <option value="">8:00 AM</option>
                                <option value="">7:30 AM</option>
                                <option value="">8:00 AM</option>
                                <option value="">8:30 AM</option>
                                <option value="">9:00 AM</option>
                                <option value="">9:30 AM</option>
                            </select>
                        </div>
                        <div className="from-time">
                            <select name="" id="">
                                <option value="">8:00 AM</option>
                                <option value="">7:30 AM</option>
                                <option value="">8:00 AM</option>
                                <option value="">8:30 AM</option>
                                <option value="">9:00 AM</option>
                                <option value="">9:30 AM</option>
                            </select>
                        </div>

                    </div>

                    <div className="session-about">
                        <div className="session-titlee">What session about?</div>
                        <div className="session-text">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                        </div>
                    </div>

                    <div className="send-invite">
                        <input type="button" name="" id="" value={'Send Invitation'} />
                    </div>

                </div>
                
            </div>

        </div>
     );
}
 
export default Schedule;