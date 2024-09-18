import React from 'react'
import { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'

 const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const roleDice = () => {
        if(!selectedNumber ) {
            setError("Please select a number");
            return;
        };
        setError("");

        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    }


  return (
    <MainContainer>
       <div className='top_section'>
       <TotalScore score={score} />
       <NumberSelector 
            selectedNumber={selectedNumber}
            setError={setError}
            setSelectedNumber={setSelectedNumber}
            error={error}
        />
       </div>
       <RollDice  currentDice={currentDice}
       roleDice={roleDice}
       />
    </MainContainer>
  )
}
export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
.top_section  {
    display: flex;
    justify-content: space-between;
    align-items: end;
}
`;