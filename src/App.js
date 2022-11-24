import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';
import CounterPage from "./pages/CounterPage";
import LoaderPage from "./LoaderPage";



class App extends React.Component {


    render () {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to='/'>Go to Home</Link></li>
                    <li><Link to='/counter'>Go to Counter</Link></li>
                    <li><Link to='/loaderPage'>Go to loaderPage</Link></li>
                    <li><Link to='/login'>Go to LoginForm</Link></li>
                    <li><Link to='/todo'>Go to ToDoList</Link></li>
                    <li><Link to='/counterPage'>Go to CounterPage</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/loaderPage" element={<LoaderPage/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/counterPage" element={<CounterPage/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/todo" element={<ToDoList/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App

const Home = () => {
    return <h1>You are Home!</h1>
}