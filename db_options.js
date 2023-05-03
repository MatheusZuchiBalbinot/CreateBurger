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

// app_express.get("/", (req, res) => {
//     res.json("Hello This is the Backend")
// });

app_express.get ("/options/bread", (req, res) => {
    const q = "SELECT id, bread, bread_price FROM bread"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/options/meat", (req, res) => {
    const q = "SELECT id, meat, meat_price FROM meat"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/options/meat_state", (req, res) => {
    const q = "SELECT id, meat_state, meat_state_price FROM meat_state"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/options/salads", (req, res) => {
    const q = "SELECT id, salads, salads_price FROM salads"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/options/cheese", (req, res) => {
    const q = "SELECT id, cheese, cheese_price FROM cheese"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> 8e55acd9e4244861d1c9f512ba7553cc6dc3a31c
app_express.get ("/login", (req, res) => {
    const q = "SELECT username, password FROM login"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/options/values", (req, res) => {
    const q = "SELECT * FROM orders"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 8e55acd9e4244861d1c9f512ba7553cc6dc3a31c
app_express.post("/options", (req, res) => {
    const q = "INSERT INTO orders(`name`,`price`,`image`,`bread`,`meat`,`meat_state`,`salads`,`cheese`) VALUES (?)"
    const values = [req.body.name,req.body.price,req.body.image,req.body.bread,req.body.meat,req.body.meat_state,req.body.salads,req.body.cheese]
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