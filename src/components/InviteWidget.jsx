import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function InviteWidget({invite}) {
	const {isDarkTheme} = useColorMode();
	return (
		<a href={`https://discord.gg/${invite}`} target='_blank' rel='noreferrer'>
			<img
				src={`https://invidget.switchblade.xyz/${invite}?theme=${isDarkTheme ? 'dark' : 'light'}`}
				alt=''
			/>
		</a>
	);
}
