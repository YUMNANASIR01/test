
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Shopbottombar from '@/components/shopBottomBar/Shopbottombar';
import { Input } from '@/components/ui/input';
import { Trash } from 'lucide-react';
import CartTotals from '@/components/cartTotals/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Iproduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  quantity: string;
}


function Cart() {

  const router = useRouter()
  const searchParams = useSearchParams();

  const [cardItems, setCardItems] = useState<Iproduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    const updatedCart = cart ? JSON.parse(cart) : [];

    const name = searchParams.get('name');
    const description = searchParams.get('description');
    const image = searchParams.get('image');
    const price = searchParams.get('price');
    const id = Number(searchParams.get('id'));
    const quantity = searchParams.get('quantity');


    if (name && description && image && price) {
      const isDuplicate = updatedCart.some((item: Iproduct) => item.name === name);
      
      if (isDuplicate) {
        const itemIndex = updatedCart.findIndex((item: Iproduct) => item.name === name)
        updatedCart[itemIndex].quantity = String(Number(updatedCart[itemIndex].quantity - 1) + Number(quantity))
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCardItems(updatedCart);
      }

      if (!isDuplicate) {
        updatedCart.push({ id, name, description, image, price, quantity });
      }
      
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCardItems(updatedCart);
      router.replace("/cart")
    }
  }, [searchParams, router]);



  function handleRemoveItem(index: number){
    const removeCard = [...cardItems]
    removeCard.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(removeCard))
    setCardItems(removeCard)
  }

  return (
    <>
      {/* Banner Section */}
      <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        {/* Left Div - Cart Items */}
        <div className="w-full lg:w-[817px]">
          <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
            <p className="w-1/4 text-center">Product</p>
            <p className="w-1/4 text-center">Price</p>
            <p className="w-1/4 text-center">Quantity</p>
            <p className="w-1/4 text-center">SubTotal</p>
          </div>

          {/* Cart Items */}
          {cardItems.map((item, index) => (
            <Card key={index}>
              <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
                
                <div>
                  <Image src={item.image} alt="cart2" width={108} height={105} />
                </div>
                
                <div className='flex flex-col gap-2'>
                  <p className="text-[#858484]">{item.name}</p>
                  
                  <p className="text-[#9f9f9f]">Price: {item.price}</p>
                  
                  <p className="text-[#9f9f9f]">Quantity: {item.quantity}</p>
                </div>
                
                <Button variant="ghost" onClick={()=>{handleRemoveItem(index)}}>
                  <Trash size={28} fill="#b88e2f" className="mr-6" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Right Div - Image */}
        <div className="w-full lg:w-[393px]">
          <CartTotals data={{ price: cardItems.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.quantity), 0), quantity: cardItems.reduce((total, item) => total + parseInt(item.quantity), 0) }} />
        </div>
      </div>

      <Shopbottombar />
    </>
  );
}

export default Cart;








          {/* <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
            
            <div className="flex items-center gap-4">
              
              <Image
                src="/cart2.png"
                alt="cart2"
                width={108}
                height={105}
                className="max-w-full"
              />
              <p className="text-[#9f9f9f]">Asgaard sofa</p>
            </div>

            <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

            <Input 
              placeholder="1" 
              className="w-12 h-12 text-center text-[16px] leading-[24px]"
            />

            <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

            <Trash size={28} fill="#b88e2f" />
          </div> */}














// import React from 'react'
// import Image from 'next/image'
// import Shopbottombar from '@/components/shopBottomBar/Shopbottombar'
// import { Input } from '@/components/ui/input'
// import { Trash } from 'lucide-react'
// import CartTotals from '@/components/cartTotals/page'

// function Cart() {
//   return (
//     <>
//       {/* Banner Section */}

//       <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
//               <div className="container mx-auto px-4 text-center">
//                 <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
//                 <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
//                 <div className="flex items-center justify-center gap-2 text-sm">
//                   <a href="#" className="hover:underline">
//                     Home
//                   </a>
//                   <span>
//                     <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
//                   </span>
//                   <span>Cart</span>
//                 </div>
//               </div>
//             </section>
     

//       {/* Middle Section */}
//       <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        
//         {/* Left Div - Cart Items */}
//         <div className="w-full lg:w-[817px]">
//           <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
//             <p className="w-1/4 text-center">Product</p>
//             <p className="w-1/4 text-center">Price</p>
//             <p className="w-1/4 text-center">Quantity</p>
//             <p className="w-1/4 text-center">SubTotal</p>
//           </div>

//           <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <Image
//                 src="/cart2.png"
//                 alt="cart2"
//                 width={108}
//                 height={105}
//                 className="max-w-full"
//               />
//               <p className="text-[#9f9f9f]">Asgaard sofa</p>
//             </div>

//             <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

//             <Input 
//               placeholder="1" 
//               className="w-12 h-12 text-center text-[16px] leading-[24px]"
//             />

//             <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

//             <Trash size={28} fill="#b88e2f" />
//           </div>
//         </div>

//         {/* Right Div - Image */}
//         <div className="w-full lg:w-[393px]">

//           <CartTotals/>
         
//         </div>
//       </div>

//       <Shopbottombar />
//     </>
//   )
// }

// export default Cart
