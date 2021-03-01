import React from "react";
import { Link } from 'react-router-dom'

const ProductList= ({products}) =>(
    <div className="container-fluid padding">
        <div className="d-flex flex-row flex-wrap justify-content-center">
        {products.map(n =>

            <div
                className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 padding p-2 text-center justify-content-center dark">
                <Link to={`/bubbles/${n.id}`} >
                    {<img src={n.image}  className="card-img-top img-fluid rounded mx-auto d-block" alt={"A photo of bubbles product with id " + n.id}/>}
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{n.name}</h5>
                    <p className="card-text">Price: {n.price}</p>
                </div>
            </div>
        )}
        </div>
    </div>
)

export default ProductList

