'use client';
import { useRef, useState } from 'react';
import styles from './register.module.css';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/navigation';

const Register = () => {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [err, setErr] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({ name, email, password }),
			});
			res.status === 201 &&
				router.push('/dashboard/login?success=Account has been created');
		} catch (err) {
			setErr(true);
		}
	};

	return (
		<section className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input ref={nameRef} type='text' placeholder={'username'} required />
				<input ref={emailRef} type='email' placeholder={'email'} required />
				<input
					ref={passwordRef}
					type='password'
					placeholder={'password'}
					required
				/>
				<Button text={'Register'} />
			</form>
			{err && 'Something went wrong, please try again'}
			<Link className={styles.login} href={'/dashboard/login'}>
				Log in with an existing account
			</Link>
		</section>
	);
};
export default Register;
