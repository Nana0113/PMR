import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">Services & Pricing</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Mobile EV Charging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Get a quick charge wherever you are.</p>
              <p className="font-bold">$49.99 + $0.50/mile</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Locksmith Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Locked out? We'll get you back in your vehicle fast.</p>
              <p className="font-bold">$39.99 flat rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flat Tire Change</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Tire change or inflation on the spot.</p>
              <p className="font-bold">$29.99 flat rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jumpstart Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Battery dead? We'll jumpstart your vehicle.</p>
              <p className="font-bold">$24.99 flat rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fuel or Oil Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Emergency delivery of gas or oil.</p>
              <p className="font-bold">$34.99 + fuel cost</p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-center text-gray-600 text-sm">All services are available 24/7. Prices may vary by location. Contact us for a custom quote or membership options.</p>
      </div>
    </div>
  )
} 