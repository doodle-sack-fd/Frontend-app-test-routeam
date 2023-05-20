import styles from './Error.module.scss'

const Error = () => {
	return (
		<div className={styles.error}>
			Вы не сделали запрос или произошла ошибка на стороне сервера.
		</div>
	)
}

export default Error
