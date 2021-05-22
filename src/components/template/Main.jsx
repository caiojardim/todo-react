import React from 'react'
import './Main.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function (props) {
    const [listElements, setListElements] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3001/todo')
            .then(resp => setListElements(resp.data))
    }, [])       

        console.log(listElements)
    return (
        <div className="container">
            <div className='container-element'>
            <ul>
            {listElements.map(item => {
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
            <div className='container-element'>
                <ul>
                    <li>Test</li>
                </ul>
            </div>
            <div className='container-element'>
                <ul>
                    <li>Test</li>
                </ul>
            </div>
            
        </div>
    )
}
