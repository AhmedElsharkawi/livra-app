import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Drivers from "./components/Drivers";
import History from "./components/History";
import Locations from "./components/Locations";
import Merchants from "./components/Merchants";
import Notifications from "./components/Notifications";
import Packages from "./components/Packages";
import UserManagement from "./components/UserManagement";
import Sidebar from "./components/Sidebar";
import Cars from './components/Cars';
import Payment from './components/Payment';

function App() {
  return (
    <BrowserRouter>
      <div className=" ">
        {/* Sidebar with dynamic content */}
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/merchants" element={<Merchants />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/history" element={<History />} />
            <Route path="/userManagement" element={<UserManagement />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
}

export default App;
