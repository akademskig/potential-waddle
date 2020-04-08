
import React from "react"
import styled from "styled-components"


const BookNotFoundStyled = styled.div`
    color: ${(props) => props.theme.colors.gray1};
    text-align: center;
    font-size: 26px;
    width: 100%;
    margin: 12vh 0;
    `
const ItemNotFound = ({ children }: { children: string }) =>
    <BookNotFoundStyled>{children}</BookNotFoundStyled>
export default ItemNotFound
