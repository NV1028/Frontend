import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";


const CardHolder = styled.div`
display: flex;
flex-direction: row;
width: 1200px;
flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
margin-top: 50px;


`



const CardList = (props) => {

const [data, setData] = useState([]);



useEffect(() => {

  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(response => { 
      setData(response.data.results);
  })
  .catch(error => {
   console.log(`The error was: ${error}`) 
  })
}, [data]);


return (
    <CardHolder>
      
{data.map(info => (
           <Card event_name={info.name} description={info.species} budget={info.status} event_date={info.gender} event_time={info.id} image={info.image} />
        ))}
    </CardHolder>
  )
}

export default CardList
