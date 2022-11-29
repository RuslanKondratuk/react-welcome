import React from 'react';
import styles from './Header.module.css';
import UserMenu from './UserMenu';
import withThemes from '../../HOCs/withThemes';
import { CONSTANTS } from '../../consts';
const {THEMES} = CONSTANTS;


const Header = (props) => {
            const {theme, setTheme} = props
            const changeTheme = () => {
                const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                setTheme(newTheme)
            }

            return (
                <div className={styles.header}>
                    <img src='https://img.freepik.com/free-psd/     logo-mockup-on-grey-wall_35913-2122.jpg?w=2000' className={styles.logo} alt='#'/>
                    <UserMenu/>
                    <div>
                    <input
                            type='checkbox'
                            onChange={changeTheme}
                    />
                    <p>Change Theme</p>
                    </div>
                </div>
            )
}

const wrappedTheme = withThemes(Header)

export default wrappedTheme;
