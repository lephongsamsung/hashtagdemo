"use client"

import { AppSidebar } from "./components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function SidebarDemo() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Hashtag Space Management</h1>
        </header>
        <div className="flex-1 p-6">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h2 className="text-lg font-medium">Chọn vai trò từ sidebar để xem các màn hình tương ứng</h2>
            <p className="mt-2 text-sm text-muted-foreground">Hệ thống quản lý F&B + Coworking Space tích hợp</p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
