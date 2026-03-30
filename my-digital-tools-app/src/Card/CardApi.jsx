import React, { useEffect, useState } from 'react';
import CardShow from "../Card/CardShow"

const CardApi = () => {
    const [cardData,setCardData]=useState([]);

    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data=>setCardData(data))
    },[] )
    return (
        <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
            cardData.map(card=>
                <CardShow card={card}
                cardData={cardData}
                setCardData={setCardData}

                key={card.id}
                ></CardShow>

            )
        }


      </div>


        </div>
    );
};

export default CardApi;