import React, { useState } from 'react';
import axios from 'axios';
import '../style/card.css';
import Modal from './Modal';

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

  const deleteUser = () => {
    axios.delete('http://localhost:3001/cadastros', { cpf: props.cpf })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <section className="card-item" >
          <h1>{props.comida}</h1>

          <div className="card-infos">
            <p>{props.nome}</p>
            <p>{props.cpf}</p>
            <button onClick={ () => setIsOpen(true) } className="card-btn" type="button">Editar</button>
            <button onClick={ deleteUser } className="card-btn" type="button">Deletar</button>

            {isOpen ? <Modal cadastro={ props.cpf} onClose={() => setIsOpen(false)} /> : null}
          </div>
      </section>
    </div>
  )
};
