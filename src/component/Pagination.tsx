import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";


const Pagination: React.FC = () => {

    const { pageCount, offset, setOffset } = useGlobalContext();

    const pagination: any[] = [];

    for (let i = 1; i <= pageCount; i++) {

        pagination.push(i)

    }


    const [arrOfCurPagination, setArrOfCurPagination] = useState<number[]>([]);

    useEffect(() => {

        let tempNumberOfPages = [...pagination]; //[1,2,3,4,5,6,7]

        if (offset >= 1 && offset <= 4) {

            tempNumberOfPages = [1, 2, 3, 4, 5, '...', pagination.length];//[1,2,3,4,5,'...',7]

        } else if (offset === 5) {

            const sliced = tempNumberOfPages.slice(0, 6);

            tempNumberOfPages = [...sliced, pagination.length];

        } else if (offset > 5 && offset < pagination.length - 1) {

            const sliced_1 = pagination.slice(offset - 2, offset);
            const sliced_2 = pagination.slice(offset, offset + 1);

            tempNumberOfPages = ([1, '...', ...sliced_1, ...sliced_2, '...', pagination.length]);

        } else if (offset > pagination.length - 3) {

            const sliced = pagination.slice(pagination.length - 4);

            tempNumberOfPages = ([1, '...', ...sliced]);

        }

        setArrOfCurPagination(tempNumberOfPages);

    }, [offset])


    return (
        <div className="flex items-center space-x-1 mt-10 w-full justify-center">
            <button className="px-4 py-1 text-xs text-black bg-white border border-black rounded-full "
                disabled={offset === 1}
                onClick={(prev) => setOffset((prev: any) => prev === 1 ? prev : prev - 1)}
            >
                Quay lại
            </button>
            <div className="flex">
                {
                    arrOfCurPagination.map((item, index) => (
                        <div className={`px-3 text-xs text hover:text-gray-300 cursor-pointer ${offset === (item) && "pagi-active"}`}
                            key={index}
                            onClick={() => setOffset(item)}
                        >
                            {
                                item
                            }
                        </div>
                    ))
                }
            </div>
            <button className="px-4 py-1 text-xs text-white bg-slate-800 rounded-full"
                disabled={offset === 7}
                onClick={(prev) => setOffset((prev: any) => prev === pageCount ? prev : prev + 1)}
            >
                Tiếp theo
            </button>

        </div>

    )
}


export default React.memo(Pagination);