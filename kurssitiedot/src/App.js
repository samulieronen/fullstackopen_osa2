import React from 'react'
import Course from './components/Course'

const App = () => {

	const course = [
		{
		  	name: 'Half Stack application development',
	 	 	id: 1,
	 		parts: [
				{
					name: 'Fundamentals of React',	
					exercises: 10,
					id: 1
				},
				{
					name: 'Using props to pass data',
					exercises: 7,
					id: 2
				},
				{
					name: 'State of a component',
					exercises: 14,
					id: 3
				},
				{
					name: 'Years of relevant work experience required for a junior developer:',
					exercises: 25,
					id: 4
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	]

  return (
	  <div>
			<h1>My web dev curriculum</h1>
			{course.map(item => <div key={item.id}><Course item={item}/></div>)}
	  </div>
	)
}

export default App

