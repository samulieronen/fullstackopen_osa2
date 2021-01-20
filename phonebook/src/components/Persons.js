import React from 'react'
import Button from './Button'

const Persons = ({person, filter, action}) => {
	if (person.name.toLowerCase().includes(filter.toLowerCase())) {
		return (
			<div>
				<h3>{person.name}: {person.number}  <Button action={action} id={person.id} text={'Delete'}/></h3>
			</div>
		)
	}
	else {
		return (
			<div></div>
		)
	}
}

export default Persons