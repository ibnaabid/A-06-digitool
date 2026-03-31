import React, { useEffect, useState } from 'react';
import CardShow from "../Card/CardShow";
import { toast } from 'react-toastify';
// import Shopping from "../../../B13-A6-DigiTools-Platform/assets/products"
const CardApi = ({ tabState, setTabState }) => {

  const [cardData, setCardData] = useState([]);

//   CART PASS KORAR JNNO AITA STATE:
  const [cart, setCart] = useState([]); 

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

      </div>
                                        <h2 className="text-xl pl-7 py-4  font-bold mt-8">

  Total: ${total}/mon
</h2>
<button onClick={paymentHandle} className='btn btn-soft btn-neutral w-full mx-auto text-center rounded-3xl'>
  
  Proceed to Checkout</button>
                

    </div>
  );
};

export default CardApi;