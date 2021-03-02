import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Container from "./components/Container";
import Products from "./components/Products";
import About from "./components/About"
import Bundles from "./components/Bundles"
import Cart from "./components/Cart"
import ProductDetails from "./components/ProductDetails";
import CustomerInfo from "./components/CartItems";

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
                <Route exact path="/bubbles/:productId" component={ ProductDetails } />
                <Route exact path="/cart/userInfo" component={ CustomerInfo } />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
