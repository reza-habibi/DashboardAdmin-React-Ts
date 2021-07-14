import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import SingleUser from "./pages/SingleUser/SingleUser";
import NewUser from './pages/NewUser/NeuUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.Style.css'
import ProductList from "./pages/ProductList/ProductList";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users" >
            <UserList />
          </Route>
          <Route path="/user/:userId" >
            <SingleUser />
          </Route>
          <Route path="/newUser" >
            <NewUser />
          </Route>
          <Route path="/products" >
            <ProductList />
          </Route>
          <Route path="/product/:productId" >
            <SingleProduct />
          </Route>
          <Route path="/newProduct" >
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
