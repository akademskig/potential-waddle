import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import BookItem from './book.item';


const Container = styled.div`
    display: flex;
    margin: 1em 0;
`

const BookList = () => {

    const [state, setstate] = useState({
        books:
            [{ owner: 'year', name: 'Book1', id: 1 },
            { owner: 'writer', name: 'Book2', id: 2 },
            { owner: 'artist', name: 'Book3', id: 3 },
            { owner: 'owner', name: 'Book4', id: 4 },
            { owner: 'random', name: 'Book5', id: 5 }]
    })
    return (
        <Container>
            {
                state.books.map((book, idx) => (
                    <BookItem book={book} key={idx}></BookItem>
                ))
            }
        </Container>
    )
}
export default BookList