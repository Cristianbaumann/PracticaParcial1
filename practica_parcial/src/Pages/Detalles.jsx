import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  "./Detalles.css";

const getGameById = async (id) => {
  const gameFetch = await fetch(`http://localhost:3000/api/games/${id}`);
  const game = await gameFetch.json();
  return game;
  };

function Detalles (){
    const [game, setGames] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
      getGameById(id).then((game) => setGames(game[0]));
    }, [id]);

    return(
      <div className="container">
      <h1>Detalle</h1>
      {game && (
        <div>
          <div className="detail">
            <span className="detail-title">Nombre: </span>
            <span className="detail-content">{game.title}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Descripción: </span>
            <span className="detail-content">{game.description}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Cantidad jugadores: </span>
            <span className="detail-content">{game.players}</span>
          </div>
          <div className="detail">
            <span className="detail-title">Categoría: </span>
            <span className="detail-content">{game.categories}</span>
          </div>
        </div>
      )}
      <button onClick={() => navigate(-1)} className="back-button">
        Volver
      </button>
    </div>
  );
};
export default Detalles


      {/* <div className="container">
        <h1>Detalle</h1>
        {games && (
          <div>
            <div className="detalles">
              <span>Nombre: {games.title}</span>
            </div>
            <div className="detalles">
            <span>Descripcion: {games.description}</span>
            </div>
            <div className="detalles">
              <span>Cantidad Jugadores: {games.players} </span>
            </div>
            <div className="detalles">
              <span>Cateogria: {games.categories} </span>
            </div>
          </div>
        )}
        <button onClick={() => navigate(-1)} className="Volver">
          Volver
        </button>
      </div>
    )
} */}
