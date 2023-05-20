import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { URL } from '../../services/api'
import { getItemLs } from '../../utils/getItem'

import { IFetchProps } from './action.types'

const getLocalStorage = getItemLs()

export const fetchRepositories = createAsyncThunk(
	'fetchRepos',
	async ({ searchValue, currentPage, perPage }: IFetchProps) => {
		try {
			if (!searchValue) {
				searchValue = getLocalStorage.localSearch
			}
			const { data } = await axios.get(
				`${URL}${searchValue}&per_page=${perPage}&page=${currentPage}`
			)
			return data.items
		} catch (error) {
			throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
		}
	}
)
