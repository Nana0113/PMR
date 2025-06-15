import Link from "next/link"
import { Mail, Phone } from "lucide-react"

import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="w-full py-6 border-t bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Power Motion Rescue. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
