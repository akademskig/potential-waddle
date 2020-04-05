import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from './pages/main.page';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <MainPage></MainPage>}>

            </Route>
            <Route path="/group/:group" component={() => <MainPage></MainPage>}>
            </Route>
        </Switch>
    )
}

export default MainRoutes