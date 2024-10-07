import styled from "styled-components";
import { BASE_URL, Button } from "../../App";


 const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
        <FoodCards>
           {data?.map((name, image, text) =>{
             <FoodCard key={name}>
                <div className="food_image">
                    <img src={BASE_URL + image}/>
                </div>
                <div className="food_info">
                    <div className="info">
                        <h3>{name}</h3>
                        <p>{text}</p>
                    </div>
                   <Button></Button>
                </div>
             </FoodCard>
           })}
        </FoodCards>
    </FoodCardContainer>
  )
}
export default SearchResult;

const FoodCardContainer = styled.section`
  background-image:  url("/bg.png"); ;
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/bg.png");
  background-size: cover;
  height:calc( 100vh - 240px);
`;

const FoodCards = styled.div`


`;
const FoodCard = styled.div``;


