import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/searchResult/searchResult";


export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() =>{
  const fetchFoodData = async () =>{
    setLoading(true);
   try {
    const respose = await fetch(BASE_URL);
    const json = await respose.json();

    setData(json);

    setLoading(false);
   } catch(err){
      setError("Unable to fetch data");
   }
  };
  fetchFoodData();
},[])


// console.log(data);

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>;

  return (
    <Conatiner>
      <TopContainer>
         <div className="logo">
          <img src="/logo.svg" alt="logo" />
         </div>

         <div className="search">
          <input placeholder="Search for Food...." />
         </div>
      </TopContainer>

      <FilterContainer>
        <Button>All </Button>
        <Button>Breakfast </Button>
        <Button>Lunch </Button>
        <Button>Dinner </Button>
      </FilterContainer>

      <SearchResult data={data}/>
    </Conatiner>
  )
};

export default App;

const Conatiner = styled.div`
  max-width: 1200px;
  margin: 0 auto;

`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding :60px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 48px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.div `
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  color: white;

`;


