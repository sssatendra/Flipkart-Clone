import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import SecondaryNav from "./Components/Navbar/SecondaryNav";
import Carousel1 from "./Components/Carousel/Carousel";
import Cards from "./Components/Cards/Cards";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Checkout/Cart";
import LoginScreen from "./Components/auth/LoginScreen"
import RegisterScreen from "./Components/auth/RegisterScreen"
import ProductScreen from "./Components/ProductScreen/ProductScreen";
import RegisterComplete from "./Components/auth/RegisterComplete";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./Firebase";
import ForgotPassword from "./Components/auth/ForgotPassword";




function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          }
        })
      }

    })
    return () => unsubscribe();
  })

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
            <LoginScreen />
          </Route>
          <Route path="/product/:id">
            <Navbar />
            <ProductScreen />
          </Route>
          <Route exact path="/register">
            <Navbar />
            <RegisterScreen />
          </Route>
          <Route exact path="/register/complete">
            <Navbar />
            <RegisterComplete />
          </Route>
          <Route exact path="/forgotPassword">
            <Navbar />
            <ForgotPassword />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
