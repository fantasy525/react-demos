import React from 'react';
import {HashRouter , Switch, Route, Redirect} from 'react-router-dom';
import Home from '../pages/home';
import Temp from '../pages/temp';
import NameForm from '../pages/form'
import Clock from '../pages/clock'
import Radio from '../pages/radio'
const routes=()=>(
    <HashRouter>
        <React.Fragment>
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/temp" component={Temp}>
               </Route>
               <Route path="/form" component={NameForm}>
               </Route>
               <Route path="/radio" component={Radio}>
               </Route>
           </Switch>
        </React.Fragment>
    </HashRouter>
)
export default routes