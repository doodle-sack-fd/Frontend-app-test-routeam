export interface IDataRepos {
	data: IRep[]
	status: string
	currentPage: number
	perPage: number
	totalCount: number
}

export interface IRep {
	id: number
	node_id: string
	name: string
	full_name: string
	private: false
	owner: {
		login: string
		id: number
		node_id: string
		avatar_url: string
		gravatar_id: string
		url: string
		html_url: string
		followers_url: string
		following_url: string
		gists_url: string
		starred_url: string
		subscriptions_url: string
		organizations_url: string
		repos_url: string
		events_url: string
		received_events_url: string
		type: string
		site_admin: false
	}
	stargazers_count: number
	html_url: string
	watchers: number
}

export enum StatusKey {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}
