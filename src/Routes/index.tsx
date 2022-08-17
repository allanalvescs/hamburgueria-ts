import { Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

import Route from "./routes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
