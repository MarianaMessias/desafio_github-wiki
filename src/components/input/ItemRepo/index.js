import React from "react";
import { ItemRepoContainer } from "./styles";

function ItemRepo({ repo, onRemove }) {
  return (
    <ItemRepoContainer>
      <h3>{repo.full_name}</h3>
      <p>{repo.description}</p>
      <a
  href={repo.html_url}
  target="_blank"
  rel="noreferrer"
  className="github-btn"
>
  Ver no GitHub
  </a>
  <button onClick={onRemove} className="remove-btn">
    Remover
  </button>

    </ItemRepoContainer>
  );
}

export default ItemRepo;

