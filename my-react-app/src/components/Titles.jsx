import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";


function Titles() {

    const [dataCards, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [dataCard, setData2] = useState(true)
        useEffect(()=>{
        // axios.post("http://localhost:3005/postrandom",{
        //     data:sendData
        // }).then(res => setData(res.data)).then(setData2(false))
            async function getData (){
                const result = await axios.get('http://localhost:3005/getrandom')
                setData(result.data)
                console.log(result.data)
                setLoading(true)
            }
            getData()
        
        //     setData(props.data)
        // }
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