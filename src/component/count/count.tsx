import { useEffect, useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  useEffect( ()=> {
  console.log (count);}
  , [count]);
  return( <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count +1)}>+</button>
  </>);
};

export default Count;
