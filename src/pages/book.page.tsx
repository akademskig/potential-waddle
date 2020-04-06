import React from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/book.list';
import BookDetailsView from '../components/book.details';
import { selectBookItem } from '../redux/books/book.selectors';
import { useSelector } from 'react-redux';

const BookPage = () => {
    const { id } = useParams()
    const book = useSelector(selectBookItem(id))
    return (
        <div>
            {
                book ?
                    <BookDetailsView book={book}></BookDetailsView>
                    :
                    <BookNotFound></BookNotFound>
            }
            <BookList bookGroup="random"></BookList>
        </div>
    )
}

const BookNotFound = () =>
    <div>Book not found</div>
export default BookPage
