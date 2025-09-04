import React from 'react'
import { useParams,Link } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    return (
        <>
            <h2>Product details</h2>
            <section>
                <p>
                    you chose the product - {params.productId}
                </p>
                <p>

                    <Link to='/Product'>Go back products</Link>

                </p>
            </section>
        </>

    )
}

export default ProductDetails