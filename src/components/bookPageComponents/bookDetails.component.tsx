import React, { Fragment } from 'react';
import styled from 'styled-components';
import BookImage from './bookImage.component';
import { Link } from 'react-router-dom';
import { Book } from '../types/index';
import backIcon from '../../assets/backIcon.svg'
import BookData from './bookData.component';

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

const BackLinkStyled = styled(Link)`
        color: ${(props) => props.theme.colors.gray1};
        font-weight: bold;
        font-size: 20px;
        text-decoration: none;
        @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
           font-size: 16px;
        }
    span{
        text-decoration: underline;
        margin-left: 0.4em;
    }
    `

const BookDetails = ({ book }: { book: Book }) => {
    const image = {
        src: book.image,
        width: '100%',
        alt: "Book cover"
    }
    return (
        <Fragment>
            <BackLinkStyled to="/home">
                <img src={backIcon} alt="Back icon"></img><span>Back to collection</span>
            </BackLinkStyled>
            <BookDetailsContainer>
                <BookImageContainer>
                    <BookImage image={image} />
                </BookImageContainer>
                <BookData book={book} />
            </BookDetailsContainer>
        </Fragment>
    )
}

export default BookDetails