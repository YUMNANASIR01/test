// // src/components/spmain/Spmain.tsx
//  "use client";

// import { Button } from "@/components/ui/button";
// import { MinusIcon, PlusIcon, Star, StarHalf } from 'lucide-react';
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { useRouter } from 'next/navigation';

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   my_Price: string;
// }

// function Spmain({ data }: {data: Product}) {
//   const [cartItem, setCartItem] = useState<Product[]>([]);
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const handleQuantityChange = (change: number) => {
//     setQuantity(prev => Math.max(1, prev + change));
//   };

//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingProductIndex = cart.findIndex((item: Product)  => item.id === data.id);

//     if (existingProductIndex > -1) {
//       cart[existingProductIndex].quantity += quantity;
//     } else {
//       cart.push({ ...data, quantity });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     router.push('/cart');
//   };

//   return (
//     <div className="w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
//       <div className="m-auto flex flex-col lg:flex-row gap-10 lg:justify-center">
//         {/* Product Images Section */}
//         <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-[31px] lg:w-1/2">
//           <div className="flex flex-row lg:flex-col gap-4">
//             {cartItem.map((item, index) => (
//               <Image
//                 key={index}
//                 src={item.imageUrl}
//                 alt="mainImage"
//                 width={76}
//                 height={80}
//                 className="w-[60px] h-[60px] rounded-xl md:w-[76px] md:h-[80px] object-cover"
//               />
//             ))}
//           </div>

//           <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg">
//             <Image
//               src={data.imageUrl}
//               alt="mainImage"
//               objectFit="cover"
//               fill
//               className="w-full h-full rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="w-full lg:w-[606px] space-y-6">
//           <div className="text-center lg:text-left">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{data.title}</h1>
//             <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. {data.my_Price}.00</p>
//           </div>

//           <p className="text-sm sm:text-base text-muted-foreground">{data.description}</p>

//           <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-3 items-center justify-center lg:justify-start">
//             <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
//               <Button variant="ghost" size="icon" className="rounded-none" onClick={() => handleQuantityChange(-1)}>
//                 <MinusIcon className="w-4 h-4" />
//               </Button>
//               <span className="w-8 sm:w-12 text-center">{quantity}</span>
//               <Button variant="ghost" size="icon" className="rounded-none" onClick={() => handleQuantityChange(1)}>
//                 <PlusIcon className="w-4 h-4" />
//               </Button>
//             </div>

//             <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]" onClick={addToCart}>
//               Add To Cart
//             </Button>

//             <Link href={`/productComparison?id=${data.id}`}>
//               <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">+ Compare</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spmain;





// src/components/spmain/Spmain.tsx
"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  my_Price: string;
}

