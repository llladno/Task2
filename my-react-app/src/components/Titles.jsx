import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";


function Titles() {
    const [dataCards, setData] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        async function getData (){
            const result = await axios.get('http://localhost:3005/getrandom')
            setData(result.data)
            console.log(result.data)
            setLoading(true)
        }
        getData()
    },[])
    return (
        <div className="grid">
            {loading ? dataCards.map((elem,y)=>(
                <Card data={elem}></Card>
             ))
            : <div>Loading</div>} 
        </div>
    );
  }
  
  export default Titles;