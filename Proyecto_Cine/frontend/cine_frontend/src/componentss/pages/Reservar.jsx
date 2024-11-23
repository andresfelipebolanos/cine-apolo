import React from "react";
import { useParams } from "react-router-dom"; // Para acceder al id de la URL
import { useState, useEffect } from 'react'; // para manejar los estados de las variables
import './movies.css';
import axios from 'axios' // para conectar con el servidor
const Reservar = () => {
	/**
	 * definimos una variable username que mas adelante almacenaria el nombre del usuario mediante su token
	 */
	const [username, setUsername] = useState("");
	const [userData,setUserData] = useState({username:"",fecha: "",pelicula:"",silla:""}); //estado de los parametros del formulario
	const { id } = useParams(); // traemos id = userparams() para acceder a la id
	const handleChange =(e)=>{
		setUserData({...userData,[e.target.name]:e.target.value});
	// handleChange para sacar los datos de los inputs mediante el name 
	 } 
	
  const peliculas = {
	// un array de peliculas que contendria la informacion de las peliculas
    1: {
      nombre: "The Wild Robot",
      sinopsis: `Esta épica aventura nos descubre el viaje de una robot (la unidad ROZZUM 7134 o «Roz») que ha naufragado en una isla deshabitada 
                y deberá aprender a adaptarse al duro entorno, forjando poco a poco relaciones con la fauna local y convirtiéndose en madre adoptiva 
                de una cría de ganso huérfana.`,
      genero: "Animación, Aventura, Ciencia Ficción",
      duracion: "102 minutos",
      clasificacion: "+10",
      imagen: "/img/images_films/the_Wild_Robot_third_poster.jpg",
    },
    2: {
      nombre: "Transformers Uno",
      sinopsis: `TRANSFORMERS ONE es la historia jamás contada del origen de Optimus Prime y Megatron y de cómo pasaron de ser 
                hermanos de armas que cambiaron el destino de Cybertron para siempre, a convertirse en enemigos acérrimos. La primera película 
                de Transformers animada totalmente por CGI, cuenta con un reparto de voces repleto de estrellas, como Chris Hemsworth, 
                Brian Tyree Henry, Scarlett Johansson, Keegan-Michael Key, Steve Buscemi, con Laurence Fishburne, y Jon Hamm.`,
      genero: "Acción, Ciencia Ficción",
      duracion: "120 minutos",
      clasificacion: "+12",
      imagen: "/img/images_films/Transformers_One-329708311-large.jpg",
    },
    3: {
      nombre: "No hables con extraños",
      sinopsis: `Unas vacaciones increíbles se convierten en una horrible pesadilla a manos de unos anfitriones que ocultan una oscuridad indescriptible.`,
      genero: "Terror, Suspenso",
      duracion: "120 minutos",
      clasificacion: "+16",
      imagen: "/img/images_films/No_hables_con_extraanos-102462605-large.jpg",
    },
    4: {
        nombre: "Beetlejuice Beetlejuice",
      sinopsis: `Después de una tragedia, tres generaciones de la familia Deetz regresan a Winter River. Aún atormentada por Beetlejuice, 
                la vida de Lydia da un vuelco cuando su rebelde hija adolescente, 
                Astrid, descubre el misterioso modelo de la ciudad en el ático..`,
      genero: "Terror, Comedia",
      duracion: "105 minutos",
      clasificacion: "+13",
      imagen: "/img/images_films/beetlejuice-2-afiche-oficial-486x720.png",
    },
    5: {
        nombre: "KILL: Masacre en el Tren",
      sinopsis: `Un pasajero en un tren a Nueva Delhi. 
                El tren pronto se convierte en un campo de batalla en el que un par de comandos se enfrentan a un ejército de bandidos invasores.`,
      genero: "Acción",
      duracion: "105 minutos",
      clasificacion: "+16",
      imagen: "/img/images_films/360 X 500 kill.jpg",
    },
    6: {
        nombre: "Deadpool & Wolverine",
        sinopsis: `Marvel Studios presenta su mayor equivocación hasta la fecha: DEADPOOL & WOLVERINE. 
                Un apático Wade Wilson se esfuerza por adaptarse a la vida civil. Sus días como el mercenario moralmente flexible, Deadpool, han quedado atrás. Cuando su mundo se enfrenta a una amenaza existencial, reaciamente Wade debe ponerse el traje de nuevo, junto con un aún más reacio… ¿muy reacio? ¿reacísimo?... 
                Tiene que convencer a un súper-reacio Wolverine a... Mierda. Las sinopsis son tan increíblemente estúpidas.`,
        genero: "Acción, Superheroes, Comedia, Adultos",
        duracion: "128 minutos",
        clasificacion: "+18",
        imagen: "/img/images_films/Deadpool-3-poster-1.jpg",
    },
    7: {
        nombre: "Mi Villano Favorito 4",
        sinopsis: `Gru y su familia deben adoptar identidades falsas para ocultarse de un supervillano, 
                un antiguo compañero de la escuela de Gru que le guarda rencor desde pequeño y pretende convertir a la familia 
                en híbridos entre humano y cucaracha.`,
        genero: "Animación, Ciencia Ficción, Aventura, Familiar",
        duracion: "104 minutos",
        clasificacion: "+7",
        imagen: "/img/images_films/360 X 500mivillano4.jpg",
    },
    8:{
        nombre: "The Substance",
        sinopsis: `La posibilidad de la eterna juventud está al alcance de la mano. Con un nuevo producto, denominado la sustancia, la vida de cualquier persona mejoraría sustancialmente. 
                ¿Alguna vez has soñado una versión mejor de ti misma? Entonces, debes probar la sustancia. De esta forma, puedes generar otra versión de ti misma. Una versión mejorada: más joven, más bella, más perfecta. 
                Solo tienes que compartir tu tiempo con esta nueva figura. Una semana para ti, otra semana para ella en un equilibrio perfecto de siete días. Parece fácil. Solo es necesario seguir las instrucciones. 
                Claro que es inevitable pensar en las contraindicaciones. ¿Qué podría salir mal?`,
        genero: "Drama, Psicológico, Terror",
        duracion: "144 minutos",
        clasificacion: "+18",
        imagen: "/img/images_films/poster-the-substance-664ca00b33247.jpg",
    }
    
  };
  const pelicula = peliculas[id];
  

const handleSubmit = async (e) =>{
	// validaciones para poder enviar los datos de la reserva
	const sillas =['A1','A2','A3','A5','B1','B2','B3','C1','C2','C3','C4','C5','D1','D2','D3','D4','D5']
    const SillaValida = sillas.includes(userData.silla)
	console.log(SillaValida);
	e.preventDefault();
	if(!userData.username || !userData.pelicula){
		alert('Inicia sesión para acceder a las funciones de el aplicativo');
	}
	else if(!userData.fecha || !userData.silla){
		alert('Selecciona la fecha y silla para completar tu reserva')
		
	}
	else if(!SillaValida){
		alert('Escribe una silla válida');
	}
	else{
		await axios.post('http://localhost:3000/api/v1/users/reservar',userData).then((res)=>{
		  console.log(res.data);
		  alert(`(Reserva Exitosa) Nombre: ${username}  Fecha: ${userData.fecha}  Película: ${userData.pelicula} Silla: ${userData.silla} `);
		}).catch((error) => {
			console.log(error);
			alert(error.response.data.error);
		})
	  }
	};
    
	useEffect(() => { // el useEffect es una funcion que se ejecuta sola, en este caso cuando se ejecutaría cada vez que cambie el id de pelicula[pelicula]
		// obtenemos el token para acceder a los datos del usuario que está almacenado en el localStorage
		const token = localStorage.getItem("token");
		if (token) {
		  axios
			.post(
			  "http://localhost:3000/api/v1/users/profile",
			  {},
			  {
				headers: {
				  Authorization: `Bearer ${token}`,
				},
			  }
			)
			.then(({ data }) => {
			  setUsername(data.msg.username);
			  setUserData((prevData) => ({
				//con esta funcion actualizamos el estado de las otras dos propiedades
				...prevData,
				username: data.msg.username,
				pelicula: pelicula.nombre,
			  }));
			})
			.catch((e) => {
			  console.error("Error:", e);
			});
		} else {
		  
		}
	  }, [pelicula]);

  return (
    <main>
      <section>
        <section className="ficha-tecnica">
			<ul>
				<li>
					<img src={pelicula.imagen} alt="Pelicula1" width="200px"/>{/*aca pondria la informacion de la pelicula
					dependiendo de la id en la que este la url */}
					<h3>{pelicula.nombre}</h3>
				</li>
			</ul>
		</section>
        <section className="sillas">
			<form id="reserva" className="reserva">
			<div>
				<div>
					<label >A1</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >A2</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >A3</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
				
				</div>
				<div>
					<label >A4</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >A5</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >B1</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >B2</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >B3</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >B4</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >B5</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >C1</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >C2</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >C3</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >C4</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >C5</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >D1</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >D2</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >D3</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >D4</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
				<div>
					<label >D5</label>
					<img src="/img/images/silla.png" alt="" width="75px"/>
					
				</div>
            </div>
			    <h3>Escoja la fecha de la reserva</h3>
				<input type="date" name="fecha" value={userData.fecha} onChange={handleChange}  /><br /><br />{/* con esto actualizamos los valores de los estados que 
				seran enviados a la base de datos posteriormente*/}
				<h3>Escoja la Silla que <br /> desea reservar </h3>
				<input type="text" name= "silla" value={userData.silla.toUpperCase()} onChange={handleChange} maxLength="2"/> <br /> <br /> <br /> <br />
				<button type="submit" onClick={handleSubmit}>Confirmar Reserva</button> {/*lleva a la funcion handle
				submit que enviara los datos a la base de datos y nos dara su respecitva respuesta */}
				
				<br/>
			</form>
		</section>
      </section>
    </main>
  );

};

export default Reservar;