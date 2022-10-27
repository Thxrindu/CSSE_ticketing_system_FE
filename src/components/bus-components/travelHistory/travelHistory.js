import axios from "axios";
import {  Modal } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./allUsers.css";
import "./tabledata.css";
import styles from './style.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import AdminSidebar1 from "../adminDashboard/sideBar";
import { Col, Container, Row } from "react-bootstrap";
import UpdateAssignBus from "../updateAssignBus/updateAssignBus";
// import InsertPoliceFinesDetails from "../insert/insertPoliceFineData";
// import UpdatePoliceFinesDetails from "../update/updatePoliceFineData";


function TravelHistory() {

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
            width: "170px"
        },
        {
            name: 'Bus No',
            selector: row => row.busNo,
            width: '160px'
        },
        {
            name: 'Start location',
            selector: row => row.startLocation,
            sortable: true,
            width: '350px'

        },
        {
            name: 'Starting Time',
            selector: row => row.startingTime,
            sortable: true,
            width: '350px'

        },
        {
            name: 'Arrive Location',
            selector: row => row.arriveLocation,
            sortable: true,
            width: '250px'

        },
        {
            name: 'Arriving Time',
            selector: row => row.arriveTime,
            sortable: true,
            width: '350px'

        },
        {
            name: 'Assign Driver',
            selector: row => row.driverName,
            sortable: true,
            width: '350px'

        },
        {
            name: 'Assign Inspector',
            selector: row => row.inspectorName,
            sortable: true,
            width: '250px'

        },
        {
            name: 'Action',
            cell: (row) =>
                <>
                    <Fragment>
                        {/* <button onClick={() => openUpdateModal(row._id)} type="button" className=" editbtn btn btn-outline-secondary btn-sm" >  Edit</button> */}
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
            const user = JSON.parse(sessionStorage.getItem("policemen"));
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

    const clearData = (e) => {
        window.location.reload(false);

    }

    const goBack = () => {
        // window.location = "/user-admin-dashboard"
    }

    // const openInsertModal = () => {
    //     setModal(true);
    // }

    // const closeInsertModal = () => setModal(false);

    const openUpdateModal = (data) => {
        setUpdateModal(true);
        window.sessionStorage.setItem("busDetails", data);

    }

    // const closeUpdateModal = () => setUpdateModal(false);

    // const ModalContent = () => {
    //     return (
    //         <Modal show={updateModal} onHide={closeUpdateModal} backdrop="static" size="lg">
             
           
    //         </Modal>
    //     )
    // }

    return (
        <>
{/* <AdminSidebar1/> */}
            <div className="container bkgrnd">

                <h1 className="header">Travel History</h1>

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
                                <input
                                    type="text"
                                    placeholder="Search here.."
                                    className="w-25 form-control"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button className={styles.can_btn} style={{ marginLeft: "15px" }} onClick={clearData}> Clear</button>
                                
                            </>
                        }
                    />
                    {/* {updateModal ? <ModalContent /> : null} */}
                </div>

            </div>

        </>
    );

}

export default TravelHistory;