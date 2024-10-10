import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbMessageStar } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";

import plus from '../assets/plus.png'

const Merchants = () => {
  return (
    <div className='w-full '>
        <div className='flex gap-2 justify-end pt-5 pr-5'>
        <input type='text' placeholder='Merchant name' className='border border-[#C7C7C7] p-1 rounded-md outline-none bg-transparent w-[186px] text-[#716363]' />
        <input type='text' placeholder='Merchant ID' className='border border-[#C7C7C7] p-1 rounded-md outline-none bg-transparent w-[186px] text-[#716363]' />

        </div>
        <div className="overflow-x-auto mt-4 px-5">
  <table className="min-w-full bg-white rounded-xl">
    <thead>
      <tr className='border-b '>
        <th className="px-6 py-3  text-center text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider ">Merchant ID</th>
        <th className="px-6 py-3 text-center text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider">Merchant Name</th>
        <th className="px-6 py-3 text-center text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider">Address</th>
        <th className="px-6 py-3 text-center text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider">Contact</th>
        <th className="px-6 py-3 text-center text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider">Registration Date</th>
        <th className="px-6 py-3 text-center text-xs font-semibold text-[#1E1E1E] uppercase tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* Example Row */}
      <tr className="border-b">
        <td className="px-6 py-1 whitespace-nowrap  font-ligh text-center ">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">01/12/2024</td>
      
        <td className="px-6 py-1 whitespace-nowrap text-center font-light ">
              <button className="">
                <LiaEditSolid className=' ' />
              </button>
              <button className="ml-1">
                <RiDeleteBinLine />
              </button>
              <button className="ml-1 rotate-180 ">
                <TbMessageStar />
              </button>
              <button className="ml-1 text-gray-600 hover:text-gray-900">
                <IoEyeOutline />
              </button>
            </td>
      </tr>
      {/* Repeat similar rows for other data */}
    </tbody>


{/* <><>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></></> */}
<tbody>
      {/* Example Row */}
      <tr className="border-b">
        <td className="px-6 py-1 whitespace-nowrap  font-ligh text-center ">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">01/12/2024</td>
      
        <td className="px-6 py-1 whitespace-nowrap text-center font-light ">
              <button className="">
                <LiaEditSolid className=' ' />
              </button>
              <button className="ml-1">
                <RiDeleteBinLine />
              </button>
              <button className="ml-1 rotate-180 ">
                <TbMessageStar />
              </button>
              <button className="ml-1 text-gray-600 hover:text-gray-900">
                <IoEyeOutline />
              </button>
            </td>
      </tr>
      {/* Repeat similar rows for other data */}
    </tbody> <tbody>
      {/* Example Row */}
      <tr className="border-b">
        <td className="px-6 py-1 whitespace-nowrap  font-ligh text-center ">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">01/12/2024</td>
      
        <td className="px-6 py-1 whitespace-nowrap text-center font-light ">
              <button className="">
                <LiaEditSolid className=' ' />
              </button>
              <button className="ml-1">
                <RiDeleteBinLine />
              </button>
              <button className="ml-1 rotate-180 ">
                <TbMessageStar />
              </button>
              <button className="ml-1 text-gray-600 hover:text-gray-900">
                <IoEyeOutline />
              </button>
            </td>
      </tr>
      {/* Repeat similar rows for other data */}
    </tbody> <tbody>
      {/* Example Row */}
      <tr className="border-b">
        <td className="px-6 py-1 whitespace-nowrap  font-ligh text-center ">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">01/12/2024</td>
      
        <td className="px-6 py-1 whitespace-nowrap text-center font-light ">
              <button className="">
                <LiaEditSolid className=' ' />
              </button>
              <button className="ml-1">
                <RiDeleteBinLine />
              </button>
              <button className="ml-1 rotate-180 ">
                <TbMessageStar />
              </button>
              <button className="ml-1 text-gray-600 hover:text-gray-900">
                <IoEyeOutline />
              </button>
            </td>
      </tr>
      {/* Repeat similar rows for other data */}
    </tbody> <tbody>
      {/* Example Row */}
      <tr className="border-b">
        <td className="px-6 py-1 whitespace-nowrap  font-ligh text-center ">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">01/12/2024</td>
      
        <td className="px-6 py-1 whitespace-nowrap text-center font-light ">
              <button className="">
                <LiaEditSolid className=' ' />
              </button>
              <button className="ml-1">
                <RiDeleteBinLine />
              </button>
              <button className="ml-1 rotate-180 ">
                <TbMessageStar />
              </button>
              <button className="ml-1 text-gray-600 hover:text-gray-900">
                <IoEyeOutline />
              </button>
            </td>
      </tr>
      {/* Repeat similar rows for other data */}
    </tbody> <tbody>
      {/* Example Row */}
      <tr className="border-b">
        <td className="px-6 py-1 whitespace-nowrap  font-ligh text-center ">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">Lorem ipsum</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">00 000 000</td>
        <td className="px-6 py-1 whitespace-nowrap font-light text-center">01/12/2024</td>
      
        <td className="px-6 py-1 whitespace-nowrap text-center font-light ">
              <button className="">
                <LiaEditSolid className=' ' />
              </button>
              <button className="ml-1">
                <RiDeleteBinLine />
              </button>
              <button className="ml-1 rotate-180 ">
                <TbMessageStar />
              </button>
              <button className="ml-1 text-gray-600 hover:text-gray-900">
                <IoEyeOutline />
              </button>
            </td>
      </tr>
      {/* Repeat similar rows for other data */}
    </tbody>


  </table>
</div>

{/* {>>>>>>>>>>>>>>>>>>>>>>>>>>>the add icon <<<<<<<<<<<<<<<<<<<<<<<<} */}
<div className='py-10 flex justify-center '>
    <img  src={plus} alt='plus-icon' className=''  />
</div>

    </div>
  )
}

export default Merchants