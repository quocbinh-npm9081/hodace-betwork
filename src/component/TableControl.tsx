import React, { useEffect } from 'react';
import { BiTrashAlt } from 'react-icons/bi'
import { useGlobalContext } from './Context';
import Pagination from './Pagination';
import Skeleton from 'react-loading-skeleton'

const TableControl: React.FC = () => {


    const { data, offset, perPage, dataItems, setDataItems, setPageCount } = useGlobalContext();



    const fetchApi = () => {
        setTimeout(() => {//[1,2,3,4,5,6,7,8,9,10]

            const indexOfLastItem = offset * perPage;
            const indexOfFirstItem = indexOfLastItem - perPage;

            const currentListItem = data?.slice(indexOfFirstItem, indexOfLastItem);

            setDataItems(currentListItem);

        }, 1000)
    }

    useEffect(() => {

        fetchApi();

        setPageCount(Math.ceil(data.length / perPage));

        return () => fetchApi();

    }, [offset])



    return <div className="mx-auto px-4 sm:px-8 w-full">
        <div className="py-8">
            <div className="my-2 flex  flex-col">
                <div className="mb-1 sm:mb-0 space-y-3">
                    {/* BUTTON GROUP */}
                    <div className='relative flex items-center justify-start space-x-2 w-2/6'>
                        <button className="bg-blue-500 hover:bg-blue-700 block text-white text-xs py-1 px-4 w-full rounded whitespace-nowrap">
                            Bất động sản
                        </button>
                        <button className="bg-white-500 hover:bg-white-700 block text-black text-xs py-1 px-4 w-full rounded border border-solid border-gray-300 hover:border-gray-900 whitespace-nowrap">
                            Khách hàng            </button>
                        <button className="bg-white-500 hover:bg-white-700 block text-black text-xs py-1 px-4 w-full rounded border border-solid border-gray-300 hover:border-gray-900 whitespace-nowrap">
                            Theo dõi tin đăng
                        </button>
                    </div>

                    {/* SELECTION GROUP */}
                    <div className="relative flex space-x-4">
                        <div className="relative flex justify-center w-36">
                            <select className="form-select appearance-none
                                    block
                                    w-full
                                    px-1
                                    py-1.5
                                    text-xs
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                defaultValue="default"
                            >
                                <option value="default" disabled>Trạng thái</option>
                                <option value="is_showing">Đang hiển thị</option>
                                <option value="deleted">Đã xóa</option>
                                <option value="expired">Đã hết hạn</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>

                            </div>
                        </div>
                        <div className="relative flex justify-center w-36">

                            <select className="form-select appearance-none
                                    block
                                    w-full
                                    px-1
                                    py-1.5
                                    text-xs
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                defaultValue="default"

                            >
                                <option value="default" disabled>Loại tin</option>
                                <option value="advertise">Quảng cáo</option>
                                <option value="normal">Thường</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* TABLE */}
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden h-screen">

                    <table className="min-w-full leading-normal table-fixed ">
                        <thead>
                            <tr>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-5">
                                    #
                                </th>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-5">
                                    ID
                                </th>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-40">
                                    Tiêu đề
                                </th>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-16">
                                    Trạng thái
                                </th>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-16">
                                    Loại tin
                                </th>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-16">
                                    Thời hạn
                                </th>
                                <th
                                    className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 tracking-wider w-16">
                                    Tác vụ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataItems ? (
                                    <>{
                                        dataItems.map((item, index) => (
                                            <tr className='hover:bg-gray-100' key={item.id}>
                                                <td className="px-2 py-5 text-xs rounded-l-full w-5">
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 font-bold truncate">
                                                                {item.st}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-5 text-xs w-5">
                                                    <p className="text-gray-900 truncate ">{item.id}</p>
                                                </td>
                                                <td className="px-2 py-5 text-xs w-44">
                                                    <p className="text-gray-900 w-40 truncate ...">
                                                        {item.title}
                                                    </p>
                                                </td>
                                                <td className="px-2 py-5 text-xs text-center w-16">
                                                    {
                                                        item.status === 'is_showing' &&
                                                        <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                className="absolute inset-0  bg-lime-100 rounded-full"></span>
                                                            <span className="relative whitespace-nowrap ">
                                                                Đang hiển thị
                                                            </span>

                                                        </span>
                                                    }
                                                    {
                                                        item.status === 'deleted' && <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                className="absolute inset-0 bg-gray-300  rounded-full"></span>
                                                            <span className="relative whitespace-nowrap  text-black">
                                                                Đã xóa
                                                            </span>
                                                        </span>
                                                    }
                                                    {
                                                        item.status === 'expired' && <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span aria-hidden
                                                                className="absolute inset-0  bg-red-600  rounded-full"></span>
                                                            <span className="relative whitespace-nowrap text-white">
                                                                Hết hạn
                                                            </span>
                                                        </span>
                                                    }

                                                </td>
                                                <td className="px-2 py-5 text-xs w-16">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight whitespace-nowrap">
                                                        {
                                                            item.typeNew === 'advertise' && "Quảng cáo"
                                                        }
                                                        {
                                                            item.typeNew === 'normal' && "Bình thường"
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-2 py-5 text-xs w-16">
                                                    <span className="relative inline-block px-3 py-1 font-normal text-black leading-tight whitespace-nowrap">
                                                        {
                                                            item.lifeTime === 'day' && `Còn ${item.deadline} ngày`
                                                        }
                                                        {
                                                            item.lifeTime === 'week' && `Còn ${item.deadline} tuần`
                                                        }
                                                        {
                                                            item.lifeTime === 'month' && `Còn ${item.deadline} tháng`
                                                        }
                                                        {
                                                            item.lifeTime === 'expired' && "Hết hạn"
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 flex items-center justify-between text-xs rounded-r-full space-x-1">
                                                    <div className="relative group">
                                                        <button className="bg-blue-500 hover:bg-blue-700 block text-white text-xs py-1 px-4 w-full rounded-full whitespace-nowrap">
                                                            Gia hạn
                                                        </button>
                                                        <div className="absolute w-200 h-auto bg-white top-120 z-50 left-0 border rounded-md p-2 space-y-2 hidden group-hover:flex hover:flex flex-col justify-center after:content-[''] after:-top-3 after:w-1/2 after:h-6 after:absolute after:z-50 after:bg-transparent">
                                                            <h4 className='text-gray-400 font-bold text-center'>Chọn loại gia hạn</h4>
                                                            <button className="bg-white-500  hover:bg-blue-700 block text-black hover:text-white text-xsm p-0 w-full rounded-full border border-gray-300 hover:border-gray-900 hover:border-transparent whitespace-nowrap">
                                                                1 ngày 10 - HODA
                                                            </button>
                                                            <button className="bg-white-500  hover:bg-blue-700 block text-black hover:text-white text-xsm  p-0 w-full rounded-full border border-gray-300 hover:border-gray-900 hover:border-transparent whitespace-nowrap">
                                                                1 tuần 60 - HODA
                                                            </button>
                                                            <button className="bg-white-500  hover:bg-blue-700 block text-black hover:text-white text-xsm  p-0 w-full rounded-full border border-gray-300 hover:border-gray-900 hover:border-transparent whitespace-nowrap">
                                                                1 tháng 200 - HODA
                                                            </button>
                                                            <button className="bg-white-500  hover:bg-blue-700 block text-black hover:text-white text-xsm  p-0 w-full rounded-full border border-gray-300 hover:border-gray-900 hover:border-transparent whitespace-nowrap">
                                                                Miễn phí 3 ngày (Quảng cáo)
                                                            </button>
                                                            <button className="bg-white-500  hover:bg-blue-700 block text-black hover:text-white text-xsm  p-0 w-full rounded-full border border-gray-300 hover:border-gray-900 hover:border-transparent whitespace-nowrap">
                                                                Miễn phí 1 ngày (Quảng cáo)
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button className="bg-white-500 hover:bg-white-700 block text-black hover:text-gray-900 text-xs py-1 px-4 w-full rounded-full border border-gray-300 hover:border-gray-900 whitespace-nowrap">
                                                        Đẩy tin
                                                    </button>
                                                    <button className="bg-white-500 hover:bg-white-700 block text-black hover:text-gray-900 text-xs py-1 px-1 w-full">
                                                        <BiTrashAlt
                                                            fontSize={18}
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </>


                                ) : (
                                    <tr className='hover:bg-gray-100'>
                                        <td className="px-5 py-5 text-xs rounded-l-full">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <Skeleton width={20} />

                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 text-xs">
                                            <Skeleton width={64} />
                                        </td>
                                        <td className="px-5 py-5 text-xs ">
                                            <Skeleton width={176} />
                                        </td>
                                        <td className="px-5 py-5 text-xs">
                                            <Skeleton width={64} />
                                        </td>
                                        <td className="px-5 py-5 text-xs">
                                            <Skeleton width={64} />
                                        </td>
                                        <td className="px-5 py-5 text-xs">
                                            <Skeleton width={64} />
                                        </td>
                                        <td className="px-5 py-5 flex items-center justify-between text-xs rounded-r-full space-x-1">
                                            <button className="bg-blue-500 hover:bg-blue-700 block text-white text-xs py-1 px-4 w-full rounded-full whitespace-nowrap">
                                                Gia hạn
                                            </button>
                                            <button className="bg-white-500 hover:bg-white-700 block text-black text-xs py-1 px-4 w-full rounded-full border-2 border-gray-300 whitespace-nowrap">
                                                Đẩy tin
                                            </button>
                                            <button className="bg-white-500 hover:bg-white-700 block text-black text-xs py-1 px-1 w-full">
                                                <BiTrashAlt
                                                    fontSize={18}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {/* PAGINATION */}
                    {
                        dataItems && <Pagination />
                    }

                </div>
            </div>

        </div>
    </div>
}



export default TableControl;