import styles from '../css/Tooltip.module.css'
import React, {useState} from 'react'

export default function Tooltip({children, title, mode='hover'}) {
    const [visible, setVisible] = useState(false)

    return (
        <span className={`${styles.container} ${mode === 'hover' ? styles.containerHover : ''}`}>
            <span onClick={() => setVisible(!visible)} className={styles.children}>{children}</span>
            <span className={styles.popup} style={{display: mode === 'click' && visible ? 'block' : 'none'}}>
                <span className={styles.popupText}>
                    {title}
                </span>
            </span>
        </span>
    )
}