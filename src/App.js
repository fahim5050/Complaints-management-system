import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateComplain from "./Components/CreateComplain/CreateComplain";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ComplaintData from "./Components/Complaints/ComplaintData";
import UserData from "./Components/UserForm/UserData.jsx";
import UserRegistrationForm from "./Components/UserRegistration/UserRegistration.jsx";
import FeedbackList from "./Components/Feedbacks/FeedbackList.jsx";
import WorkerData from "./Components/Worker/WorkerData.jsx";
import WorkerRegistration from "./Components/Worker/WorkerRegistration.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import EditProfile from "./Components/Profile/EditProfile.jsx";
import HelpAndSupport from "./Components/Profile/HelpAndSupport.jsx";
import DisplayAndAccessibility from "./Components/Profile/DisplayAndAccessibility.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/complaints" element={<ComplaintData />} />
          <Route path="/registration" element={<UserRegistrationForm />} />
          <Route path="/users" element={<UserData />} />
          <Route path="/workers" element={<WorkerData />} />
          <Route path="/register_employee" element={<WorkerRegistration />} />
          <Route path="/add_complaint" element={<CreateComplain />} />
          <Route path="/feedbacks" element={<FeedbackList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/help_and_support" element={<HelpAndSupport />} />
          <Route
            path="/display_and_accessibility"
            element={<DisplayAndAccessibility />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
