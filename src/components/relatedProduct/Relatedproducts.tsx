// src/components/relatedProduct/Relatedproducts.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  tags?: {
    text: string;
    variant: "destructive" | "default" | "green"; // Add "green" as a variant
  };
}

interface RelatedProductsProps {
  products: Product[];
}

// Correct implementation of formatPrice with Rs as the currency
function formatPrice(price: number, currency: string = "Rs"): string {
  return `${currency} ${price.toLocaleString()}`;
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  // Slice the products array to show only the first 4 items
  const displayedProducts = products.slice(0, 4);

  // Add a tag to the third product only
  if (displayedProducts.length >= 3) {
    displayedProducts[2] = {
      ...displayedProducts[2], // Copy existing properties
      tags: {
        text: "New", // Customize the tag text
        variant: "green", // Use "green" for the green tag
      },
    };
  }

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-[120px]">
          {displayedProducts.map((product, index) => (
            <Card key={product.id} className="group relative overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  {/* Product image with hover effect */}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {/* Badge (discount or new) displayed on top right */}
                  {index === 2 && product.tags && ( // Only show the tag for the third product
                    <Badge
                      variant={product.tags.variant === "green" ? "default" : product.tags.variant} // Use "default" for green tags
                      className={`absolute top-4 right-4 px-2 py-1 ${
                        product.tags.variant === "green" ? "bg-green-500 hover:bg-green-600" : ""
                      }`} // Add green background for "green" variant
                    >
                      {product.tags.text}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-6">
                {/* Product name */}
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                {/* Product price */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{formatPrice(product.price)}</span>
                  {/* Original price with strikethrough if available */}
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* "Show More" button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}








// // // src/components/relatedProduct/Relatedproducts.tsx
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice?: number;
//   imageUrl: string;
//   tags?: {
//     text: string;
//     variant: "destructive" | "default" | "green"; // Add "green" as a variant
//   };
// }

// interface RelatedProductsProps {
//   products: Product[];
// }

// // Correct implementation of formatPrice with Rs as the currency
// function formatPrice(price: number, currency: string = "Rs"): string {
//   return `${currency} ${price.toLocaleString()}`;
// }

// export default function RelatedProducts({ products }: RelatedProductsProps) {
//   // Slice the products array to show only the first 4 items
//   const displayedProducts = products.slice(0, 4);

//   // Add a tag to the third product
//   if (displayedProducts.length >= 3) {
//     displayedProducts[2].tags = {
//       text: "New", // Customize the tag text
//       variant: "green", // Use "green" for the green tag
//     };
//   }

//   return (
//     <section className="py-12">
//       <div className="container px-4 md:px-6">
//         <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-[120px]">
//           {displayedProducts.map((product) => (
//             <Card key={product.id} className="group relative overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="relative aspect-square">
//                   {/* Product image with hover effect */}
//                   <Image
//                     src={product.imageUrl}
//                     alt={product.name}
//                     fill
//                     className="object-cover transition-transform group-hover:scale-105"
//                   />
//                   {/* Badge (discount or new) displayed on top right */}
//                   {product.tags && (
//                     <Badge
//                       variant={product.tags.variant === "green" ? "default" : product.tags.variant} // Use "default" for green tags
//                       className={`absolute top-4 right-4 px-2 py-1 ${
//                         product.tags.variant === "green" ? "bg-green-500 hover:bg-green-600" : ""
//                       }`} // Add green background for "green" variant
//                     >
//                       {product.tags.text}
//                     </Badge>
//                   )}
//                 </div>
//               </CardContent>
//               <CardFooter className="flex flex-col items-start p-6">
//                 {/* Product name */}
//                 <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
//                 {/* Product price */}
//                 <div className="flex items-center gap-2">
//                   <span className="font-semibold">{formatPrice(product.price)}</span>
//                   {/* Original price with strikethrough if available */}
//                   {product.originalPrice && (
//                     <span className="text-muted-foreground line-through">
//                       {formatPrice(product.originalPrice)}
//                     </span>
//                   )}
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//         {/* "Show More" button */}
//         <div className="flex justify-center mt-10">
//           <Link
//             href="/shop"
//             className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
//           >
//             Show More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
// // src\components\relatedProduct\Relatedproducts.tsx
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   tag?: {
//     text: string;
//     variant: "destructive" | "default";
//   };
// }

// // Sample product data
// const products: Product[] = [
//   {
//     id: "1",
//     name: "Syltherine",
//     description: "Stylish cafe chair",
//     price: 2500000,
//     originalPrice: 3500000,
//     image: "/Syltherine.png",
//     tag: {
//       text: "-30%",
//       variant: "destructive",
//     },
//   },
//   {
//     id: "2",
//     name: "Leviosa",
//     description: "Stylish cafe chair",
//     price: 2500000,
//     image: "/Leviosa.png",
//   },
//   {
//     id: "3",
//     name: "Lolito",
//     description: "Luxury big sofa",
//     price: 7000000,
//     originalPrice: 14000000,
//     image: "/Lolito.png",
//     tag: {
//       text: "-50%",
//       variant: "destructive",
//     },
//   },
//   {
//     id: "4",
//     name: "Respira",
//     description: "Outdoor bar table and stool",
//     price: 500000,
//     image: "/Respira.png",
//     tag: {
//       text: "New",
//       variant: "default",
//     },
//   },
// ];

// // Function to format the price
// function formatPrice(price: number, currency: string = "Rp"): string {
//   return `${currency} ${price.toLocaleString()}`;
// }

// export default async function RelatedProducts() {

//   const res = await fetch("https://template6-six.vercel.app/api/products")
//     const products = await res.json()
//   return (
//     <section className="py-12">
//       <div className="container px-4 md:px-6">
//         {/* Section title */}
//         <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>

//         {/* Grid layout for product cards, responsive with 1 column on small screens, 2 columns on medium, and 4 columns on large screens */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Card key={product.id} className="group relative overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="relative aspect-square">
//                   {/* Product image with hover effect */}
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover transition-transform group-hover:scale-105"
//                   />
//                   {/* Badge (discount or new) displayed on top right */}
//                   {product.tag && (
//                     <Badge
//                       variant={product.tag.variant}
//                       className="absolute top-4 right-4 px-2 py-1"
//                     >
//                       {product.tag.text}
//                     </Badge>
//                   )}
//                 </div>
//               </CardContent>

//               {/* Product details (name, description, price) */}
//               <CardFooter className="flex flex-col items-start p-6">
//                 <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
//                 <p className="text-muted-foreground mb-4">{product.description}</p>
//                 <div className="flex items-center gap-2">
//                   <span className="font-semibold">{formatPrice(product.price)}</span>
//                   {/* Original price with strikethrough if available */}
//                   {product.originalPrice && (
//                     <span className="text-muted-foreground line-through">
//                       {formatPrice(product.originalPrice)}
//                     </span>
//                   )}
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         {/* "Show More" button */}
//         <div className="flex justify-center mt-10">
//           <Link
//             href="/shop"
//             className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
//           >
//             Show More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }





























































// // src\components\relatedProduct\Relatedproducts.tsx
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   tag?: {
//     text: string;
//     variant: "destructive" | "default";
//   };
// }

// // Sample product data
// const products: Product[] = [
//   {
//     id: "1",
//     name: "Syltherine",
//     description: "Stylish cafe chair",
//     price: 2500000,
//     originalPrice: 3500000,
//     image: "/Syltherine.png",
//     tag: {
//       text: "-30%",
//       variant: "destructive",
//     },
//   },
//   {
//     id: "2",
//     name: "Leviosa",
//     description: "Stylish cafe chair",
//     price: 2500000,
//     image: "/Leviosa.png",
//   },
//   {
//     id: "3",
//     name: "Lolito",
//     description: "Luxury big sofa",
//     price: 7000000,
//     originalPrice: 14000000,
//     image: "/Lolito.png",
//     tag: {
//       text: "-50%",
//       variant: "destructive",
//     },
//   },
//   {
//     id: "4",
//     name: "Respira",
//     description: "Outdoor bar table and stool",
//     price: 500000,
//     image: "/Respira.png",
//     tag: {
//       text: "New",
//       variant: "default",
//     },
//   },
// ];

// // Function to format the price
// function formatPrice(price: number, currency: string = "Rp"): string {
//   return `${currency} ${price.toLocaleString()}`;
// }

// export default async function RelatedProducts() {

//   const res = await fetch("https://template6-six.vercel.app/api/products")
//     const products = await res.json()
//   return (
//     <section className="py-12">
//       <div className="container px-4 md:px-6">
//         {/* Section title */}
//         <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>

//         {/* Grid layout for product cards, responsive with 1 column on small screens, 2 columns on medium, and 4 columns on large screens */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <Card key={product.id} className="group relative overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="relative aspect-square">
//                   {/* Product image with hover effect */}
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover transition-transform group-hover:scale-105"
//                   />
//                   {/* Badge (discount or new) displayed on top right */}
//                   {product.tag && (
//                     <Badge
//                       variant={product.tag.variant}
//                       className="absolute top-4 right-4 px-2 py-1"
//                     >
//                       {product.tag.text}
//                     </Badge>
//                   )}
//                 </div>
//               </CardContent>

//               {/* Product details (name, description, price) */}
//               <CardFooter className="flex flex-col items-start p-6">
//                 <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
//                 <p className="text-muted-foreground mb-4">{product.description}</p>
//                 <div className="flex items-center gap-2">
//                   <span className="font-semibold">{formatPrice(product.price)}</span>
//                   {/* Original price with strikethrough if available */}
//                   {product.originalPrice && (
//                     <span className="text-muted-foreground line-through">
//                       {formatPrice(product.originalPrice)}
//                     </span>
//                   )}
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         {/* "Show More" button */}
//         <div className="flex justify-center mt-10">
//           <Link
//             href="/shop"
//             className="inline-flex items-center justify-center px-8 py-3 border border-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition-colors text-[#b88e2f]"
//           >
//             Show More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }