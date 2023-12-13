const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
const pessoaRoutes = require('./src/routes/pessoaRoutes.js')

server.use('/api/pessoa',pessoaRoutes)

const PORT = 5500;

server.listen(PORT, () =>{
    console.log(`Seu BACKEND esta rodando na porta http://localhost:${PORT}`)
}) 
