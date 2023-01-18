import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperHeros from "../../model/superHeros";
import HeroService from "../../service/heroService";
import {MdDeleteOutline} from "react-icons/md";
import "./herosForm.css";

type props = {
  hero: SuperHeros;
  type: string;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type form = {
  name: champ;
  civil: champ;
  age: champ;
  ville: champ;
  image: champ;
};

const HerosForm: React.FC<props> = ({ hero, type }) => {
  const [form, setForm] = useState<form>({
    name: {
      value: hero.name,
      isValid: true,
    },
    civil: {
      value: hero.civil,
      isValid: true,
    },
    age: {
      value: hero.age,
      isValid: true,
    },
    ville: {
      value: hero.ville,
      isValid: true,
    },
    image: {
      value: hero.image,
      isValid: true,
    },
  });
  const redirection = useNavigate();

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    hero.name = form.name.value;
    hero.age = form.age.value;
    hero.civil = form.civil.value;
    hero.ville = form.ville.value;

    if (hero.id) {
      HeroService.majHeros(hero).then(() => redirection(`/${hero.id}`));
    } else {
      hero.image = form.image.value;
      HeroService.ajoutHeros(hero).then(() => redirection("/"));
    }
  };

  const editHeros = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const deleteHeros = () => {
    HeroService.supprimer(hero)
    redirection("/")
  }

  return (
    <>
      {type === "edit" && (
        <div className="card">
          <form onSubmit={soumission}>
            <div className="card-image">
              <img src={hero.image} alt={hero.name} />
            </div>
            <div className="card-description">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                name="name"
                value={form.name.value}
                onChange={editHeros}
              />

              <label htmlFor="age">Age :</label>
              <input
                type="number"
                name="age"
                value={form.age.value}
                onChange={editHeros}
              />

              <label htmlFor="ville">Ville :</label>
              <input
                type="text"
                name="ville"
                value={form.ville.value}
                onChange={editHeros}
              />

              <label htmlFor="civil">Identité secrète :</label>
              <input
                type="text"
                name="civil"
                value={form.civil.value}
                onChange={editHeros}
              />

              <input type="submit" value="Envoyer" />
            </div>
          </form>
            <button onClick={deleteHeros}><MdDeleteOutline/></button>
        </div>
      )}
      {type === "ajout" && (
        <div className="card">
          <form onSubmit={soumission}>
            <div className="card-description">
              <label htmlFor="image">Url :</label>
              <input
                type="text"
                name="image"
                value={form.image.value}
                onChange={editHeros}
              />

              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                name="name"
                value={form.name.value}
                onChange={editHeros}
              />

              <label htmlFor="age">Age :</label>
              <input
                type="number"
                name="age"
                value={form.age.value}
                onChange={editHeros}
              />

              <label htmlFor="ville">Ville :</label>
              <input
                type="text"
                name="ville"
                value={form.ville.value}
                onChange={editHeros}
              />

              <label htmlFor="civil">Identité secrète :</label>
              <input
                type="text"
                name="civil"
                value={form.civil.value}
                onChange={editHeros}
              />

              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default HerosForm;
