import React, { Fragment } from 'react';
import SearchBar from '../components/mainPageComponents/search.component';
import GroupList from '../components/mainPageComponents/groupList.component';
import BookList from '../components/mainPageComponents/bookList.component';

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