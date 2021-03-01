import React from "react";
import {Link} from "react-router-dom";


const BundlesList = ({bundles}) => (
    <div className="container-fluid padding">
        <div className="d-flex flex-row flex-wrap justify-content-center">
            {bundles.map(n =>

                    <div className="card container-fluid col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <h3 className="card-title">{n.name}</h3>
                        <div>
                            {n.items.map(item => <div>
                                <div className="card col-12 padding p-2">
                                    <Link to={"bubbles/" + item.id} >
                                        {<img src={item.image}  className="card-img-top img-fluid rounded mx-auto d-block" alt={"A photo of bubbles product with id " + n.id}/>}
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Price: {item.price}</p>
                                    </div>
                                </div>
                            </div>)}
                        </div>

                    </div>
                )}
        </div>
    </div>
)



export default BundlesList

