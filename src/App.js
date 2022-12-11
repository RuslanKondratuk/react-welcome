import React, {useEffect, useState} from 'react';
import Tree from './components/Tree';
import { UserContext } from './context/UserContext';
import { ThemeContext } from './context/ThemeContext';
import { CONSTANTS } from './consts';
import UserDashBoard from './components/UserDashBoard'
import LoaderPage from './pages/LoaderPage';
import WindowSize from './components/WindowSize';
import SignForm from './components/SignForm';
// const {THEMES} = CONSTANTS


const App = () => {
    // const [users, setUsers] = useState({
    //                                 firstName: 'Alex Doe'
    // })
    // const [theme, setTheme] = useState(THEMES.LIGHT)

    // const changeThemeCallBack = (theme) => {
    //     setTheme(theme)
    // }

    // const loginOut = () => {
    //     setUsers('')
    // }

        return (

            // <ThemeContext.Provider value = {[theme, changeThemeCallBack]}>
            //     <UserContext.Provider value = {[users, loginOut]}>
            //         <Tree/>
            //     </UserContext.Provider>
            // </ThemeContext.Provider>
            // <UserDashBoard/>
            <SignForm/>

        )

}

export default App

