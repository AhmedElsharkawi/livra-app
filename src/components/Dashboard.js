import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import car from "../assets/car.png";
import car2 from "../assets/car2.png";
import box from "../assets/box.png";
import box2 from "../assets/box2.png";
import round from "../assets/Group 211.png";
import arrow from "../assets/leftarrow.png";
import LineChart from "./LineChart";
import DeliveryChart from "./DeliveryChart";

const Dashboard = () => {
  // Set state for start and end dates
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="px-16 py-3">
      {/* Revenue Section */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">
          Revenu
          <span className="block font-bold text-3xl">1200DT</span>
          <span className="block text-sm font-light ">cs mois</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-[#C7C7C7] text-2xl">De </label>
            <div className="flex items-center border p-4 rounded-xl bg-transparent">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="bg-transparent text-[#C7C7C7] outline-none cursor-pointer"
              ></DatePicker>
              <MdOutlineCalendarMonth className="text-3xl text-[#C7C7C7]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-[#C7C7C7] text-2xl mr-2">à </label>
            <div className="flex items-center border p-4 rounded-xl bg-transparent">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate} // Ensures end date can't be before start date
                className=" bg-transparent text-[#C7C7C7] outline-none cursor-pointer "
              />
              <MdOutlineCalendarMonth className="text-3xl text-[#C7C7C7]" />
            </div>
          </div>
          <button className="bg-[#F76A00] text-white p-3 rounded-xl">
            Appliqué
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-10 mt-6">
        <div className="bg-white flex  justify-between gap-4 h-[70px] ">
          <img
            src={car}
            alt="car-img"
            className="bg-[#FF6600] w-[110px] h-full   rounded-xl py-4 px-2 object-contain"
          />
          <div className="flex flex-col  items-end  justify-between pr-3 py-1 gap-4">
            <span className="font-bold text-[#535353]">28</span>
            <span className="text-[#535353] font-light">
              En attente d'enlèvement
            </span>
          </div>
        </div>
        <div className="bg-white flex justify-between h-[70px]">
          <img
            src={car2}
            alt="car2-img"
            className="bg-[#F99D13] w-[110px] h-full  rounded-xl py-4 px-2 object-contain"
          />
          <div className="flex flex-col  items-end justify-between pr-3 py-1 gap-4">
            <span className="font-bold  text-[#535353]">10</span>
            <span className="text-[#535353] font-light">
              En cours de livraison
            </span>
          </div>
        </div>
        <div className="bg-white flex  justify-between h-[70px]">
          <img
            src={box}
            alt="box-img"
            className="bg-[#999999]  w-[110px] rounded-xl py-4 px-2 object-contain"
          />
          <div className="flex flex-col  items-end justify-between pr-3 py-1 gap-4">
            <span className="font-bold  text-[#535353]">110</span>
            <span className="text-[#535353] font-light">Livré confirmé</span>
          </div>
        </div>
        <div className="bg-white flex  justify-between h-[70px]">
          <img
            src={box2}
            alt="box2-img"
            className="bg-[#BF530B] w-[110px] rounded-xl py-4 px-2 object-contain"
          />
          <div className="flex flex-col  items-end justify-between pr-3 py-1 gap-4">
            <span className="font-bold  text-[#535353]">0</span>
            <span className="text-[#535353] font-light">Non livré</span>
          </div>
        </div>{" "}
        <div className="bg-white flex  justify-between h-[70px]">
          <img
            src={round}
            alt="round-img"
            className="bg-[#C77B08] w-[110px] rounded-xl py-4 px-2 object-contain"
          />
          <div className="flex flex-col  items-end justify-between pr-3 py-1 gap-4">
            <span className="font-bold  text-[#535353]">10</span>
            <span className="text-[#535353] font-light">
              En cours de traitement
            </span>
          </div>
        </div>
        <div className="bg-white flex  justify-between h-[70px]">
          <img
            src={arrow}
            alt="leftarrow-img"
            className="bg-[#757070] w-[110px] rounded-xl py-4 px-2 object-contain"
          />
          <div className="flex flex-col  items-end justify-between pr-3 py-1 gap-4">
            <span className="font-bold  text-[#535353]">0</span>
            <span className="text-[#535353] font-light">Retour</span>
          </div>
        </div>
       
      </div>

      {/* Charts Section */}
      <div className="flex my-10 justify-between items-start gap-14 ">
        {/* Line Chart */}
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-[#535353]">
              Évolution du nombre de colis par mois
            </h3>
            <div className="flex gap-2">
              <button className="pb-1 px-1 text-white bg-[#F76A00] rounded-2xl">
                par mois
              </button>
              <button className="pb-1 px-1 text-[#8C8888] bg-white rounded-2xl border">
                par jour
              </button>
            </div>
          </div>
          <div className=" "></div>

          <LineChart />
        </div>

        {/* Pie Chart */}
        <div className="w-1/2">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-[#535353]">
              Répartition des colis par statut de livraison
            </h3>
            <button className="pb-1 px-1 text-white bg-[#F76A00] rounded-2xl">
              par jour
            </button>
          </div>
          <div className="">
            <DeliveryChart />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for the Stats boxes

export default Dashboard;
