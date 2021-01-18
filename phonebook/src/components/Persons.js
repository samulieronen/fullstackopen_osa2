import React from 'react'

const Persons = ({person, filter}) => {
	if (person.name.toLowerCase().includes(filter.toLowerCase())) {
        return (
            <h3>{person.name}: {person.number}</h3>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Persons