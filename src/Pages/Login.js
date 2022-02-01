import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import './style.css'
import { Context } from '../Context/AuthContext'
import logo from '../assets/logo.png'

export default function Login() {

    const { wrongAccount, setWrongAccount, handleSignIn } = useContext(Context)

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    return (
        <div className="form">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <h1>Welcome back!</h1>
            <Formik
                initialValues={{}}
                validationSchema={validations}
                onSubmit={handleSignIn}>
                <Form className="login">
                    <div className="login-group">
                        <label htmlFor="email" className="login-label">Email</label>
                        <Field
                            name="email"
                            type="email"
                            className="login-field"
                            onClick={()=>{setWrongAccount(false)}}
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="login-error"
                        />
                        {wrongAccount ? <span>email or password incorrect</span> : null}
                        <label htmlFor="password" className="login-label">Password</label>
                        <Field
                            name="password"
                            type="password"
                            className="login-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="login-error"
                        />
                    </div>
                    <div className='form-footer'>
                        <Link to={{ pathname: "/register" }}>Sign up</Link>
                        <button className="login-btn" type="submit">Sign In</button>
                    </div>
                </Form>
            </Formik>
        </div>

    )

}