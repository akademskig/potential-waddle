import React from "react"
import styled from "styled-components"
import { Book } from "../types"
import RatingStars from "./ratingStars.component"


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

const BookData = ({ book }: { book: Book }) => {
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


export default BookData