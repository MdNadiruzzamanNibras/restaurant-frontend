import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const [dishs, setDishs] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("https://reatauren-backend-app.vercel.app/dishs")
        .then(res=> res.json())
        .then(data=> setDishs(data))
        

    },[dishs])
    console.log(dishs);
    const DetailNavigate = id=>{
        navigate(`/dish/${id}`)
    }
    return (
        <div className="container">
            <div className="row">
             <h1 className="text-center mt-5 mb-3">MENU</h1>
                
                {
            dishs?.map(menu=><div className="col col-lg-4"
               
            key={menu._id}
           
            >
               
               <div className="card" style={{width: "18rem"}}>
            
            <img style={{height:"18rem"}} src={menu.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div><h5>{menu.name}</h5></div>
                <div><button onClick={()=>DetailNavigate(menu._id)} type="button" className="btn btn-primary btn-sm">Detail</button></div>
              </div>
            </div>
          </div> 
               </div>
                
            )
            }
               
                
               </div>
            </div>
            
       
    );
};

export default Home;