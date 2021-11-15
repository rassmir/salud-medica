import React from "react";
import history from "./history";
import {Route, Router, Switch} from "react-router-dom";
import Index from '../containers/Index'
const App = ()=>{
     return (
         <Router history={history}>
             <Switch>
                 <Route exact path="/" component={Index}/>
             </Switch>
         </Router>
     )
}
export default App
