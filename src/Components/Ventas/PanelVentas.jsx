import { Button, Modal } from '@mui/material';
import React, { useState } from 'react'
import {  UilMoneyWithdrawal } from '@iconscout/react-unicons'
import styles from '../Generico/PanelGenerico.module.css'


const PanelVentas = () => {
    const [open, setOpen] = useState(false);
    const [showVentasModal, setShowVentasModal] = useState(false);

    const handleModalClose = () => {
        setShowVentasModal(false);
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
                <UilMoneyWithdrawal  size="40" />
                {`Gestión de Ventas`}
            </Button>
        </>
    )
}
export default PanelVentas;