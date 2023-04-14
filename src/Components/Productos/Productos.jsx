import React from 'react'
import axios from 'axios';
import {  Grid,  Modal, TextField, Button } from '@material-ui/core';
import { cardsclientSet } from '../../Data/Data'
import Card  from "./CardProducto";


const ModalProductos = () => {
  const [open, setOpen] = React.useState(false)
  const [categoria, setCategoria] = React.useState('')
  const [selectedDeposito, setSelectedDeposito] = React.useState('')

  const [productoid, setProductoid] = React.useState('');
  const [productoLote, setProductoLote] = React.useState('');
  const [productoCodigoBarra, setProductoCodigoBarra] = React.useState('');
  const [productoNombre, setProductoNombre] = React.useState('');
  const [productoDescripcion, setProductoDescripcion] = React.useState('');
  const [idCategoria, setIdCategoria] = React.useState('');
  const [productoCosto, setProductoCosto] = React.useState('');
  const [productoPrecio, setProductoPrecio] = React.useState('');
  const [productoExistencia, setProductoExistencia] = React.useState('');
  const [depositoId, setDepositoId] = React.useState('');
  const [productoVencimiento, setProductoVencimiento] = React.useState('');
  const [ProductoFechaVencimiento, setProductoFechaVencimiento] = React.useState('');
  const [ProductoFechaAlta, setProductoFechaAlta] = React.useState('');
  const [UsuarioId, setUsuarioId] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      productoid: productoid,
      productoLote: productoLote,
      productoCodigoBarra: productoCodigoBarra,
      productoNombre: productoNombre,
      productoDescripcion: productoDescripcion,
      idCategoria: idCategoria,
      productoCosto: productoCosto,
      productoPrecio: productoPrecio,
      productoExistencia: productoExistencia,
      depositoId: depositoId,
      productoVencimiento: productoVencimiento,
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
  const handleproductoid = (event) => {
    setProductoid(event.target.value);
  };
  const handleproductoLote = (event) => {
    setProductoLote(event.target.value);
  };
  const handleproductoCodigoBarra = (event) => {
    setProductoCodigoBarra(event.target.value);
  };
  const handleproductoNombre = (event) => {
    setProductoNombre(event.target.value);
  };
  const handleproductoDescripcion = (event) => {
    setProductoDescripcion(event.target.value);
  };
  const handleidCategoria = (event) => {
    setIdCategoria(event.target.value);
  };
  const handleproductoCosto = (event) => {
    setProductoCosto(event.target.value);
  };
  const handleproductoPrecio = (event) => {
    setProductoPrecio(event.target.value);
  };
  const handleproductoExistencia = (event) => {
    setProductoExistencia(event.target.value);
  };
  const handledepositoId = (event) => {
    setDepositoId(event.target.value);
  };
  const handleproductoVencimiento = (event) => {
    setProductoVencimiento(event.target.value);
  };
  const handleProductoFechaVencimiento = (event) => {
    setProductoFechaVencimiento(event.target.value);
  };
  const handleProductoFechaAlta = (event) => {
    setProductoFechaAlta(event.target.value);
  };
  const handleUsuarioId = (event) => {
    setUsuarioId(event.target.value);
  };

    return (
      <>
      {cardsclientSet.map((card, id) => {
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
                <div className='modal-content' >
                    <div className='divtitulo'>
                        <h2>Alta de Productos</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid container item xs={12}>
                                <Grid item xs={2} className='textField-grid' >
                                    <TextField
                                        variant="filled"
                                        required
                                        id="outlined-required"
                                        label="Código"
                                        defaultDefaultValue={productoid}
                                        onChange={handleproductoid}
                                        className='TextField'
                                    />
                                </Grid>
                                <Grid item xs={4} className='textField-grid'>
                                    <TextField label="Lote"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultDefaultValue={productoLote}
                                        onChange={handleproductoLote} />
                                </Grid>
                                <Grid item xs={6} className='textField-grid'>
                                    <TextField label="Código de Barra"
                                        variant="filled"
                                        required className='TextField'
                                        fullWidth={true}
                                        defaultvalue={productoCodigoBarra}
                                        onChange={handleproductoCodigoBarra} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={3} className='textField-grid'>
                                <TextField label="Nombre del producto"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={productoNombre}
                                        onChange={handleproductoNombre} />
                                </Grid>
                                <Grid item xs={3} className='textField-grid'>
                                    <TextField label="Descripción"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={productoDescripcion}
                                        onChange={handleproductoDescripcion} />
                                </Grid>
                                <Grid item xs={3} className='textField-grid'>
                                    <TextField label="Categoría"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={idCategoria}
                                        onChange={handleidCategoria} />
                                </Grid>
                                <Grid item xs={3} className='textField-grid'>
                                    <TextField label="Costo"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={productoCosto}
                                        onChange={handleproductoCosto} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={6} className='textField-grid'>
                                    <TextField label="Precio"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={productoPrecio}
                                        onChange={handleproductoPrecio} />
                                </Grid>
                                <Grid item xs={3} className='textField-grid'>
                                    <TextField label="Cantidad"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={productoExistencia}
                                        onChange={handleproductoExistencia} />
                                </Grid>
                                <Grid item xs={3} className='textField-grid'>
                                    <TextField label="Deposito"
                                        variant="filled"
                                        required className='TextField'
                                        fullWidth={true}
                                        defaultvalue={depositoId}
                                        onChange={handledepositoId} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid container item xs={7}>
                                <Grid item xs={3} className='textField-grid'>
                                    <Button type="submit" onClick={handleSubmit} variant="contained" id='btn'>Guardar</Button>
                                </Grid>
                                <Grid item xs={2} className='textField-grid'>
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