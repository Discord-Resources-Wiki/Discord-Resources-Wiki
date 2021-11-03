import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext'

export default function InviteWidget({invite}) {
    const {isDarkTheme} = useThemeContext();

    return (
        <a href={`https://discord.gg/${invite}`} target="_blank">
            <img src={`https://invidget.switchblade.xyz/${invite}?theme=${isDarkTheme ? 'dark' : 'light'}`} alt=""/>
        </a>
    )
}