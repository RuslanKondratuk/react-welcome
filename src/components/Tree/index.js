import React, {useCallback, useContext, useEffect} from 'react';
import { UserContext } from '../../context/UserContext';
import { ThemeContext } from '../../context/ThemeContext';
import Parent from './Parent';
import cx from 'classnames'
import styles from "./Tree.module.css";
import { CONSTANTS } from '../../consts';
import withUser from '../../HOCs/withUser';
import withThemes from '../../HOCs/withThemes';
const {THEMES} = CONSTANTS



const Tree = (props) => {
    const [users, setUsers] = useContext(UserContext);
    const [theme, setTheme] = useContext(ThemeContext);

            const changeTheme = useCallback(() => {
                const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
                setTheme(newTheme)
            }, [theme])

            useEffect (() => {
                console.log('reset')
            }, [changeTheme])
            const cn = cx(styles.container, {
               [styles.darkTheme] : theme === THEMES.DARK,
               [styles.lightTheme] : theme === THEMES.LIGHT
            });
           return  (
            <div className={cn}>
                <p>Tree</p>
                <p>{users.firstName}</p>
                <Parent />
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        );
    }

// const treeWithUser = withUser(Tree);
// const treeWithUserAndWithTheme = withThemes(treeWithUser)

export default Tree;

