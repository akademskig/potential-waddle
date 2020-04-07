import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/mainPageComponents/bookList.component';
import BookDetails from '../components/bookPageComponents/bookDetails.component';
import backIcon from '../assets/backIcon.svg'

import styled from 'styled-components';

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
const BookPage = () => {
    return (
        <Fragment>
            <BackLinkStyled to="/home">
                <img src={backIcon} alt="Back icon"></img><span>Back to collection</span>
            </BackLinkStyled>
            <BookDetails></BookDetails>
            <BookList bookGroup="random"></BookList>
        </Fragment>
    )
}


export default BookPage