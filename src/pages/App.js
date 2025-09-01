import React, { useState } from "react";
import logo from "../assets/logogit.png";
import { Container } from "./styles";
import Input from "../components/input";
import Button from "../components/Button";
import ItemRepo from "../components/input/ItemRepo"; // ItemRepo dentro da pasta Input
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const [debugMessage, setDebugMessage] = useState("");

  // Adicionar repositório
  const handleSearchRepo = async () => {
    if (!currentRepo.includes("/")) {
      setDebugMessage("Digite no formato usuario/repo — ex: facebook/react");
      return;
    }

    setDebugMessage(`Buscando repositório: ${currentRepo}...`);

    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const exists = repos.find(r => r.id === data.id);
        if (!exists) {
          setRepos(prev => [...prev, data]);
          setDebugMessage(`Repositório encontrado: ${data.full_name}`);
        } else {
          setDebugMessage("Repositório já adicionado!");
        }
        setCurrentRepo(""); // limpa input
      }
    } catch (error) {
      setDebugMessage("Repositório não encontrado!");
    }
  };

  // Remover repositório
  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
    setDebugMessage("Repositório removido");
  };

  return (
    <Container>
      <img src={logo} width={72} height={72} alt="logo" />

      <Input
        value={currentRepo}
        onChange={e => setCurrentRepo(e.target.value)}
        placeholder="usuario/repo — ex: facebook/react"
      />

      <Button onClick={handleSearchRepo}>Buscar</Button>

      {/* Mensagem de debug */}
      {debugMessage && <p style={{ color: "yellow" }}>{debugMessage}</p>}

      {/* Lista de repositórios */}
      {repos.map(repo => (
        <ItemRepo
          key={repo.id}
          
          repo={repo}
          onRemove={() => handleRemoveRepo(repo.id)}
        />
      ))}
    </Container>
  );
}

export default App;

