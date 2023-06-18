import styles from './Post.module.css';
import Image from 'next/image';

const getData = async (id) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const Post = async ({ params }) => {
	const data = await getData(params.id);
	return (
		<article className={styles.wrapper}>
			<header className={styles.headersection}>
				<div className={styles.textsection}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.excerpt}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Accusantium aliquam aliquid architecto, assumenda deserunt dolorum,
						ea eius enim error et illum ipsum maxime non numquam, optio
						recusandae sapiente soluta totam?
					</p>
					<div className={styles.authorsection}>
						<Image src={''} alt={''} width={32} height={32} />
						<p className={styles.name}>John Doe</p>
					</div>
				</div>
				<div className={styles.imgsection}>
					<Image
						className={styles.img}
						src={
							'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80'
						}
						alt={''}
						fill={true}
					/>
				</div>
			</header>
			<main className={styles.content}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
					adipisci debitis expedita facere, laboriosam minus nemo obcaecati
					officia quas repellendus sequi similique tempora ut. Aliquam
					architecto aut repellendus sunt? A doloremque fuga ipsam iusto laborum
					libero pariatur quos saepe totam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
					adipisci debitis expedita facere, laboriosam minus nemo obcaecati
					officia quas repellendus sequi similique tempora ut. Aliquam
					architecto aut repellendus sunt? A doloremque fuga ipsam iusto laborum
					libero pariatur quos saepe totam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
					adipisci debitis expedita facere, laboriosam minus nemo obcaecati
					officia quas repellendus sequi similique tempora ut. Aliquam
					architecto aut repellendus sunt? A doloremque fuga ipsam iusto laborum
					libero pariatur quos saepe totam.
				</p>
			</main>
		</article>
	);
};
export default Post;
