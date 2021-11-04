import styles from '../css/Tooltip.module.css'
import React, {useState} from 'react'
import useThemeContext from '@theme/hooks/useThemeContext'
import OutsideClickHandler from "./OutsideClickHandler";

export default function Tooltip({children, title, mode = 'hover'}) {
    const [visible, setVisible] = useState(false)
    const {isDarkTheme} = useThemeContext();

    return (
        <OutsideClickHandler onClickOutside={() => setVisible(false)}>
            <span className={`${styles.container} ${mode === 'hover' ? styles.containerHover : ''}`}>
                <span onClick={() => setVisible(!visible)} className={styles.children}>{children}</span>
                <span className={styles.popup} style={{
                    display: mode === 'click' && visible ? 'block' : 'none',
                }}>
                    <span className={styles.popupText} style={{
                        backgroundColor: isDarkTheme ? '#dadae0' : '#2f3136',
                        color: isDarkTheme ? '#000' : '#fff'
                    }}>
                        {title}
                    </span>
                    <span className={styles.popupTriangle} style={{borderTopColor: isDarkTheme ? '#dadae0' : '#2f3136'}}/>
                </span>
            </span>
        </OutsideClickHandler>
    )
}