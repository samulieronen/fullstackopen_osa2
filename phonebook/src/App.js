import React, { useState, useEffect } from 'react'
import personServices from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'


const App = () => {

	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const handleNameField = (event) => setNewName(event.target.value)
	const handleNumberField = (event) => setNewNumber(event.target.value)
	const handleFilterField = (event) => setFilter(event.target.value)

	const handleRemove = (person) => {
		console.log('About to remove item nb', person.id)
		const res = window.confirm(`Deleting ${person.name} from your phonebook.`)
		if (res) {
			personServices
				.remove(person.id)
				.then(response => console.log(response))
		}
		setPersons(persons.filter(current => current.id !== person.id))
	}

	useEffect(() => {
		personServices
			.all()
			.then(response => {
				setPersons(response)
			})
			.catch(() => alert('An error occured while fetching data!'))
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
				.catch(() => alert('An error occured while deleting data!'))
			setPersons(persons.concat(Name))
			console.log('added name:', newName, 'and number:', newNumber)
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
					.catch(() => alert('An error occured while inserting data!'))
				console.log(`${newName} updated!`)
			}
		}
		setNewName('')
		setNewNumber('')
	}

	return (
		<div>
			<h1>Phonebook</h1>
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
