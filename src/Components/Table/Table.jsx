import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


export const TableX = () => {
  const [data, setData] = React.useState([]);

  const [productofechacencimiento, setProductofechacencimiento] = React.useState("");
  const handleSubmit = (evento) => {
    debugger
    const request = {
      ProductoFechaVencimiento: productofechacencimiento
    };
    axios.get(`http://localhost:5305/api/productos`, request, {
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


  return (console.log(data),
    <div className="Table">
      <h3>Productos a vencer</h3>
      <br />
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029', maxHeight: '400px', overflow: 'auto' }}>
        <Table stickyHeader sx={{ minWidth: 650, maxWidth: "max-content" }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ position: 'sticky', left: 0, zIndex: 1 }}></TableCell>
              <TableCell align="left" style={{ position: 'sticky', left: 0, zIndex: 1 }}>Codigo</TableCell>
              <TableCell align='left' style={{ position: 'sticky', left: 0, zIndex: 1 }}>Producto</TableCell>
              <TableCell align="left" style={{ position: 'sticky', left: 0, zIndex: 1 }}>Cantidad</TableCell>
              <TableCell align="left" style={{ position: 'sticky', left: 0, zIndex: 1 }}>Vencimiento</TableCell>
              <TableCell align="left" style={{ position: 'sticky', left: 0, zIndex: 1 }}>Costo</TableCell>
              <TableCell align="left" style={{ position: 'sticky', left: 0, zIndex: 1 }}>Ubicación</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={uuidv4()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ProductoNombre}
                </TableCell>
                <TableCell align="left">{row.productoCodigoBarra}</TableCell>
                <TableCell align="left">{row.productoNombre}</TableCell>
                <TableCell align="left">{row.productoExistencia}</TableCell>
                <TableCell align="left">{row.productoFechaVencimiento}</TableCell>
                <TableCell align="left">{row.productoCosto}</TableCell>
                <TableCell align="left">{row.depositoId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TableX;
