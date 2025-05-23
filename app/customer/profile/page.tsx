import { CreditCard, Edit, Mail, MapPin, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomerProfilePage() {
  // User profile data
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0912345678",
    address: "Số 123 Đường ABC, Quận XYZ, Hà Nội",
    memberSince: "01/01/2023",
    membershipLevel: "Gold",
    points: 1250,
  }

  // Recent orders
  const recentOrders = [
    {
      id: "ORD-12345",
      date: "22/05/2025",
      items: ["Cà phê sữa đá", "Bánh mì thịt nguội"],
      total: "85.000đ",
      status: "Hoàn thành",
    },
    {
      id: "ORD-12344",
      date: "18/05/2025",
      items: ["Trà đào cam sả", "Bánh tiramisu"],
      total: "110.000đ",
      status: "Hoàn thành",
    },
  ]

  // Recent bookings
  const recentBookings = [
    {
      id: "BKG-5678",
      date: "22/05/2025",
      time: "18:30 - 20:30",
      location: "Hashtag Láng Hạ",
      type: "Bàn ăn - 4 người",
      status: "Đã xác nhận",
    },
    {
      id: "BKG-5677",
      date: "20/05/2025",
      time: "09:00 - 13:00",
      location: "Hashtag Trần Duy Hưng",
      type: "Khu vực làm việc yên tĩnh",
      status: "Hoàn thành",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold">Hồ sơ cá nhân</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" /> Chỉnh sửa hồ sơ
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile card */}
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <User className="h-8 w-8" />
            </div>
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>Thành viên từ {user.memberSince}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-4 text-center">
                <div className="text-sm font-medium text-muted-foreground">Cấp thành viên</div>
                <div className="text-xl font-bold text-blue-700">{user.membershipLevel}</div>
                <div className="mt-1 text-sm text-muted-foreground">{user.points} điểm</div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-blue-200">
                  <div className="h-full w-3/4 bg-blue-600" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">750 điểm nữa để lên Platinum</div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{user.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span>••••••••4242</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity tabs */}
        <div className="md:col-span-2">
          <Tabs defaultValue="bookings">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bookings">Đặt chỗ gần đây</TabsTrigger>
              <TabsTrigger value="orders">Đơn hàng gần đây</TabsTrigger>
            </TabsList>
            <TabsContent value="bookings" className="mt-4 space-y-4">
              {recentBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{booking.location}</h3>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              booking.status === "Đã xác nhận"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {booking.date} • {booking.time}
                        </p>
                        <p className="mt-1 text-sm">{booking.type}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Chi tiết
                        </Button>
                        {booking.status === "Đã xác nhận" && (
                          <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                            Hủy
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-center">
                <Button variant="outline">Xem tất cả đặt chỗ</Button>
              </div>
            </TabsContent>
            <TabsContent value="orders" className="mt-4 space-y-4">
              {recentOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{order.id}</h3>
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                        <p className="mt-1 text-sm">{order.items.join(", ")}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-medium">{order.total}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Chi tiết
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-center">
                <Button variant="outline">Xem tất cả đơn hàng</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
