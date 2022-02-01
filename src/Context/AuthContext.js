import React, { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Context = createContext()

function AuthProvider({ children }) {

    const [existingEmail, setExistingEmail] = useState(false)
    const [wrongAccount, setWrongAccount] = useState(false)

    let navigate = useNavigate();

    const handleSignIn = values => {
        localStorage.removeItem('app-token')
        localStorage.removeItem('username')
        axios.post('https://authentication-api-back.herokuapp.com/user/check', values)
            .then(res => {
                if (res.data.erro) {
                    setWrongAccount(true)
                } else {
                    const token = res.data.jwt
                    if (token) {
                        localStorage.setItem('app-token', token)
                        localStorage.setItem('username', res.data.user)
                        navigate('/')
                    }
                }
            })
    }

    const handleSignUp = values => {
        axios.post('https://authentication-api-back.herokuapp.com/user/create', values)
            .then(res => {
                if (res.data.erro)
                    setExistingEmail(true)
                else
                    handleSignIn(values)
            })
    }

    return (
        <Context.Provider value={{ wrongAccount, setWrongAccount, existingEmail, setExistingEmail, handleSignIn, handleSignUp }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }