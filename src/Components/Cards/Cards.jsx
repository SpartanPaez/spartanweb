import React from 'react'
import './Cards.css'
import {cardsData} from  '../../Data/Data'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className="Cards">
        {cardsData.map((card, id) => {
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
                    />
                </div>
            );
        })}
    </div>
  );
};

export default Cards