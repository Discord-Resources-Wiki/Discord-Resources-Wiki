import React from 'react';
import Tooltip from './Tooltip';
import styles from '../css/UserWidgetInline.module.css';
import {useColorMode} from '@docusaurus/theme-common';

export default function UserWidgetInline({data}) {
	const {isDarkTheme} = useColorMode();
	function userName() {
		if (data.type === 'discord') {
			return (
				<>
					<span className={styles.userUsername} style={{color: isDarkTheme ? '#fff' : '#000'}}>
						{data.name}
					</span>
					<span className={styles.userDiscriminator}>#{data.discriminator}</span>
				</>
			);
		} else {
			return (
				<span className={styles.userUsername} style={{color: isDarkTheme ? '#fff' : '#000'}}>
					{data.name}
				</span>
			);
		}
	}

	function userIdentifier() {
		if (data.type === 'discord') {
			return data.id;
		} else {
			return data.username;
		}
	}

	return (
		<Tooltip
			title={
				<span>
					<span style={{paddingRight: '0.3rem'}}>{userIdentifier()}</span>
					<a href={data.url ?? ''} style={{color: 'inherit'}} target='_blank' rel='noreferrer'>
						<svg
							width='13.5'
							height='13.5'
							aria-hidden='true'
							viewBox='0 0 24 24'
							className='iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module'>
							<path
								fill='currentColor'
								d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z'
							/>
						</svg>
					</a>
				</span>
			}
			mode='click'>
			<span className={styles.container}>
				<span
					className={styles.widget}
					style={{backgroundColor: isDarkTheme ? '#2f3136' : '#dadae0'}}>
					<img src={data.avatarUrl} alt='' className={styles.userAvatar} />
					<span className={styles.userTag}>{userName()}</span>
				</span>
			</span>
		</Tooltip>
	);
}