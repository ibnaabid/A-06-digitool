import React, { useState } from 'react';


import { CircleCheck } from 'lucide-react';
import { toast } from 'react-toastify';

const CardShow = ({card,setTabState ,setCart,cart,setCardData,cardData}) => {
    console.log(card,setCardData,cardData)

    // button ta sudhu hbe card ar state ar jnno
    const[button,setButton]=useState(false)

    // aikhne card ta show korabo:
    
     const handleAdd = () => {
    setButton(true)
  
    // duplicate check
    if (!cart.find(item => item.id === card.id)) {
      setCart([...cart, card])
      toast.success("added to Cart")
    }
    else{
      toast.error("already Added")
    }
    setTabState("Cart")

  }

  // card pricing


    return (
        <div className='ml-9 my-5 mt-8'>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge text-xl px-5 py-5 badge-xs badge-secondary">{card.tag}</span>
    <h2 className='w-[300px]' >{card.icon} </h2>
          
    <div className="flex justify-between">

      <h2 className='text-3xl font-bold'>{card.name}</h2>
      <span className="text-xl font-bold">${card.price}/mon </span>
    </div>
    <h2 className='text-2xl font-bold text-gray-500 pt-3'>{card.description}</h2>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
  {
    card.features.map((feature, index) => (
      <li className='flex text-green-500 gap-3' key={index}>
        
    <CircleCheck />
 {feature}
      </li>
    ))
  }
</ul>
    <div className="mt-6">

      <button
        onClick={handleAdd}
        disabled={button}
       className={`btn ${button?"btn-success btn-soft rounded-2xl btn-block" :"btn-primary btn-soft rounded-2xl btn-block"}`}>
        {button?"Ordered" :"Add to Cart"}
       
       </button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default CardShow;