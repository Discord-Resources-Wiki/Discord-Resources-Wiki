import React from 'react';

export default function InviteWidget({invite}) {

    return (
        <a href={`https://discord.gg/${invite}`} target="_blank">
            <img src={`https://invidget.switchblade.xyz/${invite}`} alt=""/>
        </a>
    )
}