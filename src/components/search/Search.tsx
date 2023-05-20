import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../redux/actions/action.creator'
import {
	SelectCurrentPage,
	SelectPerPage,
	setCurrentPage
} from '../../redux/slices/repos.slice'
import { useAppDispatch } from '../../redux/store'

import styles from './Search.module.scss'

const Search = ({ searchValue, setSearchValue }): JSX.Element => {
	const dispatch = useAppDispatch()

	const currentPage = useSelector(SelectCurrentPage)
	const perPage = useSelector(SelectPerPage)
	const isMounted = useRef<boolean>(false)

	useEffect(() => {
		if (isMounted.current) {
			const jsonSearch = JSON.stringify(searchValue)
			localStorage.setItem('searchValue', jsonSearch)
		} else {
			const savedSearchValue = localStorage.getItem('searchValue')
			if (savedSearchValue) {
				setSearchValue(JSON.parse(savedSearchValue))
			}
		}
		isMounted.current = true
	}, [searchValue, setSearchValue])

	const handleSearch = () => {
		if (searchValue.length > 3) {
			dispatch(setCurrentPage(1))
			dispatch(fetchRepositories({ searchValue, currentPage, perPage }))
		} else {
			alert('Введите больше 3х символов')
		}
	}

	return (
		<div className={styles.search}>
			<div className={styles.search__wrapper}>
				<input
					className={styles.search__input}
					type='text'
					placeholder='Начните вводить текст для поиска (не менее трех символов)'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
				/>
				<button
					className={styles.search__button}
					onClick={() => handleSearch()}
				></button>
			</div>
		</div>
	)
}

export default Search
