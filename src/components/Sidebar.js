import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logoblack.png';
import dashboard from '../assets/Vector.png';
import drivers from '../assets/Group (1).png';
import merchants from '../assets/Group.png';
import packages from '../assets/Group 185.png';
import history from '../assets/Group (4).png';
import location from '../assets/Group (2).png';
import notification from '../assets/Group (3).png';
import logout from '../assets/Group (5).png';
import setting from '../assets/Vector (1).png';
import dropdown from '../assets/Vector (2).png';
import cars from '../assets/caars.png';
import paymentIcon from '../assets/payment-icon.png';
import dot from '../assets/Ellipse 8.png';
import User from './User';
const Sidebar = ({ children }) => {
  const [openDropMenu, setOpenDropMenu] = useState(false);

  const toggleDropMenu = () => {
    setOpenDropMenu(!openDropMenu);
  };

  const menuItems = [
    { name: 'Dashboard', icon: dashboard, route: '/' },
    { name: 'Merchants', icon: merchants, route: '/merchants' },
    { name: 'Drivers', icon: drivers, route: '/drivers' },
    { name: 'Packages', icon: packages, route: '/packages' },
    { name: 'Cars', icon: cars, route: '/cars' },
    { name: 'Locations', icon: location, route: '/locations' },
    { name: 'Payment', icon: paymentIcon, route: '/payment' },
    { name: 'Notifications', icon: notification, route: '/notifications' },
    { name: 'History', icon: history, route: '/history' },
  ];

  const dropdownItems = [
    { name: 'User Management', icon: dot, route: '/userManagement' },
  ];

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="w-[311px] pt-10 fixed h-full border-r overflow-y-auto">
        {/* Logo Section */}
        <div className="flex justify-center">
          <img src={logo} alt="Company logo" className="w-[180px] h-[50px] object-cover" />
        </div>
        <hr className="mt-[20px]" />

        {/* Menu Items */}
        <div className="mt-[15px]">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.route}
              className={({ isActive }) =>
                `flex items-center gap-3 w-full pl-[65px] py-2 ${
                  index !== 0 ? 'mt-[6px]' : ''
                } ${isActive ? 'bg-[#FF66001C] text-[#FF6600] rounded-lg' : 'bg-transparent text-[#1E1E1E]'}`
              }
            >
              {({ isActive }) => (
                <>
                   <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className={`w-[20px] h-[20px] object-contain ${isActive ? 'active-icon' : 'inactive-icon'}`}
                  />
                  <span className="font-semibold">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <hr className="mt-[15px]" />

        {/* Settings and Dropdown */}
        <div className="flex items-center justify-center gap-3  pt-[15px]  px-16">
          <img src={setting} alt="Settings icon" className="w-[20px] h-[20px] inactive-icon" />
          <span className="w-full  font-semibold">Settings</span>
          <img src={dropdown} alt="Expand menu" className="cursor-pointer inactive-icon" onClick={toggleDropMenu} />
        </div>

        
    {/* Dropdown Menu */}
{openDropMenu && (
  <div className="pl-14 mt-[10px]">
    {dropdownItems.map((item, index) => (
      <NavLink
        key={index}
        to={item.route}
        className={({ isActive }) =>
          `flex items-center gap-2 pl-10 py-2 ${
            isActive ? 'bg-[#FF66001C] text-[#FF6600] rounded-lg' : 'bg-transparent text-[#1E1E1E]'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className={` ${isActive ? 'active-icon' : 'inactive-icon'}`}
            />
            <span className="text-[14px] font-light">{item.name}</span>
          </>
        )}
      </NavLink>
    ))}
  </div>
)}

        <hr className="mt-[15px]" />

        {/* Logout */}

        <div className="flex items-center gap-3 mt-[15px]  cursor-pointer pl-[65px]">
          <img src={logout} alt="Logout icon" className="h-4 inactive-icon" />
          <span className="font-bold ">Log out</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full ml-[311px] flex-col">
        <div className="flex justify-between items-end mb-7">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#C7C7C7] p-2 rounded-xl outline-none bg-transparent w-[440px] text-[#716363] ml-5"
          />
          <User />
        </div>
        <div className="rounded-xl bg-[#f5f5f585]  ">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
