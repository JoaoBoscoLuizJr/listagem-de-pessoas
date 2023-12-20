//Imports de Componentes
// import Titulo from "./titulo/titulo";
import FormPessoa from "./form-entrada-pessoa/form-pessoa";
import TablePessoa from "./table-list-person/table-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Outros imports
import { useEffect, useState } from "react";
import {apiGetPessoas, apiAddPessoa, apiGetPessoaById, apiUpdatePessoa, apiDeletePessoa} from "./api/pessoa.service";

function App() {

  const NULLPESSOA = { id: null, nome: null, sobrenome: null, idade: null }

  const [dados, setDados] = useState([{}]);
  const [onAction, setAction] = useState(false);  
  const [selected, setSelected] = useState(NULLPESSOA);

  const resetSelected = () => {
    setSelected(NULLPESSOA)
  }

  useEffect(() => {
    fetchPessoas();
  }, [onAction]);

  const fetchPessoas = async () => {
    const resultado = await apiGetPessoas();
    setDados(resultado);
    setAction(false)
    setSelected(NULLPESSOA)
  };

  const handleSubmit = async (novoDado) =>{
    try {

      const existingPerson = dados.find((e) => e.id === novoDado.id) //await apiGetPessoaById(novoDado.id);
      let result;
      if (!existingPerson) {
        result = await apiAddPessoa(novoDado)
      } else {
        result = await apiUpdatePessoa(novoDado.id, novoDado)
      }
      window.alert(
        `${existingPerson ? novoDado.nome.toUpperCase() + ' foi atualizado' : novoDado.nome.toUpperCase() + ' foi adicionado'}`
      );

      if (result) {
        setAction(!onAction);
        return result;

      }
    } catch (error) {
      console.error('Erro na requisção:');
     new Error(error.message);
    }
  }

  const handleClick = async (e, pessoa) =>{
    console.log(e, pessoa)
    if(e.type === 'click'){
      const confirmUpdate = window.confirm(
        `Você quer atualizar os dados de ${pessoa.nome}`
      )
      if(confirmUpdate){
        setSelected(pessoa)
      }
    }else if (e.type === 'contextmenu')
    e.preventDefault();
    if(e.button === 2){
      console.log(`${pessoa.nome}será deletado`)
    }

  }
  

  return (
    <div className="App">
      <FormPessoa selected={selected} insertPessoa={handleSubmit} />
      <TablePessoa pessoas={dados} handleClick={handleClick} />
    </div>
  );
}
export default App;
