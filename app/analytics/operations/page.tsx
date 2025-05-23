import { BarChart, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OperationsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Phân tích vận hành</h1>
          <p className="mt-2 text-muted-foreground">Theo dõi và phân tích hiệu quả vận hành</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn khoảng thời gian" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 ngày qua</SelectItem>
              <SelectItem value="30days">30 ngày qua</SelectItem>
              <SelectItem value="90days">90 ngày qua</SelectItem>
              <SelectItem value="year">Năm nay</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <BarChart className="mr-2 h-4 w-4" /> Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Tổng đơn hàng</p>
              <h3 className="text-2xl font-bold">2,458</h3>
              <p className="text-xs text-green-600">+12% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Thời gian phục vụ TB</p>
              <h3 className="text-2xl font-bold">18 phút</h3>
              <p className="text-xs text-green-600">-2 phút so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Tỷ lệ sử dụng</p>
              <h3 className="text-2xl font-bold">78%</h3>
              <p className="text-xs text-green-600">+5% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Đánh giá trung bình</p>
              <h3 className="text-2xl font-bold">4.7/5</h3>
              <p className="text-xs text-green-600">+0.2 so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="efficiency">
        <TabsList className="mb-6">
          <TabsTrigger value="efficiency">Hiệu quả</TabsTrigger>
          <TabsTrigger value="staff">Nhân viên</TabsTrigger>
          <TabsTrigger value="inventory">Hàng tồn kho</TabsTrigger>
          <TabsTrigger value="quality">Chất lượng</TabsTrigger>
        </TabsList>

        {/* Efficiency Tab */}
        <TabsContent value="efficiency">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Thời gian phục vụ theo thời gian</CardTitle>
                <CardDescription>Thời gian phục vụ trung bình theo tháng</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full flex-col">
                    <div className="flex h-8 items-center justify-between border-b text-xs text-muted-foreground">
                      <div>T1</div>
                      <div>T2</div>
                      <div>T3</div>
                      <div>T4</div>
                      <div>T5</div>
                      <div>T6</div>
                      <div>T7</div>
                      <div>T8</div>
                      <div>T9</div>
                      <div>T10</div>
                      <div>T11</div>
                      <div>T12</div>
                    </div>
                    <div className="relative mt-4 flex-1">
                      {/* Service Time Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M0,100 C40,120 80,140 120,160 C160,180 200,160 240,140 C280,120 320,100 360,80 C400,60 440,40 480,60 C520,80 560,100 600,80 C640,60 680,40 720,60 C760,80 800,100 840,80 C880,60 920,40 960,20"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả theo khu vực</CardTitle>
                <CardDescription>So sánh hiệu quả vận hành theo khu vực</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">F&B - Khu vực quầy bar</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">F&B - Khu vực bàn</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[75%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Coworking - Không gian chung</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Coworking - Phòng họp</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[65%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thời gian cao điểm</CardTitle>
                <CardDescription>Hiệu quả vận hành theo thời gian trong ngày</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">7:00 - 9:00</span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[70%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">9:00 - 12:00</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">12:00 - 14:00</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[65%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">14:00 - 17:00</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[80%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">17:00 - 20:00</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[60%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Staff Tab */}
        <TabsContent value="staff">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Hiệu suất nhân viên</CardTitle>
                <CardDescription>Hiệu suất trung bình của nhân viên theo bộ phận</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Nhân viên phục vụ F&B</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Nhân viên pha chế</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Nhân viên bếp</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[80%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Nhân viên coworking</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[75%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Nhân viên lễ tân</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Đánh giá nhân viên</CardTitle>
                <CardDescription>Đánh giá trung bình của khách hàng về nhân viên</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thái độ phục vụ</span>
                      <span className="text-sm font-medium">4.8/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[96%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tốc độ phục vụ</span>
                      <span className="text-sm font-medium">4.5/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Chuyên nghiệp</span>
                      <span className="text-sm font-medium">4.7/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[94%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Giải quyết vấn đề</span>
                      <span className="text-sm font-medium">4.3/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[86%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Phân tích nhân sự</CardTitle>
                <CardDescription>Phân tích hiệu quả và chi phí nhân sự</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-sm font-medium">Hiệu quả theo ca làm việc</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Ca sáng (7:00 - 14:00)</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[85%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Ca chiều (14:00 - 22:00)</span>
                          <span className="text-sm font-medium">75%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[75%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Cuối tuần</span>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[90%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-medium">Chi phí nhân sự</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Chi phí nhân sự / Doanh thu</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[25%] rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Tỷ lệ nghỉ việc</span>
                          <span className="text-sm font-medium">5%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[5%] rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Hiệu quả đào tạo</span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Inventory Tab */}
        <TabsContent value="inventory">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả quản lý hàng tồn kho</CardTitle>
                <CardDescription>Phân tích hiệu quả quản lý hàng tồn kho theo danh mục</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Đồ uống</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[95%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thực phẩm</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Vật tư văn phòng</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[80%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thiết bị</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tỷ lệ hết hàng</CardTitle>
                <CardDescription>Tỷ lệ hết hàng theo danh mục sản phẩm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Đồ uống</span>
                      <span className="text-sm font-medium">2%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[2%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thực phẩm</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[5%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Vật tư văn phòng</span>
                      <span className="text-sm font-medium">3%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[3%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thiết bị</span>
                      <span className="text-sm font-medium">1%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[1%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Vòng quay hàng tồn kho</CardTitle>
                <CardDescription>Vòng quay hàng tồn kho theo thời gian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full flex-col">
                    <div className="flex h-8 items-center justify-between border-b text-xs text-muted-foreground">
                      <div>T1</div>
                      <div>T2</div>
                      <div>T3</div>
                      <div>T4</div>
                      <div>T5</div>
                      <div>T6</div>
                      <div>T7</div>
                      <div>T8</div>
                      <div>T9</div>
                      <div>T10</div>
                      <div>T11</div>
                      <div>T12</div>
                    </div>
                    <div className="relative mt-4 flex-1">
                      {/* Inventory Turnover Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M0,200 C40,180 80,160 120,140 C160,120 200,100 240,80 C280,60 320,40 360,60 C400,80 440,100 480,120 C520,140 560,160 600,140 C640,120 680,100 720,80 C760,60 800,40 840,60 C880,80 920,100 960,80"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Quality Tab */}
        <TabsContent value="quality">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Đánh giá chất lượng</CardTitle>
                <CardDescription>Đánh giá chất lượng dịch vụ theo danh mục</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Đồ uống</span>
                      <span className="text-sm font-medium">4.8/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[96%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thực phẩm</span>
                      <span className="text-sm font-medium">4.6/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[92%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Dịch vụ</span>
                      <span className="text-sm font-medium">4.7/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[94%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Không gian</span>
                      <span className="text-sm font-medium">4.9/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[98%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phản hồi khách hàng</CardTitle>
                <CardDescription>Phân loại phản hồi của khách hàng</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[250px] items-center justify-center">
                  <div className="relative h-40 w-40">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-green-500"
                      style={{ clipPath: "polygon(0 0, 75% 0, 75% 100%, 0 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-yellow-500"
                      style={{ clipPath: "polygon(75% 0, 90% 0, 90% 100%, 75% 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-red-500"
                      style={{ clipPath: "polygon(90% 0, 100% 0, 100% 100%, 90% 100%)" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Tích cực (75%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Trung lập (15%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">Tiêu cực (10%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Xu hướng chất lượng</CardTitle>
                <CardDescription>Xu hướng đánh giá chất lượng theo thời gian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full flex-col">
                    <div className="flex h-8 items-center justify-between border-b text-xs text-muted-foreground">
                      <div>T1</div>
                      <div>T2</div>
                      <div>T3</div>
                      <div>T4</div>
                      <div>T5</div>
                      <div>T6</div>
                      <div>T7</div>
                      <div>T8</div>
                      <div>T9</div>
                      <div>T10</div>
                      <div>T11</div>
                      <div>T12</div>
                    </div>
                    <div className="relative mt-4 flex-1">
                      {/* Quality Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M0,120 C40,100 80,80 120,60 C160,40 200,20 240,40 C280,60 320,80 360,60 C400,40 440,20 480,40 C520,60 560,80 600,60 C640,40 680,20 720,40 C760,60 800,80 840,60 C880,40 920,20 960,0"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Button>
          <Download className="mr-2 h-4 w-4" /> Tải báo cáo chi tiết
        </Button>
      </div>
    </div>
  )
}
