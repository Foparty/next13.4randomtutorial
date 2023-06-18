import styles from './Footer.module.css';
import React from 'react';
import { socialdata } from '@/components/Foooter/socialdata';
import SocialIcon from '@/components/SocialIcon/SocialIcon';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.copy}>
				<small>&copy; 2023 Lamamia. All rights reserved</small>
			</div>
			<div className={styles.social}>
				{socialdata.map((item) => (
					<SocialIcon key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};
export default Footer;
