import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ text, url = '' }) => {
	return (
		<button className={styles.button}>
			<Link href={url}>{text}</Link>
		</button>
	);
};
export default Button;
