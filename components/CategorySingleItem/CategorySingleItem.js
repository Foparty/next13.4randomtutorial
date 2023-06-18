import styles from './CategorySingleItem.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';

const CategorySingleItem = ({ data }) => {
	return (
		<article className={styles.wrapper}>
			<div className={styles.imgside}>
				<Image
					className={styles.img}
					src={data.image}
					alt={data.title}
					fill={true}
				/>
			</div>
			<div className={styles.textside}>
				<h2 className={styles.title}>{data.title}</h2>
				<p className={styles.text}>{data.desc}</p>
				<Button text={'See More'} url={'/'} />
			</div>
		</article>
	);
};
export default CategorySingleItem;
