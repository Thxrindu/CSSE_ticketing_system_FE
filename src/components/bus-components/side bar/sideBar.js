import React, { Component } from 'react';
import './style.css';



const AdminSidebar = () => {

    return (
        <div>
            <div className="sidenav">
                <a href="/adminDashboard">dashboard</a>
                <a href="/travel-history">Travel History</a>
                <a href="/assign-bus">Assign Bus</a>
                <a href="/bus-time-table">Bus Timetable</a>
            </div>
        </div>
    )

}

export default AdminSidebar;
