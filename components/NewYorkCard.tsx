import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export function NewYorkCard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>New York Style</CardTitle>
          <CardDescription>Modern and Clean Design</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is a New York style card component with a clean and modern design.
            It features a subtle shadow and rounded corners.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Learn More</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Responsive Design</CardTitle>
          <CardDescription>Works on all devices</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The card layout is fully responsive and will adapt to different screen sizes.
            Try resizing your browser window to see it in action.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customizable</CardTitle>
          <CardDescription>Easy to modify</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            All components are built with customization in mind.
            You can easily modify colors, spacing, and other properties.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Customize</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 