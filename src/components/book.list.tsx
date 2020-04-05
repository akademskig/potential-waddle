import React from 'react';
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom';
import BookItem from './book.item';
import { selectBookItemsByGroupValue, selectGroupValues, selectFirstBookGroup, selectLoading } from '../redux/books/book.selectors';
import { useSelector } from 'react-redux';
import useWindowSize from '../utils/useWindowSize';
import Loader from "react-loaders"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
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

const BookList = ({ loading }: any) => {
    let { group } = useParams()
    let firstGroup = useSelector(selectFirstBookGroup)
    const history = useHistory()

    if (!group && firstGroup) {
        history.push(`/home/${firstGroup}`)
    }
    const groupValues = useSelector(selectGroupValues(group))
    return (
        <Container>
            {loading ?
                <StyledLoader>
                    <Loader innerClassName="loader" active={true} type="pacman"></Loader>
                </StyledLoader> :
                groupValues && groupValues.length ? groupValues.map((groupValue: any, idx: number) => (
                    <BooksByGroupList groupValue={groupValue} group={group} key={idx}></BooksByGroupList>
                )) : <p className="no-data">No comics available</p>

            }
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
})
export default connect(mapStateToProps)(BookList)


const BooksByGroupListC = styled.div<BooksByGroupListCType>`
display: grid;
grid-template-columns: repeat(${({ columns }) => columns},
    ${({ columnWidth }) => columnWidth}%);
grid-column-gap: ${({ gridGap }) => gridGap}%;
width: 100%;
border-bottom: solid 2px ${(props) => props.theme.colors.border};
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
font-weight: normal;
margin: 1em 0;
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