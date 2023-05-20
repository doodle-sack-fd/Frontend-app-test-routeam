import { useDispatch, useSelector } from 'react-redux'

import { SelectPerPage, setPerPage } from '../../redux/slices/repos.slice'

import styles from './Select.module.scss'

const Select = (): JSX.Element => {
	const dispatch = useDispatch()
	const perPage = useSelector(SelectPerPage)

	const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setPerPage(parseInt(e.target.value)))
	}

	return (
		<select
			className={styles.selected}
			value={perPage}
			onChange={handlePerPageChange}
		>
			<option value='6'>По умолчанию</option>
			<option value='10'>10</option>
			<option value='25'>25</option>
			<option value='50'>50</option>
		</select>
	)
}

export default Select
