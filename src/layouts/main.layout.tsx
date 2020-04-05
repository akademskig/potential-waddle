
import Header from '../components/header.component';
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components'

const PageContainer = styled.div`
    background-color: ${props => props.theme.colors.main_bg};
    padding: 2%;
    ${css({ "min-height": "calc(100vh - 73px)" })};
    `
const mainLayout = ({ children }: { children: any }) => {
    return (
        <Fragment>
            <Header></Header>
            <PageContainer>
                {children}
            </PageContainer>
        </Fragment>
    )
}

export default mainLayout