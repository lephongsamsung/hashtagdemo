import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoworkingSupportPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Hỗ trợ khách hàng</h1>
          <p className="mt-2 text-muted-foreground">Quản lý và xử lý các yêu cầu hỗ trợ từ khách hàng</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm yêu cầu..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
          <Button>Yêu cầu mới</Button>
        </div>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Đang xử lý</TabsTrigger>
          <TabsTrigger value="pending">Chờ xử lý</TabsTrigger>
          <TabsTrigger value="resolved">Đã giải quyết</TabsTrigger>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Support Ticket 1 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Wifi không ổn định</CardTitle>
                    <CardDescription>Khu vực làm việc chung</CardDescription>
                  </div>
                  <div className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    Đang xử lý
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">
                    Khách hàng phản ánh wifi tại khu vực làm việc chung bị chập chờn, ảnh hưởng đến công việc.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Báo cáo bởi: Nguyễn Văn A</span>
                    <span>•</span>
                    <span>10:30 AM, 15/05/2023</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium">Người xử lý:</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Trần Văn B</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Cập nhật</Button>
              </CardFooter>
            </Card>

            {/* Support Ticket 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Máy chiếu không hoạt động</CardTitle>
                    <CardDescription>Phòng họp 2</CardDescription>
                  </div>
                  <div className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    Đang xử lý
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">
                    Máy chiếu trong phòng họp 2 không kết nối được với laptop. Khách hàng cần gấp cho cuộc họp.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Báo cáo bởi: Lê Thị C</span>
                    <span>•</span>
                    <span>11:45 AM, 15/05/2023</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium">Người xử lý:</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-green-500"></div>
                    <span className="text-sm">Phạm Văn D</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Cập nhật</Button>
              </CardFooter>
            </Card>

            {/* Support Ticket 3 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Điều hòa quá lạnh</CardTitle>
                    <CardDescription>Khu vực làm việc A</CardDescription>
                  </div>
                  <div className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    Đang xử lý
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">
                    Nhiều khách hàng phản ánh điều hòa tại khu vực làm việc A quá lạnh, cần điều chỉnh nhiệt độ.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Báo cáo bởi: Trần Thị E</span>
                    <span>•</span>
                    <span>09:15 AM, 15/05/2023</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium">Người xử lý:</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Nguyễn Văn F</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Cập nhật</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Không có yêu cầu nào đang chờ xử lý</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tất cả các yêu cầu đã được phân công xử lý</p>
          </div>
        </TabsContent>

        <TabsContent value="resolved">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Resolved Ticket 1 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Thiếu giấy in</CardTitle>
                    <CardDescription>Khu vực máy in</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Đã giải quyết
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">Khách hàng báo máy in hết giấy, cần bổ sung gấp.</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Báo cáo bởi: Hoàng Văn G</span>
                    <span>•</span>
                    <span>14:20 PM, 14/05/2023</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium">Người xử lý:</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Trần Văn B</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button variant="outline" size="sm">
                  Mở lại
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* All tickets would be listed here */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Wifi không ổn định</CardTitle>
                    <CardDescription>Khu vực làm việc chung</CardDescription>
                  </div>
                  <div className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                    Đang xử lý
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">
                    Khách hàng phản ánh wifi tại khu vực làm việc chung bị chập chờn, ảnh hưởng đến công việc.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Báo cáo bởi: Nguyễn Văn A</span>
                    <span>•</span>
                    <span>10:30 AM, 15/05/2023</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium">Người xử lý:</div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Trần Văn B</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Cập nhật</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
