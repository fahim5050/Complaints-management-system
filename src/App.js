
import './App.css';
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
   <Footer/>
  
    </div>
  );
}

export default App;
