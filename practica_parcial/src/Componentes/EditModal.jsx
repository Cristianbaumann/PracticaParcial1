import { useState } from "react";

const updateGames = async (id, title, description, players, categories) => {
  const gameEdit = await fetch("http://localhost:3000/api/games/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      players,
      categories,
    }),
  });
  return gameEdit;
};

const EditModal = ({
  titulo,
  id,
  refreshGames,
  description,
  players,
  categories,
}) => {
  const [newTitle, setNewTitle] = useState(titulo);
  const [newDescription, setNewDescription] = useState(description);
  const [newPlayers, setNewPlayers] = useState(players);
  const [newCategories, setNewCategories] = useState(categories);
  const [isOpen, setIsOpen] = useState(false);

  const handleEditClick = async () => {
    const response = await updateGames(
      id,
      newTitle,
      newDescription,
      newPlayers,
      newCategories
    );
    if (response.ok) {
      refreshGames();
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Editar</button>
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder="Título"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cantidad de jugadores"
            value={newPlayers}
            onChange={(e) => setNewPlayers(e.target.value)}
          />
          <input
            type="text"
            placeholder="Categorías"
            value={newCategories}
            onChange={(e) => setNewCategories(e.target.value)}
          />
          <button onClick={handleEditClick}>Guardar cambios</button>
          <button onClick={() => setIsOpen(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default EditModal;
