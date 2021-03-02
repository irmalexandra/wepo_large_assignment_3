import React from 'react'
import {getBundles} from "../../services/productService"
import BundlesList from "../BundlesList";

class Bundles extends React.Component {

    state = {bundles: []};

    async componentDidMount(){
        this.setState({
            bundles: await getBundles()
        })
    };

    render() {
        return (<div>
            <h1>Bundles</h1>
            <BundlesList bundles={ this.state.bundles} />
        </div>);
    }
}

export default Bundles;