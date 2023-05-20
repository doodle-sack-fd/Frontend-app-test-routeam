import Error from '../components/error/Error'
import Main from '../components/main/Main'
import ReposCard from '../components/repos-card/ReposCard'

export const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/repos-card/:username/:reponame',
		component: ReposCard
	},
	{
		path: '*',
		component: Error
	}
]
