import React from 'react';
// import reactReveal, { Fade } from 'react-reveal';
import styled from 'styled-components';
import { Fade } from 'react-reveal';



function section({title, Description, leftb, rightb, backgroundimg}) {
  return (
    <Wrap bckimg={backgroundimg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{Description}</p>
        </ItemText>
        <Button>
            <ButtonGroup>
                <LeftButton>{leftb}</LeftButton>
                {rightb && <RightButton>{rightb}</RightButton>}
            </ButtonGroup>
            <DownArrow src="./images/down-arrow.svg"/>
        </Button>
        
        </Fade>
    </Wrap>
    
  )
}

export default section

const Wrap = styled.div`
    width: 100vw;   
    height: 100vh;
    background-image: url('./images/model-3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bckimg}")`}
    
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 670px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: #222427;
    display: flex;
    margin: 8px;
    padding: 5px;
    border-radius: 5px;
    width: 195px;
    height: 35px;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    opacity: 0.8;

`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.6;
`
const Button = styled.div`

`

const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
`
// const Fade = styled(Fade)`

// `