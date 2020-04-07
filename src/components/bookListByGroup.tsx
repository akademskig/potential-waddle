import React, { Fragment } from 'react';
import BookItem from './bookItem.component';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import useWindowSize from '../utils/useWindowSize';
import { selectBookItemsByGroupValue } from '../redux/books/book.selectors';
import calculateGridLayout from '../utils/calculateGridLayout';
import { BookListGridType } from './types';


const BookListGrid = styled.div<BookListGridType>`
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns},
        ${({ columnWidth }) => columnWidth}%);
    grid-column-gap: ${({ gridGap }) => gridGap}%;
    width: 100%;
    border-bottom: solid 2px ${(props) => props.theme.colors.border};
    `


const GroupValueTitle = styled.h4`
    font-size: 32px;
    color: ${(props) => props.theme.colors.font_medium};
    width: 100%;
    font-weight: normal;
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
            font-size:  24px;
    }
    `

const BookListByGroup = ({ groupValue, group }: { groupValue: string, group: string | undefined }) => {
    const windowWidth = useWindowSize().width
    const gridProps = calculateGridLayout(windowWidth)
    const bookList = useSelector(selectBookItemsByGroupValue(group, groupValue))
    return (
        <Fragment>
            <GroupValueTitle>{groupValue || "Other Random Books"}</GroupValueTitle>
            <BookListGrid {...gridProps}>
                {
                    bookList.map((book: any, idx: number) => (
                        <BookItem book={book} key={idx}></BookItem>
                    ))
                }
            </BookListGrid>
        </Fragment>
    )
}

export default BookListByGroup