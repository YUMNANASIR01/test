// src\app\shop\page.tsx
import Image from "next/image"
import { Heart, Share2, BarChart2, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { products } from "@/constant/pro1"

import Shopbottombar from "@/components/shopBottomBar/Shopbottombar"
import Link from "next/link"

export default async function ProductGrid() {
  
  const res = await fetch("https://template6-six.vercel.app/api/products")
  const products = await res.json()
  
  return (
    <>
     
     {/* banner */}

      <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16">
              <div className="container mx-auto px-4 text-center">
                <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
                <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                  <span>
                    <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
                  </span>
                  <span>Shop</span>
                </div>
              </div>
            </section>


{/* main product block */}
      <div className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: any, index: number) => (
            <Card key={product.id} className="group relative overflow-hidden shadow-md">
              <div className="relative aspect-square">
                <Image
                  src = {product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />

                {/* discount if true color red */}
                {product.discount && (
                  <Badge className="absolute left-4 top-4 bg-red-500">-{product.discount}%</Badge>
                )}

                {/* new product then color green */}
                {product.isNew && (
                  <Badge className="absolute left-4 top-4 bg-emerald-500">New</Badge>
                )}

                {/* share, barChart and heart icons */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="icon" variant="secondary">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <BarChart2 className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* card bottom content */}
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-4">
                 <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">Rs.{(product.price)}</span>
                  {/* {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      Rs. {(product.originalPrice)}
                    </span>
                  )} */}
                </div> 
                <Link href={`/shop/${index}`}>
                  <Button className="w-full md:w-auto">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to cart
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          <Button variant="outline" className="w-12">1</Button>
          <Button variant="outline" className="w-12">2</Button>
          <Button variant="outline" className="w-12">3</Button>
          <Button variant="outline" className="w-20">Next</Button>
        </div>
      </div>

      <Shopbottombar />
    </>
  )
}