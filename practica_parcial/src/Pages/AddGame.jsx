import {useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddGame.css'


const AddGame= () => {
  const [titulo, setTitulo] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [CantidadDeParticipantes, setCantidadDeParticipantes] = useState("");
  const [Categorias, setCategorias] = useState("");
  const navigate = useNavigate();
  const buttonIsDisable = !titulo || !Descripcion || !CantidadDeParticipantes || !Categorias;

  const handleAddGame = async () => {
    const response = await fetch("http://localhost:3000/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, Descripcion, CantidadDeParticipantes, Categorias }),
    });

    if (response.ok) {
      navigate("/");
    }
  };






    return(
        <div>
        <h1>Agregar Juego</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Descripción"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Cantidad de Jugadores"
              value={CantidadDeParticipantes}
              onChange={(e) => setCantidadDeParticipantes(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Categoría"
              value={Categorias}
              onChange={(e) => setCategorias(e.target.value)}
            />
          </div>
        </div>

  
        <button
          className="add-button"
          onClick={handleAddGame}
          disabled={buttonIsDisable}
        >
          Agregar Juego
        </button>
      </div>
    );
  };


export default AddGame;

       /*  <div>
            <h1>Agregar juego</h1>
            <div>
               <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                </div> 
                
                <div>
                    <input
                    type="text"
                    placeholder="Descripcion"
                    value={Descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                <div>
                    <input
                    type="text"
                    placeholder="CantidadDeParticipantes"
                    value={CantidadDeParticipantes}
                    onChange={(e) => setCantidadDeParticipantes(e.target.value)}
                    />
                </div>

                <div>
                    <input
                    type="text"
                    placeholder="Categorias"
                    value={Categorias}
                    onChange={(e) => setCategorias(e.target.value)}
                    />
                </div>

                <button className="Agregar-boton" onClick={handleAddGame} disabled={buttonIsDisable} >Agregar</button>
            </div>
        </div>
    )
  }
} */

