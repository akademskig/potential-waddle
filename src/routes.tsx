import React from 'react';

import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import MainPage from './pages/main.page';
import BookPage from './pages/book.page';
import { useSelector } from 'react-redux';
import { selectFirstBookGroup } from './redux/books/book.selectors';

const MainRoutes = () => {
    const firstGroup = useSelector(selectFirstBookGroup)
    return (
        <Switch>
            <Route path="/home/:group" component={MainPage}/>
            <Route path="/book/:id" component={BookPage} />
            <Route path="*" component={() => <Redirect to={`/home/${firstGroup}`}/>} />
        </Switch>
    )
}

export default MainRoutes
