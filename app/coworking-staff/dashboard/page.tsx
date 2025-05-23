import { Calendar, Check, Clock, CreditCard, MapPin, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoworkingStaffDashboardPage() {
  // Bookings data
  const currentBookings = [
    {
      id: "CWS-1001",
      customer: "Nguyễn Văn A",
      space: "Khu vực yên tĩnh",
      seat: "A5",
      checkIn: "09:30",
      checkOut: "13:30",
      timeRemaining: "2h 15m",
      progress: 65,
    },
    {
      id: "CWS-1002",
      customer: "Trần Thị B",
      space: "Phòng họp nhỏ",
      seat: "M1",
      checkIn: "10:00",
      checkOut: "12:00",
      timeRemaining: "30m",
      progress: 85,
    },
    {
      id: "CWS-1003",
      customer: "Lê Văn C",
      space: "Khu vực chung",
      seat: "B3",
      checkIn: "11:30",
      checkOut: "17:30",
      timeRemaining: "5h 15m",
      progress: 25,
    },
  ]

  const upcomingBookings = [
    {
      id: "CWS-1004",
      customer: "Phạm Thị D",
      space: "Khu vực yên tĩnh",
      seat: "A2",
      checkIn: "15:00",
      checkOut: "18:00",
      phone: "0912345678",
    },
    {
      id: "CWS-1005",
      customer: "Hoàng Văn E",
      space: "Phòng họp lớn",
      seat: "M3",
      checkIn: "16:00",
      checkOut: "18:00",
      phone: "0923456789",
    },
  ]

  // Stats data
  const stats = [
    {
      title: "Tổng chỗ ngồi",
      value: "45",
      subvalue: "32 đang sử dụng",
    },
    {
      title: "Tỷ lệ lấp đầy",
      value: "71%",
      subvalue: "Cao hơn trung bình",
    },
    {
      title: "Đặt chỗ hôm nay",
      value: "18",
      subvalue: "+3 so với hôm qua",
    },
    {
      title: "Doanh thu dự kiến",
      value: "3.250.000đ",
      subvalue: "+8% so với hôm qua",
    },
  ]

  // Space utilization
  const spaceUtilization = [
    { name: "Khu vực yên tĩnh", total: 15, used: 12, percent: 80 },
    { name: "Khu vực chung", total: 20, used: 15, percent: 75 },
    { name: "Phòng họp nhỏ", total: 5, used: 2, percent: 40 },
    { name: "Phòng họp lớn", total: 3, used: 1, percent: 33 },
    { name: "Khu vực riêng tư", total: 2, used: 2, percent: 100 },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard Coworking</h1>
        <p className="mt-2 text-muted-foreground">Quản lý đặt chỗ và không gian làm việc</p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">{stat.title}</div>
              <div className="mt-1 text-2xl font-semibold">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.subvalue}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Current and upcoming bookings */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Đặt chỗ</CardTitle>
            <CardDescription>Quản lý đặt chỗ hiện tại và sắp tới</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="current">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="current">Đang sử dụng ({currentBookings.length})</TabsTrigger>
                <TabsTrigger value="upcoming">Sắp tới ({upcomingBookings.length})</TabsTrigger>
              </TabsList>
              <TabsContent value="current" className="mt-4 space-y-4">
                {currentBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                            {booking.space}
                          </div>
                          <div className="text-sm font-medium">{booking.id}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                          <Clock className="h-3 w-3" />
                          {booking.timeRemaining} còn lại
                        </div>
                      </div>

                      <div className="mb-2 grid gap-2 md:grid-cols-2">
                        <div>
                          <div className="text-sm text-muted-foreground">Khách hàng</div>
                          <div className="font-medium">{booking.customer}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Vị trí</div>
                          <div className="font-medium">{booking.seat}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Check-in</div>
                          <div className="font-medium">{booking.checkIn}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Check-out dự kiến</div>
                          <div className="font-medium">{booking.checkOut}</div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="mb-1 flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">Thời gian sử dụng</div>
                          <div className="text-xs text-muted-foreground">{booking.progress}%</div>
                        </div>
                        <Progress value={booking.progress} className="h-2" />
                      </div>

                      <div className="flex justify-between gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Hỗ trợ
                        </Button>
                        <Button size="sm" className="flex-1">
                          <CreditCard className="mr-1 h-4 w-4" /> Gia hạn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="upcoming" className="mt-4 space-y-4">
                {upcomingBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                            {booking.space}
                          </div>
                          <div className="text-sm font-medium">{booking.id}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <Clock className="h-3 w-3" />
                          {booking.checkIn}
                        </div>
                      </div>

                      <div className="mb-2 grid gap-2 md:grid-cols-2">
                        <div>
                          <div className="text-sm text-muted-foreground">Khách hàng</div>
                          <div className="font-medium">{booking.customer}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Số điện thoại</div>
                          <div className="font-medium">{booking.phone}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Vị trí</div>
                          <div className="font-medium">{booking.seat}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Thời gian</div>
                          <div className="font-medium">
                            {booking.checkIn} - {booking.checkOut}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <X className="mr-1 h-4 w-4" /> Hủy
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Check className="mr-1 h-4 w-4" /> Check-in
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Space utilization */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Tình trạng sử dụng không gian</CardTitle>
            <CardDescription>Theo dõi tỷ lệ lấp đầy các khu vực</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spaceUtilization.map((space, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-sm font-medium">{space.name}</div>
                    <div className="text-sm font-medium">
                      {space.used}/{space.total} ({space.percent}%)
                    </div>
                  </div>
                  <Progress
                    value={space.percent}
                    className={`h-2 ${
                      space.percent > 90
                        ? "bg-red-200 [&>div]:bg-red-500"
                        : space.percent > 70
                          ? "bg-yellow-200 [&>div]:bg-yellow-500"
                          : "bg-green-200 [&>div]:bg-green-500"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button className="w-full">
                <MapPin className="mr-2 h-4 w-4" /> Xem sơ đồ chi tiết
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's schedule */}
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Lịch trình hôm nay</CardTitle>
            <CardDescription>Tổng quan về các đặt chỗ trong ngày</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" /> Xem lịch đầy đủ
          </Button>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Time indicators */}
            <div className="absolute left-0 top-0 flex h-full flex-col justify-between py-2 pr-2 text-xs text-muted-foreground">
              <div>08:00</div>
              <div>10:00</div>
              <div>12:00</div>
              <div>14:00</div>
              <div>16:00</div>
              <div>18:00</div>
              <div>20:00</div>
            </div>

            {/* Schedule grid */}
            <div className="ml-10 grid grid-cols-1 gap-2 md:grid-cols-3">
              {/* Quiet Zone */}
              <div>
                <div className="mb-2 font-medium">Khu vực yên tĩnh</div>
                <div className="relative h-80 rounded-lg border bg-gray-50">
                  {/* Booking blocks */}
                  <div
                    className="absolute left-0 right-0 rounded bg-blue-100 p-2 text-xs"
                    style={{ top: "15%", height: "25%" }}
                  >
                    <div className="font-medium">Nguyễn Văn A</div>
                    <div>09:30 - 13:30</div>
                  </div>
                  <div
                    className="absolute left-0 right-0 rounded bg-blue-100 p-2 text-xs"
                    style={{ top: "70%", height: "15%" }}
                  >
                    <div className="font-medium">Phạm Thị D</div>
                    <div>15:00 - 18:00</div>
                  </div>
                </div>
              </div>

              {/* Meeting Rooms */}
              <div>
                <div className="mb-2 font-medium">Phòng họp</div>
                <div className="relative h-80 rounded-lg border bg-gray-50">
                  <div
                    className="absolute left-0 right-0 rounded bg-green-100 p-2 text-xs"
                    style={{ top: "25%", height: "12.5%" }}
                  >
                    <div className="font-medium">Trần Thị B</div>
                    <div>10:00 - 12:00</div>
                  </div>
                  <div
                    className="absolute left-0 right-0 rounded bg-green-100 p-2 text-xs"
                    style={{ top: "75%", height: "12.5%" }}
                  >
                    <div className="font-medium">Hoàng Văn E</div>
                    <div>16:00 - 18:00</div>
                  </div>
                </div>
              </div>

              {/* Common Area */}
              <div>
                <div className="mb-2 font-medium">Khu vực chung</div>
                <div className="relative h-80 rounded-lg border bg-gray-50">
                  <div
                    className="absolute left-0 right-0 rounded bg-purple-100 p-2 text-xs"
                    style={{ top: "35%", height: "37.5%" }}
                  >
                    <div className="font-medium">Lê Văn C</div>
                    <div>11:30 - 17:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
