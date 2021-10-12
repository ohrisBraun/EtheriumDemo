import styles from './Cube.module.scss';
import { useEffect, useState } from "react";

export const Cube = () => {
	const [rotate, setRotate] = useState({x: 20, y:20});

	const change = (e: KeyboardEventInit) => {
		switch (e.key) {
			case 'ArrowDown': setRotate((state) => ({...state, x: rotate.x - 4}));
				break;
			case 'ArrowUp': setRotate((state) => ({...state, x: rotate.x + 4}));
				break;
			case 'ArrowLeft': setRotate((state) => ({...state, y: rotate.y - 4}));
				break;
			case 'ArrowRight': setRotate((state) => ({...state, y: rotate.y + 4}));
				break;
			default: break;
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', change);

		return () => {
			document.removeEventListener('keydown', change);
		}
	},[change]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'initial';
		}
	}, []);

	return <div className={styles.container}>
		<div className = {styles.cube} style={{transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`}}>
			<div className={`${styles.side} ${styles.front}`}>Front</div>
			<div className={`${styles.side} ${styles.back}`}>Back</div>
			<div className={`${styles.side} ${styles.left}`}>Left</div>
			<div className={`${styles.side} ${styles.right}`}>Right</div>
			<div className={`${styles.side} ${styles.top}`}>Top</div>
			<div className={`${styles.side} ${styles.bottom}`}>Bottom</div>
		</div>
	</div>
}