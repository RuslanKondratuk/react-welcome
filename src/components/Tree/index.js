import React from 'react';
import Parent from './Parent';
import cx from 'classnames'
import styles from "./Tree.module.css";
import { CONSTANTS } from '../../consts';
import withUser from '../../HOCs/withUser';
import withThemes from '../../HOCs/withThemes';
const {THEMES} = CONSTANTS



const Tree = (props) => {
    const {theme, setTheme, user, setUser} = props
            const changeTheme = () => {
                const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                setTheme(newTheme)
            }
            const cn = cx(styles.container, {
               [styles.darkTheme] : theme === THEMES.DARK,
               [styles.lightTheme] : theme === THEMES.LIGHT
            });
           return  (
            <div className={cn}>
                <p>Tree</p>
                <p>{user.firstName}</p>
                <Parent />
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        );
    }

const treeWithUser = withUser(Tree);
const treeWithUserAndWithTheme = withThemes(treeWithUser)

export default treeWithUserAndWithTheme;

