
import { NavLink } from "react-router-dom";
import SuperHeros from "../../model/superHeros";
import "./heros.css"
type HerosProps = {
  superheros: SuperHeros;
}

const Heros:React.FC<HerosProps> = ({superheros}) => {
  return <>

	
	<div className="card">
		<NavLink className="card-image" to={`/${superheros.id}`}>
			<img src={superheros.image} alt="" />
		</NavLink>
		<a className="card-description" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
			<h2>{superheros.name}</h2>
			<p>Name: {superheros.civil}</p>
			<p>Age: {superheros.age}</p>
			<p>Ville: {superheros.ville}</p>
		</a>
	</div>

  </>;
};

export default Heros;
