import React, { Fragment } from 'react';
import SearchBar from '../components/search.component';
import GroupList from '../components/groupList.component';
import BookListByGroup from '../components/bookList.component';

const MainPage = () => {
    return (
        <Fragment>
            <SearchBar />
            <GroupList ></GroupList>
            <BookListByGroup></BookListByGroup>
        </Fragment>
    )
}
export default MainPage