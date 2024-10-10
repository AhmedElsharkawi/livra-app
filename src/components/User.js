import userimg from '../assets/Group 192.png'
import notification from '../assets/notification.png'

const User = () => {
  return (
    <div className='flex gap-2 pt-10 items-center justify-end pr-[65px]'>
        <div>
            <img  src={userimg}  alt='user-img' className='w-[50px]' />
        </div>
        <div className='flex flex-col '>
            <h1 className='font-bold'>Name Name</h1>
            <span className='text-md font-normal'>Admin</span>
        </div>
        <div className='relative flex'>
          <img  src={notification}  alt='notification-img' className='w-7' />
          <span className='text-red-500 font-bold text-lg absolute right-0 top-[-8px]  '>0</span>
        </div>

    </div>
  )
}

export default User