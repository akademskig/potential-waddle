import React from 'react';
import emtptyStar from '../../assets/emptyStar.svg'
import fullStar from '../../assets/fullStar.svg'
import styled from 'styled-components'

const Container = styled.span`
    display: inline-flex;
    justify-content: space-between;  
    background-color: transparent;
    max-width: 160px;
`
const RatingStars = ({rating}: {rating: number}) => 
        <Container>
            {
                [1,2,3,4,5].map((num: number, idx: number)=> {
                    return num <= rating ? <img key={idx} src={fullStar} alt="Full star" />:<img key={idx} src={emtptyStar} alt="Empty star" /> })
            }
        </Container>

export default RatingStars