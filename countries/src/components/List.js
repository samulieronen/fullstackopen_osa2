import React from 'react'

const List = ({ data, button, click}) => {
	return (
		<div>
			<ul>
				{data.map(data => <li key={data.name}>{data.name}</li>)}
			</ul>
		</div>
	)
}

export default List