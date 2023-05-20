import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { SelectData, setReposData } from '../../redux/slices/repos.slice'
import { useAppDispatch } from '../../redux/store'
import Details from '../details/Details'

import styles from './Repositories.module.scss'

const Repositories = () => {
	const data = useSelector(SelectData)
	const dispatch = useAppDispatch()
	const isMounted = useRef<boolean>(false)
	useEffect(() => {
		if (isMounted.current) {
			const jsonSearch = JSON.stringify(data)
			localStorage.setItem('cartGit', jsonSearch)
		} else {
			const savedGit = localStorage.getItem('cartGit')
			if (savedGit) {
				setReposData(JSON.parse(savedGit))
			}
		}
		isMounted.current = true
	}, [dispatch])

	return (
		<div className={styles.repos}>
			{data.map(repos => (
				<section key={repos.id} className={styles.repos__block}>
					<a href={repos.html_url} className={styles.repos__name}>
						{repos.name}
					</a>
					<div className={styles.repos__profile}>
						<img
							className={styles.repos__img}
							src={repos.owner.avatar_url}
							alt='img'
							width={50}
							height={50}
						/>
						<a href={repos.owner.html_url}>{repos.owner.login}</a>
					</div>
					<div className={styles.repos__details}>
						<span className={styles.repos__star}>{repos.stargazers_count}</span>
						<span className={styles.repos__watchers}>{repos.watchers}</span>
					</div>
					<NavLink to={`/repos-card/${repos.owner.login}/${repos.name}`}>
						<Details />
					</NavLink>
				</section>
			))}
		</div>
	)
}

export default Repositories
