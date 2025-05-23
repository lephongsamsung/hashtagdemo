import { Check, Clock, CreditCard, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FBStaffDashboardPage() {
  // Orders data
  const pendingOrders = [
    {
      id: "ORD-12350",
      table: "B5",
      time: "14:25",
      items: [
        { name: "Cà phê sữa đá", quantity: 2, status: "preparing" },
        { name: "Bánh mì thịt nguội", quantity: 1, status: "ready" },
      ],
      customer: "Nguyễn Văn A",
      total: "125.000đ",
    },
    {
      id: "ORD-12351",
      table: "A3",
      time: "14:30",
      items: [
        { name: "Trà đào cam sả", quantity: 3, status: "preparing" },
        { name: "Bánh tiramisu", quantity: 2, status: "pending" },
      ],
      customer: "Trần Thị B",
      total: "210.000đ",
    },
    {
      id: "ORD-12352",
      table: "C2",
      time: "14:35",
      items: [
        { name: "Espresso", quantity: 1, status: "ready" },
        { name: "Croissant", quantity: 1, status: "ready" },
      ],
      customer: "Lê Văn C",
      total: "85.000đ",
    },
  ]

  const completedOrders = [
    {
      id: "ORD-12348",
      table: "A1",
      time: "13:45",
      items: [
        { name: "Cappuccino", quantity: 1 },
        { name: "Sandwich gà", quantity: 1 },
      ],
      customer: "Phạm Thị D",
      total: "95.000đ",
    },
    {
      id: "ORD-12349",
      table: "B3",
      time: "14:10",
      items: [
        { name: "Latte", quantity: 2 },
        { name: "Bánh flan", quantity: 2 },
      ],
      customer: "Hoàng Văn E",
      total: "160.000đ",
    },
  ]

  // Reservations data
  const upcomingReservations = [
    {
      id: "RES-5680",
      time: "15:00",
      customer: "Đỗ Thị F",
      people: 4,
      table: "A4",
      status: "confirmed",
      phone: "0912345678",
    },
    {
      id: "RES-5681",
      time: "16:30",
      customer: "Ngô Văn G",
      people: 2,
      table: "B2",
      status: "confirmed",
      phone: "0923456789",
    },
    {
      id: "RES-5682",
      time: "18:00",
      customer: "Vũ Thị H",
      people: 6,
      table: "C1",
      status: "pending",
      phone: "0934567890",
    },
  ]

  // Stats data
  const stats = [
    {
      title: "Đơn hàng hôm nay",
      value: "45",
      change: "+12.5%",
      changeType: "positive",
    },
    {
      title: "Doanh thu hôm nay",
      value: "4.250.000đ",
      change: "+8.2%",
      changeType: "positive",
    },
    {
      title: "Đặt bàn hôm nay",
      value: "12",
      change: "-3.1%",
      changeType: "negative",
    },
    {
      title: "Khách hàng mới",
      value: "8",
      change: "+15.3%",
      changeType: "positive",
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard F&B</h1>
        <p className="mt-2 text-muted-foreground">Quản lý đơn hàng và đặt bàn</p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">{stat.title}</div>
              <div className="mt-1 flex items-baseline">
                <div className="text-2xl font-semibold">{stat.value}</div>
                <span
                  className={`ml-2 text-xs font-medium ${
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Orders */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Đơn hàng</CardTitle>
            <CardDescription>Quản lý đơn hàng đang xử lý và hoàn thành</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pending">Đang xử lý ({pendingOrders.length})</TabsTrigger>
                <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
              </TabsList>
              <TabsContent value="pending" className="mt-4 space-y-4">
                {pendingOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                            Bàn {order.table}
                          </div>
                          <div className="text-sm font-medium">{order.id}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {order.time}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <div>
                              <span className="font-medium">
                                {item.quantity}x {item.name}
                              </span>
                            </div>
                            <div>
                              {item.status === "pending" && (
                                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                  Chờ xử lý
                                </span>
                              )}
                              {item.status === "preparing" && (
                                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                                  Đang chuẩn bị
                                </span>
                              )}
                              {item.status === "ready" && (
                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                                  Sẵn sàng
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Khách hàng:</span> {order.customer}
                        </div>
                        <div className="font-medium">{order.total}</div>
                      </div>

                      <div className="mt-3 flex justify-between gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Chi tiết
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Check className="mr-1 h-4 w-4" /> Hoàn thành
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="completed" className="mt-4 space-y-4">
                {completedOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                            Bàn {order.table}
                          </div>
                          <div className="text-sm font-medium">{order.id}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {order.time}
                        </div>
                      </div>

                      <div className="space-y-1">
                        {order.items.map((item, idx) => (
                          <div key={idx}>
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Khách hàng:</span> {order.customer}
                        </div>
                        <div className="font-medium">{order.total}</div>
                      </div>

                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full">
                          <CreditCard className="mr-1 h-4 w-4" /> In hóa đơn
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Reservations */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Đặt bàn hôm nay</CardTitle>
            <CardDescription>Quản lý lịch đặt bàn</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingReservations.map((reservation) => (
                <Card key={reservation.id}>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            reservation.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {reservation.status === "confirmed" ? "Đã xác nhận" : "Chờ xác nhận"}
                        </div>
                        <div className="text-sm font-medium">{reservation.id}</div>
                      </div>
                      <div className="text-lg font-semibold">{reservation.time}</div>
                    </div>

                    <div className="grid gap-2 md:grid-cols-2">
                      <div>
                        <div className="text-sm text-muted-foreground">Khách hàng</div>
                        <div>{reservation.customer}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Số điện thoại</div>
                        <div>{reservation.phone}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Số người</div>
                        <div>{reservation.people} người</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Bàn</div>
                        <div>Bàn {reservation.table}</div>
                      </div>
                    </div>

                    <div className="mt-3 flex justify-between gap-2">
                      {reservation.status === "pending" ? (
                        <>
                          <Button variant="outline" size="sm" className="flex-1">
                            <X className="mr-1 h-4 w-4" /> Từ chối
                          </Button>
                          <Button size="sm" className="flex-1">
                            <Check className="mr-1 h-4 w-4" /> Xác nhận
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" size="sm" className="flex-1">
                            Gọi
                          </Button>
                          <Button size="sm" className="flex-1">
                            Check-in
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kitchen Status */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Trạng thái bếp</CardTitle>
          <CardDescription>Theo dõi tiến độ chuẩn bị món</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <div className="text-sm font-medium">Đơn hàng đang xử lý</div>
                <div className="text-sm font-medium">3/5</div>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <div className="text-sm font-medium">Thời gian chờ trung bình</div>
                <div className="text-sm font-medium">12 phút</div>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <div className="text-sm font-medium">Tải bếp</div>
                <div className="text-sm font-medium">70%</div>
              </div>
              <Progress value={70} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
