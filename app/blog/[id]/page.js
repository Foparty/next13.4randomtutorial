import styles from './Post.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getData = async (id) => {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`);

	if (!res.ok) {
		return notFound();
	}
	return res.json();
};

export async function generateMetadata({ params }) {
	const post = await getData(params.id);
	return {
		title: post.title,
		description: post.exerpt,
	};
}

const Post = async ({ params }) => {
	const data = await getData(params.id);
	return (
		<article className={styles.wrapper}>
			<header className={styles.headersection}>
				<div className={styles.textsection}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.excerpt}>{data.excerpt}</p>
					<div className={styles.authorsection}>
						<Image src={''} alt={''} width={32} height={32} />
						<p className={styles.name}>data.auth</p>
					</div>
				</div>
				<div className={styles.imgsection}>
					<Image
						className={styles.img}
						src={data?.image}
						alt={''}
						fill={true}
					/>
				</div>
			</header>
			<main className={styles.content}>{data.content}</main>
		</article>
	);
};
export default Post;
