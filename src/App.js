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
import WorkerList from "./Components/Worker/WorkerList.jsx";
import WorkerData from "./Components/Worker/WorkerData.jsx";

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
          <Route path="/workers" element={<WorkerData/>} />
          <Route path="/add_complaint" element={<CreateComplain />} />
          <Route path="/feedbacks" element={<FeedbackList />} />
        </Routes>

        <Footer />
       
        
      </div>
    </Router>
  );
}

export default App;
