import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import UserHome from '../components/user-components/user-home';

function Navigation() {
    return (
        <Routes>

            <Route exact path="/" element={<UserHome/>}/>
            <Route path='/userHome' element={<UserHome />} />
            
        </Routes>
    )
}

export default Navigation