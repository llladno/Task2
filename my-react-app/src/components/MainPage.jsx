import axios from "axios";
import Titles from "./Titles";
import { useEffect, useState } from "react";

function MainPage() {
    // let inputvalue = document.getElementsByClassName("inputvalue")[0]
    const [header, setHeader] = useState()
    const [randomCards, setRandomCards] = useState(100)
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
    // function sendNumber(){
    //     let selectionedValue = document.getElementById("selectionedValue")
    //     let rand = selectionedValue.value
    //     let sendData
    //     if(rand.includes("Radndom")) setRandomCards(100)
    //     else if(rand.includes("20")) setRandomCards(20)
    //     else if(rand.includes("30")) setRandomCards(30)
    //     else if(rand.includes("40")) setRandomCards(40)
    //     return <Titles data={randomCards}></Titles>
    // }
    // console.log(randomCards)

    // inputvalue.oninput  = ()=>{
    //     let reg = /[0-9]/
    //     this.value =this.value.replace(reg, "")
    //     // onkeypress={e => changeFn(e.target.value)}
    // }
    // console.log(inputvalue)

    return (
        <div>
            <div className="header">
                { loading ? <h1>{header}</h1>
                : <p>Loading...</p>
                }
            </div>
            <div className="stylecenter">
                <div className="leftside">
                    {/* <select id="selectionedValue">
                        <option>Radndom</option>
                        <oprion>До 10</oprion>
                        <option>до 20</option>
                        <option>до 30</option>
                        <option>до 40</option>
                    </select> */}
                    {/* <input type="text" style={{color:"#000"}} className="inputvalue" ></input> */}
                    {/* <button onClick={sendNumber}>Send</button> */}
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