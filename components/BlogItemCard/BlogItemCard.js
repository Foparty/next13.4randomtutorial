import styles from './BlogItemCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogItemCard = ({ data }) => {
	return (
		<figure className={styles.item}>
			<div className={styles.imagecontainer}>
				<Link href={`/blog/${data._id}`}>
					<Image
						className={styles.img}
						src={data?.image}
						alt={data.title}
						fill={true}
					/>
				</Link>
			</div>
			<div className={styles.textcontainer}>
				<h2 className={styles.title}>{data.title}</h2>
				<p className={styles.excerpt}>{data?.excerpt}</p>
			</div>
		</figure>
	);
};
export default BlogItemCard;
