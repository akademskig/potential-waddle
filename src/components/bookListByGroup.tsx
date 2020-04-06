import React, { Fragment } from 'react';
import BookItem from './bookItem.component';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import useWindowSize from '../utils/useWindowSize';
import { selectBookItemsByGroupValue } from '../redux/books/book.selectors';


const BookListGrid = styled.div<BookListGridType>`
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns},
        ${({ columnWidth }) => columnWidth}%);
    grid-column-gap: ${({ gridGap }) => gridGap}%;
    width: 100%;
    border-bottom: solid 2px ${(props) => props.theme.colors.border};
    `
type BookListGridType = {
    columnWidth: number,
    gridGap: number,
    columns: number
}

const GroupValueTitle = styled.h4`
    font-size: 32px;
    color: ${(props) => props.theme.colors.font_dark};
    width: 100%;
    font-weight: normal;
    margin: 1em 0;
    `

const calculateGridLayout = (windowWidth: number) => {
    const gridGap = 5
    let gridItemWidth = 230
    if (windowWidth > 1800) {
        gridItemWidth = 250
    }
    const container = windowWidth - windowWidth * 0.04
    const columns = Math.floor(container / gridItemWidth)
    const columnWidth = (container / columns / container * 100) - (columns - 1) * gridGap / columns
    return {
        columnWidth,
        gridGap,
        columns
    }

}
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