import React from 'react';
import SearchBar from '../components/search.component';
import GroupList from '../components/groupList.component';
import BookList from '../components/book.list';

const MainPage = () => {
    return (
        <div>
            <SearchBar />
            <GroupList ></GroupList>
            <BookList></BookList>
        </div>
    )
}
export default MainPage