import React from 'react';

const CardShow = ({card ,setCardData,cardData}) => {
    console.log(card,setCardData,cardData)
    return (
        <div className='ml-9 my-5 mt-8'>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">{card.tag}</span>
          
    <div className="flex justify-between">

      <h2 className='text-3xl font-bold'>{card.name}</h2>
      <span className="text-xl font-bold">${card.price}/mon </span>
    </div>
    <h2 className='text-2xl font-bold text-gray-400 pt-3'>{card.description}</h2>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
  {
    card.features.map((feature, index) => (
      <li key={index}>
        ✔️ {feature}
      </li>
    ))
  }
</ul>
    <div className="mt-6">
      <button className="btn btn-primary rounded-2xl btn-block">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default CardShow;