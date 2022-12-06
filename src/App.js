import React from "react";
import UserDashboard from "./components/UserDashBoard";


const App = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: {
    //             firstName: 'Ruslan',
    //             lastName: 'Kondratuk',
    //             email: 'mail.com',
    //             avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    //         },
    //         theme: THEMES.LIGHT,
    //     }
    // }

    // changeThemeCallBack = (theme) => {
    //     this.setState({
    //         theme
    //     })
    // }

    // loginOut = () => {
    //     this.setState ({
    //         user: ''
    //     })
    // }


        // console.log(CONSTANTS)
        // const {user, theme} = this.state;
        return (
            // <ThemeContext.Provider value={[theme, this.changeThemeCallBack]}>
            //     <UserContext.Provider value= {[user, this.loginOut]}>
            //         <Header/>
            //         <Tree/>
            //     </UserContext.Provider>
            // </ThemeContext.Provider>
            <UserDashboard/>
        )

}

export default App

