import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./allUsers.css";
import "./tabledata.css";
import styles from './style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UpdateAssignBus from "../updateAssignBus/updateAssignBus";
import AssignBus from "../assignBus/assignBus";
import AdminSidebar1 from "../adminDashboard/sideBar";
// import InsertPoliceFinesDetails from "../insert/insertPoliceFineData";
// import UpdatePoliceFinesDetails from "../update/updatePoliceFineData";


function BusTimeTable() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);

    const columns = [
        {
            name: 'Date',
            selector: row => row.busDate,
            sortable: true,
            width: "110px"
        },
        {
            name: 'Bus No',
            selector: row => row.busNo,
            width: '90px'
        },
        {
            name: 'Start location',
            selector: row => row.startLocation,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Starting Time',
            selector: row => row.startingTime,
            sortable: true,
            width: '120px'

        },
        {
            name: 'Arrive Location',
            selector: row => row.arriveLocation,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Arriving Time',
            selector: row => row.arriveTime,
            sortable: true,
            width: '120px'

        },
        {
            name: 'Assign Driver',
            selector: row => row.driverName,
            sortable: true,
            width: '130px'

        },
        {
            name: 'Assign Inspector',
            selector: row => row.inspectorName,
            sortable: true,
            width: '140px'

        },
        {
            name: 'Action',
            cell: (row) =>
                <>
                    <Fragment>
                        <button onClick={() => openUpdateModal(row._id)} type="button" className=" editbtn btn btn-outline-secondary btn-sm" >  Edit</button>
                        <button onClick={() => onSubmit(row._id)} type="button" className="btn btn-outline-danger btn-sm" > Delete</button>
                    </Fragment>
                </>
        },
    ];

    const onSubmit = async (id) => {
        await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete the selected item?",
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(

                    'Deleted!',
                    '',
                    'success',
                    axios.delete("http://localhost:5050/bus/" + id)
                        .then((res) => {
                            const modified = filteredItems.filter(item => item._id !== id);
                            setFilteredItems(modified);
                        }),
                )
            } else if (result.isDenied) {
                Swal.fire(
                    'Item is not deleted',
                    '',
                    'error'
                )
            }
        })
    }

    const getItems = async () => {
        try {

            const response = await axios.get('http://localhost:5050/bus/');
            console.log("response", response)
            setItems(response.data);
            setFilteredItems(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    // normal search
    useEffect(() => {
        const result = items.filter((item) => {
            return item.busNo.toLowerCase().match(search.toLowerCase());
        });
        setFilteredItems(result);
    }, [search])


    const [data, setData] = useState({
        fromDate: "",
        toDate: ""
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5050/bus/search", {
                fromDate: data.fromDate,
                toDate: data.toDate,
            })
            .then((response) => {
                setFilteredItems(response.data);

            });
    };

    const clearData = (e) => {
        window.location.reload(false);

    }

    const goBack = () => {
        // window.location = "/user-admin-dashboard"
    }









    // const openInsertModal = () => {
    //     setModal(true);
    // }

    const closeInsertModal = () => setModal(false);

    const openUpdateModal = (data) => {
        setUpdateModal(true);
        window.sessionStorage.setItem("busDetails", data);
        console.log("bustimetable", data)

    }

    const closeUpdateModal = () => setUpdateModal(false);

    const ModalContent = () => {
        return (
            <Modal show={updateModal} onHide={closeUpdateModal} backdrop="static" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Item Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <UpdateAssignBus />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <>
            <AdminSidebar1 />
            <div className="timeTableContainer">
                <div className="container bkgrnd">

                    {/* <Link onClick={goBack} to="#" className="backLink">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        &nbsp;Go Back
                    </Link> */}
                    <h1 className="header">Bus TimeTable</h1>
                    {/* <form onSubmit={handleSubmit}> */}
                        {/* <table style={{ marginLeft: "550px", marginBottom: "-20px" }}>
                            <thead>
                                <tr>
                                    <td>
                                        <div >
                                            <label>From Date     :</label><br></br>
                                            <input
                                                type="Date"
                                                placeholder="Date"
                                                name="fromDate"
                                                onChange={handleChange}
                                                value={data.fromDate}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ marginLeft: "10px" }}>
                                            <label>To Date      :</label><br></br>
                                            <input
                                                type="Date"
                                                placeholder="Date"
                                                name="toDate"
                                                onChange={handleChange}
                                                value={data.toDate}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                                            <button className={styles.g_button} type="submit">
                                                Search
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                        </table> */}
                        {/* <table style={{ marginLeft: "790px" }}>
                            <tr>
                                <td>
                                    <div style={{ marginLeft: "0px" }}>
                                        <button className={styles.g_button} type="submit">
                                            Search
                                        </button>
                                        <button className={styles.can_btn} style={{ marginLeft: "15px" }} onClick={clearData}>
                                            Clear
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </table> */}
                    {/* </form> */}
                    <div className="tbl">
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="500px"
                            highlightOnHover
                            subHeader
                            subHeaderComponent={
                                <>
                                <form onSubmit={handleSubmit}>
                                    <table style={{ marginLeft: "550px", marginBottom: "-60px" }}>
                                        <thead>
                                            <tr>
                                                <td>
                                                    <div >
                                                        <label>From Date     :</label><br></br>
                                                        <input
                                                            type="Date"
                                                            placeholder="Date"
                                                            name="fromDate"
                                                            onChange={handleChange}
                                                            value={data.fromDate}
                                                            required
                                                            className={styles.input}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{ marginLeft: "10px" }}>
                                                        <label>To Date      :</label><br></br>
                                                        <input
                                                            type="Date"
                                                            placeholder="Date"
                                                            name="toDate"
                                                            onChange={handleChange}
                                                            value={data.toDate}
                                                            required
                                                            className={styles.input}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                                                        <button className={styles.g_button} type="submit">
                                                            Search
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                    </form>
                                    <input
                                        type="text"
                                        placeholder="Search Bus Number.."
                                        className="w-25 form-control"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button className={styles.can_btn} style={{ marginLeft: "15px" }} onClick={clearData}> Clear</button>
                                    {/* <button className="addBtn btn btn-outline-dark" style={{ width: '100%' }} onClick={openInsertModal}> Add New Police Fine </button> */}
                                </>
                            }
                        />

                        {updateModal ? <ModalContent /> : null}
                    </div>
                    <Modal show={modal} onHide={closeInsertModal} backdrop="static" size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Insert police Fine Details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                            <AssignBus />
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>



        </>
    );

}

export default BusTimeTable;