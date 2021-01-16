import React from 'react'

const Header = ({name}) => {
	return (
		<div>
		<h2>{name}</h2>
		</div>
	)
}

const Total = (props) => {
    const addition = (val, cur) => val + cur

    return (
        <div>
            <p>Total number of exercises: {props.values.reduce(addition)}</p>
        </div>
    )
}

const Part = (props) => {
	return (
		<p>
			{props.part} {props.ex}
		</p>
	)
}

const Content = (props) => {
	console.log(props)

	const amount = (part) => part.exercises
	const values = props.parts.map(part => amount(part))

	console.log(values)
	return (
		<div>
			{props.parts.map(part => <div key={part.id}><Part part={part.name} ex={part.exercises} id={part.id}/></div>)}
			<Total values={values}/>
		</div>
	)
}

const Course = ({item}) => {
	return (
		<div>
			<Header name={item.name}/>
			<Content parts={item.parts}/>
		</div>
	)
}

export default Course

