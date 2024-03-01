import Topbar from "./sidebar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import Resources from "./resources/resources";
import ReAccess from "./resources/resourceAccess";
import ResourcesContent from "./resources/resourcesContent";
import MenteeProfileCreate from "./profile/mentee";
import Content from "./discusion board/content";
import Users from "./platform users/users";
import Login from "./signup-login/Login";
import SignUp from "./signup-login/SignUp";
import MenteeProfile from "./platform users/menteeProfile";
import Community from "./community/community";


// import { BrowserRouter as Router, Route} from 'react-router-dom' 
import {Route, Routes, useNavigate} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from "react";


function App() {
  return (

    <Router>
        <Routes>

        <Route path="/signup" element={< SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile-create" element={<MenteeProfileCreate />} />

        <Route path="/create-discusion" element={< Content />} />
        <Route path="/community" element={<Community />} />


        <Route path="/users" element={<Users />} />
        <Route path="/menteeprofile" element={<MenteeProfile />} />



        <Route path="/resources" element={<Resources />} />
        <Route path="/resourcesAccess" element={<ReAccess />} />
        <Route path="/resourcescontent" element={<ResourcesContent />} />
      </Routes>
    </Router>




    // <div className="App">
    //   {/* < Topbar />
    //   <Sidebar /> */}
    //   {/* < Resources /> */}
    //   {/* <ReAccess/> */}
    //   {/* <ResourcesContent /> */}
    //   {/* <MenteeProfileCreate /> */}
    //   {/* < Content /> */}
    //   <Users />

    //   {/* ----------------<Community /> -------------*/}

    //   <div className="contents">

        
    //   </div>
    // </div>
  );
}

export default App;
