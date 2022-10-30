import AdminSidebar1 from "../adminDashboard/sideBar";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './dashboard.css';
import 'react-calendar/dist/Calendar.css';
import { PieChart } from 'react-minimal-pie-chart';
import axios from "axios";
import { Chart } from "react-google-charts";

const PassengerReport = () => {

    const [value, onChange] = useState(new Date());
    const [items, setItems] = useState([]);
    const [BusDate, setBusDate] = useState([]);
    const [PassengersCount, setPassengersCount] = useState();
    const [LocalPassengersCount, setLocalPassengersCount] = useState();

    // today bus count
    function getLocalPassengersCount() {
        axios.get("http://localhost:5050/passenger").then((res) => {

            setItems(res.data);

            var count2 = 0;
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].type.split("T")[0] === 'Local') {
                    count2++
                    setLocalPassengersCount(count2);
                }
            }

            console.log("local count", count2)

        })
    }

    // get total buses
    function getItems() {
        axios.get("http://localhost:5050/passenger").then((res) => {

            console.log("all bus", res.data)

            setItems(res.data);
            setBusDate(res.data.busDate);

            var count = 0;
            for (let i = 0; i < res.data.length; i++) {
                count++

            }
            setPassengersCount(count);

            console.log("bus count", PassengersCount)


        })
    }


    useEffect(() => {
        getItems();
        getLocalPassengersCount();
    }, [])


    const data1 = [
        ["TYPE", "NUMBER OF Passengers"],
        ["LOCAL PASSENGERS", LocalPassengersCount],
        ["FOREIGN PASSENGERS", PassengersCount - LocalPassengersCount]
    ];

    const options1 = {
        title: "Passengers Count",
        sliceVisibilityThreshold: 0.2, // 20%
        pieHole: 0.4,
        is3D: false,
    };


    return (
        <div >
            <AdminSidebar1 />
            <div className="container" style={{ marginLeft: "350px", marginTop: "20px", marginBottom: "20px" }}>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <div class="card">
                                    <img style={{ marginLeft: "230px", marginTop: "20px", width: "200px", borderRadius: "25px" }} src="../images/passenger.png"></img>
                                    <h4 style={{ textAlign: "center" }}><b>Total Number of Passengers</b></h4>
                                    <h5 style={{ textAlign: "center" }} >{PassengersCount}</h5>
                                </div>
                            </td>
                            <td>
                                <div class="card2" style={{ width: "", marginLeft: "50px" }}>
                                    <Calendar onChange={onChange} value={value} />
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div class="card1">
                                    <img style={{ marginLeft: "140px", marginTop: "20px", width: "200px", borderRadius: "25px" }} src="../images/world.png"></img>
                                    <h4 style={{ textAlign: "center" }}><b>Foreign Passengers</b></h4>
                                    <h5 style={{ textAlign: "center" }} >{PassengersCount - LocalPassengersCount}</h5>
                                </div>
                            </td>
                            <td>
                                <div class="card1" style={{ width: "", marginLeft: "-100px" }}>
                                    <img style={{ marginLeft: "140px", marginTop: "20px", width: "200px", borderRadius: "25px" }} src="../images/sriLanka.png"></img>
                                    <h4 style={{ textAlign: "center" }}><b>Local Passengers</b></h4>
                                    <h5 style={{ textAlign: "center" }} >{LocalPassengersCount}</h5>
                                </div>
                            </td>
                        </tr>
                        <tr>

                        </tr>
                    </thead>
                </table>
                <div style={{ marginTop: "20px", marginLeft: "0px", width: "1050px" }}>
                    <Chart
                        chartType="PieChart"
                        data={data1}
                        options={options1}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>

            </div>

        </div>
    )
};

export default PassengerReport;