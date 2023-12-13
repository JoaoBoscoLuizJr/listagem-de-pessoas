import FormPessoa from "./form-entrada-pessoa/form-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPessoa } from "react";

import TablePessoa from "./table-lista-pessoas/table-pessoa";
import { useEffect, useState } from "react";

function App() {
  const [dados, setDados] = useState([{}
  ]);

  const [pessoa, setPessoa] = useState({
    nome: "",
    sobrenome: "",
    idade: 0,
  });

  useEffect(() => {

  })

  const fetchPessoas = async () => {
    const resultado = await getPessoa();
    setDados(resultado);
  }

  const pessoas = { nome: "nome...", sobrenome: "sobrenome...", idade: 0 }

  const salvar = (novaPessoa) => {
    setDados([...dados, novaPessoa]);

  }

  return (
    <div className="App">
      <FormPessoa pessoa={pessoa} setPessoa={setPessoa} />
      <TablePessoa pessoas={dados} />
    </div>
  );
}

export default App;
