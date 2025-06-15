"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { Battery, Calendar, CircleDashed, Clock, Droplet, Lock, Mail, MapPin, Phone, Shield, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"

export default function DashboardPage() {
  const router = useRouter()
  const [activeRequest, setActiveRequest] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-gradient-to-r from-white via-gray-50 to-white">
        <div className="container flex h-16 items-center px-4">
          <Logo />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden items-center gap-4 md:flex">
              <a
                href="tel:8334154040"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                833-415-4040
              </a>
            </div>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid items-start gap-6 px-4 py-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center md:flex-row md:space-x-4 md:space-y-0 md:text-left bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
              <p className="text-muted-foreground">
                {activeRequest ? "You have an active assistance request" : "Need help with your electric vehicle?"}
              </p>
            </div>
            <div className="flex flex-1 justify-end">
              {activeRequest ? (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600"
                  onClick={() => router.push("/track")}
                >
                  View Active Request
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary"
                  onClick={() => router.push("/request")}
                >
                  Request Assistance
                </Button>
              )}
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">Service History</TabsTrigger>
              <TabsTrigger value="vehicle">Vehicle Info</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Vehicle Status</CardTitle>
                    <Battery className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Tesla Model 3</div>
                    <p className="text-xs text-muted-foreground">Battery: 42% · Range: ~120 miles</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Nearby Charging</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 Stations</div>
                    <p className="text-xs text-muted-foreground">Closest: 2.4 miles away</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Membership</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Basic Plan</div>
                    <p className="text-xs text-muted-foreground">3 service calls remaining this year</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Available Services</CardTitle>
                  <CardDescription>Roadside assistance services we provide</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 hover:shadow-sm transition-all">
                      <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-2">
                        <Battery className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-center text-sm font-medium">Electric Car Charging</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 hover:shadow-sm transition-all">
                      <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-2">
                        <Lock className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-center text-sm font-medium">Locksmith</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 hover:shadow-sm transition-all">
                      <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-2">
                        <Droplet className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-center text-sm font-medium">Gas or Oil</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 hover:shadow-sm transition-all">
                      <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-2">
                        <CircleDashed className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-center text-sm font-medium">Tire Change</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-3 hover:shadow-sm transition-all">
                      <div className="rounded-full bg-gradient-to-br from-primary to-emerald-600 p-2">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-center text-sm font-medium">Jumpstart</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full flex-col space-y-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href="tel:8334154040" className="hover:text-foreground">
                        833-415-4040
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:info@powermotionrescue.com" className="hover:text-foreground">
                        info@powermotionrescue.com
                      </a>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-full md:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent assistance requests and service history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Battery className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Battery Assistance</p>
                          <p className="text-sm text-muted-foreground">May 15, 2025 · Completed</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Towing Service</p>
                          <p className="text-sm text-muted-foreground">April 3, 2025 · Completed</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={() => router.push("/history")}>
                      View All History
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tips & Resources</CardTitle>
                    <CardDescription>Helpful information for EV owners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-3">
                        <h3 className="font-medium">Maximize Battery Life</h3>
                        <p className="text-sm text-muted-foreground">Tips for extending your EV's battery longevity</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <h3 className="font-medium">Winter Driving Guide</h3>
                        <p className="text-sm text-muted-foreground">How to prepare your EV for cold weather</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <h3 className="font-medium">Charging Network Map</h3>
                        <p className="text-sm text-muted-foreground">Find compatible charging stations nationwide</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Service History</CardTitle>
                  <CardDescription>View your past assistance requests and service details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md border">
                    <div className="flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Battery className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Battery Assistance</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            May 15, 2025
                            <Clock className="ml-3 mr-1 h-3 w-3" />
                            2:45 PM
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center sm:mt-0">
                        <span className="mr-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Completed
                        </span>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <div className="flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Towing Service</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            April 3, 2025
                            <Clock className="ml-3 mr-1 h-3 w-3" />
                            11:20 AM
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center sm:mt-0">
                        <span className="mr-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Completed
                        </span>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-md border">
                    <div className="flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Flat Tire Assistance</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            February 12, 2025
                            <Clock className="ml-3 mr-1 h-3 w-3" />
                            4:15 PM
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center sm:mt-0">
                        <span className="mr-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Completed
                        </span>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vehicle" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Information</CardTitle>
                  <CardDescription>Details about your registered electric vehicle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Make</p>
                      <p>Tesla</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Model</p>
                      <p>Model 3</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Year</p>
                      <p>2023</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Color</p>
                      <p>Midnight Silver</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">VIN</p>
                      <p>5YJ3E1EA8JF000123</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">License Plate</p>
                      <p>EV-POWER</p>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 font-medium">Battery Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Battery Type</p>
                        <p>Lithium-ion</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Capacity</p>
                        <p>75 kWh</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Range (Full Charge)</p>
                        <p>315 miles</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Charging Port Type</p>
                        <p>Tesla Connector / J1772 (with adapter)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Edit Vehicle Information
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
