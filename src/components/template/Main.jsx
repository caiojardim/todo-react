import React from 'react'
import './Main.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListGroup from '../ListGroup'

export default function (props) {
    const [listElements, setListElements] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3001/todo')
            .then(resp => setListElements(resp.data))
    }, [])       

        console.log(listElements)
    return (
        <div className="container">
            <ListGroup listOfElements={listElements}></ListGroup>
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
