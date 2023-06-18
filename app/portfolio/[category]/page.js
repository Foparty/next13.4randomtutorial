import styles from './category.module.css';
import { items } from '@/app/portfolio/[category]/data';
import { notFound } from 'next/navigation';
import CategorySingleItem from '@/components/CategorySingleItem/CategorySingleItem';

const getData = (cat) => {
	const data = items[cat];

	if (data) {
		return data;
	}

	return notFound();
};
const Category = ({ params }) => {
	console.log(params);
	const data = getData(params.category);
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{params.category}</h1>
			<div className={styles.content}>
				{data.map((item) => (
					<CategorySingleItem key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};
export default Category;
