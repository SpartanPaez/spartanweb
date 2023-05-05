import { useState, useEffect } from "react";
import { Modal, Button } from "@material-ui/core";
import { UilBox } from "@iconscout/react-unicons";
import ProductosAltaModal from "./Productos";
import ProductosListaModal from "./ProductoLista"
import styles from './PanelProducto.module.css'

const PanelProductos = () => {
    const [open, setOpen] = useState(false);
    const [showProductosModal, setShowProductosModal] = useState(false);

    const handleModalClose = () => {
        setShowProductosModal(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Button onClick={handleOpen}  className={styles.btnproducto}>
                <UilBox size="40" />
                {`Gestión de productos`.toLowerCase()}
            </Button>
            <Modal className={styles.modal} open={open} onClose={handleClose} onClick={handleOpen}>
                <div className={styles.modalcontent}>
                    <div className={styles.divtitulo}>
                        <h2>Gestión de productos</h2>
                    </div>
                    <div className="Cards">
                        <ProductosAltaModal open={showProductosModal} handleClose={handleModalClose} />
                        <ProductosListaModal open={showProductosModal} handleClose={handleModalClose} />
                   
                    </div>    
                </div>
            </Modal >
        </>
    )

}
export default PanelProductos;