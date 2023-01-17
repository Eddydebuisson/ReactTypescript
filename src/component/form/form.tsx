import React, { useState } from "react";

const Forms: React.FC = () => {
  const [personne, setPersonne] = useState<string>("luke skywalker");

  const changePersonne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonne(event.target.value);
    console.log(personne);
  };

  const soumettre = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("le formulaire est envoyer")
  }
  return (
    <>
      <form onSubmit={soumettre}>
        <label htmlFor="nom"> Nom: </label>
        <input type="text" id="name" name="nom" value={personne} onChange={changePersonne} />
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
};
export default Forms;
