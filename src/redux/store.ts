import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { reposSlice } from './slices/repos.slice'

export const store = configureStore({
	reducer: {
		repos: reposSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
