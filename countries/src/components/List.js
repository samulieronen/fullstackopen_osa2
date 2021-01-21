import React from 'react'
import Button from './Button'

const List = ({ data, chooseCountry }) => {
	return (
		<div>
			<ul>
				{data.map(data => <li key={data.name}>{data.name}
					{chooseCountry !== null ? 
						<Button text="Let's go ->" chooseCountry={chooseCountry} data={data}/>
					: null}
					</li>
				)}
			</ul>
		</div>
	)
}

export default List