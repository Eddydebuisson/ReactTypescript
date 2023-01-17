type CardProps = {
  nom: string;
};

const Card: React.FC<CardProps> = ({ nom }) => {
  return (
    <>
      <h1>Coucou</h1>
      <h2> {nom}</h2>
    </>
  );
};
export default Card;
