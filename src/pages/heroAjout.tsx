import { useState } from "react";
import HerosForm from "../component/herosForm/herosFrom";
import SuperHeros from "../model/superHeros";

const HeroAjout: React.FC = () => {
    const [hero,setHero]= useState<SuperHeros>(new SuperHeros())
  return <>
        
       <h2>Ajouter votre héros</h2>
       <HerosForm hero={hero} type="ajout"></HerosForm>
  </>

};
export default HeroAjout;
