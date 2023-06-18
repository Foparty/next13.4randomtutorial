import styles from './PortfolioGalleryItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioGalleryItem = ({ data }) => {
	return (
		<figure className={styles.card}>
			<Link href={`/portfolio/${data.url}`}>
				<Image
					style={{ objectPosition: `${data.align} center` }}
					className={styles.img}
					src={data.img}
					alt={data.alt}
					fill={true}
				/>
			</Link>
			<Link href={`/portfolio/${data.url}`}>
				<h3 className={styles.title}>{data.title}</h3>
			</Link>
		</figure>
	);
};
export default PortfolioGalleryItem;
