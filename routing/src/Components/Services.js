import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
    let navVAr = useNavigate()
    return (
        <>
            <div>
                <h2> Services </h2>
                <h4>Programmatic navigation here</h4>
                <button onClick={() => { navVAr("/Home") }}>GO Home</button>
            </div>
        </>

    )
}

export default Services