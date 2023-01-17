import { useEffect, useState } from "react";
import Heros from "../component/card/heros";
import SuperHeros from "../model/superHeros";
// import heros from "../repo/heros_data";

const HeroLists: React.FC = () => {
  const [heroList, setHeroList] = useState<SuperHeros[]>([]);

  // useEffect(() => setHeroList(heros), []);
  useEffect(() => {
    fetch("http://localhost:3004/superHeros")
      .then((response) => response.json())
      .then((data) => {
        setHeroList(data);
      });
  }, []);
  return (
    <>
      <h1>Mes carte de héros ! </h1>
      {heroList.map((hero) => (
        <Heros key={hero.id} superheros={hero} />
      ))}
    </>
  );
};
export default HeroLists;
