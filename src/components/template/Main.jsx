import React from 'react'
import './Main.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListGroup from '../ListGroup'

import { useReload } from '../contexts/ReloadContext'

export default function (props) {
    const [listElements, setListElements] = useState([])

    const { isReload, setIsReload } = useReload()
    // Reload is not working

    useEffect(() => {
        axios.get('http://localhost:3001/todo')
            //.then(resp => setListElements(resp.data))
            .then(resp => resp.data)
            .then(resp =>
                resp.reduce ((object, element) => {
                    if (!object.hasOwnProperty(element.priority)) {
                        
                        object[element.priority] = Array( {
                            id: element.id,
                            text: element.text
                        })
                        return object
                    }
            
                    object[element.priority].push({
                        id: element.id,
                        text: element.text
                    })
                    return object
                    }, {})
            )
            .then(resp => setListElements(resp))
            .then(setIsReload(false)) 

    }, [ isReload ])       

    return (
        <div className="container">
            <ListGroup title="Alta" priority="high" listOfElements={listElements.high}></ListGroup>
            <ListGroup title="Media" priority="midle" listOfElements={listElements.midle}></ListGroup>
            <ListGroup title="Baixa" priority="low" listOfElements={listElements.low}></ListGroup>
        </div>
    )
}
