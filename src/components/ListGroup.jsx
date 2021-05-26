import React from 'react'
import './ListGroup.css'
import axios from 'axios'

export default function (props) {
    console.log()
    function deleteListItem(id) {
        axios.delete(`http://localhost:3001/todo/${id}`)
    }

    if (props.listOfElements === undefined) {
        return <span>Loading...</span>
      }
    return (
        <div className={`container-element ${props.priority}`}>
            <h2>{props.title}</h2>
            <ul>
            {props.listOfElements.map(item => {
                return(
                    <>
                        <li key={item.id} className={`list-item ${props.priority}`}>
                            <span>{item.text}</span>
                                <button onClick={() => deleteListItem(item.id)} className="delete-button">
                                    {/* <img src="trash-icon.png" width="20px" alt="" /> */}
                                    <span>X</span> 
                                </button>
                        </li>
                        
                    </>
                )
            })}
            </ul>
        </div>
    )
}