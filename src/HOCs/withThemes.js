import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

// const withThemes = (Component) => (props) => {
//         return (
//             <ThemeContext.Consumer>
//                 {([theme, setTheme]) => {
//                    return  <Component theme={theme} setTheme={setTheme} {...props}/>
//                 }}
//             </ThemeContext.Consumer>
//         )
//     }

const withThemes = (Component) =>  {
        return  class extends React.Component {
            render () {
                return  (<ThemeContext.Consumer>
                    {([theme, setTheme]) => {
                    return  <Component theme={theme} setTheme={setTheme} {...this.props}/>
                    }}
                </ThemeContext.Consumer>)
            }
    }
}


export default withThemes;

