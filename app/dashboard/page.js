'use client';
import { useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';
import useSWR from 'swr';
import DashboardPostItem from '@/components/DasboardPostItem/DashboardPostItem';
import authProvider from '@/components/AuthProvider/AuthProvider';

const Dashboard = () => {
	const titleRef = useRef(null);
	const slugRef = useRef(null);
	const excerptRef = useRef(null);
	const contentRef = useRef(null);
	const imageRef = useRef(null);

	const session = useSession();

	const router = useRouter();

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, mutate, error, isLoading } = useSWR(
		`/api/posts?username=${session?.data?.user.name}`,
		fetcher
	);

	console.log(data);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const title = titleRef.current.value;
		const slug = slugRef.current.value;
		const excerpt = excerptRef.current.value;
		const content = contentRef.current.value;
		const image = imageRef.current.value;

		try {
			await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({
					title,
					slug,
					image,
					excerpt,
					content,
					author: session.data.user.name,
				}),
			});
			await mutate();
			e.target.reset();
		} catch (err) {
			console.log(err);
		}
	};

	if (session.status === 'loading') {
		return <p>Loading...</p>;
	}
	if (session.status === 'unauthenticated') {
		router?.push('/dashboard/login');
	}
	if (session.status === 'authenticated') {
		return (
			<section className={styles.wrapper}>
				<div className={styles.posts}>
					{data?.map((item) => (
						<DashboardPostItem key={item._id} data={item} />
					))}
				</div>
				<div className={styles.formcontaienr}>
					<h2 class={styles.formtitle}>Add New Post</h2>
					<form className={styles.form} onSubmit={handleSubmit}>
						<input
							ref={titleRef}
							className={styles.input}
							type='text'
							placeholder={'title'}
						/>
						<input
							ref={slugRef}
							className={styles.input}
							type='text'
							placeholder={'slug'}
						/>
						<input
							ref={excerptRef}
							className={styles.input}
							type='text'
							placeholder={'excerpt'}
						/>
						<input
							ref={imageRef}
							className={styles.input}
							type='text'
							placeholder={'image'}
						/>
						<textarea
							ref={contentRef}
							className={styles.textarea}
							cols={30}
							rows={10}
							placeholder={'content'}
						/>
						{/*<input*/}
						{/*	className={styles.input}*/}
						{/*	type='text'*/}
						{/*	placeholder={'author'}*/}
						{/*/>*/}
						<button className={styles.button}>Send</button>
					</form>
				</div>
			</section>
		);
	}
};
export default Dashboard;
