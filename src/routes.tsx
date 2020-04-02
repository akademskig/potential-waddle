import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainPage from './pages/main.page';
import BookPage from './pages/book.page';

const MainRoutes = () =>{
    return (
        <Switch>
            <Route exact path="/" component={()=><MainPage></MainPage>}>

            </Route>
            <Route path="/:id" component={(props: any)=> <BookPage {...props} ></BookPage>}>

            </Route>
        </Switch>
    )
}

export default MainRoutes