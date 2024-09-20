import Card from "./Card";
import { fetchUsers, deleteUser } from "../services/api";
import { useEffect, useState } from "react";

type User = {
    id: string;
    name: string;
    description: string;
    image: string;
    age: number;
};

export default function Gallery() {   

    //4. here we fetch our users and return our component Card using map function
    const [users, setUsers] = useState<User[]>([]);  

    useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    function handleDeleteUser(id: string) {
        deleteUser(id).then(() => {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        });
    } 
    
    return (
        <div className="gallery">
            {users.map(({ id, name, description, image, age }) =>  
                <Card key={id} id={id} name={name} description={description} image={image} age={age} onDelete={handleDeleteUser} />
            )}
        </div> 
    );
}
