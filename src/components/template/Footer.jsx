import React from 'react'
import './Footer.css'

export default function (props) {
    return (
        <footer className='footer'>
            <div className='form'>
                <div className='element input'>
                    <label>Tarefa</label>
                    <input type="text" />
                </div>
                <div className='element select'>
                    <label>Prioridade</label>
                    <select name="priority" id="priority">
                        <option value="2">Alta</option>
                        <option value="1">Media</option>
                        <option value="0">Baixa</option>
                    </select>
                </div>
                <div className="element button">
                    <button>
                        Salvar
                    </button>
                </div>
                
            </div>
        </footer>
    )
}