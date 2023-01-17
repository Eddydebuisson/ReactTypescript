import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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



const GetId: React.FC = () => {
  const [user, setUser] = useState<User>();
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);
  
  return <>
    {
        <h1>{user?.name}</h1>
    }
  </>;
};
export default GetId;