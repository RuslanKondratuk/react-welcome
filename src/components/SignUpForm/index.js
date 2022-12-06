import React, { Component } from 'react';
import style from './SignUp.module.css';
import {SCHEMA} from '../../schemas';
import {Formik, Form, Field, ErrorMessage} from 'formik';


const SignUpForm = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        pass: '',
    }

    const formikSubmit = (data, formikBag) => {
        console.log(data, formikBag);
    }

        return (
            <Formik
                initialValues={initialValues}
                onSubmit={formikSubmit}
                validationSchema={SCHEMA}
                >
                {(formikProps) => {
                    return (
                        <Form className={style.container}>
                            <Field
                                name='firstName'
                                placeholder='firstName'
                            />
                            <ErrorMessage name='firstName' component='p'/>
                            <Field
                                name='lastName'
                                placeholder='lastName'
                            />
                            <ErrorMessage name='lastName' component='p'/>
                            <Field
                                name='email'
                                placeholder='email'
                            />
                             <ErrorMessage name='email' component='p'/>
                            <Field
                                name='pass'
                                placeholder='pass'
                            />
                            <ErrorMessage name='pass' component='p'/>
                            <button>Submit</button>
                        </Form>
                    )

                }}
            </Formik>
        );
}

export default SignUpForm;
