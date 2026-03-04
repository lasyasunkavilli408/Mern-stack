const express = require('express');
const BodyParser = require("body-parser");
const app = express();
app.use(BodyParser.urlencoded({extended:true}));
app.get("/",(req, res) => {
    res.send(`
        <h2>Login page</h2>
        <form action="/login" method="post">
            Username:<input type="password" name="username"/><br><br>
            Password:<input type="password" name="password"/><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/login",(req, res) => {
    const {username, password} = req.body;
    if(username === "lasya" && password === "1234"){
        res.send("<h2>Login successful! Welcome admin</h2>");
    } else {
        res.send("<h2>Invalid username or password!</h2>");
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000"); 
});
