import { Edit, Plus, Search, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminMenuPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Quản lý thực đơn</h1>
          <p className="mt-2 text-muted-foreground">Quản lý các món ăn, đồ uống và danh mục trong thực đơn</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm món..." className="w-full bg-background pl-10 md:w-[300px]" />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm món mới
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="coffee">Cà phê</TabsTrigger>
          <TabsTrigger value="drinks">Đồ uống</TabsTrigger>
          <TabsTrigger value="food">Đồ ăn</TabsTrigger>
          <TabsTrigger value="desserts">Tráng miệng</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Select defaultValue="active">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="active">Đang bán</SelectItem>
                  <SelectItem value="inactive">Ngừng bán</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="price-asc">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sắp xếp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                  <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
                  <SelectItem value="name-asc">Tên: A-Z</SelectItem>
                  <SelectItem value="name-desc">Tên: Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 24 món</div>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 border-b bg-muted/50 p-4 text-sm font-medium">
              <div className="col-span-4">Tên món</div>
              <div className="col-span-2">Danh mục</div>
              <div className="col-span-2">Giá</div>
              <div className="col-span-2">Trạng thái</div>
              <div className="col-span-2 text-right">Thao tác</div>
            </div>
            <div className="divide-y">
              {/* Menu Item 1 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Cà phê sữa đá</div>
                      <div className="text-xs text-muted-foreground">Cà phê phin truyền thống với sữa đặc</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Cà phê</div>
                <div className="col-span-2">35.000đ</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang bán
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Cappuccino</div>
                      <div className="text-xs text-muted-foreground">Espresso với sữa nóng và foam mịn</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Cà phê</div>
                <div className="col-span-2">45.000đ</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang bán
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Trà đào cam sả</div>
                      <div className="text-xs text-muted-foreground">Trà xanh pha với đào, cam tươi và sả thơm</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Đồ uống</div>
                <div className="col-span-2">40.000đ</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang bán
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Bánh mì thịt nguội</div>
                      <div className="text-xs text-muted-foreground">Bánh mì giòn với thịt nguội, pate, rau sống</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Đồ ăn</div>
                <div className="col-span-2">45.000đ</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đang bán
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Menu Item 5 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Bánh tiramisu</div>
                      <div className="text-xs text-muted-foreground">Bánh tiramisu Ý truyền thống</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Tráng miệng</div>
                <div className="col-span-2">75.000đ</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">Ngừng bán</span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 24 món</div>
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

        <TabsContent value="coffee">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Danh mục Cà phê</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các món cà phê sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="drinks">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Danh mục Đồ uống</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các món đồ uống sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="food">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Danh mục Đồ ăn</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các món đồ ăn sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="desserts">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Danh mục Tráng miệng</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các món tráng miệng sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
