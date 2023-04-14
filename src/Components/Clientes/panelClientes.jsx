import { useState, useEffect } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { UilUsersAlt } from '@iconscout/react-unicons'
import ClientesModal from '../Clientes/Clientes';
import ListaClientes from '../Clientes/clientesLista';
import './PanelCliente.css';

const PanelCliente = () => {
    const [open, setOpen] = useState(false);
    const [showClientesModal, setShowClientesModal] = useState(false);


    const handleModalClose = () => {
        setShowClientesModal(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>   
            <Button onClick={handleOpen}>
                <UilUsersAlt size="20" />
                {`Gestión de Clientes`.toLowerCase()}
            </Button>
            <Modal open={open} onClose={handleClose} onClick={handleOpen}>
                <div className='modal-content' >
                    <div className='divtitulo'>
                        <h2>Gestión de clientes</h2>
                    </div>
                    <div className="Cards">

                            <ClientesModal open={showClientesModal} handleClose={handleModalClose}  />
                            <ListaClientes open={showClientesModal} handleClose={handleModalClose}  />
                    </div>
                </div>
            </Modal >
        </>
    );
}

export default PanelCliente;

