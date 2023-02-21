import Registerpage from "./pages/Registerpage";
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.js";
import Keralapack from "./Trpackages.js/Keralapack";
import Hotelform from "./Hotel/Hotelform";
import Carrental from "./CarRental/Carrental";
import HotelList from "./Hotel/HotelList";
import MainTourpackage from "./Trpackages.js/MainTourpackage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/Registerpage" element={<Registerpage/>}/>
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Keralapack" element={<Keralapack/>}/>
        <Route path="/Hotelform" element={<Hotelform/>}/>
        <Route path="/Carrental" element={<Carrental/>}/>
        <Route path="/HotelList" element={<HotelList/>}/>
        <Route path="/MainTourpackage" element={<MainTourpackage/>}/>
        
       
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
