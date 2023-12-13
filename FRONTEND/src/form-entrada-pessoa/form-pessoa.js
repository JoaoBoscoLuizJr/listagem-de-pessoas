import React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./form-pessoa.style.css";

const FormPessoa = (method) => {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [idade, setIdade] = useState(0)


  const handleInputs = (e) => {
    console.log(e.target.value)
  }

  return (
    <div id="componentes_form">
      <TextField id="inNome" label="Nome" variant="outlined" onChange={(e)=>setNome(e.target.value)} />
      <TextField id="inSobrenome" label="Sobrenome" variant="outlined" onChange={(e)=>setSobrenome(e.target.value)} />
      <TextField id="inIdade" label="Idade" variant="outlined" onChange={(e)=>setIdade(e.target.value)} />

      <Button variant="outlined" onClick={method}>Botão</Button>
    </div>
  );
};

export default FormPessoa;
