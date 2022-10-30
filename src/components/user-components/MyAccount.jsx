import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function MyAccount() {

    const [name, setName] = useState('S.M.T.N.Samarakoon');
    const [email, setEmail] = useState('tharindu@gmail.com');
    const [id, setId] = useState('1999163ddfg79947V');

    return (
        <div style={{
            border: 'solid 2px',
            borderRadius: '20px',
            backgroundColor: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '50px',
            paddingRight: '50px',
            minHeight: '445px'
        }}>
            <h2 style={{ textAlign: 'center' }}> My Account</h2>
            <hr></hr>

            <Container>
                <Row>
                    <Col>
                        <h5 style={{ color: 'darkBlue' }}> Name</h5>
                    </Col>
                    <Col> : </Col>
                    <Col>
                        <h3 style={{ color: 'darkBlue', fontWeight: 'bold' }}> {name} </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{ color: '#128a76' }}> Email</h5>
                    </Col>
                    <Col> : </Col>
                    <Col>
                        <h3 style={{ color: '#128a76', fontWeight: 'bold' }}> {email} </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 style={{ color: 'grey' }}> ID</h5>
                    </Col>
                    <Col> : </Col>
                    <Col>
                        <h3 style={{ color: 'grey', fontWeight: 'bold' }}> {id} </h3>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MyAccount
