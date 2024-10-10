import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Fichier 3 1.png';
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
    { name: 'Locations', icon: location, route: '/locations' },
    { name: 'Notifications', icon: notification, route: '/notifications' },
    { name: 'History', icon: history, route: '/history' },
  ];

  const dropdownItems = [
    { name: 'User Management', icon: dot, route: '/userManagement' },
  ];

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="w-[311px] bg-[#F76A00] py-10 fixed h-full">
        {/* Logo Section */}
        <div className='flex justify-center'>
          <img src={logo} alt="Company logo" className="w-[180px] h-[50px]  " />
        </div>
        <hr className="mt-[25px]" />

        {/* Menu Items */}
        <div className="mt-[80px] pl-[25px]">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-6 mx-auto w-full ${index !== 0 ? 'mt-[25px]' : ''}`}>
              <img src={item.icon} alt={`${item.name} icon`} className="w-[20px] h-[20px]" />
              <NavLink to={item.route} activeClassName="active" className="w-full pl-3 font-semibold text-[#FFFFFF]">
                {item.name}
              </NavLink>
            </div>
          ))}

          {/* Settings and Dropdown */}
          <div className="flex items-center gap-6 mx-auto w-full mt-[25px]">
            <img src={setting} alt="Settings icon" className="w-[20px] h-[20px]" />
            <span className="w-full pl-3 font-semibold text-[#FFFFFF]">Settings</span>
            <img src={dropdown} alt="Expand menu" className="mr-6 cursor-pointer" onClick={toggleDropMenu} />
          </div>

          {/* Dropdown Menu */}
          {openDropMenu && (
            <div className="pl-14 mt-3">
              {dropdownItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <img src={item.icon} alt={`${item.name} icon`} className="w-1" />
                  <NavLink to={item.route} className="text-[#FFFFFF] text-[14px] font-light pl-1 w-full">
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>

        <hr className="mt-[45px]" />

        {/* Logout */}
        <div className="flex items-center gap-1 mt-[25px] w-20 mx-auto cursor-pointer">
          <img src={logout} alt="Logout icon" className="h-4" />
          <span className="font-bold text-[#FFFFFF]">Log out</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full ml-[311px] flex-col ">
        <div className="flex justify-between items-end mb-7">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#C7C7C7] p-2 rounded-xl outline-none bg-transparent w-[440px] text-[#716363] ml-5"
          />
          <User />
        </div>
        <div className="rounded-xl bg-[#f5f5f585] mx-5">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
