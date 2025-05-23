"use client"

import { useRole } from "@/contexts/role-context"
import { RoleSwitcherStandalone } from "./role-switcher-standalone"
import { ModeToggle } from "./mode-toggle"
import Logo from "./logo"
import { Bell, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function AppHeader() {
  const { role } = useRole()

  // Get role title
  const getRoleTitle = () => {
    switch (role) {
      case "customer":
        return "Khách hàng"
      case "fb-staff":
        return "Nhân viên F&B"
      case "coworking-staff":
        return "Nhân viên Coworking"
      case "admin":
        return "Quản lý chi nhánh"
      case "analytics":
        return "Phân tích dữ liệu"
      default:
        return "Khách hàng"
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm..."
                className="w-[200px] rounded-full bg-background pl-8 md:w-[260px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RoleSwitcherStandalone />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-coffee-100 text-coffee-800">NT</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex h-10 items-center border-t bg-coffee-50 px-4 text-sm font-medium text-coffee-800 dark:bg-coffee-900/20 dark:text-coffee-200">
        <div className="flex items-center gap-2">
          <span>Vai trò hiện tại:</span>
          <span className="rounded-full bg-coffee-100 px-2 py-0.5 text-xs font-semibold text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100">
            {getRoleTitle()}
          </span>
        </div>
      </div>
    </header>
  )
}
