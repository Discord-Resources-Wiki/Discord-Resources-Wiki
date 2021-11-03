import React, {useEffect, useState} from 'react'
import styles from '../css/UserWidgetInline.module.css'
import useThemeContext from '@theme/hooks/useThemeContext'
import Tooltip from "./Tooltip";

// #f2f3f5

export default function UserWidgetInline({id}) {
    const {isDarkTheme} = useThemeContext();

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://crss.link/u/${id}`)
            .then(async resp => {
                if (!resp.ok) {
                    setData(null)
                } else {
                    const virtualDom = document.createElement('html')
                    virtualDom.innerHTML = await resp.text()

                    const userId = virtualDom.querySelector('[property="og:site_name"]')?.content
                    if (!userId) {
                        setData(null)
                    }

                    const tag = virtualDom.querySelector('[property="og:title"]')?.content
                    const [username, discriminator] = tag.split('#')
                    const avatarUrl = virtualDom.querySelector('[property="og:image"]')?.content

                    setData({
                        id: userId,
                        username,
                        discriminator,
                        avatarUrl
                    })

                    virtualDom.remove()
                }

                setData({
                    id: '80088516616269824',
                    username: 'Danny',
                    discriminator: '0007',
                    avatarUrl: 'https://cdn.discordapp.com/avatars/80088516616269824/39ec2502115271c24eb969018fcd8b55.webp?size=128'
                })
            })
    }, [id])

    return data ? (
        <Tooltip title={data.id} mode="click">
            <span className={styles.container}>
                <span className={styles.widget}>
                        <img src={data.avatarUrl} alt="avatar" className={styles.userAvatar}/>
                        <span className={styles.userTag}>
                            <span className={styles.userUsername}>{data.username}</span>
                            <span className={styles.userDiscriminator}>#{data.discriminator}</span>
                        </span>
                    </span>
            </span>
        </Tooltip>
    ) : (
        <span>({id})</span>
    )
}