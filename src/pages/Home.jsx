import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Home = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    })

    const navigate = useNavigate()

    const addUserToDatabase = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => alert(`${data.firstName} added successfully with id: ${data.id}`))
            .catch(error => console.log(error))
        navigate("/users") // useNavigate hook to navigate to /users page
    }

    return (
        <div>
            <div className="flex items-center space-x-6">
                <input type="text" placeholder="FirstName.." onChange={
                    () => setUser({
                        ...user,
                        firstName: event.target.value
                    })
                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <input type="text" placeholder="LastName.." onChange={
                    () => setUser({
                        ...user,
                        lastName: event.target.value
                    })

                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <input type="number" placeholder="Age.." onChange={
                    () => setUser({
                        ...user,
                        age: event.target.value
                    })
                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <input type="email" placeholder="Email.." onChange={
                    () => setUser({
                        ...user,
                        email: event.target.value
                    })
                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={
                    () => addUserToDatabase()
                }>Add User</button>
            </div>

            <div className="mt-5">
                <Link to="/users" className="bg-cyan-500 rounded-md p-2 text-white">Go to Users page</Link>
            </div>
        </div>
    )
}
