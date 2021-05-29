import axios from 'axios'
import React, { useState } from 'react'
import './Footer.css'

export default function (props) {
    const [form, setForm] = useState({
        text: '',
        priority: 2
    })

    function submitForm () {
        if (form.text.trim() === '') {
            alert('Favor digitar a tarefa!')
            return
        }

        const text = form.text
        let priority

        if (form.priority === 0){
            priority = 'low'
        } else if (form.priority === 1) {
            priority = 'midle'
        } else {
            priority = 'high'
        }

        axios.post('http://localhost:3001/todo', {text, priority})
        setForm({
            text: '',
            priority: 2
        })
    }

    return (
        <footer className='footer'>
            <div className='form'>
                <div className='element input'>
                    <label>Tarefa</label>
                    <input 
                        type="text" 
                        value={form.text}
                        onChange={ e => setForm({...form, text: e.target.value}) }
                    />
                </div>
                <div className='element select'>
                    <label>Prioridade</label>
                    <select 
                        name="priority" 
                        id="priority"
                        value={form.priority}
                        onChange={ e => setForm({...form, priority: Number(e.target.value)}) }
                    >
                        <option value="2">Alta</option>
                        <option value="1">Media</option>
                        <option value="0">Baixa</option>
                    </select>
                </div>
                <div className="element button">
                    <button onClick={() => submitForm()}>
                        Salvar
                    </button>
                </div>
                
            </div>
        </footer>
    )
}