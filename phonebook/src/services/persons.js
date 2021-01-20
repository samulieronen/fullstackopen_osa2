import axios from 'axios'

const url = 'http://localhost:3001/persons'

const all = () => {
	const request = axios.get(url)
	return (request.then(response => response.data))
}

const create = (toAdd) => {
	const request = axios.post(url, toAdd)
	return (request.then(response => response.data))
}

const remove = (id) => {
	const request = axios.delete(`${url}/${id}`)
	return (request.then(response => response.data))
}

const put = (id, toUpdate) => {
	const request = axios.put(`${url}/${id}`, toUpdate)
	return (request.then(response => response.data))
}

const personServices = {
	all,
	create,
	remove,
	put
}

export default personServices