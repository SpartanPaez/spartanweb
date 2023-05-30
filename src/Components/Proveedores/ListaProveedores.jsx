import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cardsproveedoristSet } from '../../Data/Data'
import Card from "../Generico/CardGenerico";
import styles from './ProveedorLista.module.css'

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
        backgroundColor: theme.palette.common.red,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const TableProveedor = () => {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (evento) => {
        debugger;
        axios.get(`http://localhost:5305/api/proveedor`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const ExistenResultados = response.data;
                debugger
                if (ExistenResultados) {
                    setData(ExistenResultados)
                }
            })
    }
    React.useEffect(() => {
        handleSubmit();
    }, []);
    return (
        <>
            {cardsproveedoristSet.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barColor={card.barColor}
                            barValue={card.value}
                            barText={card.barText}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                            onClick={handleOpen} // Pasa la función handleCardClick como prop a Card                             
                        />
                    </div>
                );
            })}

            <Modal open={open} onClose={handleClose} onClick={handleOpen}>
                <div className={styles.modalcontent}>
                    <div className='table'>
                        <div className={styles.divtitulo}>
                            <h2>Lista de Proveedores</h2>
                        </div>

                        <TableContainer className={styles.tablecontainer} component={Paper}>
                            <Table stickyHeader sx={{ minWidth: 550, maxWidth: "max-content" }} aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left"></StyledTableCell>
                                        <StyledTableCell align="left">Codigo</StyledTableCell>
                                        <StyledTableCell align="left">Ruc</StyledTableCell>
                                        <StyledTableCell align="left">Nombre</StyledTableCell>
                                        <StyledTableCell align="left" >Dirección</StyledTableCell>
                                        <StyledTableCell align="left" >País</StyledTableCell>
                                        <StyledTableCell align="left" >Ciudad</StyledTableCell>
                                        <StyledTableCell align="left" >Teléfono</StyledTableCell>
                                        <StyledTableCell align="left" >Correo</StyledTableCell>
                                        <StyledTableCell align="left" >Estado</StyledTableCell>
                                        <StyledTableCell align="left" >Fecha Alta</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <StyledTableRow key={uuidv4()}>
                                            <StyledTableCell align="left"></StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorId}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorRuc}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorNombre}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorDireccion}</StyledTableCell>
                                            <StyledTableCell align="left">{row.idPais}</StyledTableCell>
                                            <StyledTableCell align="left">{row.idCiudad}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorTelefono}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorCorreo}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorEstado}</StyledTableCell>
                                            <StyledTableCell align="left">{row.proveedorFechaAlta}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </Modal>
        </>
    );

}

export default TableProveedor;
