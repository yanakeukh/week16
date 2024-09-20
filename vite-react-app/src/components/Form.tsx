import {useState } from "react";
import {addUser} from "../services/api"
import Field from "./Field";

export default function Form() {
    const [name, setName]= useState("");
    const [age, setAge]= useState("");
    const [description, setDescription]= useState("");
    const [image, setImage]= useState("");

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const user = {
            name,
            description,
            image,
            age: Number(age)
        }

        addUser(user)

        setName('')
        setAge('')
        setDescription('')
        setImage('')
    }

    return (
            <form className="js-form" onSubmit={handleSubmit}>
      <Field>
            <label htmlFor="name">Name</label>
            <input required placeholder="John" id="name" type="text" name="name" value={name} onInput={(e:React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value)
            }}/>
        </Field>
       <Field>
            <label htmlFor="age">Age</label>
            <input required placeholder="25" id="age" type="text" name="age"  value={age} onInput={(e:React.ChangeEvent<HTMLInputElement>) => {
                setAge(e.target.value)
            }}/>
        </Field>
       <Field>
            <label htmlFor="description">Description</label>
            <input required placeholder="I'm kind" id="description" type="text" name="description" value={description} onInput={(e:React.ChangeEvent<HTMLInputElement>) => {
                setDescription(e.target.value)
            }}/>
        </Field>
       <Field>
            <label htmlFor="image">Image</label>
            <input required placeholder="https://image.jpeg" id="image" type="text" name="image" value={image} onInput={(e:React.ChangeEvent<HTMLInputElement>) => {
                setImage(e.target.value)
            }}/>
        </Field>
        <button className="js-add-user form-btn" type="submit">Add user</button>
    </form>
    )
}