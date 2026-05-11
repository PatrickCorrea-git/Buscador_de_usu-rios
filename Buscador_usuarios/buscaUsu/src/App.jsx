import { useState, useEffect } from "react"
import './App.css'

const App = () => {

  const [search, setSearch] = useState(""); // Texto digitado
  const [users, setUsers] = useState([]); // Lista de usuários
  const [loading, setLoading] = useState(false); // Carregamento  
  const [error, setError] = useState(null); // Erros 

  // Função de busca
  const searchUsers = async (text) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await response.json();

      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );

      setUsers(filteredUsers);

    } catch (error) {
      setError("Erro ao buscar usuários");

    } finally {
      setLoading(false);
    }
    
    };

    // Função de debounce para evitar muitas requisições
    useEffect(() => {
      if (search.trim() === "") {
        setUsers([]);
        return;
      }

      const timeout = setTimeout (() => {
        searchUsers(search);
      }, 500);

      return () => clearTimeout(timeout);
    }, [search]);

  return (
    <div>
      <h1>Buscador de usuários</h1>

      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => searchUsers(search)}>Buscar</button>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

