import React from "react";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header";
import Tree from "./components/Tree";
import { ThemeContext } from "./context/ThemeContext";
import { CONSTANTS } from "./consts";
const {THEMES} = CONSTANTS;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Ruslan',
                lastName: 'Kondratuk',
                email: 'mail.com',
                avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
            },
            theme: THEMES.LIGHT,
        }
    }

    changeThemeCallBack = (theme) => {
        this.setState({
            theme
        })
    }

    loginOut = () => {
        this.setState ({
            user: ''
        })
    }

    render () {
        console.log(CONSTANTS)
        const {user, theme} = this.state;
        return (
            <ThemeContext.Provider value={[theme, this.changeThemeCallBack]}>
                <UserContext.Provider value= {[user, this.loginOut]}>
                    <Header/>
                    <Tree/>
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

export default App

