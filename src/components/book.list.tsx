import React, { useState } from 'react';
import styled from 'styled-components'
import { Link, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import BookItem from './book.item';
import { selectBookItemsByGroupValue, selectGroupValues, selectFirstBookGroup } from '../redux/books/book.selectors';
import { useSelector } from 'react-redux';
import useWindowSize from '../utils/useWindowSize';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
`

const BookList = () => {
    let { group } = useParams()
    let firstGroup = useSelector(selectFirstBookGroup)
    const history = useHistory()

    if (!group && firstGroup) {
        history.push(`/home/${firstGroup}`)
    }
    const groupValues = useSelector(selectGroupValues(group))

    return (
        <Container>
            {
                groupValues && groupValues.map((groupValue: any, idx: number) => (
                    <BooksByGroupList groupValue={groupValue} group={group} key={idx}></BooksByGroupList>
                ))
            }
        </Container>
    )
}
export default BookList


const BooksByGroupListC = styled.div<BooksByGroupListCType>`

display: grid;
grid-template-columns: repeat(${({ columns }) => columns},
    ${({ columnWidth }) => columnWidth}%);
grid-column-gap: ${({ gridGap }) => gridGap}%;
width: 100%;
border-bottom: solid 2px ${(props) => props.theme.colors.font_light};
`
type BooksByGroupListCType = {
    columnWidth: number,
    gridGap: number,
    columns: number
}

const GroupValueTitle = styled.h4`
font-size: 32px;
color: ${(props) => props.theme.colors.font_dark};
width: 100%;
`
const BooksByGroupList = ({ groupValue, group }: { groupValue: string, group: string | undefined }) => {
    const windowWidth = useWindowSize().width
    const gridProps = calculateGridLayout(windowWidth)
    const bookList = useSelector(selectBookItemsByGroupValue(group, groupValue))
    return (
        <div>
            <GroupValueTitle>{groupValue || "Random"}</GroupValueTitle>
            <BooksByGroupListC {...gridProps}>

                {
                    bookList.map((book: any, idx: number) => (
                        <BookItem book={book} key={idx}></BookItem>
                    ))}
            </BooksByGroupListC>
        </div>
    )

}

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