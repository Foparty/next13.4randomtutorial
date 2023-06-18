import styles from './about.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = {
	title: 'About | Nextjs 13.4 site test',
	description: 'A site create with nextjs 13.4 to test all its new features',
};
const About = () => {
	return (
		<article className={styles.article}>
			<header className={styles.imgcontainer}>
				<Image
					className={styles.coverimage}
					src={
						'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80'
					}
					alt={''}
					fill={true}
				/>
				<div className={styles.overtext}>
					<h1 className={styles.title}>Digital Strorytellers</h1>
					<p className={styles.description}>
						Handcrafting award wining digital experiences
					</p>
				</div>
			</header>
			<div className={styles.content}>
				<div>
					<h3 className={styles.title2}>Who Are We?</h3>
					<p className={styles.description2}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum d olor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis officiis
					</p>
					<p className={styles.description2}>
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
						esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet?
					</p>
				</div>
				<div>
					<h3 className={styles.title2}>What We Do?</h3>
					<p className={styles.description2}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
						Creative Illustrations
					</p>
					<ul className={styles.list}>
						<li>- Dynamic Websites</li>
						<li>- Fast and Handy</li>
						<li>- Mobile Apps</li>
					</ul>
					<Button url={'/contact'} text={'Contact'} />
				</div>
			</div>
		</article>
	);
};
export default About;
