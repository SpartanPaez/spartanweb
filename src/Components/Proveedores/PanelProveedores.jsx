import { Button, Fab, Modal } from '@mui/material';
import React, { useState } from 'react'
import styles from './PanelProveedores.module.css'
import ListaProveedores from './ListaProveedores';
import Card from './CardProveedor';
import { UilHouseUser, UilFolderCheck } from '@iconscout/react-unicons'

const PanelProveedores = () => {
    const [open, setOpen] = useState(false);
    const [showProveedoresModal, setShowProveedoresModal] = useState(false);

    const handleModalClose = () => {
        setShowProveedoresModal(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Button className={styles.btn} onClick={handleOpen} style={{ color: 'white' }}>
                <UilFolderCheck  size="50" />
                {`Gestión de proveedores`}
            </Button>
            <Modal className={styles.modal} open={open} onClose={handleClose} onClick={handleOpen}>
                <div className={styles.modalcontent}>
                    <div className={styles.divtitulo}>
                        <h2>Gestión de proveedores</h2>
                    </div>
                    <div className="Cards">
                        <ListaProveedores open={showProveedoresModal} handleClose={handleModalClose} />
                    </div>
                </div>
            </Modal>
        </>

    )
}
export default PanelProveedores;
