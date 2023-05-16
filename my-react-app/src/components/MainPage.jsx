import axios from "axios";
import Titles from "./Titles";
import { useEffect, useState } from "react";

function MainPage() {
    let inputvalue = document.getElementsByClassName("inputvalue")[0]
    const [header, setHeader] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        async function getHeader (){
            const result = await axios.get('http://localhost:3005/getheader')
            setHeader(result.data.header)
            console.log(result.data.header)
            setLoading(true)
        }
        getHeader()
    },[])
    let input 
    function changeFn(event){
    
    }


    function sendNumber(){
        console.log(input)
    }


    inputvalue.oninput  = ()=>{
        let reg = /[0-9]/
        this.value =this.value.replace(reg, "")
        // onkeypress={e => changeFn(e.target.value)}
    }
    console.log(inputvalue)

    return (
        <div>
            <div className="header">
                { loading ? <h1>{header}</h1>
                : <p>Loading...</p>
                }
            </div>
            <div className="stylecenter">
                <div className="leftside">
                    <input type="text" style={{color:"#000"}} className="inputvalue" ></input>
                    <button onClick={sendNumber}>Send</button>
                </div>
                <div className="container">
                    <Titles></Titles>
                </div>
                <div className="rightSide">
                </div>
            </div>
            <div className="footer">

            </div>

        </div>

    );
}

export default MainPage;