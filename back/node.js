const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataWords = require("./data.json")//Слова для составления постов

const app = express()

const PORT = 3005

app.use(cors())
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})

//Функция для составления разного количества постов с разным количеством слов в посте
function getRandomWords(sendRandom) {
    let words = []
    let allwords = []
    const randomCards = Math.floor(Math.random() * (sendRandom - 15) + 15) //Количество постов
    for (let c = 0; c < randomCards; c++) {
        words = []
        const randomlength = Math.ceil(Math.random() * (10 - 1)) //Случайная длинна
        for (let b = 0; b < randomlength; b++) {
            const random = Math.ceil(Math.random() * (50 - 1))//Случайное слово
            words.push(dataWords.titles[random])
        }
        allwords.push(words)
    }
    return allwords
}

//Получение заголовка
app.get("/getheader", (req,res)=>{
    const randomHeader = Math.ceil(Math.random() * (5 - 1))
    const header = dataWords.headers[randomHeader]
    res.send(header)
})

//Получение постов с текстом
app.post("/postrandom",(req,res)=>{
    const sendValue = req.body.data
    const data = getRandomWords(sendValue)
    res.send(data)
})