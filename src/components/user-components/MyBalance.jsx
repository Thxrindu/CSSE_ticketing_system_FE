import React from 'react'
import { useState } from 'react'

function MyBalance() {

    const [balance, setBalance] = useState(1000.00);
    const [dailyPass, setDailyPass] = useState(true);
    const [fine, setFine] = useState(500.00);

    return (
        <div 
        style={{ border: 'solid 2px', 
        borderRadius: '20px', 
        backgroundColor: 'white', 
        paddingTop: '10px', 
        paddingBottom: '10px', 
        paddingLeft: '50px', 
        paddingRight: '50px',
        minHeight:'445px' }}>
            <h2 style={{ textAlign: 'center' }}> My Balance</h2>
            <hr></hr>

            <h5 style={{ color: 'darkBlue' }}> Account Balance</h5>
            <h3 style={{ color: 'darkBlue', fontWeight: 'bold' }}> Rs.{balance} </h3>

            <h5 style={{ color: '#128a76' }}> Day Pass Status</h5>
            {dailyPass ? <h3 style={{ color: '#128a76', fontWeight: 'bold' }}> Active</h3> : <h3 style={{ color: '#128a76', fontWeight: 'bold' }}> Inactive</h3>}

            <h5 style={{ color: 'red' }}> Fine amounts</h5>
            <h3 style={{ color: 'red', fontWeight: 'bold' }}> Rs.{fine} </h3>

        </div>
    )
}

export default MyBalance
