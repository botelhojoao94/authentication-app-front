import React from "react"
import { Navigate } from 'react-router'

export default function PrivateRoute({ children }) {

    const isLogged = !!localStorage.getItem('app-token')
    return isLogged ?
        children :
        <Navigate to="/login" />

}