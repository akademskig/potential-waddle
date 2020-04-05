import React from 'react';

import {
    Switch,
    Route,
  } from "react-router-dom";
import MainPage from './pages/main.page';
import BookPage from './pages/book.page';

const MainRoutes = () =>{
    return (
        <Switch>
            <Route  path="/home/:group" component={MainPage}/>
            <Route  path="/book/:id" component={BookPage}/>
            <Route  path="*" component={MainPage}/>
        </Switch>
    )
}

export default MainRoutes
