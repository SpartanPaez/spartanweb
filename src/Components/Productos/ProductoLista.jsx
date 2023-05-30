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
import { Modal} from '@mui/material';
import Card from '../Generico/CardGenerico';
import { cardsproductlistSet } from '../../Data/Data'
import styles from './ProductoLista.module.css'

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

export const TableProductos = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleSubmit = (evento) => {
        axios.get(`http://localhost:5305/api/productos`, {
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
            {cardsproductlistSet.map((card, id) => {
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
                            onClick={handleOpen}
                        />
                    </div>
                );
            })}
            <Modal open={open} onClose={handleClose}>
                <div className={styles.modalcontent} >
                    <div className='table'>
                        <div className={styles.divtitulo}>
                            <h2>Productos regitrados</h2>
                        </div>

                        <TableContainer className={styles.tablecontainer} component={Paper} style={{ boxShadow: '0px 13px 20px 0px' }}>
                            <Table stickyHeader sx={{ minWidth: 650, maxWidth: "max-content" }} aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        
                                    <StyledTableCell align="left" ></StyledTableCell>
                                        <StyledTableCell align="">Codigo de barra</StyledTableCell>
                                        <StyledTableCell align='left'>Lote</StyledTableCell>
                                        <StyledTableCell align="left">Nombre</StyledTableCell>
                                        <StyledTableCell align="left">Descripcíon</StyledTableCell>
                                        <StyledTableCell align="left">Categoría</StyledTableCell>
                                        <StyledTableCell align="left">Precio</StyledTableCell>
                                        <StyledTableCell align="left">Costo</StyledTableCell>
                                        <StyledTableCell align="left">Stock</StyledTableCell>
                                        <StyledTableCell align="left">Deposito</StyledTableCell>
                                        <StyledTableCell align="left">Vencimiento</StyledTableCell>
                                        <StyledTableCell align="left">Fecha registro</StyledTableCell>                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <StyledTableRow
                                            key={uuidv4()}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <StyledTableCell align="left" ></StyledTableCell>
                                            <StyledTableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.productoCodigoBarra}</StyledTableCell>
                                            <StyledTableCell align="left">{row.productoLote}</StyledTableCell>
                                            <StyledTableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.productoNombre}</StyledTableCell>
                                            <StyledTableCell align="left" style={{ whiteSpace: 'nowrap' }}>{row.productoDescripcion}</StyledTableCell>
                                            <StyledTableCell align="left">{row.idCategoria}</StyledTableCell>
                                            <StyledTableCell align="left">{row.productoCosto}</StyledTableCell>
                                            <StyledTableCell align="left">{row.productoPrecio}</StyledTableCell>
                                            <StyledTableCell align="left">{row.productoExistencia}</StyledTableCell>
                                            <StyledTableCell align="left">{row.depositoId}</StyledTableCell>
                                            <StyledTableCell align="left">{row.productoFechaVencimiento}</StyledTableCell>
                                            <StyledTableCell align="left">{row.productoFechaVencimiento}</StyledTableCell>
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
export default TableProductos;