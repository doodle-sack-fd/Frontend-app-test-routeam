export const getItemLs = () => {
	const search = localStorage.getItem('searchValue')
	const localSearch = search ? JSON.parse(search) : ''
	return {
		localSearch
	}
}
