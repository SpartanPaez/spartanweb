

import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Modal, TextField, Button, MenuItem, Select } from '@mui/material';
import { cardsproductSet } from '../../Data/Data'
import Card from "../Generico/CardGenerico";
import styles from './Producto.module.css';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";



const ModalProductos = () => {
  const [open, setOpen] = React.useState(false)

  const [productoLote, setProductoLote] = React.useState('');
  const [productoCodigoBarra, setProductoCodigoBarra] = React.useState('');
  const [productoNombre, setProductoNombre] = React.useState('');
  const [productoDescripcion, setProductoDescripcion] = React.useState('');
  const [idCategoria, setIdCategoria] = React.useState('');
  const [productoCosto, setProductoCosto] = React.useState('');
  const [productoPrecio, setProductoPrecio] = React.useState('');
  const [productoExistencia, setProductoExistencia] = React.useState('');
  const [depositoId, setDepositoId] = React.useState('');
  const [ProductoFechaVencimiento, setProductoFechaVencimiento] = React.useState('');
  const [ProductoFechaAlta, setProductoFechaAlta] = React.useState('');
  const [UsuarioId, setUsuarioId] = React.useState('');

  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState('');

  const [deposito, setDeposito] = React.useState('')
  const [selectedDeposito, setSelectedDeposito] = React.useState('')

  const [proveedores, setProveedores] = useState([]);
  const [selectedProveedor, setSelectedProveedor] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, key) => {
    const setter = setters[key];
    setter(event.target.value);
  };
  const setters = {
    productoLote: setProductoLote,
    productoCodigoBarra: setProductoCodigoBarra,
    productoNombre: setProductoNombre,
    productoDescripcion: setProductoDescripcion,
    idCategoria: setIdCategoria,
    productoCosto: setProductoCosto,
    productoPrecio: setProductoPrecio,
    productoExistencia: setProductoExistencia,
    depositoId: setDepositoId,
    productoFechaAlta: setProductoFechaAlta,
    usuarioId: setUsuarioId,
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    debugger;
    const data = {
      productoLote: productoLote,
      productoCodigoBarra: productoCodigoBarra,
      productoNombre: productoNombre,
      productoDescripcion: productoDescripcion,
      idCategoria: idCategoria,
      productoCosto: productoCosto,
      productoPrecio: productoPrecio,
      productoExistencia: productoExistencia,
      depositoId: depositoId,
      ProductoFechaVencimiento: ProductoFechaVencimiento,
      ProductoFechaAlta: ProductoFechaAlta,
      UsuarioId: UsuarioId
    };
    console.log(data);
    axios.post(`http://localhost:5305/api/productos`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    handleClose();
  };
  useEffect(() => {
    const consultarApiProveedores = async () => {
      try {
        const resultado = await axios.get('http://localhost:5305/api/proveedor');
        console.log(resultado.data);
        setSelectedProveedor(resultado.data);
      } catch (error) {
        console.log(error);
      }
    }
    consultarApiProveedores();
  }, []);

  useEffect(() => {
    debugger;
    const consultarApiCategorias = async () => {
      try {
        const resultado = await axios.get('http://localhost:5305/api/categorias');
        console.log(resultado.data);
        setCategorias(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };
    consultarApiCategorias();
  }, []);


  return (
    <>
      {cardsproductSet.map((card, id) => {
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
      <Modal open={open} onClose={handleClose}>
        <div className={styles.modalcontent}>
          <div className={styles.divtitulo}>
            <h2>Alta de Productos</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid container item xs={12}>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <TextField label="Código de Barra"
                    variant="filled"
                    required className='TextField'
                    fullWidth={true}
                    defaultvalue={productoCodigoBarra}
                    onChange={(event) => handleChange(event, 'productoCodigoBarra')} />
                </Grid>
                <Grid item xs={2} className={styles.textFieldgrid}>
                  <TextField label="Lote"
                    variant="filled"
                    required
                    className='TextField'
                    fullWidth={true}
                    defaultDefaultValue={productoLote}
                    onChange={(event) => handleChange(event, 'productoLote')} />
                </Grid>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <TextField label="Nombre del producto"
                    variant="filled"
                    required
                    className='TextField'
                    fullWidth={true}
                    defaultvalue={productoNombre}
                    onChange={(event) => handleChange(event, 'productoNombre')} />
                </Grid>
                <Grid item xs={4} className={styles.textFieldgrid}>
                  <TextField label="Descripción"
                    variant="filled"
                    required
                    className='TextField'
                    fullWidth={true}
                    defaultvalue={productoDescripcion}
                    onChange={(event) => handleChange(event, 'productoDescripcion')} />
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <Select
                    label="Categoría"
                    variant='filled'
                    value={selectedCategoria}
                    renderValue={(categorias) => (
                      <div>
                        {categorias.map((value) => (
                          <div key={value}>{value}</div>
                        ))}
                      </div>
                    )}
                    style={{ width: '100%' }}
                    onChange={(event) => setSelectedCategoria(event.target.value)}>
                    <MenuItem value="">Seleccione una categoría</MenuItem>
                    {categorias.map((categoria) => (
                      <MenuItem key={categoria.categoriaId} value={categoria.categoriaId}>
                        {categoria.categoriaDesc}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <TextField label="Costo"
                    variant="filled"
                    required
                    className='TextField'
                    fullWidth={true}
                    defaultvalue={productoCosto}
                  />
                </Grid>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <TextField label="Precio"
                    variant="filled"
                    required
                    fullWidth={true}
                    defaultvalue={productoPrecio}
                  />
                </Grid>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <TextField label="Cantidad"
                    variant="filled"
                    required
                    fullWidth={true}
                    defaultvalue={productoExistencia}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <TextField label="Deposito"
                    variant="filled"
                    required
                    fullWidth={true}
                    defaultvalue={depositoId} />
                </Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}  >
                  <DatePicker
                    label="Fecha de vencimiento"
                    slotProps={{ textField: { variant: 'filled' } }}
                    value={ProductoFechaVencimiento}

                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid>
              <Grid container item xs={7}>
                <Grid item xs={3} className={styles.textFieldgrid}>
                  <Button type="submit" className={styles.btn} onClick={handleSubmit} variant="contained" id='btn'>Guardar</Button>
                </Grid>
                <Grid item xs={2} className={styles.textFieldgrid}>
                  <Button type="submit" variant="contained" id='btn'>Cancelar</Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default ModalProductos
