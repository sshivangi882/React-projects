import styled from 'styled-components';

export const Button = styled.button`
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


export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background-color: black;
    color: white;
    border : 1px solid black;
}`
;