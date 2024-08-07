
import './App.css';
// import ComplaintData from './Components/Complaints/ComplaintData';
// import CreateComplain from './Components/CreateComplain/CreateComplain';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import UserRegistrationForm from './Components/UserRegistration/UserRegistration';
// import UserData from './Components/UserForm/UserData.jsx';


function App() {
  return (
    <div className="App">
    
   <Navbar/>
   <Dashboard/>
   <UserRegistrationForm/>
   {/* <UserData/> */}
   {/* <ComplaintData/> */}
   {/* <CreateComplain/> */}
   <Footer/>
  
    </div>
  );
}

export default App;
