import React, { useState  } from "react"
import { LayoutGroup, motion } from 'framer-motion'
import "react-circular-progressbar/dist/styles.css"
import './CardGenerico.css'


const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => { 
    // Llama a la función pasada como prop
    props.onClick();
  };

  return (
    <LayoutGroup>
        <CompactCard param={props}
         setExpanded={() => setExpanded(true)}  
         onClick={handleCardClick} />
    </LayoutGroup>
  );
};

function CompactCard({ param, setExpanded, onClick }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard" style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow
      }}
      onClick={onClick} // Llama a la función onClick pasada como prop en el evento onClick de la tarjeta
    >
      <div className="radialBar">
        <span>{param.title}</span>
        <Png />
      </div>
      
    </motion.div>
  );
}


export default Card;