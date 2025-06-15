import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" className="w-full rounded border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" className="w-full rounded border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" name="password" className="w-full rounded border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Make</label>
              <input type="text" name="make" className="w-full rounded border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Model</label>
              <input type="text" name="model" className="w-full rounded border px-3 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Year</label>
              <input type="number" name="year" className="w-full rounded border px-3 py-2" required min="1900" max="2100" />
            </div>
            <Button type="submit" className="w-full mt-4">Create Account</Button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 