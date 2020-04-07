import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBookGroups } from '../../redux/books/book.selectors';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0;
`
const GroupLink = styled(NavLink)`
    background-color: transparent;
    border-radius: 19px;
    box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
    margin-right: 1em;
    color: ${(props) => props.theme.colors.font_dark};
    font-size: 18px;
    padding: 0.2em 0.8em;
    text-decoration: none;
    text-transform: capitalize;
    &.active{
        color: white;
        background-color: #F15454;
    }
    `
const GroupList = () => {
    const bookGroups = useSelector(selectBookGroups)
    
    return (
        <Container>
            {
                bookGroups && bookGroups.map((group: any, idx: number) => (
                    <GroupLink  to={`/home/${group}`} key={idx} activeClassName="active">{group}</GroupLink>
                ))
            }
        </Container>
    )
}
export default GroupList