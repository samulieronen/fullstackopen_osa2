import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
				<div>
					<h2>Add a contact</h2>
					Name: <input value={props.nameValue} onChange={props.handleName}/>
				</div>
				<div>
					Number: <input value={props.numberValue} onChange={props.handleNumber}/>
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
    )
}

export default Form