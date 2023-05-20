import styles from './Details.module.scss'

const Details = () => {
	return (
		<div className={styles.details__wrapper}>
			<div className={styles.details__info}>Детали проекта</div>

			<button className={styles.details__button}></button>
		</div>
	)
}

export default Details
