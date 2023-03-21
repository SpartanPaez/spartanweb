import React, { useState } from 'react';
import './Sidebar.css'
import logo from '../../Imgs/logo1.png'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
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
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? "menuItem active" : "menuItem"}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>{item.title}</span>
                        </div>
                    )
                })}
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar