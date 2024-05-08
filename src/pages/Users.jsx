import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Users = () => {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = () => {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                setUserData(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-semibold">Users</h1>
            {
                loading ? <p>Loading...</p> : (
                    <table className="table-auto border-separate	border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">FirstName</th>
                                <th className="border border-slate-600">LastName</th>
                                <th className="border border-slate-600">Age</th>
                                <th className="border border-slate-600">Email</th>
                                <th className="border border-slate-600">Edit</th>
                                <th className="border border-slate-600">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map(user => (
                                    <tr key={user.id}>
                                        <td className="border border-slate-600">{user.firstName}</td>
                                        <td className="border border-slate-600">{user.lastName}</td>
                                        <td className="border border-slate-600 text-center">{user.age}</td>
                                        <td className="border border-slate-600">{user.email}</td>
                                        <td className="border border-slate-600">
                                            <Link to={`/edit-user/${user.id}`} state={{data: user}} className="bg-green-500 rounded-md p-2 text-white" >Edit</Link>
                                        </td>
                                        <td className="border border-slate-600">
                                            <button className="bg-red-500 rounded-md p-2 text-white" onClick={
                                                () => {
                                                    fetch(`http://localhost:3000/users/${user.id}`, {
                                                        method: "DELETE"
                                                    })
                                                        .then(() => fetchUsers())
                                                        .catch(error => console.log(error))
                                                }
                                            }>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )

            }
            <div className="mt-5">
                <Link to="/" className="bg-cyan-500 rounded-md p-2 text-white">Go to Home page</Link>
            </div>
        </div>
    )
}
