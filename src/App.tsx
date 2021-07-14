import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import SingleUser from "./pages/SingleUser/SingleUser";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.Style.css'

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
