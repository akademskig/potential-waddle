import React from 'react';
import logo from '../assets/Logo.svg'
import styled from 'styled-components'

const Container = styled.div`
    height: 73px;
    display: flex;
    align-items: center;   
    background-color: ${props => props.theme.colors.header_bg};
    padding-left: 26px`

const Header = () => 
    <header>
        <Container>
            <img src={logo} alt="Comic Clan logo" />
        </Container>
    </header>

export default Header