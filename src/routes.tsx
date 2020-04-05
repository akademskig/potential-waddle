import React from 'react';

import {
    Switch,
    Route,
  } from "react-router-dom";
import MainPage from './pages/main.page';

const MainRoutes = () =>{
    return (
        <Switch>
            <Route  path="/home/:group" component={MainPage}/>
            <Route  exact path="*" component={MainPage}/>
        </Switch>
    )
}

export default MainRoutes
