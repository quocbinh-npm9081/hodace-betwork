import React from 'react';
import { AiFillHome } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'

const Header: React.FC = () => {
    return (
        <div className='fixed w-full bg-white h-14 flex flex-row items-center justify-between px-4 py-4 z-50'>
            <div className="basis-4/12">
                <AiFillHome
                    color='#000'
                    fontSize={24}
                />
            </div>
            <div className='basis-4/12  padding-r-10per text-end leading-3	'>
                <div className='uppercase inline-flex'> <span className='font-bold tracking-wider text-xl	'>hodace</span>  <span className='bg-blue-500 text-white p-1 text-sm tracking-wider'>network</span></div>
                <div className="text-xs font-normal	">Giải pháp toàn viện cho dữ liệu BDS</div>
            </div>
            <div className="flex items-center basis-4/12 justify-end space-x-6">
                <div className="relative">
                    <IoMdNotifications
                        color='gray'
                        fontSize={24}
                    />
                    <span className="top-3 left-3 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div>
                    <button className="bg-red-500 hover:bg-red-700 block text-white text-xs py-1 px-4 rounded-full">
                        Đăng bài
                    </button>
                </div>
                <div className='flex items-center justify-center space-x-4'>
                    <div className='text-right'>
                        <div className='text-sm'>Quanh Anh Tran</div>
                        <div className='text-xs text-gray-400'>Tư vấn</div>
                    </div>
                    <div >
                        <img className="w-8 h-8 rounded-full bg-center	bg-cover" src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=807&q=80" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;