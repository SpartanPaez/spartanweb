import { useState, useEffect } from "react";
import { Modal, TextField, Button } from "@material-ui/core";
import { UilUsersAlt } from "@iconscout/react-unicons";
import ProductosAltaModal from "./Productos";


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
            <Button onClick={handleOpen}>
                <UilUsersAlt size="20" />
                {`Alta de productos`.toLowerCase()}
            </Button>
            <Modal open={open} onClose={handleClose} onClick={handleOpen}>
                <div className='modal-content' >
                    <div className='divtitulo'>
                        <h2>Gestión de productos</h2>
                    </div>
                    <div className="Cards">
                        <ProductosAltaModal open={showProductosModal} handleClose={handleModalClose} />
                    </div>
                </div>
            </Modal >
        </>
    )

}
export default PanelProductos;