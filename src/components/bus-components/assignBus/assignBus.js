import { useState } from "react";
import axios from 'axios';
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import './style.css';
import AdminSidebar1 from "../adminDashboard/sideBar";
const AssignBus = () => {

    const [data, setData] = useState({
        busDate: "",
        busNo: "",
        startLocation: "",
        arriveLocation: "",
        startingTime: "",
        arriveTime: "",
        driverName: "",
        driverContact: "",
        inspectorName: "",
        inspectorContact: "",
        seat: "32",
        totalAmount: "0",
        noOfPassengers: "0"
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const url = "http://localhost:5050/bus/add";
            const { data: res } = await axios.post(url, data);

            Swal.fire({
                title: "Success!",
                text: res,
                icon: "success",
                showConfirmButton: false,
            })

            setTimeout(() => {
                window.location = "/bus-time-table"
            }, 2000)




        }
        catch (error) {

            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                // setError(error.response.data.message);
                alert(error.response.data.message)
            }
        }
    }

    return (
        <div >
            <AdminSidebar1 />
            <div className="assignContainer">
                <form onSubmit={handleSubmit}>
                    <h2 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Travel Details</h2>
                    <div className="">
                        <Container>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }} >Enter Date    :</label>
                                    <input
                                        type="date"
                                        name='busDate'
                                        onChange={handleChange}
                                        value={data.busDate}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <label style={{ fontWeight: "bold" }}>Bus No    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Bus No'
                                        name='busNo'
                                        onChange={handleChange}
                                        value={data.busNo}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Starting Location    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Starting Location'
                                        name='startLocation'
                                        onChange={handleChange}
                                        value={data.startLocation}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Arrive Location    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Your Arrive Location'
                                        name='arriveLocation'
                                        onChange={handleChange}
                                        value={data.arriveLocation}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Starting Time    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Starting Time'
                                        name='startingTime'
                                        onChange={handleChange}
                                        value={data.startingTime}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Arrive Time   :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Address 2'
                                        name='arriveTime'
                                        onChange={handleChange}
                                        value={data.arriveTime}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                        </Container>

                        <h3 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Driver Details</h3>

                        <Container>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Assign Driver    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Assign Driver name'
                                        name='driverName'
                                        onChange={handleChange}
                                        value={data.driverName}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Driver Contact    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Driver Contact'
                                        name='driverContact'
                                        onChange={handleChange}
                                        value={data.driverContact}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                        </Container>

                        <h3 style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "100px" }}>Inspector Details</h3>

                        <Container>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Assign Inspector    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Assign Inspector name'
                                        name='inspectorName'
                                        onChange={handleChange}
                                        value={data.inspectorName}
                                        required
                                        className="form-control"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <label style={{ fontWeight: "bold" }}>Inspector Contact    :</label><br></br>
                                    <input
                                        type="text"
                                        placeholder='Driver Contact'
                                        name='inspectorContact'
                                        onChange={handleChange}
                                        value={data.inspectorContact}
                                        required
                                        className="form-control"
                                    />
                                </Col>
                            </Row>


                            <button type='submit' className="btn btn-success" style={{ marginBottom: "50px", marginTop: "35px", marginLeft: "400px" }}>Assign Now</button>
                        </Container>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AssignBus;