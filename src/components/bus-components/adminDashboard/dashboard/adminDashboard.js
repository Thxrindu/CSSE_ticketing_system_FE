import AdminSidebar1 from "../sideBar";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './dashboard.css';
import 'react-calendar/dist/Calendar.css';
import { PieChart } from 'react-minimal-pie-chart';
import axios from "axios";
import { Chart } from "react-google-charts";
import "./admin-report.css"


const AdminDashboard = () => {

    const [value, onChange] = useState(new Date());
    const [items, setItems] = useState([]);
    const [BusDate, setBusDate] = useState([]);
    const [BusCount, setBusCount] = useState();
    const [TodayBusCount, setTodayBusCount] = useState(0);

    // today bus count
    function getToDayBusCount() {
        axios.get("http://localhost:5050/bus/").then((res) => {

            setItems(res.data);

            const currentDate = new Date();
            const today = (currentDate.getFullYear() + '-' + ((currentDate.getMonth() > 8) ? (currentDate.getMonth() + 1) : ('0' + (currentDate.getMonth() + 1))) + '-' + ((currentDate.getDate() > 9) ? currentDate.getDate() : ('0' + currentDate.getDate())));

            var count = 0;
            for (let i = 0; i < res.data.length; i++) {
                count++
                setBusDate(res.data[i].busDate);
                console.log("bus date array", res.data[i].busDate)
            }


            var count2 = 0;
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].busDate.split("T")[0] === today) {
                    count2++
                }
                // console.log("todayyy bus ", res.data[i])
                console.log("todayyy bus ", count2)
                console.log("todayyy ", today)
            }

            setTodayBusCount(count2);
            console.log("final today bus count", count2)

        })
    }

    // get total buses
    function getItems() {
        axios.get("http://localhost:5050/bus").then((res) => {

            // console.log("all bus", res.data)

            setItems(res.data);
            setBusDate(res.data.busDate);

            var count = 0;
            for (let i = 0; i < res.data.length; i++) {
                count++

            }
            setBusCount(count);

            // console.log("bus count", count)


        })
    }


    useEffect(() => {
        getItems();
        getToDayBusCount();
    }, [])


    const data01 = [
        ["SERVICE", "BUSSES"],
        ["TODAY", TodayBusCount],
        ["OTHER DAYS", BusCount - TodayBusCount]
    ];

    const options1 = {
        title: "TODAY ASSIGN NUMBER OF BUSES",
        // sliceVisibilityThreshold: 0.2, // 20%
        pieHole: 0.4,
        is3D: false,
    };


    return (
        <div >
            <AdminSidebar1 />
            <div className="section-to-print">
                <div className="container" style={{ marginLeft: "350px", marginTop: "80px", marginBottom: "" }}>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <div class="card" style={{ height: "210px" , marginTop:"-30px"}}>
                                        <div class="row">
                                            <div class="column">
                                                <img style={{ marginLeft: "60px", marginTop: "10px", width: "200px", borderRadius: "25px" }} src="../images/bus2.png"></img>
                                            </div>
                                            <div class="column" style={{ marginLeft: "-20px", marginTop: "60px", width: "200px", borderRadius: "25px" }} >
                                                <h6 style={{ textAlign: "center", fontSize: '24px' }}><b>Total Number  of Assign Buses</b></h6>
                                                <h5 style={{ textAlign: "center", marginTop: "20px" }} >{BusCount}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="card2" style={{ width: "", marginLeft: "50px" }}>
                                        <Calendar onChange={onChange} value={value}/>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div class="card1" style={{ height: "240px" , marginTop:"-20px" }}>
                                        <div class="row">
                                            <div class="column">
                                                <img style={{ marginLeft: "40px", marginTop: "10px", width: "200px", borderRadius: "25px" }} src="../images/money1.png"></img>
                                            </div>
                                            <div class="column" style={{ marginLeft: "-20px", marginTop: "60px", width: "200px", borderRadius: "25px" }} >


                                                <h4 style={{ textAlign: "center" }}><b>Total Fares Today</b></h4>
                                                <h5 style={{ textAlign: "center" }} >Rs. 14,000/=</h5>
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div class="card1" style={{ height: "200px" , width: "", marginLeft: "-100px" }}>
                                        <div class="row">
                                            <div class="column">
                                                <img style={{ marginLeft: "40px", marginTop: "10px", width: "200px", borderRadius: "25px" }} src="../images/money2.png"></img>
                                            </div>
                                            <div class="column" style={{ marginLeft: "-20px", marginTop: "40px", width: "200px", borderRadius: "25px" }} >
                                                <h4 style={{ textAlign: "center" }}><b>Total Finance Today</b></h4>
                                                <h5 style={{ textAlign: "center" }} >Rs. 1,500/=</h5>
                                            </div>
                                        </div>


                                    </div>
                                </td>
                            </tr>
                            <tr>

                            </tr>
                        </thead>
                    </table>
                    <div style={{ marginTop: "20px", marginLeft: "0px", width: "1050px" , height:"300px"}}>
                        <Chart
                            chartType="PieChart"
                            data={data01}
                            options={options1}
                            width={"1050px"}
                            height={"250px"}
                        />
                    </div>
                    {/* <Container> */}
                    {/* <Row>
                        <Col xs={6} md={6}>
                            <div class="card">
                                <img style={{ marginLeft: "140px", marginTop: "20px", width: "200px", borderRadius: "25px" }} src="../images/bus2.jpg"></img>
                                <h4 style={{ textAlign: "center" }}><b>Total Number of Buses</b></h4>
                                <p style={{ textAlign: "center" }} >{BusCount}</p>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div class="card2" style={{ width: "" }}>
                                <Calendar onChange={onChange} value={value} />
                            </div>
                        </Col>
                    </Row> */}
                    {/* <Row>
                        <Col xs={6} md={6}>
                            <div class="card">
                                <img style={{ marginLeft: "140px", marginTop: "20px", width: "200px", borderRadius: "25px" }} src="../images/bus.png"></img>
                                <h4 style={{ textAlign: "center" }}><b>Total Number of Buses</b></h4>
                                <p style={{ textAlign: "center" }} >{BusCount}</p>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div class="card">
                                <img style={{ marginLeft: "140px", marginTop: "20px", width: "200px", borderRadius: "25px" }} src="../images/bus.png"></img>
                                <h4 style={{ textAlign: "center" }}><b>Total Number of Buses</b></h4>
                                <p style={{ textAlign: "center" }} >{BusCount}</p>
                            </div>
                        </Col>
                    </Row> */}
                    {/* <Row>
                        <Col style={{ marginTop: "20px", width: "100px" }}>
                            <Chart
                                chartType="PieChart"
                                data={data01}
                                options={options1}
                                width={"100%"}
                                height={"400px"}
                            />
                        </Col>
                    </Row>
                </Container> */}




                </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
                {/* <button className="reportbtn" style={{ backgroundColor: "rgba(0, 254, 8, 0.852)", borderRadius: "10px", height: "30px", marginLeft: "500px" }} onClick={() => window.print()}>Print</button> */}
            </div>

        </div>
    )
};

export default AdminDashboard;