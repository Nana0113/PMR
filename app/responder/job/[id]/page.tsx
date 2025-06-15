"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponderNav } from "@/components/responder-nav"
import { ResponderUserNav } from "@/components/responder-user-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Battery, MapPin, MessageSquare, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [status, setStatus] = useState("accepted")
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    {
      sender: "customer",
      text: "Hi there! I'm having an issue with my battery. My car won't start and I'm stranded.",
      time: "10:15 AM",
    },
    {
      sender: "provider",
      text: "I'm on my way to help with your battery issue. Do you have any specific details about your vehicle that would be helpful?",
      time: "10:32 AM",
    },
  ])
  const [messageText, setMessageText] = useState("")

  const updateStatus = (newStatus: string) => {
    setStatus(newStatus)

    let message = ""
    switch (newStatus) {
      case "en_route":
        message = "You've marked yourself as en route to the customer."
        break
      case "arrived":
        message = "You've marked yourself as arrived at the customer's location."
        break
      case "in_progress":
        message = "You've marked the job as in progress."
        break
      case "completed":
        message = "You've marked the job as completed."
        break
    }

    toast({
      title: "Status updated",
      description: message,
    })

    if (newStatus === "completed") {
      setTimeout(() => {
        router.push("/responder/dashboard")
      }, 2000)
    }
  }

  const sendMessage = () => {
    if (!messageText.trim()) return

    const newMessage = {
      sender: "provider",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setMessageText("")

    // Simulate customer response
    if (messages.length < 4) {
      setTimeout(() => {
        const responseMessage = {
          sender: "customer",
          text: "I have a Tesla Model 3. The display shows the battery is at 0% and I'm about 2 miles from the nearest charging station.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }

        setMessages((prev) => [...prev, responseMessage])
      }, 3000)
    }
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
        <div className="container grid items-start gap-6 px-4 py-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Job Details</h1>
              <p className="text-muted-foreground">Manage your current assistance job</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Details about the customer and their request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Customer" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Alex Johnson</h3>
                    <div className="flex items-center gap-4">
                      <Button size="sm" variant="ghost" className="h-8 gap-1 px-2 text-xs">
                        <Phone className="h-3 w-3" />
                        Call
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 gap-1 px-2 text-xs">
                        <MessageSquare className="h-3 w-3" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Battery className="h-4 w-4 text-primary" />
                    <span className="font-medium">Battery Assistance</span>
                    <Badge className="ml-auto">
                      {status === "accepted"
                        ? "Accepted"
                        : status === "en_route"
                          ? "En Route"
                          : status === "arrived"
                            ? "Arrived"
                            : status === "in_progress"
                              ? "In Progress"
                              : "Completed"}
                    </Badge>
                  </div>
                  <p className="text-sm">
                    Customer reports their Tesla Model 3 has run out of battery and needs emergency charging.
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Requested</span>
                      <span>Today at 10:15 AM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Vehicle</span>
                      <span>Tesla Model 3 (2023)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Battery Level</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-sm">123 Main St, San Francisco, CA 94105</p>

                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Map view</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Status</CardTitle>
                <CardDescription>Update the status of this assistance job</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={status} onValueChange={updateStatus} className="grid gap-4">
                  <div>
                    <RadioGroupItem
                      value="accepted"
                      id="accepted"
                      className="peer sr-only"
                      disabled={status !== "accepted"}
                    />
                    <Label
                      htmlFor="accepted"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-xs font-medium text-primary">1</span>
                        </div>
                        <span>Accepted</span>
                      </div>
                      {status === "accepted" && (
                        <Button size="sm" onClick={() => updateStatus("en_route")}>
                          Mark En Route
                        </Button>
                      )}
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="en_route"
                      id="en_route"
                      className="peer sr-only"
                      disabled={status !== "en_route" && status !== "accepted"}
                    />
                    <Label
                      htmlFor="en_route"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-xs font-medium text-primary">2</span>
                        </div>
                        <span>En Route</span>
                      </div>
                      {status === "en_route" && (
                        <Button size="sm" onClick={() => updateStatus("arrived")}>
                          Mark Arrived
                        </Button>
                      )}
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="arrived"
                      id="arrived"
                      className="peer sr-only"
                      disabled={status !== "arrived" && status !== "en_route"}
                    />
                    <Label
                      htmlFor="arrived"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-xs font-medium text-primary">3</span>
                        </div>
                        <span>Arrived</span>
                      </div>
                      {status === "arrived" && (
                        <Button size="sm" onClick={() => updateStatus("in_progress")}>
                          Start Service
                        </Button>
                      )}
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="in_progress"
                      id="in_progress"
                      className="peer sr-only"
                      disabled={status !== "in_progress" && status !== "arrived"}
                    />
                    <Label
                      htmlFor="in_progress"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-xs font-medium text-primary">4</span>
                        </div>
                        <span>In Progress</span>
                      </div>
                      {status === "in_progress" && (
                        <Button size="sm" onClick={() => updateStatus("completed")}>
                          Complete Job
                        </Button>
                      )}
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="completed"
                      id="completed"
                      className="peer sr-only"
                      disabled={status !== "completed" && status !== "in_progress"}
                    />
                    <Label
                      htmlFor="completed"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-xs font-medium text-primary">5</span>
                        </div>
                        <span>Completed</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel Job</Button>
                <Button variant="destructive" disabled={status === "completed"}>
                  Request Assistance
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="h-[calc(100vh-10rem)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Communication</CardTitle>
                    <CardDescription>Chat with the customer</CardDescription>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Customer" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="flex h-[calc(100%-13rem)] flex-col gap-4 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === "provider" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "provider" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p
                        className={`mt-1 text-right text-xs ${
                          message.sender === "provider" ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <Separator />
              <CardFooter className="p-4">
                <div className="flex w-full items-center gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    className="min-h-[60px] flex-1"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <Button size="icon" onClick={sendMessage} disabled={!messageText.trim()}>
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
