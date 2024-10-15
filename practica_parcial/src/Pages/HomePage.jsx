import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../Componentes/Cards";
import "./HomePage.css";

const getAllGames = async () => {
  const response = await fetch("http://Localhost:3000/api/games");
  const games = await response.json();
  return games;
};

const HomePage = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const refreshGames = async () => {
    const updateGames = await getAllGames();
    setGames(updateGames);
  };

  useEffect(() => {
    refreshGames();
  }, []);

  const handleAddGameclick = () => {
    navigate("/AddGame");
  };
  console.log(games);

  return (
    <div>
      <div className="home-title-wrapp">
        <h1>Juegos COI</h1>
        <button onClick={handleAddGameclick} className="add-game-button">
          Agregar Juego
        </button>
      </div>
      {games.length ? (
        <div className="home-grid-cards">
          {games.map((game) => (
            <Cards
              key={game.id}
              titulo={game.title}
              id={game.id}
              refreshGames={refreshGames}
            />
          ))}
        </div>
      ) : (
        <div className="home-no-games">No hay juegos para mostrar</div>
      )}
    </div>
  );
};
export default HomePage;

/*  <div>
          <div className="home-title">
            <h1>Juegos Coi</h1>
            <button onClick={handleAddGameclick} className='add-game-button'>
              Agregar Juego
            </button>
          </div>
          {games.map((game) => {
            <Cards
              key={game.id}
              Nombre={game.Nombre}
              id={game.id}
              refreshGames={refreshGames}
            />  
          })}
        </div>
      );
    }; */

{
  /* Preguntar cual es la manera correcta de hacer el boton */
}
{
  /* boton que te lleva a detalles */
}
{
  /* <button onClick={handelClick()}>Detalles</button> */
}

{
  /*boton que usa useNavigate para llevarme a detalles */
}

/* 
    Otra forma de hacer lo mismo
    useEffect(() => {
      const fetchPost = async () => {
        const response = await fetch('http://Localhost:3000/api/games');
        const games = await response.json();
        setGames(games);
      }

      fetchPost();
    },[]) */

/*  useEffect(() => {
        fetch('http://Localhost:3000/api/games')
        .then(response => response.json())
        .then(data => setGames(data))
        .catch(error => console.error('Error:', error));
    }, []); */
