import React from 'react'
import styles from '../css/UserWidgetInline.module.css'
import useThemeContext from '@theme/hooks/useThemeContext'
import Tooltip from "./Tooltip";

export default function UserWidgetInline({data}) {
    const {isDarkTheme} = useThemeContext();

    function userName() {
        if (data.type === 'discord') {
            return (
                <>
                    <span className={styles.userUsername}
                          style={{color: isDarkTheme ? '#fff' : '#000'}}>{data.name}</span>
                    <span className={styles.userDiscriminator}>#{data.discriminator}</span>
                </>
            )
        } else {
            return data.name
        }
    }

    function userIdentifier() {
        if (data.type === 'discord') {
            return data.id
        } else {
            return data.username
        }
    }

    return (
        <Tooltip title={userIdentifier()} mode="click">
            <span className={styles.container}>
                <span className={styles.widget} style={{backgroundColor: isDarkTheme ? '#2f3136' : '#dadae0'}}>
                        <img src={data.avatarUrl} alt="" className={styles.userAvatar}/>
                        <span className={styles.userTag}>{userName()}</span>
                    </span>
            </span>
        </Tooltip>
    )
}