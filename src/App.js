import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import ComplaintData from './Components/Complaints/ComplaintData';
import CreateComplain from "./Components/CreateComplain/CreateComplain";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ComplaintData from "./Components/Complaints/ComplaintData";

import UserData from "./Components/UserForm/UserData.jsx";
import UserRegistrationForm from "./Components/UserRegistration/UserRegistration.jsx";

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
          <Route path="/add_complaint" element={<CreateComplain/>} />

          {/* <CreateComplain/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
