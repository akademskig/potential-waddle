import React, { Fragment } from 'react';
import styled from 'styled-components';
import BookImage from './bookImage.component';
import { useParams } from 'react-router-dom';
import BookData from './bookData.component';
import { useSelector } from 'react-redux';
import { selectBookItem } from '../../redux/books/book.selectors';
import ItemNotFound from '../common/itemNotFound';

const BookDetailsContainer = styled.div`
    display: flex;
    border-bottom: solid 2px ${(props) => props.theme.colors.border};
    padding-bottom: 4em;
    padding-top: 2em;
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
            flex-direction: column;
        }
    `
const BookImageContainer = styled.div`
    width: 40%;
    max-width: 340px;
    min-width: 300px;
    @media screen and (max-width: ${(props) => props.theme.breakpoints.xs}){
        width: 100%;
    }
    `

const BookDetails = () => {
    const { id } = useParams()
    const book = useSelector(selectBookItem(id))
    const image = {
        src: book?.image,
        width: '100%',
        alt: "Book cover"
    }
    return (
        <BookDetailsContainer>
            {
                book ?
                    <Fragment>
                        <BookImageContainer>
                            <BookImage image={image} />
                        </BookImageContainer>
                        <BookData book={book} />
                    </Fragment>
                    :
                    <ItemNotFound>Book not found.</ItemNotFound>
            }
        </BookDetailsContainer>
    )
}

export default BookDetails