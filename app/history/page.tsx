"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Badge } from "@/components/ui/badge"
import { Battery, Calendar, Car, Clock, Lock, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Sample history data
const historyData = [
  {
    id: "req-001",
    type: "battery",
    icon: Battery,
    title: "Battery Assistance",
    date: "May 15, 2025",
    time: "2:45 PM",
    location: "123 Main St, San Francisco, CA",
    status: "completed",
    provider: "Michael Parker",
    details: "Emergency charging provided. 30% charge added to continue journey.",
  },
  {
    id: "req-002",
    type: "towing",
    icon: Car,
    title: "Towing Service",
    date: "April 3, 2025",
    time: "11:20 AM",
    location: "456 Market St, San Francisco, CA",
    status: "completed",
    provider: "Sarah Johnson",
    details: "Vehicle towed to nearest service center due to motor malfunction.",
  },
  {
    id: "req-003",
    type: "tire",
    icon: Car,
    title: "Flat Tire Assistance",
    date: "February 12, 2025",
    time: "4:15 PM",
    location: "789 Oak St, San Francisco, CA",
    status: "completed",
    provider: "David Wilson",
    details: "Front right tire replaced with spare. Recommended professional replacement.",
  },
  {
    id: "req-004",
    type: "lockout",
    icon: Lock,
    title: "Lockout Assistance",
    date: "January 5, 2025",
    time: "9:30 AM",
    location: "101 Pine St, San Francisco, CA",
    status: "completed",
    provider: "Lisa Chen",
    details: "Vehicle unlocked successfully. No damage to vehicle.",
  },
  {
    id: "req-005",
    type: "battery",
    icon: Battery,
    title: "Battery Assistance",
    date: "December 10, 2024",
    time: "7:15 PM",
    location: "222 Valencia St, San Francisco, CA",
    status: "completed",
    provider: "Robert Taylor",
    details: "Emergency charging provided in cold weather conditions.",
  },
]

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Logo />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Service History</h1>
            <p className="text-muted-foreground">View your past assistance requests and service details</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Past Requests</CardTitle>
              <CardDescription>A record of all your previous roadside assistance requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {historyData.map((item) => (
                  <div key={item.id} className="rounded-lg border p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{item.title}</h3>
                            <Badge variant={item.status === "completed" ? "outline" : "secondary"}>
                              {item.status === "completed" ? "Completed" : item.status}
                            </Badge>
                          </div>
                          <div className="mt-1 flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            {item.date}
                            <Clock className="ml-3 mr-1 h-3 w-3" />
                            {item.time}
                          </div>
                          <div className="mt-1 flex items-start text-sm">
                            <MapPin className="mr-1 h-3 w-3 mt-0.5" />
                            <span className="flex-1">{item.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          View Details
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 rounded-md bg-muted p-3">
                      <div className="mb-2 text-sm font-medium">Service Details</div>
                      <div className="text-sm">
                        <p>Provider: {item.provider}</p>
                        <p className="mt-1">{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
