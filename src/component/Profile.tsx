import React from "react";

const Profile: React.FC = () => {
    return <div className='relative w-1/4 -top-24 rounded-xl backdrop-blur-sm bg-white/30 py-10 px-5 shadow-lg'>
        <div className="flex flex-col items-center justify-center space-y-3">
            <img className="w-28 h-28 rounded-full bg-center bg-cover" src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=807&q=80" alt="" />
            <h3>Trần Quang Anh</h3>
            <h5 className='text-gray-400 font-bold'>Tư vấn viên tại review nhà</h5>
            <div className="w-full space-y-2">
                <button className="bg-blue-500 hover:bg-blue-700 block text-white text-xs py-1 px-4 w-full rounded-full">
                    Sửa thông tin
                </button>
                <button className="bg-white-500 hover:bg-white-700 hover:border-gray-900 block text-black text-xs py-1 px-4 w-full rounded-full border border-gray-300">
                    Nạp xu
                </button>
            </div>

            <div className='flex items-center justify-between w-full'>
                <span className='whitespace-nowrap text-xs text-gray-400'>Loại tài khoản: </span>
                <span className='font-bold bg-blue-500 text-white text-xs py-1 px-4 whitespace-nowrap rounded-full'>Chuyên gia tư vấn</span>
            </div>
            <div className='flex items-center justify-between w-full'>
                <span className='whitespace-nowrap text-xs text-gray-400'>Bất động sản: </span>
                <span className='text-black text-xs py-1 px-4'>21 tin đăng</span>
            </div>
            <div className='w-full'>
                <span className='truncate text-xs text-gray-400'>Giới thiệu: </span>
                <p className='text-black text-xs pt-2 text-clamp overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi a ab vero, minima libero suscipit eum similique magni, quia atque tenetur! Inventore magnam iste laborum ipsa quae illum perferendis quibusdam?</p>
            </div>
        </div>
    </div>
}


export default Profile;
