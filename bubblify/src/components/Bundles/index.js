import React, {useState, useEffect} from 'react'
import {getBundles} from "../../services/productService"
import BundlesList from "../BundlesList";

const Bundles = () => {
    const [bundles, setBundles] = useState([])

    useEffect(() => {
        getBundles().then(b => setBundles(b));
    }, [])

    return (<div>
        <h1>Bundles</h1>
        <BundlesList bundles={bundles}/>
    </div>);
}

// class Bundles extends React.Component {
//
//     state = { bundles: [] };
//
//     async componentDidMount(){
//         this.setState({
//             bundles: await getBundles()
//         })
//     };
//
//     render() {
//         return (<div>
//             <h1>Bundles</h1>
//             <BundlesList bundles={ this.state.bundles } />
//         </div>);
//     }
// }

export default Bundles;