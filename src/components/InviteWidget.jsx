import React from 'react';
import useFixedThemeContext from "../hooks/useFixedThemeContext";

export default function InviteWidget({invite}) {
    const {isDarkTheme} = useFixedThemeContext();;

    return (
        <a href={`https://discord.gg/${invite}`} target="_blank">
            <img src={`https://invidget.switchblade.xyz/${invite}?theme=${isDarkTheme ? 'dark' : 'light'}`} alt=""/>
        </a>
    )
}