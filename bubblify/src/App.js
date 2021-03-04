import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Container from "./components/Container";
import Products from "./components/Products";
import About from "./components/About"
import Bundles from "./components/Bundles"
import Cart from "./components/Cart"
import DeliveryInfo from "./components/DeliveryInfo";
import ProductDetailsWrapper from "./components/ProductDetailsWrapper/"
import PickupInfo from "./components/PickupInfo";
import OrderReview from "./components/OrderReview";
import PreviousOrders from "./components/PreviousOrder";

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
                <Route exact path ="/bubbles/:productId" component={ProductDetailsWrapper}/>
                <Route exact path="/cart/pickup" component={ PickupInfo } />
                <Route exact path="/cart/delivery" component={ DeliveryInfo } />
                <Route exact path="/cart/review" component={ OrderReview } />
                <Route exact path="/previousorder" component={ PreviousOrders } />

            </Switch>
        </Container>
    </div>
  );
}

export default App;
