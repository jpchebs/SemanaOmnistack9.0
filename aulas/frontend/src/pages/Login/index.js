import React, { useState } from 'react' // useState serve para criacao de estado para informacao da aplicacao
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('') // '' inicia com valor vazio, useState retorna um vetor
  
    async function handleSubmit(event){
      // previne o redirecionamento padrao de tela
      event.preventDefault() 
      
      const response = await api.post('/sessions', { email })
      const { _id } = response.data
      
      localStorage.setItem('user', _id)
      
      history.push('/dashboard')

    }

    return (
        <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email *</label>
          <input 
            id="email"
            type="email" 
            placeholder="Seu Email aqui"
            value={email}
            onChange={event => setEmail(event.target.value)}
            /> 

            <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    )
}