import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import './style.css'

export default function Home() {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('app-token')
        localStorage.removeItem('username')
        navigate('/login')
    }

    return (
        <>
            <h1>Bem-vindo, {localStorage.getItem('username')}!</h1>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </>
    )

}