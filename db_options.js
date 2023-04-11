import express from "express"
import mysql from "mysql"
import cors from "cors"


const app_express = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "createb"

})

app_express.use(express.json())
app_express.use(cors())

app_express.get("/", (req, res) => {
    res.json("Hello This is the Backend")
});

app_express.get ("/options", (req, res) => {
    const q = "SELECT bread FROM options"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.post("/options", (req, res) => {
    const q = "INSERT INTO options(`bread`,`meat`,`meat_state`,`salads`,`cheese`) VALUES (?)"
    const values = [req.body.bread,req.body.meat,req.body.meat_state,req.body.salads,req.body.cheese]
    db.query(q, [values], (error,data) => {
        if(error) {
            return res.json("A inserção de elementos deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
})

app_express.listen(8800, ()=> {
    console.log("Coneccted with backend!!")
} )