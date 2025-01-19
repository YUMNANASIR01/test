import React from "react";
import Productdetails from "@/components/productdetails/Productdetails";
import Relatedproducts from "@/components/relatedProduct/Relatedproducts";
import Spmain from "@/components/spmain/Spmain";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

// Page Component
export default async function SingleProduct({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  console.log("Extracted ID:", id); // Debugging line

  const res = await fetch("https://template6-six.vercel.app/api/products");
  const products = await res.json();

  type Product = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  };

  const product = products.find((item: Product) => item.id === id);
  console.log("Found Product:", product); // Debugging line

  if (!product) {
    return <p>Product not found</p>;
  }

  const { title, description, imageUrl, price } = product;
  const my_Price = price;

  return (
    <>
      {/* Breadcrumb Navigation Section */}
      <div className="w-full flex items-center min-h-[80px] sm:h-[100px] mt-2 sm:mt-3 bg-[#f9f1e7] px-2 exsm:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 box-border">
        <div className="w-full flex items-center flex-wrap text-sm exsm:text-base sm:text-lg md:text-[20px] leading-[22px] exsm:leading-[24px] sm:leading-[28px] md:leading-[30px]">
          <Link href="/">
            <p className="text-[#7c7474] flex items-center">
              Home
              <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </p>
          </Link>
          <Link href="/shop">
            <p className="text-[#7c7474] ml-2 exsm:ml-3 sm:ml-4 md:ml-6 flex items-center">
              Shop
              <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </p>
          </Link>
          <div className="ml-2 exsm:ml-3 sm:ml-4 md:ml-6 pl-2 exsm:pl-3 sm:pl-4 md:pl-6 border-l-2 border-black">
            <p className="font-medium text-sm exsm:text-base sm:text-lg md:text-xl">{title}</p>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <Spmain data={{ title, description, imageUrl, my_Price, id }} />
      <Productdetails product={product} />
      {/* Related Products Section */}
      <Relatedproducts products={products} />
    </>
  );
}






// "use client";

// import ProductDetails from "@/components/productdetails/Productdetails";
// import Productdetails from "@/components/productdetails/Productdetails";
// import Relatedproducts from "@/components/relatedProduct/Relatedproducts";
// import Spmain from "@/components/spmain/Spmain";
// import { ChevronRight } from "lucide-react";
// import Link from "next/link";

// import React, { useEffect, useState } from "react";

//  function Singleproduct({ searchParams }: { searchParams: { id: string; name: string } }) {
//   const { id, name } = searchParams;
//   const [spmainContent, setSpmainContent] = useState<JSX.Element | null>(null);

//   useEffect(() => {
//     async function fetchSpmain() {
//       const content = await Spmain({ id: Number(id) });
//       setSpmainContent(content);
//     }
//     fetchSpmain();
//   }, [id]);

//   return (
//     <>
//       {/* Breadcrumb Navigation Section */}
//       <div className="w-full flex items-center min-h-[80px] sm:h-[100px] mt-2 sm:mt-3 bg-[#f9f1e7] px-2 exsm:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 box-border">
//         <div className="w-full flex items-center flex-wrap text-sm exsm:text-base sm:text-lg md:text-[20px] leading-[22px] exsm:leading-[24px] sm:leading-[28px] md:leading-[30px]">
//           <Link href="/">
//             <p className="text-[#7c7474] flex items-center">
//               Home
//               <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//             </p>
//           </Link>
//           <Link href="/shop">
//             <p className="text-[#7c7474] ml-2 exsm:ml-3 sm:ml-4 md:ml-6 flex items-center">
//               Shop
//               <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//             </p>
//           </Link>
//           <div className="ml-2 exsm:ml-3 sm:ml-4 md:ml-6 pl-2 exsm:pl-3 sm:pl-4 md:pl-6 border-l-2 border-black">
//             <p className="font-medium text-sm exsm:text-base sm:text-lg md:text-xl">{name}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Product Section */}
//       {spmainContent}

       
//       {/* <Productdetails id={{ name, description, image, price, quantity }} /> */}
//       {/* Related Products Section */}
//       <Relatedproducts />
//     </>
//   );
// }

// export default Singleproduct;



































// import React from 'react'
// import Productdetails from '@/components/productdetails/Productdetails'
// import Relatedproducts from '@/components/relatedProduct/Relatedproducts'
// import Spmain from '@/components/spmain/Spmain'
// import { ChevronRight } from 'lucide-react'
// import { products } from "@/constant/pro1"
// import Link from 'next/link'

// async function Singleproduct({ params }: { params: Promise<{ id: number }> }) {
  
//   const { id } = await params;

//   const data = products[id];

//   return (
//     <>
//       {/* Breadcrumb Navigation Section */}
//       <div className="w-full flex items-center min-h-[80px] sm:h-[100px] mt-2 sm:mt-3 bg-[#f9f1e7] px-2 exsm:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 box-border">
//   {/* Breadcrumb Links */}
//   <div className="w-full flex items-center flex-wrap text-sm exsm:text-base sm:text-lg md:text-[20px] leading-[22px] exsm:leading-[24px] sm:leading-[28px] md:leading-[30px]">
    
//     {/* Home Link */}
//    <Link href="/">  
//    <p className="text-[#7c7474] flex items-center">
//       Home
//       <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//     </p>
   
//    </Link>

//     {/* Shop Link */}
//    <Link href="/shop">
//    <p className="text-[#7c7474] ml-2 exsm:ml-3 sm:ml-4 md:ml-6 flex items-center">
//       Shop
//       <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//     </p>
//    </Link>

//     {/* Product Name with Left Border */}
//     <div className="ml-2 exsm:ml-3 sm:ml-4 md:ml-6 pl-2 exsm:pl-3 sm:pl-4 md:pl-6 border-l-2 border-black">
//       <p className="font-medium text-sm exsm:text-base sm:text-lg md:text-xl">{data.name}</p>
//     </div>
//   </div>
// </div>


//       {/* Main Product Section */}
//       <Spmain id={id}/>

//       {/* Product Details Section */}
//       <Productdetails id={id} />

//       {/* Related Products Section */}
//       <Relatedproducts />
//     </>
//   )
// }

// export default Singleproduct
