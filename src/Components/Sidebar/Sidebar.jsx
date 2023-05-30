import React, { useState } from 'react';
import './Sidebar.css'
import logo from '../../Imgs/logo1.png'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import PanelClientesModal from '../Clientes/panelClientes';
import PanelProductosModal from '../Productos/ProductoPanel';
import PanelProveedores from '../Proveedores/PanelProveedores';
import PanelCategorias from '../Categorias/PanelCategoria';


const Sidebar = () => {
    const [showClientesModal, setShowClientesModal] = useState(false);


    const handleModalOpen = () => {
        setShowClientesModal(true);
    };

    const handleModalClose = () => {
        setShowClientesModal(false);
    };


    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    return (

        <motion.div className="Sidebar"
            variants={sidebarVariants}
            animate={window.innerWidth <= 768 ? `${expanded}` : ''}
        >
            {/*El logo va acá*/}
            <div className="logo">
                <img src={logo} alt="imagen" />
                <span>
                    Ini<span>c</span>io
                </span>
            </div>

            {/*El menu va acá*/}
            <div className="menu">
                {/* Botón 1 */}
                <div className={selected === 0 ? "menuItem active" : "menuItem"} onClick={() => setSelected(0)}>
                    <PanelClientesModal className={selected === 0 ? "menuItem active" : "menuItem"} open={showClientesModal} handleClose={handleModalClose} />
                </div>

                {/* Botón 2 */}
                <div className={selected === 1 ? "menuItem active" : "menuItem"} onClick={() => setSelected(1)}>
                    <PanelProductosModal className={selected === 1 ? "menuItem active" : "menuItem"} open={showClientesModal} handleClose={handleModalClose} />
                </div>

                {/* Botón 3 */}
                <div className={selected === 2 ? "menuItem active" : "menuItem"} onClick={() => setSelected(2)}>
                    {<PanelProveedores className={selected === 2 ? "menuItem active" : "menuItem"} open={showClientesModal} handleClose={handleModalClose} />}
                </div>
                <div className={selected === 3 ? "menuItem active" : "menuItem"} onClick={() => setSelected(3)}>
                    {<PanelCategorias className={selected === 3 ? "menuItem active" : "menuItem"} open={showClientesModal} handleClose={handleModalClose} />}
                </div>
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>

            </div>
        </motion.div>
    )
}

export default Sidebar