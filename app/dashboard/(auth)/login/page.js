'use client';
import styles from './login.module.css';
import { signIn, useSession } from 'next-auth/react';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
	const session = useSession();
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [err, setErr] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		signIn('credentials', { email, password });
	};
	if (session.status === 'loading') {
		return <p>Loading...</p>;
	}
	if (session.status === 'unauthenticated') {
		router.push('/dashboard/login');
	}
	if (session.status === 'authenticated') {
		router.push('/dashboard');
	}
	return (
		<section className={styles.wrapper}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input ref={emailRef} type='email' placeholder={'email'} required />
				<input
					ref={passwordRef}
					type='password'
					placeholder={'password'}
					required
				/>
				<Button text={'Log In'} />
			</form>
			{err && 'Something went wrong, please try again'}

			<button className={styles.button} onClick={() => signIn('google')}>
				Login with Google
			</button>
		</section>
	);
};
export default Login;
