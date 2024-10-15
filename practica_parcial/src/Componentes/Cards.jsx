import React from "react";
import "./Cards.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditModal from "./EditModal";

const deleteGame = async (id) => {
  const gameDelete = await fetch("http://localhost:3000/api/games/" + id, {
    method: "DELETE",
  });

  return gameDelete;
};

const Cards = ({
  titulo,
  id,
  refreshGames,
  description,
  players,
  categories,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetallesClick = () => {
    navigate(`/Detalles/${id}`);
  };

  const handleEditClick = () => {
    setIsModalOpen(false);
    console.log("Modal abierto");
  };

  const handleDeleteClick = async () => {
    const response = await deleteGame(id);
    if (response.ok) {
      refreshGames();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h1 className="card-title">{titulo}</h1>
        <div className="card-wrapp-buttons">
          <button className="edit-button" onClick={() => handleEditClick()}>
            Editar
          </button>
          <button className="card-buttons" onClick={handleDeleteClick}>
            Eliminar
          </button>
          <button className="card-buttons" onClick={handleDetallesClick}>
            Detalles
          </button>
        </div>
      </div>
      {isModalOpen && (
        <EditModal
          id={id}
          currentTitle={titulo}
          currentDescription={description}
          currentPlayers={players}
          currentCategories={categories}
          refreshGames={refreshGames}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default Cards;
