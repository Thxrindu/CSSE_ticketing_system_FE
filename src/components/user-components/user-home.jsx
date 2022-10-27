import React from 'react';
import UserNav from '../navbars/UserNav';
import { Container, Row, Col } from 'react-grid-system';
import './user_home.css';
import { useState } from 'react';
import MyAccount from './MyAccount';
import MyBalance from './MyBalance';
import TopUpAccount from './TopUpAccount';
import DayPass from './DayPass';

function UserHome() {

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const setView = (n) => {
        if (n === 1){
            setShow1(true);
            setShow2(false);
            setShow3(false);
            setShow4(false);
        } else if (n === 2){
            setShow1(false);
            setShow2(true);
            setShow3(false);
            setShow4(false);
        } else if (n === 3){
            setShow1(false);
            setShow2(false);
            setShow3(true);
            setShow4(false);
        } else if (n === 4){
            setShow1(false);
            setShow2(false);
            setShow3(false);
            setShow4(true);
        }
    }

    return (
        <div>
            <div>
                <UserNav />
            </div>
            <div style={{ paddingTop: "150px" }}>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <Row>
                                <button className='btns btn btn-primary' onClick={() => setView(1)}> My Account </button>
                            </Row>
                            <Row>
                                <button className='btns btn btn-primary' onClick={() => setView(2)}> My Balance </button>
                            </Row>
                            <Row>
                                <button className='btns btn btn-primary' onClick={() => setView(3)}> Top Up Account </button>
                            </Row>
                            <Row>
                                <button className='btns btn btn-primary' onClick={() => setView(4)}> Get a Day Pass </button>
                            </Row>
                            
                        </Col>
                        <Col>
                        <div>
                            {show1 ? <MyAccount/> : null}
                            {show2 ? <MyBalance/> : null}
                            {show3 ? <TopUpAccount/> : null}
                            {show4 ? <DayPass/> : null}
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default UserHome
