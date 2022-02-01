import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from './Context/AuthContext'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={<PrivateRoute> <Home /> </PrivateRoute>} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route path='*' element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AllRoutes