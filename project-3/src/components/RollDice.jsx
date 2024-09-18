import React from 'react'
import styled from 'styled-components'

 const RollDice = ({roleDice, currentDice}) => {


  return (
    <DiceContainer>
        <div className='dice' 
        onClick={roleDice}>
            <img src={`Images/dice_${currentDice}.png`} alt="Dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}
export default RollDice

const DiceContainer =  styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

p{
    font-size: 24px;

}
.dice{
    cursor: pointer;

}
`;


