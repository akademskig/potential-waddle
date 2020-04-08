import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { selectGroupValues, selectLoading } from '../../redux/books/book.selectors';
import { useSelector } from 'react-redux';
import Loader from "react-loaders"
import BookListByGroup from './bookListByGroup';
import ItemNotFound from '../common/itemNotFound';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    .no-data{
        color: ${(props) => props.theme.colors.font_dark};
        font-size: 18px;
        margin-top: 2em;
        text-align: center;
    }
`

const StyledLoader = styled.div`
    position:fixed;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .loader{
        margin-left:3em;
        margin-top: 4em;
        width: 130px;
        height: 130px;
    }
`

const BookList = ({ bookGroup }: { bookGroup?: string }) => {
    const { group } = useParams()
    const currentGroup = bookGroup || group
    const loading = useSelector(selectLoading)
    const groupValues = useSelector(selectGroupValues(currentGroup))

    return (
        <Container>
            {loading ?
                <StyledLoader>
                    <Loader innerClassName="loader" active={true} type="pacman"></Loader>
                </StyledLoader> :
                groupValues && groupValues.length ? groupValues.map((groupValue: any, idx: number) =>
                    <BookListByGroup groupValue={groupValue} group={currentGroup} key={idx}></BookListByGroup>
                ) : <ItemNotFound>No comics available.</ItemNotFound>
            }
        </Container>
    )
}

export default (BookList)

