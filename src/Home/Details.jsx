import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const {id} =useParams()
    const [dish, setDish] = useState({})
    useEffect(()=>{
        const url =`https://reatauren-backend-app.vercel.app/dish/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setDish(data))}
        ,[id])
        console.log(dish);
    return (
        <div>
           
        </div>
    );
};

export default Details;