import { useState } from "react"
import './App.css'

const App = () => {

  const[users, setUsers] = useState([]); // Lista de usuários
  const[load, setLoad] = useState(false); // Carregamento  
  const[error, setError] = useState(null); // Erros 

  return (
    <div>
      <h1>Buscador de usuários</h1>
    </div>
  )
}

export default App