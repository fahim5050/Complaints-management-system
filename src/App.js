
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import ComplaintsGraph from './Components/Graph/Graph';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Dashboard/>
   {/* <ComplaintsGraph/> */}
   <Footer/>
    </div>
  );
}

export default App;
