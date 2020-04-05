import React, { Component, Dispatch } from 'react';
import SearchBar from '../components/search.component';
import GroupList from '../components/groupList.component';
import BookList from '../components/book.list';
import { connect } from 'react-redux';
import { selectBookItems, selectBookGroups } from '../redux/books/book.selectors';
import { createStructuredSelector } from 'reselect';
import { fetchBooksStart } from '../redux/books/book.actions';

class MainPage extends Component<MainPageProps> {

    componentDidMount = () => {
        const { fetchBooks } = this.props
        fetchBooks()
    }
    render() {
        return (
            <div>
                <SearchBar />
                <GroupList ></GroupList>
                <BookList></BookList>
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    bookList: selectBookItems,
    bookGroups: selectBookGroups
})
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchBooks: () => dispatch(fetchBooksStart())
    }
}

type MainPageProps = {
    fetchBooks: ()=> void,
    bookList: ()=> [],
    bookGroups: string[]
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)