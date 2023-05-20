import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { CUR_REP } from '../../services/api'

type RepoData = {
	owner?: {
		login: string
		avatar_url: string
	}
}

const ReposCard = () => {
	const { username, reponame } = useParams()
	const [currRep, setCurrRep] = useState<RepoData>({})
	console.log(username, reponame)
	useEffect(() => {
		async function fetchDataProductsId() {
			try {
				const response = await axios.get(`${CUR_REP}${username}/${reponame}`)
				setCurrRep(response.data)
				console.log(response.data)
			} catch (error) {
				alert('Ошибка получения данных о пользователе')
			}
		}

		fetchDataProductsId()
	}, [])
	return (
		<div className='container'>
			{currRep && (
				<div style={{ textAlign: 'center' }}>
					<img
						style={{ marginTop: '200px' }}
						width={300}
						height={300}
						src={currRep?.owner?.avatar_url}
						alt='img'
					/>
					<p>{currRep?.owner?.login}</p>
					<Link to='/'>
						<button>Обратно</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default ReposCard
