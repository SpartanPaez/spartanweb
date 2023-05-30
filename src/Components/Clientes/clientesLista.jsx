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
import { Modal } from '@mui/material';
import styles from './ClienteLista.module.css';
import Card from '../Generico/CardGenerico'
import { cardsclientSet } from '../../Data/Data'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

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
                <div className={styles.modalcontent} >
                    <div className='table'>
                        <div className={styles.divtitulo}>
                            <h2>Clientes regitrados</h2>
                        </div>

                        <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px', overflowX: 'auto' }}>
                            <Table stickyHeader sx={{ minWidth: 650, maxWidth: "max-content" }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left">Codigo</StyledTableCell>
                                        <StyledTableCell align='left'>Cedula</StyledTableCell>
                                        <StyledTableCell align="left">Nombres y apellidos</StyledTableCell>
                                        <StyledTableCell align="left">Dirección</StyledTableCell>
                                        <StyledTableCell align="left">Pais</StyledTableCell>
                                        <StyledTableCell align="left">Ciudad</StyledTableCell>
                                        <StyledTableCell align="left">Barrio</StyledTableCell>
                                        <StyledTableCell align="left">Celular</StyledTableCell>
                                        <StyledTableCell align="left">Correo</StyledTableCell>
                                        <StyledTableCell align="left" style={{ whiteSpace: 'nowrap' }}>Estado Civil</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <StyledTableRow
                                            key={uuidv4()}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <StyledTableCell align="left"></StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteId}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteCedula}</StyledTableCell>
                                            <StyledTableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.clienteNombre}</StyledTableCell>
                                            <StyledTableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.clienteDireccion}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clientePais}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteCiudad}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteBarrio}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteCelular}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteCorreo}</StyledTableCell>
                                            <StyledTableCell align="left">{row.clienteEstadoCivil}</StyledTableCell>
                                        </StyledTableRow>
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