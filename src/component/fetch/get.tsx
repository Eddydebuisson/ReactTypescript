import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type User= {
        id:number;
        name: string
        username: string
        email: string
        address: {
          street: string
          suite: string
          city: string
          zipcode: string
          geo: {
            lat: string
            lng:string
          }
        },
        phone: string
        website: string
        company: {
          name: string
          catchPhrase: string
          bs: string
        }
      }



const Get: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  
  return <>
    {users.map( user => (
     <NavLink to={`/get/${user.id}`}><h1 key={user.id}>{user.name}</h1></NavLink>   
    ))}
  </>;
};
export default Get;
