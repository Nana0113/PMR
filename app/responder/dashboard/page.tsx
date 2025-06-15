"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponderNav } from "@/components/responder-nav"
import { ResponderUserNav } from "@/components/responder-user-nav"
import { Badge } from "@/components/ui/badge"
import { Battery, Calendar, Car, Clock, Lock, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Logo } from "@/components/logo"

// Sample request data
const requestsData = [
  {
    id: "req-101",
    type: "battery",
    icon: Battery,
    title: "Battery Assistance",
    customer: "Alex Johnson",
    time: "10 minutes ago",
    location: "123 Main St, San Francisco, CA",
    distance: "2.3 miles away",
    status: "new",
  },
  {
    id: "req-102",
    type: "tire",
    icon: Car,
    title: "Flat Tire",
    customer: "Jamie Smith",
    time: "15 minutes ago",
    location: "456 Market St, San Francisco, CA",
    distance: "3.5 miles away",
    status: "new",
  },
  {
    id: "req-103",
    type: "lockout",
    icon: Lock,
    title: "Lockout Assistance",
    customer: "Taylor Wilson",
    time: "25 minutes ago",
    location: "789 Oak St, San Francisco, CA",
    distance: "4.8 miles away",
    status: "new",
  },
]

// Sample active jobs
const activeJobsData = [
  {
    id: "job-201",
    type: "battery",
    icon: Battery,
    title: "Battery Assistance",
    customer: "Morgan Lee",
    time: "Started 35 minutes ago",
    location: "101 Pine St, San Francisco, CA",
    status: "en_route",
    eta: "10 minutes",
  },
]

// Sample completed jobs
const completedJobsData = [
  {
    id: "job-301",
    type: "towing",
    icon: Car,
    title: "Towing Service",
    customer: "Casey Brown",
    date: "Today",
    time: "9:30 AM",
    location: "222 Valencia St, San Francisco, CA",
    status: "completed",
  },
  {
    id: "job-302",
    type: "battery",
    icon: Battery,
    title: "Battery Assistance",
    customer: "Jordan Rivera",
    date: "Yesterday",
    time: "3:15 PM",
    location: "333 Mission St, San Francisco, CA",
    status: "completed",
  },
]

export default function ResponderDashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [requests, setRequests] = useState(requestsData)
  const [activeJobs, setActiveJobs] = useState(activeJobsData)
  const [completedJobs, setCompletedJobs] = useState(completedJobsData)

  const handleAcceptRequest = (requestId: string) => {
    // Find the request
    const request = requests.find((req) => req.id === requestId)
    if (!request) return

    // Remove from requests
    setRequests((prev) => prev.filter((req) => req.id !== requestId))

    // Add to active jobs
    const newJob = {
      ...request,
      status: "accepted" as const,
      eta: "25 minutes",
    }

    setActiveJobs((prev) => [newJob, ...prev])

    toast({
      title: "Request accepted",
      description: `You've accepted the request from ${request.customer}.`,
    })
  }

  const handleRejectRequest = (requestId: string) => {
    // Remove from requests
    setRequests((prev) => prev.filter((req) => req.id !== requestId))

    toast({
      title: "Request rejected",
      description: "The request has been rejected and removed from your queue.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Logo />
          <ResponderNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ResponderUserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Provider Dashboard</h1>
            <p className="text-muted-foreground">Manage assistance requests and track your service jobs</p>
          </div>

          <Tabs defaultValue="requests" className="space-y-4">
            <TabsList>
              <TabsTrigger value="requests">New Requests</TabsTrigger>
              <TabsTrigger value="active">Active Jobs</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="requests" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Incoming Assistance Requests</CardTitle>
                  <CardDescription>Review and accept new requests from EV drivers in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  {requests.length === 0 ? (
                    <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                      <h3 className="mt-2 text-lg font-semibold">No new requests</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        There are currently no new assistance requests in your area.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {requests.map((request) => (
                        <div key={request.id} className="rounded-lg border p-4">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-start gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <request.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{request.title}</h3>
                                  <Badge>New</Badge>
                                </div>
                                <p className="mt-1 text-sm">Customer: {request.customer}</p>
                                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {request.time}
                                </div>
                                <div className="mt-1 flex items-start text-sm">
                                  <MapPin className="mr-1 h-3 w-3 mt-0.5" />
                                  <span className="flex-1">{request.location}</span>
                                </div>
                                <div className="mt-1 text-sm text-muted-foreground">{request.distance}</div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button
                                size="sm"
                                className="w-full sm:w-auto"
                                onClick={() => handleAcceptRequest(request.id)}
                              >
                                Accept
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full sm:w-auto"
                                onClick={() => handleRejectRequest(request.id)}
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Map View</CardTitle>
                  <CardDescription>View all requests on the map</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Map view of requests</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Jobs</CardTitle>
                  <CardDescription>Manage your current assistance jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  {activeJobs.length === 0 ? (
                    <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                      <h3 className="mt-2 text-lg font-semibold">No active jobs</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You don't have any active jobs at the moment.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {activeJobs.map((job) => (
                        <div key={job.id} className="rounded-lg border p-4">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-start gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                <job.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{job.title}</h3>
                                  <Badge variant="secondary">
                                    {job.status === "accepted"
                                      ? "Accepted"
                                      : job.status === "en_route"
                                        ? "En Route"
                                        : job.status === "arrived"
                                          ? "Arrived"
                                          : "In Progress"}
                                  </Badge>
                                </div>
                                <p className="mt-1 text-sm">Customer: {job.customer}</p>
                                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {job.time}
                                </div>
                                <div className="mt-1 flex items-start text-sm">
                                  <MapPin className="mr-1 h-3 w-3 mt-0.5" />
                                  <span className="flex-1">{job.location}</span>
                                </div>
                                <div className="mt-1 text-sm text-muted-foreground">ETA: {job.eta}</div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button
                                size="sm"
                                className="w-full sm:w-auto"
                                onClick={() => router.push(`/responder/job/${job.id}`)}
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Jobs</CardTitle>
                  <CardDescription>Review your service history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {completedJobs.map((job) => (
                      <div key={job.id} className="rounded-lg border p-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <job.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{job.title}</h3>
                                <Badge variant="outline">Completed</Badge>
                              </div>
                              <p className="mt-1 text-sm">Customer: {job.customer}</p>
                              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-3 w-3" />
                                {job.date}
                                <Clock className="ml-3 mr-1 h-3 w-3" />
                                {job.time}
                              </div>
                              <div className="mt-1 flex items-start text-sm">
                                <MapPin className="mr-1 h-3 w-3 mt-0.5" />
                                <span className="flex-1">{job.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              View Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All History
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
