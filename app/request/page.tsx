"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Battery, CircleDashed, Droplet, FileImage, Lock, MapPin, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Logo } from "@/components/logo"

export default function RequestPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [location, setLocation] = useState("")
  const [issueType, setIssueType] = useState("")
  const [isLocating, setIsLocating] = useState(false)

  const handleDetectLocation = () => {
    setIsLocating(true)

    // Simulate geolocation
    setTimeout(() => {
      setLocation("123 Main St, San Francisco, CA 94105")
      setIsLocating(false)

      toast({
        title: "Location detected",
        description: "Your current location has been detected.",
      })
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!location) {
      toast({
        title: "Location required",
        description: "Please enter your location or use detect location.",
        variant: "destructive",
      })
      return
    }

    if (!issueType) {
      toast({
        title: "Issue type required",
        description: "Please select the type of assistance you need.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate request submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Request submitted",
        description: "Your assistance request has been submitted successfully.",
      })
      router.push("/track")
    }, 1500)
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
        <div className="container max-w-screen-md px-4 py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Request Assistance</h1>
            <p className="text-muted-foreground">
              Tell us about your issue and we'll connect you with a service provider
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Location Information</CardTitle>
                <CardDescription>Where are you currently located?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Your current location</Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      placeholder="Enter your address or location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="button" variant="outline" onClick={handleDetectLocation} disabled={isLocating}>
                      {isLocating ? "Detecting..." : "Detect Location"}
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Map will appear here</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardHeader className="border-t pt-6">
                <CardTitle>Assistance Details</CardTitle>
                <CardDescription>What type of assistance do you need?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={issueType}
                  onValueChange={setIssueType}
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  <div>
                    <RadioGroupItem value="battery" id="battery" className="peer sr-only" />
                    <Label
                      htmlFor="battery"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-gradient-to-br [&:has([data-state=checked])]:from-white [&:has([data-state=checked])]:to-emerald-50"
                    >
                      <div className="rounded-full bg-gradient-to-br from-primary/80 to-emerald-600/80 p-2 mb-2">
                        <Battery className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-center">Electric Car Charging</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="lockout" id="lockout" className="peer sr-only" />
                    <Label
                      htmlFor="lockout"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-gradient-to-br [&:has([data-state=checked])]:from-white [&:has([data-state=checked])]:to-emerald-50"
                    >
                      <div className="rounded-full bg-gradient-to-br from-primary/80 to-emerald-600/80 p-2 mb-2">
                        <Lock className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-center">Locksmith</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="gas" id="gas" className="peer sr-only" />
                    <Label
                      htmlFor="gas"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-gradient-to-br [&:has([data-state=checked])]:from-white [&:has([data-state=checked])]:to-emerald-50"
                    >
                      <div className="rounded-full bg-gradient-to-br from-primary/80 to-emerald-600/80 p-2 mb-2">
                        <Droplet className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-center">Gas or Oil</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="tire" id="tire" className="peer sr-only" />
                    <Label
                      htmlFor="tire"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-gradient-to-br [&:has([data-state=checked])]:from-white [&:has([data-state=checked])]:to-emerald-50"
                    >
                      <div className="rounded-full bg-gradient-to-br from-primary/80 to-emerald-600/80 p-2 mb-2">
                        <CircleDashed className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-center">Tire Change</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="jumpstart" id="jumpstart" className="peer sr-only" />
                    <Label
                      htmlFor="jumpstart"
                      className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-gradient-to-br [&:has([data-state=checked])]:from-white [&:has([data-state=checked])]:to-emerald-50"
                    >
                      <div className="rounded-full bg-gradient-to-br from-primary/80 to-emerald-600/80 p-2 mb-2">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-center">Jumpstart</span>
                    </Label>
                  </div>
                </RadioGroup>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional details</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide any additional information about your situation"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Upload an image (optional)</Label>
                  <div className="flex items-center gap-4">
                    <Button type="button" variant="outline" className="w-full">
                      <FileImage className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-2">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting Request..." : "Submit Request"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By submitting this request, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardFooter>
            </Card>
          </form>
        </div>
      </main>
    </div>
  )
}
