import React, { Fragment } from 'react';
import SearchBar from '../components/search.component';
import GroupList from '../components/groupList.component';
import BookList from '../components/bookList.component';

const MainPage = () => {
    return (
        <Fragment>
            <SearchBar />
            <GroupList ></GroupList>
            <BookList/>
        </Fragment>
    )
}

export default MainPage