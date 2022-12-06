import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SCHEMA } from '../../../schemas';
import '../style.css';

const Login = () => {
    const initialValues = {
        email: '',
        password: '',
    }

    const formikSubmit = (data, formikBag) => {
        console.log(data)
    }

    return (
        <>
            <div className="header">
                <h1 className="title">LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={formikSubmit}
                validationSchema={SCHEMA}
                >
                {({errors, touched}) => {
                    return (
                        <Form className="form">
                            <div className="text-input-column">
                                <Field className="row-input" type="text" name="firstName" placeholder="First name"/>
                                <ErrorMessage name='firstName'>
                                    {() => <div className='error-container'>
                                                <p >{errors.firstName}</p>
                                            </div>}
                                </ErrorMessage>
                                <Field className="row-input" type="text" name="lastName" placeholder="Last name"/>
                                <ErrorMessage name='lastName'>
                                    {() => <div className='error-container'>
                                                <p >{errors.lastName}</p>
                                            </div>}
                                </ErrorMessage>
                             </div>
                            <div className="checkbox-input">
                                <label className="label-sub-text padding">
                                    <input className="radio" type="checkbox"/>
                                    Remember Me <span className='span-text'>Forgot Password</span>
                                </label>
                            </div>
                            <div className="btn-create">
                                <button className="btn">Login</button>
                            </div>
                            <div className="btn-create">
                                <a href="#" className="btn brown"><b>G</b> Sign up with Google</a>
                            </div>
                        </Form>
                    )
                }}
            </Formik>

        </>

    );
}

export default Login;
