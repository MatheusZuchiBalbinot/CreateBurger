import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app_express = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "createb"
})

db.connect(function(err) {

    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

app_express.use(express.json())
app_express.use(cors())

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

app_express.post("/register", (req, res) => {
    const q = "INSERT INTO login(`username`,`password`) VALUES (?)"
    const values = [req.body.username, req.body.password]
    db.query(q, [values], (error,data) => {
        if(error) {
            return res.json("A inserção de elementos deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
})

app_express.get ("/login", (req, res) => {
    const q = "SELECT username, password, idLogin FROM login"
    db.query(q,(error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/ordersID", (req, res) => {
    const q = "SELECT MAX(id) FROM orders"
    db.query(q, (error,data)=> {
        if(error) {
            return res.json("A consulta deu o seguinte erro: "+error)
        }
        return res.json(data)
    })
});

app_express.get ("/stackPerOrder/:idLogged", (req, res) => {
    const idLogged = req.params.idLogged
    const q = "select orders.id, orders.bread, orders.meat, orders.meat_state, orders.salads, orders.cheese, orders.name, orders.image, orders.price, orders.quantity, orders.OrderStack, login.idLogin, customerinformation.responsible, customerinformation.cpf, customerinformation.localization, customerinformation.phoneNumber, customerinformation.observations, customerinformation.paymentForm from orders INNER JOIN stack ON orders.OrderStack = stack.idStack INNER JOIN login ON stack.idLogin = login.idLogin INNER JOIN customerinformation ON stack.idCustomInformation = customerinformation.idCustomerInformation WHERE login.idLogin = ?";
    db.query(q, [idLogged], (error, data) => {
        if (error) {
          return res.json("A consulta deu o seguinte erro: " + error);
        }
        return res.json(data);
      });
});

app_express.post("/addstack", (req, res) => {
    const q = "INSERT INTO stack(`idLogin`,`idCustomInformation`) VALUES (?)"
    const values = [req.body.idLogin,req.body.idCustomInformation]
    db.query(q, [values], (error,data) => {
        if(error) {
            return res.json("A inserção de elementos deu o seguinte erro: "+error)
        }
        console.log(data)
        return res.json(data)
    })
})

app_express.post("/customerinformation", (req, res) => {
    const q = "INSERT INTO customerinformation(`responsible`,`cpf`,`localization`,`phoneNumber`,`observations`,`paymentForm`) VALUES (?)"
    const values = [req.body.responsible,req.body.cpf, req.body.localization,req.body.phoneNumber,req.body.observations,req.body.paymentForm]
    db.query(q, [values], (error,data) => {
        if(error) {
            return res.json("A inserção de elementos deu o seguinte erro: "+error)
        }
        console.log(data)
        return res.json(data)
    })
})

app_express.post("/orders", (req, res) => {
    const q = "INSERT INTO orders(`bread`,`meat`,`meat_state`,`salads`,`cheese`,`name`,`image`,`price`, `quantity`,`OrderStack`) VALUES (?)"
    const values = [req.body.bread,req.body.meat,req.body.meat_state,req.body.salads,req.body.cheese,req.body.name,req.body.image,req.body.price,req.body.quantity,req.body.OrderStack]
    db.query(q, [values], (error,data) => {
        if(error) {
            return res.json("A inserção de elementos deu o seguinte erro: "+error)
        }
        console.log(data)
        return res.json(data)
    })
})

app_express.listen(8800, ()=> {
    console.log("Coneccted with backend!!")
} )