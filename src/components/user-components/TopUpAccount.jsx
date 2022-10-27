import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

function TopUpAccount() {
    return (
        <div style={{border:'solid 2px', borderRadius:'20px', backgroundColor:'white', paddingTop:'10px',paddingBottom:'10px', paddingLeft:'50px',paddingRight:'50px'}}>

        <h3 style={{color:'#0ead5b'}}> Enter Payment Details</h3>
        <Container>
            <Row style={{marginTop:'5px'}}>
                <Col>
                <h6> Amount</h6>
                </Col>
                <Col>
                <input type="text" placeholder='Enter Amount' style={{borderRadius:'6px', width:'100%'}} />
                </Col>
            </Row>
            <Row style={{marginTop:'5px'}}>
                <Col>
                <h6> Select Payment Type</h6>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row style={{marginTop:'5px'}}>
                <Col>
                <h6> Account Holder Name</h6>
                </Col>
                <Col>
                <input type="text" placeholder='Enter name' style={{borderRadius:'6px', width:'100%'}} />
                </Col>
            </Row>
            <Row style={{marginTop:'5px'}}>
                <Col>
                <h6> Account No</h6>
                </Col>
                <Col>
                <input type="text" placeholder='XXXX-XXXX-XXXX-XXXX' style={{borderRadius:'6px', width:'75%'}} />
                <input type="text" placeholder='CVC' style={{borderRadius:'6px', width:'25%'}} />
                </Col>
            </Row>
            <Row style={{marginTop:'5px'}}>
                <Col>
                <h6> Card Expiry Date</h6>
                </Col>
                <Col>
                <input type="text" placeholder='Month' style={{borderRadius:'6px', width:'50%'}} />
                <input type="text" placeholder='Year' style={{borderRadius:'6px', width:'50%'}} />
                </Col>
            </Row>
            <Row justify='center'>
                <button style={{backgroundColor:'rgba(0, 254, 8, 0.852)', borderRadius:'20px', marginTop:'25px'}} className='btn'> Top Up Now</button>
            </Row>
        </Container>

        </div>
    )
}

export default TopUpAccount
