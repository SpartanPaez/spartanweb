import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './HomePage.css'


export const  HomePage = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="HomePage">
            <header>
                <h3>Incio</h3>
                <nav>
                    <li><Link to=''></Link>Clientes</li>
                    <li><Link to=''></Link>Productos</li>
                    <li><Link to=''></Link>Ventas</li>
                </nav>
            </header>
            //crea una barra de nevagacion para el usuario
            <nav>
            <div className="grid">
                <div className="grid-item">
                    <img src="https://picsum.photos/200/300" alt="imagen" />
                    <h3>Producto 1</h3>
                    <p>Descripcion del producto</p>
                    <button>Comprar</button>
                    </div>
            </div>
            </nav>
            <main>
                <h1>Inicio</h1>
                <p>Esta es la pagina de inicio</p>
            </main>
            //crea una grilla para mostrar los productos
 
        </div>
    )
}