import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import './Login.css'



export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evento) => {
        evento.preventDefault(); 
        debugger
        const request = {
            UserName: username,
            Password: password
        };
        axios.post(`http://localhost:5305/api/login`, request, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const userExists = response.data;
                if (userExists) {
                    navigate('/dashboard');
                }
                else {
                    console.log(response.data);
                }
            })
            .then(data => console.log(data))
    };


    return (
        <div className="laura">
            <form onSubmit={handleSubmit}>
                <h2>Bienvenido</h2>
                <fieldset>
                    <legend>Acceso</legend>
                    <ul>
                        <li>
                            <label htmlFor="username">Usuario:</label>
                            <input type="text"
                                id="username"
                                value={username}
                                onChange={(evento) => setUsername(evento.target.value)}
                                required />
                        </li>
                        <li>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password"
                                id="password"
                                required
                                value={password}
                                onChange={(evento) => setPassword(evento.target.value)} />
                        </li>
                        <li>
                            <i />
                            <a onClick={() => this.changeView("PWReset")} href="#">¿Perdió su contraseña?</a>
                        </li>
                    </ul>
                </fieldset>
                <button type="submit" id="btningresar"><Link to='/'></Link>Ingresar</button>
                <button type="button"><Link to='/HomePage'></Link>Contacto</button>
               
            </form>
        </div>
    )

}
export default Login;