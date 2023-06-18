import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Foooter/Footer';
import styles from './layout.module.css';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export const metadata = {
	title: 'Nextjs 13.4 site test',
	description: 'A site create with nextjs 13.4 to test all its new features',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={styles.body}>
				<AuthProvider>
					<header className={styles.header}>
						<Navbar />
					</header>
					<main className={styles.main}>{children}</main>
					<footer className={styles.footer}>
						<Footer />
					</footer>
				</AuthProvider>
			</body>
		</html>
	);
}
