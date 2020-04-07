
import React from "react"
import styled from "styled-components"


const BookNotFoundStyled = styled.div`
    color: ${(props)=> props.theme.colors.gray1};
    text-align: center;
    font-size: 26px;
    margin: 2em 0;
    `
const BookNotFound = () =>
    <BookNotFoundStyled>Book not found.</BookNotFoundStyled>
export default BookNotFound
