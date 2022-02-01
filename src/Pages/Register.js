import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import './style.css'
import { Context } from '../Context/AuthContext'
import logo from '../assets/logo.png'

export default function Register() {

    const { handleSignUp, existingEmail, setExistingEmail } = useContext(Context)

    const validations = yup.object().shape({
        name: yup.string().min(4).required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    return (
        <div className="form">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <h1>Create account!</h1>
            <Formik
                initialValues={{}}
                validationSchema={validations}
                onSubmit={handleSignUp}>
                <Form className="register">
                    <div className="register-group">
                        <label htmlFor="name" className="register-label">Name</label>
                        <Field
                            name="name"
                            type="text"
                            className="register-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="name"
                            className="register-error"
                        />
                        <label htmlFor="email" className="register-label">Email</label>
                        <Field
                            name="email"
                            type="email"
                            className="register-field"
                            onClick ={() => {setExistingEmail(false)}}
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="register-error"
                        />
                        {existingEmail ? <span>this email is already registered</span> : null}
                        <label htmlFor="password" className="register-label">Password</label>
                        <Field
                            name="password"
                            type="password"
                            className="register-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="register-error"
                        />
                    </div>
                    <div className='form-footer'>
                        <Link to={{ pathname: "/login" }}>Sign in</Link>
                        <button className="register-btn" type="submit">Sign Up</button>
                    </div>
                </Form>
            </Formik>
        </div>

    )
}