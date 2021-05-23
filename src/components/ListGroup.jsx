import React from 'react'
import './ListGroup.css'

export default function (props) {
    return (
        <div className='container-element'>
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