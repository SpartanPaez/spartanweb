import React from 'react';
import axios from 'axios';
import {  Grid, Modal } from '@mui/material';
import { cardsproveedorSet } from '../../Data/Data';
import Card from "../Generico/CardGenerico";
import styles from './Proveedores.module.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0066CC',
        },
        background: {
            default: '#FFFFFF',
        },
    },
});

const ModalProveedores = () => {
    const [open, setOpen] = React.useState(false)
    const [proveedorRuc, setProveedorRuc] = React.useState('')
    const [proveedorNombre, setProveedorNombre] = React.useState('');
    const [proveedorDireccion, setProveedorDireccion] = React.useState('');
    const [idPais, setIdPais] = React.useState('');
    const [idCiudad, setIdCiudad] = React.useState('');
    const [proveedorTelefono, setProveedorTelefono] = React.useState('');
    const [proveedorEmail, setProveedorEmail] = React.useState('');
    const [proveedorEstado, setProveedorEstado] = React.useState('');
    const [proveedorFechaAlta, setProveedorFechaAlta] = React.useState('');
    const [UsuarioId, setUsuarioId] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        debugger
        const data = {
            proveedorRuc: proveedorRuc,
            proveedorNombre: proveedorNombre,
            proveedorDireccion: proveedorDireccion,
            idPais: idPais,
            idCiudad: idCiudad,
            proveedorTelefono: proveedorTelefono,
            proveedorEmail: proveedorEmail,
            proveedorEstado: proveedorEstado,
            proveedorFechaAlta: proveedorFechaAlta,
            UsuarioId: UsuarioId,
        };
        console.log(data);
        axios.post(`http://localhost:3001/proveedores`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    return (
        <>
            {cardsproveedorSet.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            color={card.color}x
                            png={card.png}
                            onclick={handleOpen}
                        />
                    </div>
                );
            })}
            <Modal open={open} onClose={handleClose}>
                <div className={styles.modalcontent}>
                    <div className={styles.divtitulo}>
                        <h2>Alta de proveedores</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        
                          
                    </form>
                </div>
            </Modal>
        </>
    )
}
export default ModalProveedores;
