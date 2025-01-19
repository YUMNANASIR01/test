'use client'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar"

export default function CheckoutForm() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-8 lg:px-12">

      {/* Hero Section */}
      <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-16 mb-12">
        <div className="container text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">CheckOut</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Billing Details Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name (Optional)</Label>
              <Input id="company" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country / Region</Label>
              <Select defaultValue="sri-lanka">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Street address</Label>
              <Input id="street" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Select defaultValue="western">
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="western">Western Province</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">ZIP code</Label>
              <Input id="zip" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Additional information</Label>
              <Textarea id="additional" placeholder="Notes about your order" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-lg md:text-xl font-medium">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Asgaard sofa × 1</span>
                  <span>Rs. 250,000.00</span>
                </div>

                <div className="flex justify-between border-t pt-4">
                  <span>Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>

                <div className="flex justify-between border-t pt-4">
                  <span>Total</span>
                  <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
                </div>

                <RadioGroup defaultValue="bank-transfer" className="mt-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                      <div className="space-y-2">
                        <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
                        <p className="text-sm text-gray-600">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Cash On Delivery</Label>
                    </div>
                  </div>
                </RadioGroup>

                <div className="text-sm text-gray-600 mt-4">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </div>

                <Button className="w-full mt-4" size="lg">
                  Place order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Shopbottombar />
    </div>
  )
}