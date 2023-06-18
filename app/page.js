import Image from 'next/image';
import styles from './page.module.css';
import { hero } from '@/public';
import Button from '@/components/Button/Button';

export default function Home() {
	return (
		<section className={styles.landingsection}>
			<div className={styles.landingtext}>
				<h2 className={styles.title}>
					Better design for your digital products
				</h2>
				<p className={styles.description}>
					Turning your Idea into Reality. We bring together the teams from the
					global tech industry
				</p>
				<Button text={'See Our Work'} url={'/portfolio'} />
			</div>
			<div className={styles.imgcontainer}>
				<Image
					className={styles.img}
					src={hero}
					alt={'hero site image'}
					width={400}
					height={400}
					priority={true}
				/>
			</div>
		</section>
	);
}
