const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Olá mundo!")
})

server.listen(PORT, () => {
    console.log("rodando na porta 3000");
})


