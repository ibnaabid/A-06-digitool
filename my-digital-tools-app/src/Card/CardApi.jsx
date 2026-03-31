import React, { useEffect, useState } from 'react';
import CardShow from "../Card/CardShow";
import { toast } from 'react-toastify';
const CardApi = ({ tabState,cart,setCart, setTabState }) => {

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setCardData(data));
  }, []);


  // card pricing
  const total=cart.reduce((sum,item)=>
  sum+item.price,0
  )
const paymentHandle=(()=>{
  
  setCart([])

toast.success("payment successfully")
}
)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Products Tab */}
        {tabState === "Products" &&
          cardData.map(card => (
            <CardShow
              key={card.id}
              card={card}
              cardData={cardData}
              setCardData={setCardData}
              tabState={tabState}
              setTabState={setTabState}
              cart={cart}        // pass cart
              setCart={setCart}  // pass setCart
            />
          ))
        }

        {/* Cart Tab */}
        {tabState === "Cart" && (
          cart.length === 0 ? (
<div>
                <p className="text-white text-center pt-6 text-4xl">Cart is empty</p>
</div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="border-2 pt-9 border-amber-400 p-4 rounded-xl shadow-lg ml-9">
                <h2 className="text-xl font-bold">{item.name}</h2>
              <div className='flex justify-between items-center font-bold text-2xl pt-4'>
                  <h2>{item.tagType}</h2>
                <p>${item.price}</p>
              </div>
                <button
                  className="btn btn-soft  rounded-2xl btn-error mt-2"
                  onClick={() => {setCart(cart.filter(c => c.id !== item.id))
                    toast.error("card removed!")
                    
                  }
                }
                  
                >
                  Remove
                </button>
                <div>
      </div>

              </div>
              
              
            ))
            
            
          )
          
          
        )}
                                        <h2 className="text-xl pl-7 py-4  font-bold mt-8">

  Total: ${total}/mon
  
<button onClick={paymentHandle} className='btn mr-4 btn-soft btn-neutral w-full mt-5 mx-auto text-center rounded-3xl'>
  
  Proceed to Checkout</button>
</h2>
      
      </div>
              
    </div>
  );
};

export default CardApi;