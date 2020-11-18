import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HomeDetails from "./Pages/HomeDetails";
import AddRentHouse from "./Pages/AddRentHouse";
import BookingList from "./Pages/BookingList";
import MyRent from "./Pages/MyRent";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import NotFound from "./Pages/NotFount";
import { Provider } from "react-redux";
import store from "./store";
// import "../node_modules/bootstrap/scss/bootstrap.scss";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/homeDetails" component={HomeDetails} />
            <Route exact path="/bookingList" component={BookingList} />
            <Route exact path="/addRentHouse" component={AddRentHouse} />
            <Route exact path="/myRent" component={MyRent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createAccount" component={CreateAccount} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
