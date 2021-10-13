import React, { useState } from 'react';
import axios from 'axios';

export default function Modal({ onClose, cadastro }) {

  const [info, setInfo] = useState({
    nome: '',
    cpf: '',
    comida: '',
  });

  const updateUser = () => {
    axios.put('http://localhost:3001/cadastros', { info, cadastro })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const handleOnChange = ({ target }) => {
    setInfo((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    console.log(info);
  };

  return (
      <div>
        <button onClick={ onClose } type="button">X</button>
        <form>
            <label htmlFor="nome">Nome:</label>
            <input onChange={ handleOnChange } type="text" name="nome" id="nome" />

            <label htmlFor="cpf">CPF</label>
            <input onChange={ handleOnChange } type="text" maxLength="11"  name="cpf" id="cpf" />

            <label htmlFor="comida">O que você levará para o café da manhã?</label>
            <input onChange={ handleOnChange } type="text"  name="comida" id="break-fast" />

            <button onClick={ updateUser } type="button">Enviar</button>
          </form>
      </div>
  );
};
