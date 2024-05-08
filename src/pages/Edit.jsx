import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export const Edit = () => {
    const navigate = useNavigate(); // useNavigate hook to navigate to /users page
    let { state: {data} } = useLocation();

    const [user, setUser] = useState({...data})

    const addUserToDatabase = () => {
        fetch(`http://localhost:3000/users/${data.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => alert(`${data.firstName} updated successfully!`))
            .catch(error => console.log(error))
        navigate("/users") // useNavigate hook to navigate to /users page
    }

  return (
    <div>
        <div className="flex items-center space-x-6">
                <input type="text" value={user.firstName} placeholder="FirstName.." onChange={
                    () => setUser({
                        ...user,
                        firstName: event.target.value
                    })
                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <input type="text" value={user.lastName} placeholder="LastName.." onChange={
                    () => setUser({
                        ...user,
                        lastName: event.target.value
                    })

                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <input type="number" value={user.age} placeholder="Age.." onChange={
                    () => setUser({
                        ...user,
                        age: event.target.value
                    })
                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <input type="email" value={user.email} placeholder="Email.." onChange={
                    () => setUser({
                        ...user,
                        email: event.target.value
                    })
                } className="px-4 py-2 border-2 border-gray-300 rounded-md " />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={
                    () => addUserToDatabase()
                }>Update User</button>
            </div>
    </div>
  )
}
