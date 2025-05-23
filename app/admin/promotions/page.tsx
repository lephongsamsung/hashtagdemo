import { Edit, Plus, Search, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPromotionsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Quản lý khuyến mãi</h1>
          <p className="mt-2 text-muted-foreground">Quản lý các chương trình khuyến mãi và ưu đãi</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm khuyến mãi..."
              className="w-full bg-background pl-10 md:w-[300px]"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm khuyến mãi
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Đang hoạt động</TabsTrigger>
          <TabsTrigger value="upcoming">Sắp diễn ra</TabsTrigger>
          <TabsTrigger value="expired">Đã kết thúc</TabsTrigger>
          <TabsTrigger value="draft">Bản nháp</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Loại khuyến mãi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả loại</SelectItem>
                  <SelectItem value="discount">Giảm giá</SelectItem>
                  <SelectItem value="voucher">Voucher</SelectItem>
                  <SelectItem value="combo">Combo</SelectItem>
                  <SelectItem value="special">Ưu đãi đặc biệt</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-services">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Dịch vụ áp dụng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-services">Tất cả dịch vụ</SelectItem>
                  <SelectItem value="fb">F&B</SelectItem>
                  <SelectItem value="coworking">Coworking</SelectItem>
                  <SelectItem value="combo">Combo F&B + Coworking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 24 khuyến mãi</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Promotion Card 1 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Giảm 20% cho đặt bàn sớm</CardTitle>
                    <CardDescription>Đặt bàn trước 3 ngày để nhận ưu đãi đặc biệt</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang hoạt động
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Mã khuyến mãi</div>
                    <div className="rounded-md bg-muted px-2 py-1 font-mono text-xs">EARLYBIRD20</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Dịch vụ áp dụng</div>
                    <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">F&B</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Giảm giá</div>
                    <div className="font-medium">20%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Thời hạn</div>
                    <div>30/06/2025</div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="mr-1 h-4 w-4" /> Sửa
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash className="mr-1 h-4 w-4" /> Xóa
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Promotion Card 2 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Combo Coworking + Cà phê</CardTitle>
                    <CardDescription>Làm việc 4 giờ + 1 cà phê đặc biệt chỉ 150.000đ</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang hoạt động
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Mã khuyến mãi</div>
                    <div className="rounded-md bg-muted px-2 py-1 font-mono text-xs">WORKCOFFEE</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Dịch vụ áp dụng</div>
                    <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                      Combo F&B + Coworking
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Giảm giá</div>
                    <div className="font-medium">25%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Thời hạn</div>
                    <div>Không giới hạn</div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="mr-1 h-4 w-4" /> Sửa
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash className="mr-1 h-4 w-4" /> Xóa
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Promotion Card 3 */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Happy Hour - Mua 1 tặng 1</CardTitle>
                    <CardDescription>Áp dụng cho tất cả đồ uống từ 15:00 - 17:00 các ngày trong tuần</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang hoạt động
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Mã khuyến mãi</div>
                    <div className="rounded-md bg-muted px-2 py-1 font-mono text-xs">HAPPY1FOR1</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Dịch vụ áp dụng</div>
                    <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">F&B</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Ưu đãi</div>
                    <div className="font-medium">Mua 1 tặng 1</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Thời hạn</div>
                    <div>31/07/2025</div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="mr-1 h-4 w-4" /> Sửa
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash className="mr-1 h-4 w-4" /> Xóa
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 24 khuyến mãi</div>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>
                Trước
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Sau
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Khuyến mãi sắp diễn ra</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các khuyến mãi sắp diễn ra sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="expired">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Khuyến mãi đã kết thúc</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các khuyến mãi đã kết thúc sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Khuyến mãi bản nháp</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các khuyến mãi bản nháp sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
