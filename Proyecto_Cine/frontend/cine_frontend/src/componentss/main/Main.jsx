import React from "react";
import './cssMain.css';
import {useNavigate } from "react-router-dom";
// pagina principal, donde se verian todas las peliculas, se importa useNavigate para navegar entre componentes
const Main = () => {
  const navigate = useNavigate();

  const navigateToFicha = (id) => {
    navigate(`/Fichatecnica/${id}`); // Redirige a la ficha técnica de la película con el id
    // react-router-dom permite navegar entre ids
  };

  
  return (
    <main id="main">
      <section className="movie-list">
        <div className="movie">
          <img
            src="/img/images_films/the_Wild_Robot_third_poster.jpg"
            alt="Película 1"
            
          />
          <h2>The Wild Robot</h2>
          <h3>+10.</h3>
          {/*navegaria a la pelicula con id: 1*/}
          <button type="button" onClick={() => navigateToFicha(1)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films/Transformers_One-329708311-large.jpg"
            alt="Película 2"
            
          />
          <h2>Transformers Uno</h2>
          <h3>+10.</h3>
          <button type="button" onClick={() => navigateToFicha(2)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films//No_hables_con_extraanos-102462605-large.jpg"
            alt="Película 3"
            
          />
          <h2>No Hables Con Extraños</h2>
          <h3>+16.</h3>
          <button type="button"onClick={() => navigateToFicha(3)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films//beetlejuice-2-afiche-oficial-486x720.png"
            alt="Película 4"
            
          />
          <h2>Beetlejuice Beetlejuice</h2>
          <h3>+13.</h3>
          <button type="button" onClick={() => navigateToFicha(4)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films//360 X 500 kill.jpg"
            alt="Película 5"
            
          />
          <h2>KILL: Masacre en el Tren</h2>
          <h3>+16.</h3>
          <button type="button" onClick={() => navigateToFicha(5)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films//Deadpool-3-poster-1.jpg"
            alt="Película 6"
            
          />
          <h2>Deadpool & Wolverine</h2>
          <h3>+18.</h3>
          <button type="button" onClick={() => navigateToFicha(6)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films//360 X 500mivillano4.jpg"
            alt="Película 7"
            
          />
          <h2>Mi Villano Favorito 4</h2>
          <h3>+7.</h3>
          <button type="button" onClick={() => navigateToFicha(7)}>
            FICHA TÉCNICA
          </button>
        </div>

        <div className="movie">
          <img
            src="/img/images_films//poster-the-substance-664ca00b33247.jpg"
            alt="Película 8"
            
          />
          <h2>The Substance</h2>
          <h3>+18.</h3>
          <button type="button" onClick={() => navigateToFicha(8)}>
            FICHA TÉCNICA
          </button>
        </div>
      </section>
    </main>
  );
};

// se exporta
export default Main;