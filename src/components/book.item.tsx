import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    margin: 1em 0;
`
const BookItem = ({ book }: { book: any }) => {

    return (
        <Container>
            <Link to={`${book/book.id}`}></Link>
            <img src="" alt="" />
            <p>{book.name}</p>
            <p>Owned by{book.owner}</p>
        </Container>
    )
}
export default BookItem