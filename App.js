
import './App.css';
import Frase from './frase';

function App() {
  const nome = 'Vinicius'
  const idade = 16

  function soma(a, b){
    return a + b
  }

  const novoNome = nome.toUpperCase()
  return (
    <div className="App">
       <h1>Página teste</h1>
       <h3>Nome: {nome} </h3>
       <h3>Idade: {idade} anos</h3>
       <h3>{ novoNome }</h3>
       <p>Soma: {soma(5, 8)}</p>
       
       <Frase>
        
       </Frase>
    </div>
  );
}

export default App;
