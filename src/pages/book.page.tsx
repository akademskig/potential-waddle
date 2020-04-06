import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BookListByGroup from '../components/bookList.component';
import BookDetailsView from '../components/bookDetails.component';
import { selectBookItem } from '../redux/books/book.selectors';
import { useSelector } from 'react-redux';

const BookPage = () => {
    const { id } = useParams()
    const book = useSelector(selectBookItem(id))
    return (
        <Fragment>
            {
                book ?
                    <BookDetailsView book={book}></BookDetailsView>
                    :
                    <BookNotFound></BookNotFound>
            }
            <BookListByGroup bookGroup="random"></BookListByGroup>
        </Fragment>
    )
}

const BookNotFound = () =>
    <div>Book not found</div>
export default BookPage