function Spmain({ data }: { data: Product }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    // Example: You can use a context or state management solution to add the product to the cart
    console.log("Added to cart:", {
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.my_Price,
      quantity: quantity,
    });
    router.push("/cart"); // Redirect to the cart page
  };

  return (
    <div className="w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
      <div className="m-auto flex flex-col lg:flex-row gap-10 lg:justify-center">
        {/* Product Images Section */}
        <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-[31px] lg:w-1/2">
          <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg">
            <Image
              src={data.imageUrl}
              alt="mainImage"
              fill
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        {/* Product Details Section */}
        <div className="w-full lg:w-[606px] space-y-6">
          {/* Product Title and Price */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{data.title}</h1>
            <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. {data.my_Price}</p>
            <p className="text-sm sm:text-base text-muted-foreground">{data.description}</p>
          </div>
          {/* Quantity and Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-3 items-center justify-center lg:justify-start">
            <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none"
                onClick={() => handleQuantityChange(-1)}
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
              <span className="w-8 sm:w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-none"
                onClick={() => handleQuantityChange(1)}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spmain;




















// // src\components\spmain\Spmain.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { MinusIcon, PlusIcon, Star, StarHalf } from 'lucide-react';
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { useRouter } from 'next/navigation';

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   my_Price: string;
// }

// function Spmain({ data }: {data: Product}) 

// {

//   const [cartItem, setCartItem] = useState<Product[]>([])
//   const [quantity, setQuantity] = useState(1);
//   const router = useRouter();

//   const handleQuantityChange = (change: number) => {
//     setQuantity(prev => Math.max(1, prev + change));
//   };

//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const existingProductIndex = cart.findIndex((item: Product)  => item.id == data.id);

//     if (existingProductIndex > -1) {
//       cart[existingProductIndex].quantity += quantity;
//     } else {
//       cart.push({ ...data, quantity });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     router.push('/cart');
//   };

//   return (
//     <div className="w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
//       <div className="m-auto flex flex-col lg:flex-row gap-10 lg:justify-center">
//         {/* Product Images Section */}
//         <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-[31px] lg:w-1/2">
//           <div className="flex flex-row lg:flex-col gap-4">
//           {cartItem.map((item, index) => (
//               <Image
//                    key={index}
//                   src={item.imageUrl}
//                     alt="mainImage"
//                      width={76}
//                      height={80}
//                className="w-[60px] h-[60px] rounded-xl md:w-[76px] md:h-[80px] object-cover"
//                 />
//                ))}
//           </div>
  
//           <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg">
//             <Image
//               src={data.imageUrl }
//               alt="mainImage"
//               objectFit="cover"
//               fill
//               className="w-full h-full rounded-lg"
//             />
//           </div>
//         </div>
//         {/* Product Details Section */}
//         <div className="w-full lg:w-[606px] space-y-6">
//           {/* Product Title and Price */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{data.title}</h1>
//             <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. {data.my_Price}.00</p>
//           </div>
  
//           {/* Product Rating and Review */}
//           <div className="flex items-center justify-center lg:justify-start gap-2">
//             {/* <div className="flex">
//               {[...Array(4)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary" />
//               ))}
//               <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
//             </div> */}
//             {/* <span className="text-sm text-muted-foreground">|</span>
//             <span className="text-sm text-muted-foreground">5 Customer Review</span> */}
//           </div>
  
//           {/* Product Description */}
//           <p className="text-sm sm:text-base text-muted-foreground">
//             {data.description}
//           </p>
  
//           {/* Size Selection */}
//           <div>
//             <h3 className="font-medium mb-2">Size</h3>
//             <RadioGroup defaultValue="L" className="flex gap-2 sm:gap-4 justify-center lg:justify-start">
//               {["L", "XL", "XS"].map((size) => (
//                 <div key={size}>
//                   <RadioGroupItem value={size} id={size} className="peer sr-only" />
//                   <Label htmlFor={size} className="px-3 py-1 sm:px-4 sm:py-2 border rounded-md hover:bg-yellow-500 cursor-pointer">
//                     {size}
//                   </Label>
//                 </div>
//               ))}
//             </RadioGroup>
//           </div>
  
//           {/* Color Selection */}
//           <div>
//             <h3 className="font-medium mb-2">Color</h3>
//             <div className="flex gap-4 justify-center lg:justify-start">
//               {["#816dfa", "black", "#b88e2f"].map((color) => (
//                 <div key={color} className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: color }}></div>
//               ))}
//             </div>
//           </div>
  
//           {/* Quantity and Buttons */}
//           <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-3 items-center justify-center lg:justify-start">
//             <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
//               <Button variant="ghost" size="icon" className="rounded-none" onClick={() => handleQuantityChange(-1)}>
//                 <MinusIcon className="w-4 h-4" />
//               </Button>
//               <span className="w-8 sm:w-12 text-center">{quantity}</span>
//               <Button variant="ghost" size="icon" className="rounded-none" onClick={() => handleQuantityChange(1)}>
//                 <PlusIcon className="w-4 h-4" />
//               </Button>
//             </div>
//             <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]" onClick={addToCart}>
//               Add To Cart
//             </Button>
//             <Link href={`/productComparison?id=${data.id}`}>
//               <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">+ Compare</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spmain;






















































// import React from "react";
// import { Button } from "@/components/ui/button";
// import { MinusIcon, PlusIcon, Star, StarHalf } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// async function Spmain({ id }: { id: number }) {
//   const res = await fetch("https://template6-six.vercel.app/api/products");
//   const products = await res.json();

//   const product = products[id];
//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
//       <div className="m-auto flex flex-col lg:flex-row gap-10 lg:justify-center">
//         {/* Product Images Section */}
//         <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-[31px] lg:w-1/2">
//           <div className="flex flex-row lg:flex-col gap-4">
//             {[...Array(4)].map((_, index) => (
//               <Image
//                 key={index}
//                 src={product.imageUrl}
//                 alt="mainImage"
//                 width={76}
//                 height={80}
//                 className="w-[60px] h-[60px] rounded-xl md:w-[76px] md:h-[80px] object-cover"
//               />
//             ))}
//           </div>

//           <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg">
//             <Image
//               src={product.imageUrl}
//               alt="mainImage"
//               objectFit="cover"
//               fill
//               className="w-full h-full rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="w-full lg:w-[606px] space-y-6">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{product.name}</h1>
//           <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. {product.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spmain;
