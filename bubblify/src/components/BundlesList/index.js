import React from "react";
import {addBundleToCart} from "../../services/productService";
import ProductList from "../ProductList";

const BundlesList = ({bundles}) => (
    <div className="container-fluid padding">
        <div className="d-flex flex-row flex-wrap justify-content-center">
            {bundles.map(n =>
                    <div className="card container-fluid col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5 py-3">
                        <h3 className="card-title">{n.name}</h3>
                            <ProductList products={ n.items.products} />
                            {/*{n.items.products.map(item => <div>*/}
                            {/*    <div className="card col-12 padding p-2">*/}
                            {/*        <Link to={"bubbles/" + item.id} >*/}
                            {/*            {<img src={item.image}  className="card-img-top img-fluid rounded mx-auto d-block" alt={"A photo of bubbles product with id " + n.id}/>}*/}
                            {/*        </Link>*/}
                            {/*        <div className="card-body">*/}
                            {/*            <h5 className="card-title">{item.name}</h5>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>)}*/}
                        <p className="card-text">Price: {n.items.totalPrice}</p>
                        {<button className="btn btn-outline-secondary add_to_cart_button" onClick={() => addBundleToCart(n.id)}
                                        id={n.id}>Add to Cart
                        </button>}
                    </div>
                )}
        </div>
    </div>
)



export default BundlesList

