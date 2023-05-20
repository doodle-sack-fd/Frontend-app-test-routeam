import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../redux/actions/action.creator'
import {
	SelectCurrentPage,
	SelectIsStatus,
	SelectPerPage
} from '../../redux/slices/repos.slice'
import { StatusKey } from '../../redux/slices/repos.types'
import { useAppDispatch } from '../../redux/store'
import Error from '../error/Error'
import Loading from '../loading/Loading'
import Pagination from '../pagination/Paginations'
import Repositories from '../repositories/Repositories'
import Search from '../search/Search'
import Select from '../select/Select'

const Main = () => {
	const [searchValue, setSearchValue] = useState('')
	// TODO: FIX
	const status = useSelector(SelectIsStatus)
	const dispatch = useAppDispatch()
	const currentPage = useSelector(SelectCurrentPage)
	const perPage = useSelector(SelectPerPage)

	useEffect(() => {
		dispatch(fetchRepositories({ searchValue, currentPage, perPage }))
	}, [perPage, currentPage])

	return (
		<>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			{status === StatusKey.LOADING ? (
				<Loading />
			) : status === StatusKey.ERROR ? (
				<Error />
			) : (
				<Repositories />
			)}
			<div className='footer'>
				<Pagination />
				<Select />
			</div>
		</>
	)
}

export default Main
