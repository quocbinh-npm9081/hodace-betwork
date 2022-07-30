import React from "react";
import Profile from "./Profile";
import TableControl from "./TableControl";
const Dashboard: React.FC = () => {
    return <div className='relative pl-28 w-full flex items-start justify-between'>
        <Profile />
        <TableControl />
    </div>

}


export default Dashboard