import React from 'react'
import styles from '../css/UserWidgetInline.module.css'
import useThemeContext from '@theme/hooks/useThemeContext'
import Tooltip from "./Tooltip";

function userAvatar({id, discriminator, avatar}) {
    const DISCORD_CDN = 'https://cdn.discordapp.com'

    if (avatar) {
        if (avatar.startsWith('a_')) {
            return `${DISCORD_CDN}/avatars/${id}/${avatar}.gif?size=32`
        } else {
            return `${DISCORD_CDN}/avatars/${id}/${avatar}.webp?size=32`
        }
    } else {
        return `${DISCORD_CDN}/embed/avatars/${parseInt(discriminator) % 5}.png?size=32`
    }
}

export default function UserWidgetInline({data}) {
    const {isDarkTheme} = useThemeContext();

    if (!data) {
        data = {
            id: '0',
            username: 'Unknown User',
            discriminator: '0000',
            avatar: null
        }
    }

    return (
        <Tooltip title={data.id} mode="click">
            <span className={styles.container}>
                <span className={styles.widget} style={{backgroundColor: isDarkTheme ? '#2f3136' : '#dadae0'}}>
                        <img src={userAvatar(data)} alt="" className={styles.userAvatar}/>
                        <span className={styles.userTag}>
                            <span className={styles.userUsername}
                                  style={{color: isDarkTheme ? '#fff' : '#000'}}>{data.username}</span>
                            <span className={styles.userDiscriminator}>#{data.discriminator}</span>
                        </span>
                    </span>
            </span>
        </Tooltip>
    )
}