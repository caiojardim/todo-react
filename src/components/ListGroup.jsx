import React from 'react'
import './ListGroup.css'

export default function (props) {
    if (props.listOfElements === undefined) {
        return <span>Loading...</span>
      }
    return (
        <div className='container-element'>
            <h2>{props.title}</h2>
            <ul>
            {props.listOfElements.map(item => {
                return(
                    <>
                        <li key={item.id}>
                            <span>{item.text}</span>
                                <button>
                                    <img src='trash-icon.png' width="20px" alt="Trash Icon"/>
                                </button>
                        </li>
                        
                    </>
                )
            })}
            </ul>
        </div>
    )
}