import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Container from "./components/Container";
import Products from "./components/Products";
import About from "./components/About"
import Bundles from "./components/Bundles"
import Cart from "./components/Cart"
import ShippingInfo from "./components/ShippingInfo";
import ProductDetailsWrapper from "./components/ProductDetailsWrapper/"


function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Container>
            <Switch>
                <Route exact path="/" component={ Products } />
                <Route exact path="/bundles" component={ Bundles } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/cart" component={ Cart } />
                <Route exact path="/bubbles/:productId" component={ ProductDetailsWrapper }/>
                <Route exact path="/cart/userInfo" component={ ShippingInfo } />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
