import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Core/Home";
import ContactUs from "./Core/ContactUs";
import Categroies from "./Core/Categories";
import SingleCategory from "./Core/SingleCategoryPackages";
import SinglePackage from "./Core/SinglePackageScreen";
import PrivateRoute from "./Admin/PrivateRoute";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import AllPackages from "./Admin/AllPacakges";
import AddPackage from "./Admin/AddPackage";
import AllEnquiries from "./Admin/AllEnquiries";
import CustomPackageRequests from "./Admin/CustomPackage";
import Header from './Components/Header'

function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Router>
      <Header />
        <Switch>
          {/* Normal Routes */}
          <Route path="/" exact component={Home} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/categories" exact component={Categroies} />
          <Route
            path="/categories/:categoryName"
            exact
            component={SingleCategory}
          />
          <Route
            path="/categories/:categoryName/:packageId"
            exact
            component={SinglePackage}
          />

          {/* Admin Routes */}
          <Route path="/admin/login" exact component={AdminLogin} />
          <PrivateRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
          <PrivateRoute
            path="/admin/allpackages"
            exact
            component={AllPackages}
          />
          <PrivateRoute
            path="/admin/addpackage"
            exact
            component={AddPackage}
          />
          <PrivateRoute
            path="/admin/customrequests"
            exact
            component={CustomPackageRequests}
          />
          <PrivateRoute
            path="/admin/allenquiries"
            exact
            component={AllEnquiries}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
