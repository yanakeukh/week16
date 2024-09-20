//1.
const API_KEY = "66e32f9e494df9a478e48f71"

//2. 
export async function fetchUsers() {
    const users = await fetch(`https://${API_KEY}.mockapi.io/users`)
    .then((res) => res.json())

    return users
}

type User = {
    name: string;
    description: string;
    image: string;
    age: number;
}

export async function addUser(newUser: User) {
    await fetch(`https://${API_KEY}.mockapi.io/users`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

export async function deleteUser(id: string) {
     await fetch(`https://${API_KEY}.mockapi.io/users/${id}`, {
        method: "DELETE"
     })
}
