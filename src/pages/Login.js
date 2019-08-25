import React, { useState} from 'react';
import api from '../services/api';
import './Login.css'
import logo from '../assets/logo.svg';

import { BrowserRouter } from 'react-router-dom';

/*Components, states, [propriedades(props)=(src, alt, onChange)]
todas as rotas herdam uma propriedade chamada history do react dom,
que serve para fazer a navegação
*/
function Login( { history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit (e){
       e.preventDefault();

       const response = await api.post('/devs', {
           username,
       });

       const { _id } = response.data;
       
       history.push(`/dev/${_id}`);
    }

    return(
        <div className='login-container'>
            <form
            onSubmit= {handleSubmit}>
               <img src={logo} className="App-logo" alt="Tindev" />
               <input
                  placeholder="Digite seu usuário do Github"
                  value = {username}
                  onChange = {e => setUsername(e.target.value)}
               />
               <button type="submit">Enviar</button>
            </form>
        </div>
    );

}

export default Login;