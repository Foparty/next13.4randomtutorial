import styles from './blog.module.css';
import BlogItemCard from '@/components/BlogItemCard/BlogItemCard';
import { notFound } from 'next/navigation';

const getData = async () => {
	const res = await fetch(
		'https://next13-4randomtutorial.vercel.app/api/posts',
		{
			cache: 'no-store',
		}
	);

	if (!res.ok) {
		// return notFound();
	}
	return res.json();
};

export const metadata = {
	title: 'Blog | Nextjs 13.4 site test',
	description: 'A site create with nextjs 13.4 to test all its new features',
};

const Blog = async () => {
	const data = await getData();

	return (
		<section className={styles.wrapper}>
			<h1 className={styles.title}>Blog</h1>
			<div className={styles.content}>
				{data.map((item) => (
					<BlogItemCard key={item.id} data={item} />
				))}
			</div>
		</section>
	);
};
export default Blog;
