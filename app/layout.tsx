import type { ReactNode } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { RoleProvider } from "@/contexts/role-context"
import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="food-pattern-bg">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <RoleProvider>
            <div className="flex min-h-screen flex-col">
              <AppHeader />
              <div className="flex flex-1">
                <SidebarProvider>
                  <AppSidebar />
                  <main className="flex-1 p-4 md:p-6">{children}</main>
                </SidebarProvider>
              </div>
            </div>
          </RoleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
