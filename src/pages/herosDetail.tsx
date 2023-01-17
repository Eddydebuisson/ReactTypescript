import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SuperHeros from "../model/superHeros";
// import heros from "../repo/heros_data";
import Heros from "../component/card/heros";
import {FiEdit} from "react-icons/fi"

const HeroDetails: React.FC = () => {
  const { id } = useParams();
  const [heroId, setHeroId] = useState<SuperHeros>();

  //   useEffect(
  //     () =>
  //       heros.forEach((h) => {
  //         if (id) {
  //           if (h.id === +id) {
  //             setHeroId(h);
  //           }
  //         }
  //       }),
  //     [id]
  //   );
  useEffect(() => {
    fetch(`http://localhost:3004/superHeros/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHeroId(data);
      });
  }, [id]);
  return (
    <>{heroId !== undefined && <Heros key={heroId.id} superheros={heroId} />}
    <Link to={`/edit/${id}`}><button><FiEdit/></button></Link>
    </>
  );
};
export default HeroDetails;
