import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Product = ({ id, name, image, price, description}) => (
    <div
        className="card col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 padding p-2 text-center justify-content-center dark">
        <Link to={`/bubbles/${id}`}>
            {<img src={image} className="card-img-top img-fluid rounded mx-auto d-block"
                  alt={"A photo of bubbles product with id " + id}/>}
        </Link>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: {price}</p>
        </div>
    </div>
);

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
};

export default Product;