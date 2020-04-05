import React, { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components'
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    width: 100%;
`
const BookText = styled.div`
    font-size: 22px;
    color: ${(props)=> props.theme.colors.font_light};
`

const BookItem = ({ book }: { book: any }) => {

    return (
        <Container>
            <Link to={`${book/book.id}`}></Link>
            <img width="100%"src={book.image}alt="" />
            <BookText>{book.name}
            <p>Owned by{book.owner}</p>
            
            </BookText>
        </Container>
    )
}
export default BookItem