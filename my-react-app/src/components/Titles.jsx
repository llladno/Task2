import { useEffect, useState } from "react";
import Card from "./Card";


function Titles(props) {
    let data = []
    const [loading, setLoading] = useState(true)

        useEffect(()=>{
            props.data2()//Вызов функции, которая отправляет данные на сервер
            data = props.data
            setTimeout(()=>{ //Небольшая задержка
                setLoading(false)
            },150)
    },[])

        data = props.data
        if(data === undefined) window.location.reload()// В случае ошибки перезагружается страница

    return (
        <div className="grid">
            {loading === false ? data.map((elem,y)=>(
                <Card data={elem}></Card>
             ))
            : <div style={{color:"#000"}}>Loading</div>} 
        </div>
    );
  }
  
  export default Titles;