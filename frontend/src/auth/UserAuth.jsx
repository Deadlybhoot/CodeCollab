import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user.context'


// How It Works Together
// Initial State:

// loading is set to true.
// token and user are checked.
// Authentication Check:

// If the user is not logged in (!token or !user), they are redirected to the login page (/login).
// If the user is logged in, loading is set to false.
// Render Logic:

// While authentication is being checked, show "Loading...".
// Once authenticated, show the wrapped children (protected content).



const UserAuth = ({ children }) => {

    const { user } = useContext(UserContext)
    const [ loading, setLoading ] = useState(true)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()




    useEffect(() => {
        if (user) {
            setLoading(false)
        }

        if (!token) {
            navigate('/login')
        }

        if (!user) {
            navigate('/login')
        }

    }, [])

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <>
            {children}</>
    )
}

export default UserAuth