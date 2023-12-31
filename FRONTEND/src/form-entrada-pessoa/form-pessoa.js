import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import { Button, Select } from "@mui/material";

import "./form-pessoa.style.css";

const FormPessoa = ({selected, insertPessoa }) => {
  const [pessoa, setPessoa] = useState({});

  useEffect(()=>{
    setPessoa(selected);
  },[selected]);
  
  const submit = (e) =>{
    e.preventDefault();
    console.log(pessoa)
    insertPessoa(pessoa);
  }

  return (
    <div id="componentes_form">
      <TextField
        id="inNome"
        label="Nome"
        variant="outlined"
        defaultValue={selected.nome}
        onChange={(e) => {
          setPessoa({ ...pessoa, nome: e.target.value });
        }}
      />
      <TextField
        id="inSobrenome"
        label="Sobrenome"
        defaultValue={selected.sobrenome}
        variant="outlined"
        onChange={(e) => {
          setPessoa({ ...pessoa, sobrenome: e.target.value });
        }}
      />
      <TextField
        id="inIdade"
        label="Idade"
        defaultValue={selected.idade}
        variant="outlined"
        onChange={(e) => {
          setPessoa({ ...pessoa, idade: e.target.value });
        }}
      />

      <Button type="submit" variant="outlined" onClick={submit}>
        Botão
      </Button>
    </div>
  );
};

export default FormPessoa;
