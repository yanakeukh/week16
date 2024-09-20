type Props = {
    id: string;
    name: string;
    description: string;
    image: string;
    age: number;
    onDelete: (id: string) => void;
}

//5.Our Card we have in this code. We declare here our props and show name, age, description and image.

export default function Card({ name, id, description, age, image, onDelete }: Props) {
    
    
    const handleDeleteUser = () => {
        onDelete(id); 
    };

    return (
        <div>
            <img width="200" height="200" src={image} alt={name} />
            <h2>{name}, {age}</h2>
            <p>{description}</p>
            <button type="button" onClick={handleDeleteUser}>Delete user</button>
        </div>
    );
}
