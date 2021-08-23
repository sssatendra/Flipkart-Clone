import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import SecondaryNav from "./Components/Navbar/SecondaryNav";
import Carousel1 from "./Components/Carousel/Carousel";
import Cards from "./Components/Cards/Cards";
import Products from "./Components/Products/Products";
import Cart from "./Components/Checkout/Cart";
import LoginScreen from "./Components/auth/LoginScreen"
import RegisterScreen from "./Components/auth/RegisterScreen"
import ProductScreen from "./Components/ProductScreen/ProductScreen";
import RegisterComplete from "./Components/auth/RegisterComplete";
import ForgotPassword from "./Components/auth/ForgotPassword";
import History from "./Pages/user/History";
import UserRoute from "./Components/Routes/UserRoute";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";


function App() {

  const dispatch = useDispatch();
  // const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id
              }
            });
            history.push('/');
          })
          .catch(e => console.log(e));
      }

    })
    return () => unsubscribe();
  })

  return (
    <Router>
      <div className="app">
        <AnimatePresence>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <SecondaryNav />
              <Carousel1 />
              <Products />
              <Cards />
              <Products />
            </Route>
            <Route path="/viewcart">
              <Cart />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/product/:id">
              <ProductScreen />
            </Route>
            <Route exact path="/register">
              <RegisterScreen />
            </Route>
            <Route exact path="/register/complete">
              <RegisterComplete />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <UserRoute path="/user/history">
              <History />
            </UserRoute>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
