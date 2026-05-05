import { useState } from "react"
import './App.css'

const App = () => {

  const[users, setUsers] = useState([]); // Lista de usuários
  const[loading, setLoading] = useState(false); // Carregamento  
  const[error, setError] = useState(null); // Erros 

  // Função de busca

  return (
    <div>
      <h1>Buscador de usuários</h1>
    </div>
  )
}

export default App