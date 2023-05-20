import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SelectCurrentPage, setCurrentPage } from '../redux/slices/repos.slice'

export const usePersistPagination = () => {
	const currentPage = useSelector(SelectCurrentPage)
	const dispatch = useDispatch()

	useEffect(() => {
		const currentPageFromStorage = localStorage.getItem('currentPage')
		if (currentPageFromStorage) {
			dispatch(setCurrentPage(parseInt(currentPageFromStorage)))
		}
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem('currentPage', currentPage.toString())
	}, [currentPage])
}
