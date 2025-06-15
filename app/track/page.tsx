"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Battery, MapPin, MessageSquare, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Logo } from "@/components/logo"

// Simulated status updates
const statusUpdates = [
  { status: "searching", message: "Searching for nearby providers...", time: 0 },
  { status: "provider_found", message: "Provider found! Michael is on the way.", time: 5 },
  { status: "en_route", message: "Michael is en route to your location.", time: 10 },
  { status: "arriving", message: "Michael is 5 minutes away.", time: 20 },
  { status: "arrived", message: "Michael has arrived at your location.", time: 25 },
]

export default function TrackPage() {
  const { toast } = useToast()
  const [currentStatus, setCurrentStatus] = useState(0)
  const [eta, setEta] = useState(25)
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    {
      sender: "provider",
      text: "Hi there! I'm on my way to help with your battery issue. Do you have any specific details about your vehicle that would be helpful?",
      time: "10:32 AM",
    },
  ])
  const [messageText, setMessageText] = useState("")

  useEffect(() => {
    // Simulate status updates
    const interval = setInterval(() => {
      if (currentStatus < statusUpdates.length - 1) {
        setCurrentStatus((prev) => {
          const newStatus = prev + 1

          toast({
            title: "Status Update",
            description: statusUpdates[newStatus].message,
          })

          return newStatus
        })

        // Update ETA
        if (eta > 5) {
          setEta((prev) => prev - 5)
        }
      } else {
        clearInterval(interval)
      }
    }, 10000) // Update every 10 seconds for demo purposes

    return () => clearInterval(interval)
  }, [currentStatus, eta, toast])

  const sendMessage = () => {
    if (!messageText.trim()) return

    const newMessage = {
      sender: "customer",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setMessageText("")

    // Simulate provider response
    setTimeout(() => {
      const responseMessage = {
        sender: "provider",
        text: "Thanks for the information. I'll be there shortly with the necessary equipment.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, responseMessage])
    }, 3000)
  }

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
        <div className="container grid items-start gap-6 px-4 py-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Track Assistance</h1>
              <p className="text-muted-foreground">{statusUpdates[currentStatus].message}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Request Details</CardTitle>
                <CardDescription>Information about your current assistance request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Battery className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Out of Battery</h3>
                    <p className="text-sm text-muted-foreground">Requested at 10:15 AM today</p>
                  </div>
                  <Badge className="ml-auto">
                    {currentStatus === 0
                      ? "Searching"
                      : currentStatus === 1
                        ? "Provider Found"
                        : currentStatus === 2
                          ? "En Route"
                          : currentStatus === 3
                            ? "Arriving Soon"
                            : "Arrived"}
                  </Badge>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Your Location</span>
                  </div>
                  <p className="text-sm">123 Main St, San Francisco, CA 94105</p>

                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Map view</span>
                    </div>
                  </div>
                </div>

                {currentStatus > 0 && (
                  <div className="rounded-lg border p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Provider" />
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Michael Parker</h3>
                          <p className="text-sm text-muted-foreground">EV Specialist</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Vehicle</span>
                        <span>Service Van #42</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">ETA</span>
                        <span>{eta} minutes</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <span>
                          {currentStatus === 1
                            ? "Preparing to depart"
                            : currentStatus === 2
                              ? "En route to your location"
                              : currentStatus === 3
                                ? "Arriving soon"
                                : "Arrived"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel Request</Button>
                <Button>Get Help</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="h-[calc(100vh-10rem)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Chat with Provider</CardTitle>
                    <CardDescription>Communicate with your service provider</CardDescription>
                  </div>
                  {currentStatus > 0 && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Provider" />
                      <AvatarFallback>MP</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex h-[calc(100%-13rem)] flex-col gap-4 overflow-y-auto p-4">
                {currentStatus === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <MessageSquare className="mb-2 h-12 w-12 text-muted-foreground" />
                    <h3 className="text-lg font-medium">Waiting for a provider</h3>
                    <p className="text-sm text-muted-foreground">
                      Chat will be available once a service provider accepts your request
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "customer" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p
                          className={`mt-1 text-right text-xs ${
                            message.sender === "customer" ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
              <Separator />
              <CardFooter className="p-4">
                <div className="flex w-full items-center gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    className="min-h-[60px] flex-1"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    disabled={currentStatus === 0}
                  />
                  <Button size="icon" onClick={sendMessage} disabled={currentStatus === 0 || !messageText.trim()}>
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
