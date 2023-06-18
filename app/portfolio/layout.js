import React from 'react';
import styles from './layout.module.css';

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className={styles.title}>Our Works</h1>
			{children}
		</div>
	);
};
export default Layout;
