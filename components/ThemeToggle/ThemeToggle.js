'use client';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
	return (
		<figure className={styles.toogle}>
			<div className={styles.icon}>🌙</div>
			<div className={styles.icon}>☀️</div>
			<div
				className={styles.ball}
				// style={mode === 'light' ? { left: '11px' } : { right: '11px' }}
			/>
		</figure>
	);
};
export default ThemeToggle;
