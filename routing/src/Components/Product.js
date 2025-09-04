import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
        <section>
            <h1>The product Page</h1>
            <ul type="none">
                <li>
                    <Link to='/Product/Fridge'>Smart Fridge</Link>
                </li>
                <li>
                    <Link to='/Product/Lg-Ac'>LG Ac</Link>
                </li>
                <li>
                    <Link to='/Product/Sony-Led-Tv'>Sony Tv</Link>
                </li>
            </ul>
        </section>
    </>
  )
}

export default Product