import { Edit, Plus, Search, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminSpacesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Quản lý không gian</h1>
          <p className="mt-2 text-muted-foreground">Quản lý các không gian làm việc và phòng họp</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm không gian..."
              className="w-full bg-background pl-10 md:w-[300px]"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm không gian
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="quiet">Khu vực yên tĩnh</TabsTrigger>
          <TabsTrigger value="common">Khu vực chung</TabsTrigger>
          <TabsTrigger value="meeting">Phòng họp</TabsTrigger>
          <TabsTrigger value="private">Khu vực riêng tư</TabsTrigger>
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
                  <SelectItem value="active">Đang hoạt động</SelectItem>
                  <SelectItem value="maintenance">Bảo trì</SelectItem>
                  <SelectItem value="inactive">Ngừng hoạt động</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="branch-all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Chi nhánh" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branch-all">Tất cả chi nhánh</SelectItem>
                  <SelectItem value="lang-ha">Láng Hạ</SelectItem>
                  <SelectItem value="tran-duy-hung">Trần Duy Hưng</SelectItem>
                  <SelectItem value="nguyen-chi-thanh">Nguyễn Chí Thanh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 35 không gian</div>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 border-b bg-muted/50 p-4 text-sm font-medium">
              <div className="col-span-3">Tên không gian</div>
              <div className="col-span-2">Loại</div>
              <div className="col-span-2">Chi nhánh</div>
              <div className="col-span-1">Sức chứa</div>
              <div className="col-span-2">Giá/giờ</div>
              <div className="col-span-1">Trạng thái</div>
              <div className="col-span-1 text-right">Thao tác</div>
            </div>
            <div className="divide-y">
              {/* Space Item 1 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Khu vực yên tĩnh A</div>
                      <div className="text-xs text-muted-foreground">Khu vực làm việc yên tĩnh</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Khu vực yên tĩnh</div>
                <div className="col-span-2">Láng Hạ</div>
                <div className="col-span-1">15 người</div>
                <div className="col-span-2">50.000đ</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Hoạt động
                  </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Space Item 2 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Khu vực chung B</div>
                      <div className="text-xs text-muted-foreground">Khu vực làm việc chung</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Khu vực chung</div>
                <div className="col-span-2">Trần Duy Hưng</div>
                <div className="col-span-1">20 người</div>
                <div className="col-span-2">40.000đ</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Hoạt động
                  </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Space Item 3 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Phòng họp nhỏ M1</div>
                      <div className="text-xs text-muted-foreground">Phòng họp cho 2-4 người</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Phòng họp</div>
                <div className="col-span-2">Láng Hạ</div>
                <div className="col-span-1">4 người</div>
                <div className="col-span-2">150.000đ</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                    Bảo trì
                  </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Space Item 4 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Phòng họp lớn M3</div>
                      <div className="text-xs text-muted-foreground">Phòng họp cho 5-12 người</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Phòng họp</div>
                <div className="col-span-2">Nguyễn Chí Thanh</div>
                <div className="col-span-1">12 người</div>
                <div className="col-span-2">250.000đ</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Hoạt động
                  </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Space Item 5 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-muted"></div>
                    <div>
                      <div className="font-medium">Khu vực riêng tư P1</div>
                      <div className="text-xs text-muted-foreground">Không gian làm việc riêng tư</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">Khu vực riêng tư</div>
                <div className="col-span-2">Láng Hạ</div>
                <div className="col-span-1">2 người</div>
                <div className="col-span-2">100.000đ</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                    Ngừng hoạt động
                  </span>
                </div>
                <div className="col-span-1 flex justify-end gap-2">
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
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 35 không gian</div>
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
                4
              </Button>
              <Button variant="outline" size="sm">
                Sau
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="quiet">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Khu vực yên tĩnh</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các khu vực yên tĩnh sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="common">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Khu vực chung</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các khu vực chung sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="meeting">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Phòng họp</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các phòng họp sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="private">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Khu vực riêng tư</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các khu vực riêng tư sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
