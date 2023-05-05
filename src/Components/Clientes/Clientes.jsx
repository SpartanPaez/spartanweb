import { useState, useEffect } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { Grid, MenuItem, Select } from '@mui/material';
import style from './Cliente.module.css';
import axios from 'axios';
import Card from './Cardcliente'
import './Cardsclientes.css'
import { cardsclientSet } from '../../Data/Data'

const CustomerFormModal = (props) => {
    const [open, setOpen] = useState(false);
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(['']);

    const [clienteCedula, setCedula] = useState(''); // Estado para almacenar el valor de la cédula
    const [clienteNombre, setNombres] = useState(''); // Estado para almacenar el valor de los nombres
    const [clienteDireccion, setDireccion] = useState(''); // Estado para almacenar el valor de la dirección
    const [clientePais, setPais] = useState(''); // Estado para almacenar el valor del país
    const [clienteCiudad, setCiudad] = useState(''); // Estado para almacenar el valor de la ciudad
    const [clienteBarrio, setBarrio] = useState(''); // Estado para almacenar el valor del barrio
    const [clienteCelular, setCelular] = useState(''); // Estado para almacenar el valor del celular
    const [clienteCorreo, setCorreo] = useState(''); // Estado para almacenar el valor del correo
    const [clienteEstadoCivil, setEstadocivil] = useState(''); // Estado para almacenar el valor del estado civil
    const [clienteEstado, setEstado] = useState(''); // Estado para almacenar el valor del estado

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        debugger
        event.preventDefault();
        const data = {
            clienteCedula: clienteCedula,
            clienteNombre: clienteNombre,
            clienteDireccion: clienteDireccion,
            clientePais: clientePais,
            clienteCiudad: clienteCiudad,
            clienteBarrio: clienteBarrio,
            clienteCelular: clienteCelular,
            clienteCorreo: clienteCorreo,
            clienteEstadoCivil: clienteEstadoCivil,
            clienteEstado: clienteEstado
        };
        console.log(data);
        axios.post(`http://localhost:5305/api/Clientes`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        handleClose();
    };

    const handleCedulaChange = (event) => {
        setCedula(event.target.value);
    }
    const handleNombresChange = (event) => {
        setNombres(event.target.value);
    }
    const handleDireccionChange = (event) => {
        setDireccion(event.target.value);
    }
    const handlePaisChange = (event) => {
        setPais(event.target.value);
    }
    const handleCiudadChange = (event) => {
        setCiudad(event.target.value);
    }
    const handleBarrioChange = (event) => {
        setBarrio(event.target.value);
    }
    const handleCelularChange = (event) => {
        setCelular(event.target.value);
    }
    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    }
    const handleEstadocivilChange = (event) => {
        setEstadocivil(event.target.value);
    }
    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    }
    useEffect(() => {
        const consultarAPIpais = async () => {
            try {
                const resultado = await axios.get('http://localhost:5305/api/paises');
                console.log(resultado.data);
                setCountries(resultado.data);
            } catch (error) {
                console.log(error);
            }
        }
        consultarAPIpais();
    }, []);
    const handleChangePais = (event) => {
        setSelectedCountries(event.target.value);
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
                <div className={style.modalcontent} >
                    <div className={style.divtitulo}>
                        <h2>Alta de Cliente</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid container item xs={12}>
                                <Grid item xs={2} className={style.textFieldgrid} >
                                    <TextField
                                        variant="filled"
                                        required
                                        id="outlined-required"
                                        label="Cedula"
                                        defaultDefaultValue={clienteCedula}
                                        onChange={handleCedulaChange}
                                        className='TextField'
                                    />
                                </Grid>
                                <Grid item xs={4} className={style.textFieldgrid}>
                                    <TextField label="Nombre y Apellido"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultDefaultValue={clienteNombre}
                                        onChange={handleNombresChange} />
                                </Grid>
                                <Grid item xs={6} className={style.textFieldgrid}>
                                    <TextField label="Dirección"
                                        variant="filled"
                                        required className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteDireccion}
                                        onChange={handleDireccionChange} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <Select
                                        id="countries-select"
                                        label="País"
                                        multiple
                                        variant="filled"
                                        value={selectedCountries}
                                        onChange={handleChangePais}
                                        renderValue={(selected) => (
                                            <div>
                                                {selected.map((value) => (
                                                    <div key={value}>{value}</div>
                                                ))}
                                            </div>
                                        )}
                                        style={{ width: '100%' }} // Aplica el estilo para ajustar el ancho del Select al 100%
                                        displayEmpty
                                    >
                                        <MenuItem value="">Seleccione un país</MenuItem> {/* Elemento con el texto deseado */}
                                        {countries.map((country) => (
                                            <MenuItem key={country.paisId} value={country.paisDescripcion}>
                                                {country.paisDescripcion}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <TextField label="Ciudad"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteCiudad}
                                        onChange={handleCiudadChange} />
                                </Grid>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <TextField label="Barrio"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteBarrio}
                                        onChange={handleBarrioChange} />
                                </Grid>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <TextField label="Celular"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteCelular}
                                        onChange={handleCelularChange} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={6} className={style.textFieldgrid}>
                                    <TextField label="Correo"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteCorreo}
                                        onChange={handleCorreoChange} />
                                </Grid>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <TextField label="Estado Civil"
                                        variant="filled"
                                        required
                                        className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteEstadoCivil}
                                        onChange={handleEstadocivilChange} />
                                </Grid>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <TextField label="Estado"
                                        variant="filled"
                                        required className='TextField'
                                        fullWidth={true}
                                        defaultvalue={clienteEstado}
                                        onChange={handleEstadoChange} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid container item xs={7}>
                                <Grid item xs={3} className={style.textFieldgrid}>
                                    <Button type="submit" onClick={handleSubmit} variant="contained" id='btn' className={style.btn}>Guardar</Button>
                                </Grid>
                                <Grid item xs={2} className={style.textFieldgrid}>
                                    <Button type="submit" variant="contained" id='btn'>Cancelar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default CustomerFormModal;
