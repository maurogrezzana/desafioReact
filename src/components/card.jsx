//import "./card.css";
export default function Card(props) {
  return (
    <div className="container py-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.imagen}
          className="card-img"
          alt="..."
          style={{ width: "100%", height: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <hr />
          <p className="card-text">{props.puntaje}</p>
        </div>
      </div>
    </div>
  );
}
