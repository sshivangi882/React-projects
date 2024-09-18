import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) =>{
const arrNumber = [1,2,3,4,5,6];

const numberSelectorHandler = () => {
    setSelectedNumber(value)
    setError("")
}

const NumberSelector = (value) => {
    const [selectedNumber, setSelectedNumber] = useState(1);
    }
  return (
    <NumberSelectorContainer>
        <p style={{"color":"red"}}>{error}</p>
       <div className='flex'>
       { 
            arrNumber.map((value, i) => (
                <Box key={i}
                isSelected = {value === selectedNumber}
                    onClick={() => {() => numberSelectorHandler(value)}}
                >{value}</Box>
            ))
        }
       </div>
       <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
.flex {
    display: flex;
    justify-content: center;
    gap: 34px;
    
}
p{
    font-size: 24px;
    font-weight: 700;
}
    
`
;

const Box = styled.div`
    height: 72px;
    width : 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-weight: 700;
    background-color: ${(props)=> (props.isSelected ? 'black' : 'white')};
    color: ${(props)=> (props.isSelected ? 'white' : 'black')};
`;