import React, { Fragment } from 'react';
import styled from 'styled-components';
import BookImage from './bookImage.component';
import { Link } from 'react-router-dom';
import { Book } from '../types/index';
import RatingStars from './ratingStars.component';
import backIcon from '../../assets/backIcon.svg'

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

const BookDetailsStyled = styled.div`
    margin-left: 2%;
    color: ${(props) => props.theme.colors.font_medium};
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        margin-left: 0;
    }
    .book-title{
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 32px;
        flex-wrap: wrap; 
        line-height: 1.5em;
        @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
            font-size:  24px;
        }
      
        p{
            white-space: nowrap;
            margin: 0;
            margin-right: 0.2em;
            &:nth-child(2){
                margin-right: 3%;
            }
            @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
             white-space: pre-wrap;        
            };
        }
    }
    .book-details{
        font-size: 16px;
        font-weight: bold;
        margin-bottom:2.7em;
        ul{
            list-style: none;
            padding-left: 0;
            line-height: 2em;
            li{
                span{
                    font-weight: 500;
                    color: ${(props) => props.theme.colors.gray2};
                }
            }
        }
    }
    .book-summary{
        font-weight: bold;
        line-height: 1.2em;
    }
    `
const BookDataView = ({ book }: { book: Book }) => {
    return (
        <BookDetailsStyled>
            <div className="book-title">
                <p>
                    {book.name}
                </p>
                <p>
                    ({book.year})
                </p>
                <RatingStars rating={book.rating}></RatingStars>
            </div>
            <div className="book-details">
                <ul>
                    <li>
                        <span> Writer: </span>  {book.writer}
                    </li>
                    <li>
                        <span> Artist: </span>{book.artist}
                    </li>
                    <li>
                        <span> Publication: </span> {book.publication}
                    </li>
                    <li>
                        <span> Owner: </span> {book.owner}
                    </li>
                </ul>
            </div>
            <div className="book-summary">
                {book.summary}
            </div>
        </BookDetailsStyled>
    )
}


const BookDetailsView = ({ book }: { book: Book }) => {
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
                <BookDataView book={book} />
            </BookDetailsContainer>
        </Fragment>
    )
}

export default BookDetailsView