import React from 'react'
import styled from 'styled-components';

 const StartGame = ({toggle}) =>  {
  return (
    <Container>
    <div>
      <img src='/Images/dices.png' alt='Dices' />
    </div>
    <div className='content'>
      <h1>DICE GAME</h1>
      <Button onClick={toggle}>Play Now</Button>
    </div>
  </Container>
  );
};
export default StartGame;


const Container = styled.div`
max-width:1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content h1{
    font-size: 90px;
    font-weight: bold;
    
    white-space: nowrap;
}
`;

const Button = styled.button`
background-color: black;
color: white;
justify-content: center;
padding: 10px 30px;
min-width: 220px;
border: none;
cursor: pointer;
border-radius: 5px;
font-size: 16px;
transition: 0.3s ease;


&:hover{
    background-color: #383838;
    color: white;
    transition: 0.4s ease;
}
`
;