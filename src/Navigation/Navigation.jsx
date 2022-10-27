import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import AdminSidebar1 from '../components/bus-components/adminDashboard/sideBar';
import AssignBus from '../components/bus-components/assignBus/assignBus';
import BusTimeTable from '../components/bus-components/busTimeTable/busTimeTable';
import TravelHistory from '../components/bus-components/travelHistory/travelHistory';
import UpdateAssignBus from '../components/bus-components/updateAssignBus/updateAssignBus';
import UserHome from '../components/user-components/user-home';

function Navigation() {
    return (
        <Routes>

            <Route exact path="/" element={<UserHome/>}/>
            <Route path='/userHome' element={<UserHome />} />


            <Route path='/travel-history' element={< TravelHistory />} />
            <Route path='/bus-time-table' element={< BusTimeTable />} />
            <Route path='/assign-bus' element={< AssignBus />} />

            <Route path='/sidebar1' element={< AdminSidebar1 />} />
            <Route path='/update' element={< UpdateAssignBus />} />


        </Routes>
    )
}

export default Navigation