import React, { useState } from 'react';
import './MeuComponente.css';

function MeuComponente() {
    const [inputValue, setInputValue] = useState('');
    const [text, setText] = useState('Ulbra');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const enviar = () => {
        // Simulando um envio de dados para um servidor
        const data = { content: inputValue };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            alert('Dados enviados com sucesso!');
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao enviar dados');
        });
    };

    const renomear = () => {
        setText(inputValue);
        console.log('Função renomear chamada');
    };

    const limpar = () => {
        setInputValue('');
        setText('Ulbra');
        console.log('Função limpar chamada');
    };

    return (
        <div className="meu-componente">
            <h2>Meu Componente</h2>
            <p>{text}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Digite algo"
            />
            <ul>
                <li onClick={enviar}>Enviar</li>
                <li onClick={renomear}>Renomear</li>
                <li onClick={limpar}>Limpar</li>
            </ul>
        </div>
    );
}

export default MeuComponente;