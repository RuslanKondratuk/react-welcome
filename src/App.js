import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';



class App extends React.Component {


    render () {
        return (
            <button onClick={() => {
                window.close();
            }}>close</button>
            // <BrowserRouter>
            //     <ul>
            //         <li><Link to='/'>Go to Home</Link></li>
            //         <li><Link to='/counter'>Go to Counter</Link></li>
            //         <li><Link to='/login'>Go to LoginForm</Link></li>
            //         <li><Link to='/todo'>Go to ToDoList</Link></li>
            //     </ul>
            //     <Routes>
            //         <Route path="/" element={<Home/>}/>
            //         <Route path="/counter" element={<Counter/>}/>
            //         <Route path="/login" element={<LoginForm/>}/>
            //         <Route path="/todo" element={<ToDoList/>}/>
            //     </Routes>
            // </BrowserRouter>
        )
    }
}

export default App

const Home = () => {
    return <h1>You are Home!</h1>
}