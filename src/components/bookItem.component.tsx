import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import BookImage from './bookImage.component';

const Container = styled.div`
    @import 'loaders.css/src/animations/semi-circle-spin.scss';
    display: flex;
    flex-direction: column;
    width: 100%;
`
const BookText = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.font_light};
    margin: 1em 0;
    p{
        display: inline-block;
        font-size: 16px;
        color: #999999;
        font-weight: 500;
        span{
            font-weight: bold;
            color: ${(props) => props.theme.colors.font_light}
        }
    }
`

const BookItem = ({ book }: { book: any }) => {

    const image = {
        src: book.image,
        alt: "Book cover",
        width: "100%"
    }
    return (
        <Container>
            <Link to={`/book/${book.id}`}>
                <BookImage image={image} />
            </Link>
            <BookText>{book.name}<br />
                <p>Owned by <span>{book.owner}</span></p>
            </BookText>
        </Container>
    )
}

export default BookItem