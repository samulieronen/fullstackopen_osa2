import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.chooseCountry(props.data)} >{props.text}</button>
        </div>
    )
}

export default Button