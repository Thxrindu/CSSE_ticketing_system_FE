import React, { useState } from 'react'

function QuickLoan() {

    const [loan, setLoan] = useState(500.00);
    const [date, setDate] = useState('2022/03/03');
    const [loanStatus, setLoanStatus] = useState(true);

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

            <h2 style={{ textAlign: 'center' }}> Your previous loan  </h2>
            <div style={{
                backgroundColor: 'rgba(214, 25, 192, 0.792)',
                borderRadius: '15px',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>

                <h1 style={{ color: 'white', fontWeight: 'bold' }}>
                    Rs.{loan}/=
                </h1>
                <h3 style={{ fontWeight: 'bold', color: '#471163' }}> Date : {date} </h3>
            </div>

            <center>
                { loanStatus ? <button disabled
                    className='btn btn-lg'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px',
                        width:'300px'
                    }}> Get a Quick Loan </button> :
                    <button 
                    className='btn btn-lg'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px',
                        width:'300px'
                    }}> Get a Quick Loan </button>}
                <button
                    className='btn btn-lg'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px',
                        width:'300px'
                    }}> Settle Loan </button>
            </center>
            {loanStatus ? <h5 style={{color:'red'}}> 
                You have previous loans that not settled yet, please settle them before you get a new loan.
                </h5> : null}

        </div>
    )
}

export default QuickLoan
