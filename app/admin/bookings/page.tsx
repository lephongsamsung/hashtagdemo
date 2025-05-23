import { Calendar, Check, Clock, Filter, Search, X } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminBookingsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Quản lý đặt chỗ</h1>
          <p className="mt-2 text-muted-foreground">Quản lý tất cả các đặt chỗ F&B và Coworking</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm đặt chỗ..."
              className="w-full bg-background pl-10 md:w-[300px]"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Lọc
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">Lọc đặt chỗ</h3>
                <div className="space-y-2">
                  <div className="font-medium">Ngày</div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Calendar className="mr-2 h-4 w-4" />
                        Chọn ngày
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent mode="single" initialFocus locale={vi} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Loại</div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tất cả loại" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả loại</SelectItem>
                      <SelectItem value="fb">F&B</SelectItem>
                      <SelectItem value="coworking">Coworking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Chi nhánh</div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tất cả chi nhánh" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả chi nhánh</SelectItem>
                      <SelectItem value="lang-ha">Láng Hạ</SelectItem>
                      <SelectItem value="tran-duy-hung">Trần Duy Hưng</SelectItem>
                      <SelectItem value="nguyen-chi-thanh">Nguyễn Chí Thanh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Trạng thái</div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tất cả trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả trạng thái</SelectItem>
                      <SelectItem value="pending">Chờ xác nhận</SelectItem>
                      <SelectItem value="confirmed">Đã xác nhận</SelectItem>
                      <SelectItem value="checked-in">Đã check-in</SelectItem>
                      <SelectItem value="completed">Hoàn thành</SelectItem>
                      <SelectItem value="cancelled">Đã hủy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Đặt lại</Button>
                  <Button>Áp dụng</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="today">Hôm nay</TabsTrigger>
          <TabsTrigger value="upcoming">Sắp tới</TabsTrigger>
          <TabsTrigger value="past">Đã qua</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 border-b bg-muted/50 p-4 text-sm font-medium">
              <div className="col-span-2">Mã đặt chỗ</div>
              <div className="col-span-2">Khách hàng</div>
              <div className="col-span-1">Loại</div>
              <div className="col-span-2">Chi nhánh</div>
              <div className="col-span-2">Thời gian</div>
              <div className="col-span-1">Trạng thái</div>
              <div className="col-span-2 text-right">Thao tác</div>
            </div>
            <div className="divide-y">
              {/* Booking Item 1 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-2 font-medium">BKG-5678</div>
                <div className="col-span-2">Nguyễn Văn A</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">F&B</span>
                </div>
                <div className="col-span-2">Láng Hạ</div>
                <div className="col-span-2">
                  <div>23/05/2025</div>
                  <div className="text-xs text-muted-foreground">18:30 - 20:30</div>
                </div>
                <div className="col-span-1">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đã xác nhận
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                  <Button size="sm">
                    <Check className="mr-1 h-4 w-4" /> Check-in
                  </Button>
                </div>
              </div>

              {/* Booking Item 2 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-2 font-medium">CWS-1001</div>
                <div className="col-span-2">Trần Thị B</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                    Coworking
                  </span>
                </div>
                <div className="col-span-2">Trần Duy Hưng</div>
                <div className="col-span-2">
                  <div>23/05/2025</div>
                  <div className="text-xs text-muted-foreground">09:00 - 13:00</div>
                </div>
                <div className="col-span-1">
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                    Chờ xác nhận
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                  <Button size="sm">
                    <Check className="mr-1 h-4 w-4" /> Xác nhận
                  </Button>
                </div>
              </div>

              {/* Booking Item 3 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-2 font-medium">BKG-5677</div>
                <div className="col-span-2">Lê Văn C</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">F&B</span>
                </div>
                <div className="col-span-2">Nguyễn Chí Thanh</div>
                <div className="col-span-2">
                  <div>22/05/2025</div>
                  <div className="text-xs text-muted-foreground">19:00 - 21:00</div>
                </div>
                <div className="col-span-1">
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                    Hoàn thành
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                </div>
              </div>

              {/* Booking Item 4 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-2 font-medium">CWS-1000</div>
                <div className="col-span-2">Phạm Thị D</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                    Coworking
                  </span>
                </div>
                <div className="col-span-2">Láng Hạ</div>
                <div className="col-span-2">
                  <div>24/05/2025</div>
                  <div className="text-xs text-muted-foreground">10:00 - 16:00</div>
                </div>
                <div className="col-span-1">
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">Đã hủy</span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                </div>
              </div>

              {/* Booking Item 5 */}
              <div className="grid grid-cols-12 items-center p-4">
                <div className="col-span-2 font-medium">BKG-5676</div>
                <div className="col-span-2">Hoàng Văn E</div>
                <div className="col-span-1">
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">F&B</span>
                </div>
                <div className="col-span-2">Trần Duy Hưng</div>
                <div className="col-span-2">
                  <div>23/05/2025</div>
                  <div className="text-xs text-muted-foreground">12:00 - 14:00</div>
                </div>
                <div className="col-span-1">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    Đã xác nhận
                  </span>
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                  <Button size="sm">
                    <Check className="mr-1 h-4 w-4" /> Check-in
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Hiển thị 1-10 của 42 đặt chỗ</div>
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
                5
              </Button>
              <Button variant="outline" size="sm">
                Sau
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="today">
          <Card>
            <CardHeader>
              <CardTitle>Đặt chỗ hôm nay</CardTitle>
              <CardDescription>{format(new Date(), "EEEE, dd MMMM yyyy", { locale: vi })}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">F&B</div>
                      <div className="font-medium">BKG-5678</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      18:30 - 20:30
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Khách hàng</div>
                      <div>Nguyễn Văn A</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Chi nhánh</div>
                      <div>Láng Hạ</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Trạng thái</div>
                      <div>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                          Đã xác nhận
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Chi tiết
                    </Button>
                    <Button size="sm">
                      <Check className="mr-1 h-4 w-4" /> Check-in
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                        Coworking
                      </div>
                      <div className="font-medium">CWS-1001</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4" />
                      09:00 - 13:00
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Khách hàng</div>
                      <div>Trần Thị B</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Chi nhánh</div>
                      <div>Trần Duy Hưng</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Trạng thái</div>
                      <div>
                        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                          Chờ xác nhận
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <X className="mr-1 h-4 w-4" /> Từ chối
                    </Button>
                    <Button size="sm">
                      <Check className="mr-1 h-4 w-4" /> Xác nhận
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Đặt chỗ sắp tới</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các đặt chỗ sắp tới sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="rounded-lg border border-dashed p-8 text-center">
            <h3 className="text-lg font-medium">Đặt chỗ đã qua</h3>
            <p className="mt-2 text-sm text-muted-foreground">Các đặt chỗ đã qua sẽ được hiển thị ở đây</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
