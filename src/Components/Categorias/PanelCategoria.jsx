import { useState } from 'react';
import { Modal, Button } from '@mui/material';
import { UilChartPieAlt } from '@iconscout/react-unicons'
import styles from './PanelCategoria.module.css';


const PanelCategorias = () => {
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
     <Button className={styles.btnclientes} onClick={handleOpen} >
                <UilChartPieAlt size="40" />
                {`Gestión de Categorías`}
            </Button>
            <Modal className={styles.modal} open={open} onClose={handleClose} onClick={handleOpen}>
                <div className={styles.modalcontent} >
                    <div className={styles.divtitulo}>
                        <h2>Gestión de clientes</h2>
                    </div>
                    <div className="Cards">
                       
                    </div>
                </div>
            </Modal >
   </>
  )
}

export default PanelCategorias