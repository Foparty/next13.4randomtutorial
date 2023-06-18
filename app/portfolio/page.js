import styles from './portfolio.module.css';
import { porfoliodata } from '@/app/portfolio/porfoliodata';
import PortfolioGalleryItem from '@/components/PortfolioGalleryItem/PortfolioGalleryItem';

const Portfolio = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>Choose a gallery</h2>
			<div className={styles.gallery}>
				{porfoliodata.map((item) => (
					<PortfolioGalleryItem key={item.id} data={item} />
				))}
			</div>
		</section>
	);
};
export default Portfolio;
