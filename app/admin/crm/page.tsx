import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone, Calendar } from "lucide-react"

export default function CRMPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Quản lý khách hàng (CRM)</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Thêm khách hàng
        </Button>
      </div>

      <Tabs defaultValue="customers">
        <TabsList>
          <TabsTrigger value="customers">Khách hàng</TabsTrigger>
          <TabsTrigger value="segments">Phân khúc</TabsTrigger>
          <TabsTrigger value="campaigns">Chiến dịch</TabsTrigger>
          <TabsTrigger value="loyalty">Chương trình thành viên</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Danh sách khách hàng</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Tìm kiếm khách hàng..." className="pl-8 w-[300px]" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Số điện thoại</TableHead>
                    <TableHead>Phân khúc</TableHead>
                    <TableHead>Điểm tích lũy</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">ID: {customer.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phone}</TableCell>
                      <TableCell>
                        <Badge variant={customer.segment === "VIP" ? "default" : "outline"}>{customer.segment}</Badge>
                      </TableCell>
                      <TableCell>{customer.points}</TableCell>
                      <TableCell>
                        <Badge variant={customer.status === "Hoạt động" ? "success" : "secondary"}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Thống kê khách hàng</CardTitle>
                <CardDescription>Tổng quan về khách hàng của bạn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tổng số khách hàng</p>
                    <p className="text-2xl font-bold">1,245</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Khách hàng mới (30 ngày)</p>
                    <p className="text-2xl font-bold">+128</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Tỷ lệ giữ chân</p>
                    <p className="text-2xl font-bold">76%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Khách hàng VIP</p>
                    <p className="text-2xl font-bold">187</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sinh nhật sắp tới</CardTitle>
                <CardDescription>Khách hàng có sinh nhật trong 7 ngày tới</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {birthdays.map((customer) => (
                    <div key={customer.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            {customer.birthday}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Gửi ưu đãi
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Khách hàng không hoạt động</CardTitle>
                <CardDescription>Khách hàng không có hoạt động trong 30 ngày qua</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inactiveCustomers.map((customer) => (
                    <div key={customer.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-xs text-muted-foreground">Lần cuối: {customer.lastActive}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Gửi ưu đãi
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Phân khúc khách hàng</CardTitle>
              <CardDescription>Quản lý các phân khúc khách hàng của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nội dung phân khúc khách hàng sẽ được hiển thị ở đây</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chiến dịch tiếp thị</CardTitle>
              <CardDescription>Quản lý các chiến dịch tiếp thị của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nội dung chiến dịch tiếp thị sẽ được hiển thị ở đây</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="loyalty" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chương trình thành viên</CardTitle>
              <CardDescription>Quản lý chương trình thành viên và điểm thưởng</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Nội dung chương trình thành viên sẽ được hiển thị ở đây</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Dữ liệu mẫu
const customers = [
  {
    id: "CUS001",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0901234567",
    segment: "VIP",
    points: 1250,
    status: "Hoạt động",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS002",
    name: "Trần Thị B",
    email: "tranthib@example.com",
    phone: "0912345678",
    segment: "Thường xuyên",
    points: 850,
    status: "Hoạt động",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS003",
    name: "Lê Văn C",
    email: "levanc@example.com",
    phone: "0923456789",
    segment: "Mới",
    points: 150,
    status: "Hoạt động",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS004",
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    phone: "0934567890",
    segment: "Thường xuyên",
    points: 720,
    status: "Không hoạt động",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS005",
    name: "Hoàng Văn E",
    email: "hoangvane@example.com",
    phone: "0945678901",
    segment: "VIP",
    points: 1800,
    status: "Hoạt động",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const birthdays = [
  {
    id: "CUS006",
    name: "Vũ Thị F",
    birthday: "25/05/2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS007",
    name: "Đặng Văn G",
    birthday: "26/05/2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS008",
    name: "Bùi Thị H",
    birthday: "27/05/2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const inactiveCustomers = [
  {
    id: "CUS009",
    name: "Ngô Văn I",
    lastActive: "25/04/2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS010",
    name: "Dương Thị K",
    lastActive: "20/04/2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "CUS011",
    name: "Lý Văn L",
    lastActive: "15/04/2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]
