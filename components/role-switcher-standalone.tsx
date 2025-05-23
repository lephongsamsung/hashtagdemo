"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Coffee, PieChart, Store, User, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useRole } from "@/contexts/role-context"

const roles = [
  {
    value: "customer",
    label: "Khách hàng",
    icon: User,
  },
  {
    value: "fb-staff",
    label: "Nhân viên F&B",
    icon: Coffee,
  },
  {
    value: "coworking-staff",
    label: "Nhân viên Coworking",
    icon: Store,
  },
  {
    value: "admin",
    label: "Quản lý chi nhánh",
    icon: Users,
  },
  {
    value: "analytics",
    label: "Phân tích dữ liệu",
    icon: PieChart,
  },
]

export function RoleSwitcherStandalone() {
  const { role, setRole } = useRole()
  const [open, setOpen] = React.useState(false)

  const handleRoleChange = (selectedValue: string) => {
    setOpen(false)
    setRole(selectedValue as any)
  }

  const selectedRole = roles.find((r) => r.value === role)
  const Icon = selectedRole?.icon || User

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex w-[180px] items-center justify-between rounded-full border-coffee-200 bg-white text-coffee-800"
        >
          <div className="flex items-center">
            <Icon className="mr-2 h-4 w-4 text-coffee-500" />
            <span className="truncate">{selectedRole?.label || "Chọn vai trò"}</span>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Tìm vai trò..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy vai trò.</CommandEmpty>
            <CommandGroup>
              {roles.map((r) => {
                const RoleIcon = r.icon
                return (
                  <CommandItem key={r.value} value={r.value} onSelect={handleRoleChange} className="flex items-center">
                    <RoleIcon
                      className={cn("mr-2 h-4 w-4", role === r.value ? "text-coffee-500" : "text-muted-foreground")}
                    />
                    <span>{r.label}</span>
                    <Check className={cn("ml-auto h-4 w-4", role === r.value ? "opacity-100" : "opacity-0")} />
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
