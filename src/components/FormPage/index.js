import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './style.css'

class FormPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            otherPath: '/signUp'
        }
    }

    hendlerPage = () => {
        const path = this.state.otherPath === '/' ? '/signUp' : '/';
        this.setState({
            otherPath: path
        })
    }

    render() {
        const {otherPath} = this.state
        const nameButton = otherPath === '/' ? 'Login' : 'SignUp'
        return (
            <BrowserRouter>
                <header className='header-container'>
                    <div className='wrapperLogo'>
                        <img className='logo' src= 'logo192.png'/>
                    </div>
                        <Link onClick={this.hendlerPage} to={otherPath} className='button-header' >{nameButton}</Link>

                </header>
                <div className="container">
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signUp' element={<SignUp/>}/>
                </Routes>
                </div>
            </BrowserRouter>


        );
    }
}

export default FormPage;
