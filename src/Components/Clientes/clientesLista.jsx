import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { Modal, TextField, Button } from '@material-ui/core';
import { UilUsersAlt } from '@iconscout/react-unicons'
import './ClienteLista.css';
import Card from './Cardcliente'
import './Cardsclientes.css'
import { cardsclientSet } from '../../Data/Data'


export const TableClientes = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleSubmit = (evento) => {
        axios.get(`http://localhost:5305/api/Clientes`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const ExistenResultados = response.data;
                if (ExistenResultados) {
                    setData(ExistenResultados)
                }
            })
    }
    useEffect(() => {
        handleSubmit();
    }, [])
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        {cardsclientSet.map((card, id) => {
                            return (
                                <div className="parentContainer" key={id}>
                                    <Card
                                        title='Lista de clientes'
                                        color={card.color}
                                        barColor={card.barColor}
                                        barValue={card.value}
                                        barText={card.barText}
                                        value={card.value}
                                        png={card.png}
                                        series={card.series}
                                        onClick={handleOpen}
                                    />
                                </div>
                            );
                        })}
           
            <Modal open={open} onClose={handleClose}>
                <div className='modal-content' >
                    <div className='table'>
                        <h2>Clientes regitrados</h2>
                        <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px', overflowX: 'auto' }}>
                            <Table stickyHeader sx={{ minWidth: 650, maxWidth: "max-content"}} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left">Codigo</TableCell>
                                        <TableCell align='left'>Cedula</TableCell>
                                        <TableCell align="left">Nombres y apellidos</TableCell>
                                        <TableCell align="left">Dirección</TableCell>
                                        <TableCell align="left">Pais</TableCell>
                                        <TableCell align="left">Ciudad</TableCell>
                                        <TableCell align="left">Barrio</TableCell>
                                        <TableCell align='left'>Producto</TableCell>
                                        <TableCell align="left">Celular</TableCell>
                                        <TableCell align="left">Correo</TableCell>
                                        <TableCell align="left" style={{ whiteSpace: 'nowrap' }}>Estado Civil</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow
                                            key={uuidv4()}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left"></TableCell>
                                            <TableCell align="left">{row.clienteId}</TableCell>
                                            <TableCell align="left">{row.clienteCedula}</TableCell>
                                            <TableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.clienteNombre}</TableCell>
                                            <TableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.clienteDireccion}</TableCell>
                                            <TableCell align="left">{row.clientePais}</TableCell>
                                            <TableCell align="left">{row.clienteCiudad}</TableCell>
                                            <TableCell align="left">{row.clienteBarrio}</TableCell>
                                            <TableCell align="left">{row.clienteProducto}</TableCell>
                                            <TableCell align="left">{row.clienteCelular}</TableCell>
                                            <TableCell align="left">{row.clienteCorreo}</TableCell>
                                            <TableCell align="left">{row.clienteEstadoCivil}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default TableClientes;