import React, { Component } from 'react';
import './style.css';




const AdminSidebar1 = () => {

    return (
        <div>
            {/* side bar */}
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-smile'></i>
                    <span class="text">Admin Dashboard</span>
                </a>
                <ul class="side-menu top">
                    <li class="">
                        <a href="#">
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/travel-history">
                            <i class='bx bxs-shopping-bag-alt' ></i>
                            <span class="text">Travel History</span>
                        </a>
                    </li>
                    <li>
                        <a href="/assign-bus">
                            <i class='bx bxs-doughnut-chart' ></i>
                            <span class="text">Assign Bus</span>
                        </a>
                    </li>
                    <li>
                        <a href="/bus-time-table">
                            <i class='bx bxs-message-dots' ></i>
                            <span class="text">Bus Timetable</span>
                        </a>
                    </li>
                </ul>
                <ul class="side-menu">

                    <li>
                        <a href="../loginpage.php" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>


        </div>
    )

}

export default AdminSidebar1;
