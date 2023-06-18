import React from 'react';
import styles from './SocialIcon.module.css';
import Link from 'next/link';
import Image from 'next/image';

const SocialIcon = ({ data }) => {
	return (
		<Link href={data.url}>
			<Image src={data.logo} alt={data.alt} width={15} height={15} />
		</Link>
	);
};
export default SocialIcon;
