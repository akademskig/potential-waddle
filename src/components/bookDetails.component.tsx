import React, { Fragment } from 'react';
import styled from 'styled-components';
import BookImage from './bookImage.component';
import { Link } from 'react-router-dom';


const BookContainer = styled.div`
display: flex;
border-bottom: solid 2px ${(props) => props.theme.colors.border};
padding-bottom: 4em;
@media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        flex-direction: column;
    }
`

const BookImageC = styled.div`
    min-width: 300px;
    max-width: 340px;
    padding-top: 1em;
    @media screen and (max-width: ${(props) => props.theme.breakpoints.xs}){
        width: 100%;
    }
    `

const BookDetails = styled.div`
    margin-left: 2%;
    padding-top: 1em;
    color: ${(props) => props.theme.colors.font_medium};
    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        margin-left: 0;
    }
    .book-title{
        h4{
            margin-top: 0;
        }
        font-weight: 500;
        font-size: 32px;
    }
    .book-details{
        font-size: 16px;
        font-weight: bold;
        ul{
            list-style: none;
            padding-left: 0;
            line-height: 1.8em;
            li{
                span{
                    font-weight: normal;
                }
            }
        }
    }
    .book-summary{
        font-weight: bold;
        line-height: 1.2em;
    }
    `

const BackLink = () => {
    return (
        <Link to="/home">
            {"< Back to collection"}
        </Link>
    )

}

const BackLinkStyled = styled.span`
    a{
        color: ${(props) => props.theme.colors.font_dark};
        font-weight: bold;
        font-size: 20px;
    }
    `

const BookDetailsView = ({ book }: { book: any }) => {
    const image = {
        src: book.image,
        width: '100%',
        alt: "Book cover"   
    }
    return (
        <Fragment>
            <BackLinkStyled >
                <BackLink></BackLink>
            </BackLinkStyled>
            <BookContainer>
                <BookImageC>
                    <BookImage image={image} />
                </BookImageC>
                <BookDetails>
                    <div className="book-title">
                        <h4>{book.name} (<span>{book.year}) </span></h4>

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

                </BookDetails>
            </BookContainer>
        </Fragment>
    )
}

export default BookDetailsView