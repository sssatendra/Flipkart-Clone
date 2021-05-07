import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import SecondaryNav from "./Components/Navbar/SecondaryNav";
import Carousel1 from "./Components/Carousel/Carousel";
import Cards from "./Components/Cards/Cards";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Checkout/Cart";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <SecondaryNav />
            <Carousel1 />
            <Products />
            <Cards />
            <Products />
          </Route>
          <Route path="/viewcart">
            <Navbar />
            <Cart />
          </Route>
          <Route path="/login">
            <Navbar />
            <h1>This is Login Page</h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
