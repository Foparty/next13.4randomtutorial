import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
import { contact } from '@/public';
import Button from '@/components/Button/Button';

export const metadata = {
	title: 'Contact | Nextjs 13.4 site test',
	description: 'A site create with nextjs 13.4 to test all its new features',
};
const Contact = () => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
			<div className={styles.content}>
				<div className={styles.imgcontainer}>
					<Image
						className={styles.img}
						src={contact}
						alt={'contact image illustration'}
						fill={true}
					/>
				</div>
				<form className={styles.form}>
					<input type='text' placeholder={'name'} className={styles.input} />
					<input type='email' placeholder={'email'} className={styles.input} />
					<textarea
						className={styles.textarea}
						cols='30'
						rows='10'
						placeholder={'message'}
					></textarea>
					<Button url={'#'} text={'Send'} />
				</form>
			</div>
		</section>
	);
};
export default Contact;
