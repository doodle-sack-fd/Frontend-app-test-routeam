import { useSelector } from 'react-redux'

import { usePersistPagination } from '../../hooks/usePagination'

import {
	SelectCurrentPage,
	SelectPerPage,
	SelectTotalCount,
	setCurrentPage
} from '../../redux/slices/repos.slice'
import { useAppDispatch } from '../../redux/store'
import { createPages } from '../../utils/pages'

import styles from './Pagintaion.module.scss'

const Pagination = () => {
	usePersistPagination()
	const dispatch = useAppDispatch()
	const currentPage = useSelector(SelectCurrentPage)
	const perPage = useSelector(SelectPerPage)
	const totalCount = useSelector(SelectTotalCount)
	const pagesCount = Math.ceil(totalCount / perPage)
	const pages = []
	createPages(pages, pagesCount, currentPage)

	return (
		<ul className={styles.pagination__list}>
			<li
				className={styles.pagination__item}
				onClick={() => dispatch(setCurrentPage(currentPage - 1))}
			>
				❮
			</li>
			{pages.map((el, idx) => (
				<li
					key={idx}
					className={
						currentPage === el
							? styles.pagination__active
							: styles.pagination__item
					}
					onClick={() => dispatch(setCurrentPage(el))}
				>
					{el}
				</li>
			))}
			<li
				className={styles.pagination__item}
				onClick={() => dispatch(setCurrentPage(currentPage + 1))}
			>
				❯
			</li>
		</ul>
	)
}

export default Pagination
