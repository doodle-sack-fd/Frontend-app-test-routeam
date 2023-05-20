import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchRepositories } from '../actions/action.creator'
import { RootState } from '../store'

import { IDataRepos, IRep, StatusKey } from './repos.types'

export const initialState: IDataRepos = {
	data: [],
	status: StatusKey.LOADING,
	currentPage: 1,
	perPage: 6,
	totalCount: 100
}

export const reposSlice = createSlice({
	name: 'reposData',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
		setReposData: (state, action: PayloadAction<IRep[]>) => {
			state.data = action.payload
		},
		setPerPage: (state, action: PayloadAction<number>) => {
			state.perPage = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchRepositories.pending, state => {
			state.status = StatusKey.LOADING
			state.data = []
		})
		builder.addCase(fetchRepositories.fulfilled, (state, action) => {
			state.status = StatusKey.SUCCESS
			state.data = action.payload
		})
		builder.addCase(fetchRepositories.rejected, state => {
			state.status = StatusKey.ERROR
			state.data = []
		})
	}
})

export const SelectData = (state: RootState) => state.repos.data
export const SelectIsStatus = (state: RootState) => state.repos.status
export const SelectCurrentPage = (state: RootState) => state.repos.currentPage
export const SelectPerPage = (state: RootState) => state.repos.perPage
export const SelectTotalCount = (state: RootState) => state.repos.totalCount

export const { setCurrentPage, setReposData, setPerPage } = reposSlice.actions
