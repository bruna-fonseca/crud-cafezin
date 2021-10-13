import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import '../style/list.css';

export default function List() {
  const [cadastros, setCadastros] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/cadastros')
      .then((response) => {
        setCadastros(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cadastros]);

  return (
    <div>
      <section className="section">
      <h1>Lista</h1>
      <Link className="link" to='/'>Voltar para o cadastro</Link>
      <div className="card-section">
      {cadastros && cadastros.map((cadastro, index) => (
        <Card key={index} nome={cadastro.nome} cpf={cadastro.cpf} comida={cadastro.comida} />
      ))}
      </div>
      </section>
    </div>
  )
};
