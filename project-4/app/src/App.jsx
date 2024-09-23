import styled from "styled-components";

const App = () => {
  return (
    <MainConatiner>
      <TopContainer>
         <div className="logo">
          <img src="/logo.svg" alt="logo" />
         </div>

         <div className="search">
          <input placeholder="Search for Food...." />
         </div>
      </TopContainer>
    </MainConatiner>
  )
};

export default App;

const MainConatiner = styled.div`
  background-color: #342323;
`;
const TopContainer = styled.div``;
