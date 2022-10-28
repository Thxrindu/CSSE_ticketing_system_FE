import React from 'react'
import { useState } from 'react'

function DayPass() {

    const [pass, setPass] = useState(2500.00)

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

            <div style={{
                backgroundColor: 'rgba(189, 164, 133, 0.114)',
                borderRadius: '15px',
                textAlign: 'center',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>

                <h1 style={{ color: '#0c8546', fontWeight: 'bold' }}>
                    Rs.{pass}/=
                </h1>
                <h2 style={{ fontWeight: 'bold' }}> 24 Hours Travel </h2>
            </div>

            <center>
                <button
                    className='btn btn-lg'
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 0.852)',
                        borderRadius: '15px',
                        marginBottom: '20px'
                    }}> Get Day Pass </button>
            </center>

        </div>
    )
}

export default DayPass
