import { Form, Button, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";

const UpdateAssignBus = () => {



    //state variables
    let [busDate, setBusDate] = useState("");
    let [busNo, setBusNo] = useState("");
    let [startLocation, setStartLocation] = useState("");
    let [arriveLocation, setArriveLocation] = useState("");
    let [startingTime, setStartingTime] = useState("");
    let [arriveTime, setArriveTime] = useState("");
    let [driverName, setDriverName] = useState("");
    let [driverContact, setDriverContact] = useState("");
    let [inspectorName, setInspectorName] = useState("");
    let [inspectorContact, setInspectorContact] = useState("");
    let [seat, setSeat] = useState("");
    let [totalAmount, setTotalAmount] = useState("");
    let [noOfPassengers, setNoOfPassengers] = useState("");

    // Dealing with field changes to update state
    const busDateUpdate = (event) => {
        setBusDate(event.target.value)
    }
    const busNoUpdate = (event) => {
        setBusNo(event.target.value)
    }
    const startLocationUpdate = (event) => {
        setStartLocation(event.target.value)
    }
    const arriveLocationUpdate = (event) => {
        setArriveLocation(event.target.value)
    }
    const startingTimeUpdate = (event) => {
        setStartingTime(event.target.value)
    }
    const arriveTimeUpdate = (event) => {
        setArriveTime(event.target.value)
    }
    const driverNameUpdate = (event) => {
        setDriverName(event.target.value)
    }
    const driverContactUpdate = (event) => {
        setDriverContact(event.target.value)
    }

    const inspectorNameUpdate = (event) => {
        setInspectorName(event.target.value)
    }
    const inspectorContactUpdate = (event) => {
        setInspectorContact(event.target.value)
    }
    const seatUpdate = (event) => {
        setSeat(event.target.value)
    }
    const totalAmountUpdate = (event) => {
        setTotalAmount(event.target.value)
    }
    const noOfPassengersUpdate = (event) => {
        setNoOfPassengers(event.target.value)
    }

    console.log("mata baaaaaaaaaaaaaaaaaaaaaaaaaa")

    const x = async () => {
     
        console.log(JSON.parse(sessionStorage.getItem("busDetails")))
    }
    const getUser = async () => {
        try {
            // const bus = JSON.parse(sessionStorage.getItem("busDetails"));
            // console.log("update session ", bus)
            const a = window.sessionStorage.getItem('busDetails');
            console.log("aaaaaaaaaaa",a)

            const response = await axios.get('http://localhost:5050/bus/' + a);

            console.log("update response", response)
            setBusDate(response.data.busDate.split("T")[0]);
            setBusNo(response.data.busNo);
            setDriverName(response.data.driverName);
            setDriverContact(response.data.driverContact);
            setInspectorContact(response.data.inspectorContact);
            setInspectorName(response.data.inspectorName);
            setNoOfPassengers(response.data.noOfPassengers);
            setSeat(response.data.seat);
            setArriveLocation(response.data.arriveLocation);
            setArriveTime(response.data.arriveTime);
            setStartLocation(response.data.startLocation);
            setStartingTime(response.data.startingTime);
            setTotalAmount(response.data.totalAmount);
        } catch (err) {
            //console.log(err);
        }
    }

    useEffect(() => {
        getUser();
        x();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const busDetails = {
            busDate: busDate,
            busNo: busNo,
            startLocation: startLocation,
            arriveLocation: arriveLocation,
            startingTime: startingTime,
            arriveTime: arriveTime,
            driverName: driverName,
            driverContact: driverContact,
            inspectorName: inspectorName,
            inspectorContact: inspectorContact,
            seat: seat,
            totalAmount: totalAmount,
            noOfPassengers: noOfPassengers
        }

        const a = window.sessionStorage.getItem('UserDetails');
        console.log("aaaaaaaaaaa",a)


        axios.post('http://localhost:5050/bus/update-profile/' + a, busDetails)

            .then((res) => {

                Swal.fire({
                    title: "Success!",
                    text: res.data,
                    icon: "success",
                    showConfirmButton: false,
                })

                setTimeout(() => {
                    window.location = "/user-profile";
                }, 2000)
            })


    }

    const CancelButton = () => {
        window.location = "/user-profile";
    }

    return (

        <div>
            <div>
                <div>

                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <h2 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Travel Details</h2>
                            <Container>
                                <Row>
                                    <Col xs={6} md={6}>
                                        <label style={{ fontWeight: "bold" }} >Enter Date    :</label><br></br>
                                        <input
                                            type="date"
                                            name='busDate'
                                            onChange={busDateUpdate}
                                            value={busDate}
                                            required
                                            className="form-control"
                                        />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={6} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Bus No    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Bus No'
                                            name='busNo'
                                            onChange={busNoUpdate}
                                            value={busNo}
                                            required
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Starting Location    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Starting Location'
                                            name='startLocation'
                                            onChange={startLocationUpdate}
                                            value={startLocation}
                                            required
                                            className="form-control"
                                        />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Arrive Location    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Your Arrive Location'
                                            name='arriveLocation'
                                            onChange={arriveLocationUpdate}
                                            value={arriveLocation}
                                            required
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Starting Time    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Starting Time'
                                            name='startingTime'
                                            onChange={startingTimeUpdate}
                                            value={startingTime}
                                            required
                                            className="form-control"
                                        />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Arrive Time   :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Address 2'
                                            name='arriveTime'
                                            onChange={arriveTimeUpdate}
                                            value={arriveTime}
                                            required
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>

                            </Container>

                            <h3 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Driver Details</h3>

                            <Container>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Assign Driver    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Assign Driver name'
                                            name='driverName'
                                            onChange={driverNameUpdate}
                                            value={driverName}
                                            required
                                            className="form-control"
                                        />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Driver Contact    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Driver Contact'
                                            name='driverContact'
                                            onChange={driverContactUpdate}
                                            value={driverContact}
                                            required
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>

                            </Container>

                            <h3 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Inspector Details</h3>

                            <Container>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Assign Inspector    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Assign Inspector name'
                                            name='inspectorName'
                                            onChange={inspectorNameUpdate}
                                            value={inspectorName}
                                            required
                                            className="form-control"
                                        />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col xs={9} md={6}>
                                        <label style={{ fontWeight: "bold" }}>Inspector Contact    :</label><br></br>
                                        <input
                                            type="text"
                                            placeholder='Driver Contact'
                                            name='inspectorContact'
                                            onChange={inspectorContactUpdate}
                                            value={inspectorContact}
                                            required
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>


                                <button type='submit' className="btn btn-success" style={{ marginBottom: "50px", marginTop: "35px", marginLeft: "10px" }}>Assign Now</button>
                            </Container>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateAssignBus;
