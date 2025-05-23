import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdditionalServicesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Dịch vụ bổ sung</h1>
          <p className="mt-2 text-muted-foreground">Quản lý các dịch vụ bổ sung cho khách hàng coworking</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm dịch vụ..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm dịch vụ
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="meeting">Phòng họp</TabsTrigger>
          <TabsTrigger value="equipment">Thiết bị</TabsTrigger>
          <TabsTrigger value="food">Đồ ăn & Thức uống</TabsTrigger>
          <TabsTrigger value="other">Khác</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Phòng họp nhỏ</CardTitle>
                    <CardDescription>Phòng họp cho 2-4 người</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Có sẵn</div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">
                    Phòng họp nhỏ được trang bị đầy đủ bảng trắng, TV, và thiết bị hội nghị video.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Giá: 100.000đ/giờ</span>
                    <span>•</span>
                    <span>Đặt trước: 30 phút</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Đặt ngay</Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Phòng họp lớn</CardTitle>
                    <CardDescription>Phòng họp cho 5-12 người</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Có sẵn</div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">
                    Phòng họp lớn với bàn họp rộng rãi, máy chiếu, bảng trắng, và hệ thống âm thanh.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Giá: 250.000đ/giờ</span>
                    <span>•</span>
                    <span>Đặt trước: 1 giờ</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Đặt ngay</Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Máy in màu</CardTitle>
                    <CardDescription>Dịch vụ in ấn</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Có sẵn</div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">Dịch vụ in màu chất lượng cao, hỗ trợ nhiều kích thước giấy.</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Giá: 5.000đ/trang</span>
                    <span>•</span>
                    <span>Thanh toán ngay</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Sử dụng</Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Máy quét tài liệu</CardTitle>
                    <CardDescription>Dịch vụ văn phòng</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Có sẵn</div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">Dịch vụ quét tài liệu chất lượng cao, hỗ trợ nhiều định dạng.</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Giá: 2.000đ/trang</span>
                    <span>•</span>
                    <span>Thanh toán ngay</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Sử dụng</Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Combo cà phê</CardTitle>
                    <CardDescription>Đồ uống</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Có sẵn</div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">Combo 5 cà phê (Americano hoặc Latte) với giá ưu đãi.</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Giá: 150.000đ</span>
                    <span>•</span>
                    <span>Tiết kiệm 25%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Đặt ngay</Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Hỗ trợ kỹ thuật</CardTitle>
                    <CardDescription>Dịch vụ IT</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Có sẵn</div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <p className="text-sm">Dịch vụ hỗ trợ kỹ thuật IT, giải quyết các vấn đề về máy tính, mạng.</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Giá: 200.000đ/giờ</span>
                    <span>•</span>
                    <span>Đặt trước: 1 giờ</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Chi tiết
                </Button>
                <Button size="sm">Yêu cầu</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meeting">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Dịch vụ phòng họp</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các dịch vụ phòng họp sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="equipment">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Thiết bị</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các thiết bị cho thuê sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="food">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Đồ ăn & Thức uống</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các combo đồ ăn thức uống sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="other">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Dịch vụ khác</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các dịch vụ khác sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
