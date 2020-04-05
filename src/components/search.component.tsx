import React from 'react';
import styled from 'styled-components'
import searchIcon from '../assets/searchIcon.png'
import { useDispatch } from 'react-redux';
import { searchBooksStart } from '../redux/books/book.actions';
const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;  
    justify-content: center;
    width: 100%;
    border: 3px solid #777777;
    border-radius: 8px;
    padding: 9px 18px;
`
const Input = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 18px;
    color: ${(props) => props.theme.colors.font_dark};
    height: 27.5px;
    font-size: 20px;
    &:focus{
        border: none;
        outline: none;
    }
    `
const SearchBar = () => {
    const dispatch = useDispatch()
    const onInputChange = (searchValue: string) => {
        dispatch(searchBooksStart(searchValue))
    }
    return (
        <Container>
            <img src={searchIcon} alt="Search Icon" />
            <Input type="text" placeholder="Search by book name" onChange={(e) => onInputChange(e.target.value)} />
        </Container>
    )
}
export default SearchBar