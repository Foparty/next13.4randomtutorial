import styles from './DashboardPostItem.module.css';
import Image from 'next/image';
import { mutate } from 'swr';

const DashboardPostItem = ({ data }) => {
	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: 'DELETE',
			});
			await mutate();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<article className={styles.card}>
			<Image
				className={styles.img}
				src={data.image}
				alt={data.title}
				width={48}
				height={48}
			/>
			<h2 class={styles.title}>{data.title}</h2>
			<small class={styles.date}>15th June 2023</small>
			<button className={styles.delete} onClick={() => handleDelete(data._id)}>
				❌
			</button>
		</article>
	);
};
export default DashboardPostItem;
