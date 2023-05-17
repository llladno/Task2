import axios from "axios";
import Titles from "./Titles";
import { useEffect, useState } from "react";

function MainPage() {
    const [header, setHeader] = useState()
    const [randomCards, setRandomCards] = useState(100)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getHeader() {
            const result = await axios.get('http://localhost:3005/getheader')//Получение данных с сервера
            setHeader(result.data.header)
            setLoading(true)
        }
        getHeader()
    }, [])

    let input
    async function sendNumber() { //Нажатие на кнопки
        let selectionedValue = document.getElementById("selectionedValue")
        let rand = selectionedValue.value

        if (rand.includes("20")) input = 20
        else if (rand.includes("30")) input = 30
        else if (rand.includes("Rand")) input = 100
        else if (rand.includes("40")) input = 40

        await axios.post("http://localhost:3005/postrandom", {//Запрос на сервер
            data: input
        }).then(res => setRandomCards(res.data))//Ответные данные в State
    }

    return (
        <div>
            <div className="header">
                {loading ? <h1>{header}</h1>
                    : <p>Loading...</p>
                }
            </div>
            <div className="stylecenter">
                <div className="leftside">
                    <div style={{ paddingLeft: 20 }}>
                        <div>
                            <select id="selectionedValue">
                                <option selected="selected">Random</option>
                                <oprion>До 10</oprion>
                                <option >до 20</option>
                                <option>до 30</option>
                                <option>до 40</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={sendNumber}>Send</button>
                        </div>
                        <div>
                            <h2>Количество блоков:</h2>
                            <h3>{randomCards.length}</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Titles data={randomCards} data2={sendNumber}></Titles>
                </div>
                <div className="rightSide">
                </div>
            </div>
            <div className="footer">
                <h1>Footer</h1>
            </div>

        </div>

    );
}

export default MainPage;