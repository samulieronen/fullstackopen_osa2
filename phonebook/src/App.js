import React, { useState, useEffect } from 'react'
import personServices from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

const Status = ({msg}) => {
	if (!msg) return null
	if (msg.toLowerCase().includes('error')) {
		return (
			<div className='errorMsg'>
				<h2>{msg}</h2>
			</div>
		)
	}
	return (
		<div className='statusMsg'>
			<h2>{msg}</h2>
		</div>
	)
}

const App = () => {

	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [status, setStatus] = useState(null)
	const handleNameField = (event) => setNewName(event.target.value)
	const handleNumberField = (event) => setNewNumber(event.target.value)
	const handleFilterField = (event) => setFilter(event.target.value)

	function handleTimeout(msg, type) {
		if (type) {
			setStatus(`Error: ${msg['error']}`)
		}
		else {
			setStatus(msg)
		}
		setTimeout(() => {
			setStatus(null)
		}, 4000)
	}

	const handleRemove = (person) => {
		console.log('About to remove item nb', person.id)
		const res = window.confirm(`Deleting ${person.name} from your phonebook.`)
		if (res) {
			personServices
				.remove(person.id)
				.then(response => console.log(response))
			.catch(error => handleTimeout(error.response.data, error))
			setPersons(persons.filter(current => current.id !== person.id))
			handleTimeout(`Successfully deleted ${person.name}`, null)
		}
	}

	useEffect(() => {
		personServices
			.all()
			.then(response => {
				setPersons(response)
			})
			.catch(error => handleTimeout(error.response.data, error))
	}, [])

	function addName(event) {
		event.preventDefault()
		const Name = {
			name: newName,
			number: newNumber
		}
		const dup = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
		const oldPerson = dup[0]
		if (!dup.length) {
			personServices
				.create(Name)
				.then(response => {
					setPersons(persons.concat(response))
					console.log('added name:', newName, 'and number:', newNumber)
				})
				.catch(error => handleTimeout(error.response.data, 1))
			handleTimeout(`Successfully added ${newName}`, null)
		}
		else {
			if (window.confirm(`${newName} is already in phonebook. Do you want to update the number?`)) {
				const updatedPerson = {...dup[0], number: newNumber}
				console.log(oldPerson, updatedPerson)
				personServices
					.put(updatedPerson.id, updatedPerson)
					.then(response => {
						setPersons(persons.map(person => (person.id !== updatedPerson.id) ? person : response))
					})
					.catch(error => handleTimeout(error.response.data, error))
				handleTimeout(`${newName} updated!`, null)
			}
		}
		setNewName('')
		setNewNumber('')
	}

	return (
		<div>
			<h1>Phonebook</h1>
			<Status msg={status}/>
			<Filter	value={filter}
					filterHandler={handleFilterField}
			/>
			<Form	submit={addName}
					nameValue={newName}
					handleName={handleNameField}
					numberValue={newNumber}
					handleNumber={handleNumberField}
			/>
			<h2>Numbers</h2>
			{persons.map(person =>
				<div key={person.name}>
					<Persons
						person={person}
						filter={filter}
						action={() => handleRemove(person)}
					/>
				</div>
			)}
		</div>
	)
}

export default App
