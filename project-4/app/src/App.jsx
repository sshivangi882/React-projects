import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/searchResult/searchResult";


export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn , setSelectedBtn] = useState("All");

useEffect(() =>{
  const fetchFoodData = async () =>{
    setLoading(true);
   try {
    const respose = await fetch(BASE_URL);
    const json = await respose.json();

    setData(json);
    setFilteredData(json);
    setLoading(false);
   } catch(err){
      setError("Unable to fetch data");
   }
  };
  fetchFoodData();
},[])

const searchFood = (e) => {
  const searchValue = e.target.value;

  if(searchValue === ""){
    setFilteredData(null);
  }
  const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))

  setFilteredData(filter);
}
// console.log(data);

const filterFood = (type) => {
  if(type === "All"){
    setFilteredData(data);
    setSelectedBtn("All");
    return;
  }
  const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
  setFilteredData(filter);
  setSelectedBtn(type);
}

const filterBtn = [
  {
    name: "All",
    type: "All"
  },
  {
    name: "Breakfast",
    type: "Breakfast"
  },
  {
    name: "Lunch",
    type: "Lunch"
  },
  {
    name: "Dinner",
    type: "Dinner"
  },
]
  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>;

  return (
   <>
     <Conatiner>
      <TopContainer>
         <div className="logo">
          <img src="/logo.svg" alt="logo" />
         </div>

         <div className="search">
          <input onChange={searchFood} placeholder="Search for Food...." />
         </div>
      </TopContainer>

      <FilterContainer>
        {
          filterBtn.map(({name, type}) => {
            return <Button onClick={() => filterFood(type)}>{name}</Button>
          })
        }
        {/* <Button onClick={filterBtn}>All </Button>
        <Button onClick={}>Breakfast </Button>
        <Button onClick={}>Lunch </Button>
        <Button onClick={}>Dinner </Button>*/}
      </FilterContainer> 
       
    </Conatiner>
     <SearchResult data={filteredData}/>
   </>
  )
};

export default App;

export const Conatiner = styled.div`
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

  @media (0 < width < 600px ){
    flex-direction: column;
    padding: 20px;
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
  &:hover {
    background-color: #e85454;
  }

`;


