import React from 'react'

const Filter = (props) => {
    return (
        <div>
				<h3>Search {props.what}</h3>
				Keyword: <input value={props.filter} onChange={props.filterHandler}/>
		</div>
    )
}

export default Filter