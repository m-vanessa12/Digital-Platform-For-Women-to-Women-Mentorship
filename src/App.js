import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Auth/AuthContext';// Adjust the import path as necessary
import HomePage from './Landing Page/landing';
import SignUp from './signup-login/SignUp';
import Login from './signup-login/Login';
import MenteeProfileCreate from './profile/mentee';
import MentorProfileCreate from './profile/mentor';
import PlatformHome from './Platform overview/home';
import Content from './discusion board/content';
import Community from './community/community';
import Users from './platform users/users';
import MentorUsers from './platform users/MentorUsers';
import Mentee from './platform users/MenteeView';
import Mentor from './platform users/MentorView';
import Schedule from './platform users/schedule';
import Settings from './Settings/settings';
import AddComment from './community/addComment';
// Import other components as needed

function App() {
 return (
    <Router>
      {/* <AuthProvider>  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mentee-profile-create" element={<MenteeProfileCreate />} />
          <Route path="/mentor-profile-create" element={<MentorProfileCreate />} />
          <Route path="/introductory" element={<PlatformHome />} />
          <Route path="/create-discusion" element={<Content />} />
          <Route path="/community" element={<Community />} />
          <Route path="/users" element={<Users />} />
          <Route path="/mentors" element={<MentorUsers />} />
          {/* <Route path="/community">
          <Community currentUser={currentUser} />
         </Route> */}


          <Route path="/mentees/:menteeId" element={<Mentee />} />
          <Route path="/mentors/:mentorId" element={<Mentor />} />
          <Route path="/mentorprofile" element={<Mentor />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/booksession" element={<Schedule />} />
          <Route path="/discussion-comments/:discussionId" element={<AddComment />} />
          
          {/* Add other routes as needed */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
 );
}

export default App;
