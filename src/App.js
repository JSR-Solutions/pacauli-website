import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Core/Home";
import ContactUs from "./Core/ContactUs";
import Categroies from "./Core/Categories";
import SingleCategory from "./Core/SingleCategoryPackages";
import SinglePackage from "./Core/SinglePackageScreen";
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
