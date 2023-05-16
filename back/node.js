const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataWords = require("./data.json")
const fs = require("fs")

const app = express()

const PORT = 3005

app.use(cors())
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})

function getRandomWords() {
    let words = []
    let allwords = []
    const randomCards = Math.floor(Math.random() * (6 - 1) + 1)
    for (let c = 0; c < randomCards; c++) {
        words = []
        const randomlength = Math.ceil(Math.random() * (10 - 1))
        for (let b = 0; b < randomlength; b++) {
            const random = Math.ceil(Math.random() * (50 - 1))
            words.push(dataWords.titles[random])
        }
        allwords.push(words)
    }
    return allwords
}


app.get("/getrandom", (req, res) => {
    const data = getRandomWords()
    res.send(data)
})


app.get("/getheader", (req,res)=>{
    const randomHeader = Math.ceil(Math.random() * (5 - 1))
    const header = dataWords.headers[randomHeader]
    res.send(header)
})


//         //"10":"standing",
        //"11":"cats",
        //"12":"irritate",
        //"13":"depend",
        //"14":"territory",
        //"15":"puzzled",
        //"16":"cent",
        //"17":"dolls",
        //"18":"adhesive",
        //"19":"thank",
        //"20":"terrific",
        //"21":"spell",
        //"22":"slip",
        //"23":"cactus",
        //"24":"scrawny",
        //"25":"precious",
        //"26":"guide",
        //"27":"bone",
        //"28":"cloistered",
        //"29":"whole",
        //"30":"slap",
        //"31":"twist",
        //"32":"girls",
        //"33":"view",
        //"34":"alert",
        //"35":"fork",
        //"36":"metal",
        //"37":"station",
        //"38":"icky",
        //"39":"plain",
        //"40":"harmony",
        //"41":"basin",
        //"42":"employ",
        //"43":"fairies",
        //"44":"hard",
        //"45":"peace",
        //"46":"handsomely",
        //"47":"pine",
        //"48":"work",
        //"49":"measure",
        //"50":"language",
        //"51":"mark",
        //"52":"wonderful",
        //"53":"truculent",
        //"54":"greet",
        //"55":"story",
        //"56":"rainy",
        //"57":"appear",
        //"58":"knotty",
        //"59":"mass",
        //"60":"disgusting",
        //"61":"launch",
        //"62":"redundant",
        //"63":"continue",
        //"64":"married",
        //"65":"dock",
        //"66":"exercise",
        //"67":"square",
        //"68":"alleged",
        //"69":"robust",
        //"70":"bore",
        //"71":"tease",
        //"72":"unfasten",
        //"73":"daily",
        //"74":"crash",
        //"75":"frightened",
        //"76":"incandescent",
        //"77":"defeated",
        //"78":"tendency",
        //"79":"earn",
        //"80":"turkey",
        //"81":"relax",
        //"82":"common",
        //"83":"aboard",
        //"84":"frog",
        //"85":"guarded",
        //"86":"comparison",
        //"87":"abnormal",
        //"88":"red",
        //"89":"pull",
        //"90":"steel",
        //"91":"futuristic",
        //"92":"muscle",
        //"93":"plants",
        //"94":"bait",
        //"95":"mean",
        //"96":"scare",
        //"97":"ruddy",
        //"98":"thinkable",
        //"99":"pathetic",
        // "100":"terrible" 

const titleWords = [
    "reach",
    "tin",
    "death",
    "pop",
    "near",
    "lying",
    "cut",
    "quilt",
    "creator",
    "standing",
    "cats",
    "irritate",
    "depend",
    "territory",
    "puzzled",
    "cent",
    "dolls",
    "adhesive",
    "thank",
    "terrific",
    "spell",
    "slip",
    "cactus",
    "scrawny",
    "precious",
    "guide",
    "bone",
    "cloistered",
    "whole",
    "slap",
    "twist",
    "girls",
    "view",
    "alert",
    "fork",
    "metal",
    "station",
    "icky",
    "plain",
    "harmony",
    "basin",
    "employ",
    "fairies",
    "hard",
    "peace",
    "handsomely",
    "pine",
    "work",
    "measure",
    "language",
    "mark",
    "wonderful",
    "truculent",
    "greet",
    "story",
    "rainy",
    "appear",
    "knotty",
    "mass",
    "disgusting",
    "launch",
    "redundant",
    "continue",
    "married",
    "dock",
    "exercise",
    "square",
    "alleged",
    "robust",
    "bore",
    "tease",
    "unfasten",
    "daily",
    "crash",
    "frightened",
    "incandescent",
    "defeated",
    "tendency",
    "earn",
    "turkey",
    "relax",
    "common",
    "aboard",
    "frog",
    "guarded",
    "comparison",
    "abnormal",
    "red",
    "pull",
    "steel",
    "futuristic",
    "muscle",
    "plants",
    "bait",
    "mean",
    "scare",
    "ruddy",
    "thinkable",
    "pathetic",
    "terrible",
]