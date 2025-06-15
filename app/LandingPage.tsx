import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ArrowRight, Battery, ChevronRight, CircleDashed, Droplet, Lock, Mail, Phone, Zap } from "lucide-react"
import Link from "next/link"

import { Logo } from "../components/logo"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full border-b bg-background">
        <div className="container flex h-20 items-center justify-center px-4 md:px-6">
          <div className="flex items-center justify-center w-full">
            <Logo className="scale-125" height={40} />
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 absolute right-4 md:right-6">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button variant="ghost">About</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-emerald-600 via-primary to-emerald-700 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Roadside Assistance for Electric Vehicles
                </h1>
                <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Get help when you need it, wherever you are. Our network of service providers specializes in
                  electric vehicle assistance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup" passHref legacyBehavior>
                  <Button
                    size="lg"
                    className="w-full min-[400px]:w-auto bg-gradient-to-r from-white/90 to-white text-emerald-700 hover:from-white hover:to-white/90"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Service Provider Login
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Mobile electric vehicle charging service in action"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
                src="/ev-charging.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive roadside assistance for electric vehicles and more
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3 lg:grid-cols-5">
            <Card>
              <CardHeader>
                <Battery className="h-10 w-10 mb-2" />
                <CardTitle>Electric Car Charging</CardTitle>
                <CardDescription>Emergency charging for stranded EVs</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 mb-2" />
                <CardTitle>Locksmith</CardTitle>
                <CardDescription>Help when locked out of your vehicle</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Droplet className="h-10 w-10 mb-2" />
                <CardTitle>Gas or Oil</CardTitle>
                <CardDescription>Emergency fuel and oil delivery</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CircleDashed className="h-10 w-10 mb-2" />
                <CardTitle>Tire Change</CardTitle>
                <CardDescription>Flat tire replacement service</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2" />
                <CardTitle>Jumpstart</CardTitle>
                <CardDescription>Battery jumpstart for all vehicles</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
            <p className="text-muted-foreground md:text-xl">
              Need immediate assistance? Reach out to our 24/7 support team.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-3 w-fit">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl">Call Us</CardTitle>
                <CardDescription>Available 24/7 for emergency assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:8334154040" className="text-2xl font-bold text-primary hover:underline">
                  833-415-4040
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-3 w-fit">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl">Email Us</CardTitle>
                <CardDescription>For inquiries and non-emergency support</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@powermotionrescue.com"
                  className="text-xl font-bold text-primary hover:underline"
                >
                  info@powermotionrescue.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-12 md:py-16 bg-background border-t">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm flex flex-col items-center">
              <div className="flex mb-2 text-yellow-400">★★★★★</div>
              <p className="text-center text-lg font-medium mb-4">“The mobile charging service saved my day! Fast, friendly, and professional.”</p>
              <span className="text-sm font-semibold text-gray-700">— Jessica T.</span>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm flex flex-col items-center">
              <div className="flex mb-2 text-yellow-400">★★★★★</div>
              <p className="text-center text-lg font-medium mb-4">“I was stranded with a dead battery. They arrived quickly and got me back on the road!”</p>
              <span className="text-sm font-semibold text-gray-700">— Michael R.</span>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm flex flex-col items-center">
              <div className="flex mb-2 text-yellow-400">★★★★★</div>
              <p className="text-center text-lg font-medium mb-4">“Excellent service and very knowledgeable staff. Highly recommend for EV owners.”</p>
              <span className="text-sm font-semibold text-gray-700">— Priya S.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 