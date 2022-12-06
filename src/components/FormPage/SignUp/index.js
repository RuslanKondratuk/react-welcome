import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { SCHEMA } from '../../../schemas';
import ErrorComp from '../ErrorComp';
import '../style.css'

const SignUp = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: '',

    }

    const formikSubmit = (data, formikBag) => {
        console.log(data)
    }
    return (
        <>
        <div className="header">
            <h1 className="title">Create an account</h1>
                <p className="sub-title">We always keep your name and email address private.</p>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={formikSubmit}
                validationSchema={SCHEMA}
                >
                {({errors, touched}) => {
                    console.log(errors)
                    return (
                        <Form className="form">
                            <div className="text-input">
                                <Field className="row-input" type="text" name="firstName" placeholder="First name"/>
                                <Field className="row-input" type="text" name="lastName" placeholder="Last name"/>
                                {errors.firstName && touched.firstName ? (<div className='error-container'>
                                                                            <ErrorMessage name='firstName'>
                                                                            {() => <p >{errors.firstName}</p>}
                                                                            </ErrorMessage>
                                                                             </div>)   : null}
                                {(!errors.firstName || !touched.firstName) && errors.lastName && touched.lastName? (<div className='error-container'>
                                                                            <ErrorMessage name='lastName'>
                                                                            {() => <p >{errors.lastName}</p>}
                                                                            </ErrorMessage>
                                                                        </div>)   : null}
                                <Field className="row-input" type="text" name="displayName" placeholder="Display name"/>
                                <Field className="row-input" type="email" name="email" placeholder="Email Addres"/>
                                {errors.displayName && touched.displayName ? (<div className='error-container'>
                                                                            <ErrorMessage name='displayName'>
                                                                            {() => <p >{errors.displayName }</p>}
                                                                            </ErrorMessage>
                                                                             </div>)   : null}
                                {(!errors.displayName || !touched.displayName) && errors.email && touched.email? (<div className='error-container'>
                                                                            <ErrorMessage name='email'>
                                                                            {() => <p >{errors.email}</p>}
                                                                            </ErrorMessage>
                                                                        </div>)   : null}
                                <Field className="row-input" type="password" name="password" placeholder="Password"/>
                                <Field className="row-input" type="password" name="passwordConfirmation" placeholder="Password Confirmation"/>
                                {errors.password && touched.password ? (<div className='error-container'>
                                                                            <ErrorMessage name='password'>
                                                                            {() => <p >{errors.password }</p>}
                                                                            </ErrorMessage>
                                                                             </div>)   : null}
                                {(!errors.password || !touched.password) && errors.passwordConfirmation && touched.passwordConfirmation ? (<div className='error-container'>
                                                                            <ErrorMessage name='passwordConfirmation'>
                                                                            {() => <p >{errors.passwordConfirmation}</p>}
                                                                            </ErrorMessage>
                                                                        </div>)   : null}
                            </div>


                            <div className="radio-input">
                                <label className="label-text">
                                    <input className="radio" type="radio" name="radio"/>
                                    Join As a Buyer
                                </label>
                                <p className="label-sub-text">I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                            </div>
                            <div className="radio-input">
                                <label className="label-text">
                                    <input className="radio" type="radio" name="radio"/>
                                    Join As a Creative or Marketplace Seller
                                </label>
                                <p className="label-sub-text">I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                            </div>
                            <div className="checkbox-input">
                                <label className="label-sub-text padding">
                                    <input className="radio" type="checkbox"/>
                                    Allow Squadhelp to send marketing/promotional offers from time to time
                                </label>
                            </div>
                            <div className="btn-create">
                                <button className="btn">Create account</button>
                            </div>
                            <div className="text-agree">
                                <p>By clicking this button, you agree to our <a href="#" className="link-agree"> Terms of Service</a>.</p>
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

export default SignUp;
