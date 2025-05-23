import { Edit, Search, Trash, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminUsersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Quản lý người dùng</h1>
          <p className="mt-2 text-muted-foreground">Quản lý khách hàng, nhân viên và quyền truy cập</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm người dùng..."
              className="w-full bg-background pl-10 md:w-[300px]"
            />
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Thêm người dùng
          </Button>
        </div>
      </div>

      <Tabs defaultValue="customers">
        <TabsList className="mb-6">
          <TabsTrigger value="customers">Khách hàng</TabsTrigger>
          <TabsTrigger value="staff">Nhân viên</TabsTrigger>
          <TabsTrigger value="admin">Quản trị viên</TabsTrigger>
        </TabsList>

        <TabsContent value="customers">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Select defaultValue="active">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="active">Đang hoạt động</SelectItem>
                  <SelectItem value="inactive">Không hoạt động</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="membership-all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Cấp thành viên" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="membership-all">Tất cả cấp thành viên</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="platinum">Platinum</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 1,248 khách hàng</div>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-12 border-b bg-muted/50 p-4 text-sm font-medium">
              <div className="col-span-3">Tên khách hàng</div>
              <div className="col-span-2">Số điện thoại</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-2">Cấp thành viên</div>
              <div className="col-span-1">Trạng thái</div>
              <div className="col-span-1 text-right">Thao tác</div>
            </div>
            <div className="divide-y">
              {/* User Item 1 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Nguyễn Văn A</div>
                      <div className="text-xs text-muted-foreground">Thành viên từ 01/01/2023</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">0912345678</div>
                <div className="col-span-3">nguyenvana@example.com</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">Gold</span>
                </div>
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

              {/* User Item 2 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Trần Thị B</div>
                      <div className="text-xs text-muted-foreground">Thành viên từ 15/02/2023</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">0923456789</div>
                <div className="col-span-3">tranthib@example.com</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                    Platinum
                  </span>
                </div>
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

              {/* User Item 3 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Lê Văn C</div>
                      <div className="text-xs text-muted-foreground">Thành viên từ 10/03/2023</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">0934567890</div>
                <div className="col-span-3">levanc@example.com</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Silver</span>
                </div>
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

              {/* User Item 4 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Phạm Thị D</div>
                      <div className="text-xs text-muted-foreground">Thành viên từ 05/04/2023</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">0945678901</div>
                <div className="col-span-3">phamthid@example.com</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">Gold</span>
                </div>
                <div className="col-span-1">
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                    Không hoạt động
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

              {/* User Item 5 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Hoàng Văn E</div>
                      <div className="text-xs text-muted-foreground">Thành viên từ 20/05/2023</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">0956789012</div>
                <div className="col-span-3">hoangvane@example.com</div>
                <div className="col-span-2">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Silver</span>
                </div>
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
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 1,248 khách hàng</div>
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
                ...
              </Button>
              <Button variant="outline" size="sm">
                125
              </Button>
              <Button variant="outline" size="sm">
                Sau
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="staff">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Quản lý nhân viên</h3>
            <p className="mt-2 text-sm text-muted-foreground">Danh sách nhân viên sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="admin">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Quản lý quản trị viên</h3>
            <p className="mt-2 text-sm text-muted-foreground">Danh sách quản trị viên sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
