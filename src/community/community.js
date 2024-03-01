import Topbar from "../sidebar/Topbar";
import Sidebar from "../sidebar/Sidebar";

import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


const Community = () => {

    return ( 
        <div className="community">
            <Topbar />
            <Sidebar/>
        </div>
     );
}
 
export default Community;