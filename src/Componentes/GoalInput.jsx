import {React, useState, useEffect } from 'react';

const GoalInput = () => {
  const [input, setInput] = useState('');
  
  const [lista, setList] = useState([]);
  
  const [counter, setCounter] = useState(0);

  const controlador = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    document.title = `Cantidad de elementos :${counter}`;
  }, [counter]);

  const bottonAgregar = () => {
    if (input.trim() !== '') {
        setCounter(counter + 1);
        setList([...lista, input]);
        setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={controlador}
        placeholder="Ingrese su texto aqui"
      />
      <button onClick={bottonAgregar}>Agregar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalInput;
