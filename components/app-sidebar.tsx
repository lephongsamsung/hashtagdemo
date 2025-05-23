"use client"
import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Percent,
  Settings,
  ShoppingBag,
  Store,
  User,
  Users,
  Utensils,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRole } from "@/contexts/role-context"
import { cn } from "@/lib/utils"

// Navigation data for different roles
const customerNav = [
  {
    title: "Trang chủ",
    icon: Home,
    url: "/customer/home",
  },
  {
    title: "Hồ sơ cá nhân",
    icon: User,
    url: "/customer/profile",
  },
  {
    title: "Đặt bàn (F&B)",
    icon: Utensils,
    url: "/customer/table-booking",
  },
  {
    title: "Gọi món Online",
    icon: ShoppingBag,
    url: "/customer/order-online",
  },
  {
    title: "Đặt chỗ Coworking",
    icon: MapPin,
    url: "/customer/coworking-booking",
  },
  {
    title: "Ưu đãi của tôi",
    icon: Percent,
    url: "/customer/offers",
  },
  {
    title: "Hướng dẫn & hỗ trợ",
    icon: MessageSquare,
    url: "/customer/support",
  },
  {
    title: "Thanh toán / Hóa đơn",
    icon: CreditCard,
    url: "/customer/payments",
  },
]

const fbStaffNav = [
  {
    title: "Dashboard đặt món",
    icon: LayoutDashboard,
    url: "/fb-staff/dashboard",
  },
  {
    title: "Sơ đồ bàn / khu vực",
    icon: Store,
    url: "/fb-staff/table-map",
  },
  {
    title: "Gọi món tại bàn",
    icon: Utensils,
    url: "/fb-staff/table-order",
  },
  {
    title: "Thanh toán",
    icon: CreditCard,
    url: "/fb-staff/payment",
  },
]

const coworkingStaffNav = [
  {
    title: "Dashboard đặt chỗ",
    icon: LayoutDashboard,
    url: "/coworking-staff/dashboard",
  },
  {
    title: "Sơ đồ không gian",
    icon: Store,
    url: "/coworking-staff/space-map",
  },
  {
    title: "Check-in / Check-out",
    icon: Calendar,
    url: "/coworking-staff/checkin",
  },
  {
    title: "Hỗ trợ khách",
    icon: MessageSquare,
    url: "/coworking-staff/support",
  },
  {
    title: "Quản lý dịch vụ thêm",
    icon: ShoppingBag,
    url: "/coworking-staff/additional-services",
  },
]

const adminNav = [
  {
    title: "Dashboard tổng quan",
    icon: LayoutDashboard,
    url: "/admin/dashboard",
  },
  {
    title: "Quản lý chi nhánh",
    icon: Store,
    url: "/admin/branches",
  },
  {
    title: "Quản lý menu (F&B)",
    icon: Utensils,
    url: "/admin/menu",
  },
  {
    title: "Quản lý không gian (Coworking)",
    icon: MapPin,
    url: "/admin/spaces",
  },
  {
    title: "Quản lý đặt chỗ",
    icon: Calendar,
    url: "/admin/bookings",
  },
  {
    title: "Quản lý người dùng",
    icon: Users,
    url: "/admin/users",
  },
  {
    title: "Quản lý khuyến mãi",
    icon: Percent,
    url: "/admin/promotions",
  },
  {
    title: "Quản lý tài chính / hóa đơn",
    icon: CreditCard,
    url: "/admin/finance",
  },
  {
    title: "CRM khách hàng",
    icon: User,
    url: "/admin/crm",
  },
  {
    title: "Cấu hình hệ thống",
    icon: Settings,
    url: "/admin/settings",
  },
]

const analyticsNav = [
  {
    title: "Phân tích hành vi khách hàng",
    icon: User,
    url: "/analytics/customer-behavior",
  },
  {
    title: "Phân tích hiệu quả khuyến mãi",
    icon: Percent,
    url: "/analytics/promotion-effectiveness",
  },
  {
    title: "Heatmap không gian",
    icon: MapPin,
    url: "/analytics/space-heatmap",
  },
  {
    title: "Phân tích vận hành",
    icon: BarChart3,
    url: "/analytics/operations",
  },
]

export function AppSidebar() {
  const { role } = useRole()

  // Get navigation items based on role
  const getNavItems = () => {
    switch (role) {
      case "customer":
        return customerNav
      case "fb-staff":
        return fbStaffNav
      case "coworking-staff":
        return coworkingStaffNav
      case "admin":
        return adminNav
      case "analytics":
        return analyticsNav
      default:
        return customerNav
    }
  }

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

  // Get role color
  const getRoleColor = () => {
    switch (role) {
      case "customer":
        return "bg-coffee-50 text-coffee-800"
      case "fb-staff":
        return "bg-coffee-100 text-coffee-800"
      case "coworking-staff":
        return "bg-mint-50 text-mint-800"
      case "admin":
        return "bg-blue-50 text-blue-800"
      case "analytics":
        return "bg-purple-50 text-purple-800"
      default:
        return "bg-coffee-50 text-coffee-800"
    }
  }

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="hidden md:block">
        <div className="p-2">
          <div className={cn("rounded-lg p-4", getRoleColor())}>
            <h3 className="font-medium">{getRoleTitle()}</h3>
            <p className="text-xs opacity-80">Chào mừng trở lại!</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {getNavItems().map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="group">
                      <item.icon className="h-4 w-4 text-coffee-500 group-hover:text-coffee-600" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2">
          <div className="rounded-lg bg-coffee-50 p-4">
            <h4 className="mb-2 text-sm font-medium text-coffee-800">Hashtag Space</h4>
            <p className="text-xs text-coffee-600">3 Trần Quý Kiên, Thạnh Mỹ Lợi, Thủ Đức</p>
            <p className="text-xs text-coffee-600">Phiên bản 1.0.0</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
