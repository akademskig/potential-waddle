import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    margin: 1em 0;
`
const GroupLink = styled(Link)`
    background-color: transparent;
    border-radius: 19px;
    box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
    margin-right: 1em;
    color: ${(props) => props.theme.colors.font_dark};
    font-size: 18px;
    padding: 0.2em 0.8em;
    text-decoration: none;
    &:active{
        color: white;
        background-color: #F15454;
    }
    `
const GroupList = () => {

    const [state, setstate] = useState({
        groups:
            [{ id: 'year', name: 'Year' },
            { id: 'writer', name: 'Writer' },
            { id: 'artist', name: 'Artist' },
            { id: 'owner', name: 'Owner' },
            { id: 'random', name: 'Random' }]
    })
    return (
        <Container>
            {
                state.groups.map((group, idx) => (
                    <GroupLink to={`group/${group.id}`} key={idx}>{group.name}</GroupLink>
                ))
            }
        </Container>
    )
}
export default GroupList