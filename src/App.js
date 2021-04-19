import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card";
import Formulario from "./components/form";
import NavBar from "./components/NavBar";
//import { Navbar } from "react-bootstrap";

const peliculas = [
  {
    image:
      "http://www.rirca.es/wp-content/uploads/2017/03/Westworld_TV_series_title_logo.jpg",
    titulo: "Westworld (2016)",
    descripcion:
      "En un futuro no especificado, Westworld, uno de los seis parques temáticos poseído y operados por Delos Inc., permite a los visitantes experimentar el Viejo Oeste en un entorno poblado por «anfitriones», androides programados para satisfacer todos los deseos de los visitantes.",
    puntaje: "Puntaje: 9/10",
  },
  {
    image:
      "http://photos1.blogger.com/blogger/4169/554/1600/last_samurai_ver8.0.jpg",
    titulo: "The Last Samurai (2003)",
    descripcion:
      "Año 1876. El capitán Nathan Algren es un hombre que sobrevive atormentado por los recuerdos de la Guerra Civil (1861-1865). En un país muy lejano, otro soldado ve también cómo su modo de vida está a punto de desintegrarse. Es Katsumoto, el último líder de un antiguo linaje de guerreros, los venerados samuráis.",
    puntaje: "Puntaje: 9/10",
  },
];

export default function App() {
  return (
    <div className="">
      <NavBar />
      <div className="container d-flex">
        {peliculas.map((pelicula) => (
          <Card
            imagen={pelicula.image}
            titulo={pelicula.titulo}
            descripcion={pelicula.descripcion}
            puntaje={pelicula.puntaje}
          />
        ))}
      </div>
      <Card />
      <Formulario />
    </div>
  );
}
