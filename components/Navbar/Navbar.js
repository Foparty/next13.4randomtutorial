'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { navLinks } from '@/utils/navlinks';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { signOut, useSession } from 'next-auth/react';
import Button from '@/components/Button/Button';

const Navbar = () => {
	const session = useSession();
	return (
		<div className={styles.wrapper}>
			<Link href={'/'}>lamamia</Link>
			<nav className={styles.mainnav}>
				<ThemeToggle />
				{navLinks.map((link) => (
					<Link key={link.id} href={link.url}>
						{link.title}
					</Link>
				))}
				{session.status === 'authenticated' && (
					<button className={styles.button} onClick={signOut}>
						Logout
					</button>
				)}
			</nav>
		</div>
	);
};
export default Navbar;
