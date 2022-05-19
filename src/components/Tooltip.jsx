import styles from '../css/Tooltip.module.css'
import React, {useState} from 'react'
import OutsideClickHandler from "./OutsideClickHandler";

export default function Tooltip({children, title, mode = 'hover'}) {
    const [visible, setVisible] = useState(false)

    return (
        <OutsideClickHandler onClickOutside={() => setVisible(false)}>
            <span className={`${styles.container} ${mode === 'hover' ? styles.containerHover : ''}`}>
                <span onClick={() => setVisible(!visible)} className={styles.children}>{children}</span>
                <span className={styles.popup} style={{
                    display: mode === 'click' && visible ? 'block' : 'none',
                }}>
                    <span className={styles.popupText} style={{
                        backgroundColor: '#dadae0',
                        color: '#fff'
                    }}>
                        {title}
                    </span>
                    <span className={styles.popupTriangle} style={{borderTopColor: '#dadae0'}}/>
                </span>
            </span>
        </OutsideClickHandler>
    )
}