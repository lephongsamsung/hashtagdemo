import { BarChart, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomerBehaviorPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Phân tích hành vi khách hàng</h1>
          <p className="mt-2 text-muted-foreground">Hiểu rõ hơn về hành vi và sở thích của khách hàng</p>
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
              <p className="text-sm font-medium text-muted-foreground">Tổng khách hàng</p>
              <h3 className="text-2xl font-bold">1,248</h3>
              <p className="text-xs text-green-600">+12.5% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Khách hàng mới</p>
              <h3 className="text-2xl font-bold">156</h3>
              <p className="text-xs text-green-600">+8.2% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Tỷ lệ quay lại</p>
              <h3 className="text-2xl font-bold">68%</h3>
              <p className="text-xs text-green-600">+5.3% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Giá trị trung bình</p>
              <h3 className="text-2xl font-bold">185.000đ</h3>
              <p className="text-xs text-red-600">-3.1% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="demographics">Nhân khẩu học</TabsTrigger>
          <TabsTrigger value="preferences">Sở thích</TabsTrigger>
          <TabsTrigger value="loyalty">Lòng trung thành</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Xu hướng khách hàng theo thời gian</CardTitle>
                <CardDescription>Số lượng khách hàng mới và quay lại theo thời gian</CardDescription>
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
                      {/* New Customers Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M0,240 C40,220 80,180 120,160 C160,140 200,120 240,100 C280,80 320,60 360,40 C400,20 440,10 480,20 C520,30 560,50 600,70 C640,90 680,110 720,130 C760,150 800,170 840,190 C880,210 920,230 960,250"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>

                      {/* Returning Customers Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M0,280 C40,260 80,240 120,220 C160,200 200,180 240,160 C280,140 320,120 360,100 C400,80 440,60 480,40 C520,20 560,10 600,20 C640,30 680,50 720,70 C760,90 800,110 840,130 C880,150 920,170 960,190"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>

                      {/* Legend */}
                      <div className="absolute bottom-0 right-0 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <span className="text-xs">Khách hàng mới</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">Khách hàng quay lại</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phân bổ khách hàng theo dịch vụ</CardTitle>
                <CardDescription>Tỷ lệ khách hàng sử dụng các dịch vụ khác nhau</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[250px] items-center justify-center">
                  <div className="relative h-40 w-40">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-blue-500"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-purple-500"
                      style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-green-500"
                      style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 50%)" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs">F&B (45%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                    <span className="text-xs">Coworking (35%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Cả hai (20%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thời gian sử dụng dịch vụ</CardTitle>
                <CardDescription>Thời gian trung bình khách hàng sử dụng dịch vụ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">F&B</span>
                      <span className="text-sm font-medium">1.5 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[60%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Coworking (Khu vực chung)</span>
                      <span className="text-sm font-medium">3.2 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[75%] rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Coworking (Khu vực yên tĩnh)</span>
                      <span className="text-sm font-medium">4.5 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Phòng họp</span>
                      <span className="text-sm font-medium">2.1 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[45%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Phân bổ độ tuổi</CardTitle>
                <CardDescription>Phân bổ khách hàng theo nhóm tuổi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">18-24</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[15%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">25-34</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[45%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">35-44</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[25%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">45-54</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[10%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">55+</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[5%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phân bổ giới tính</CardTitle>
                <CardDescription>Phân bổ khách hàng theo giới tính</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[250px] items-center justify-center">
                  <div className="relative h-40 w-40">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-blue-500"
                      style={{ clipPath: "polygon(0 0, 55% 0, 55% 100%, 0 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-pink-500"
                      style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 55% 100%)" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs">Nam (55%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-pink-500"></div>
                    <span className="text-xs">Nữ (45%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Phân bổ nghề nghiệp</CardTitle>
                <CardDescription>Phân bổ khách hàng theo nghề nghiệp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Freelancer / Tự do</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Nhân viên văn phòng</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[25%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Doanh nhân / Chủ doanh nghiệp</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[20%] rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Sinh viên</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[15%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khác</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[10%] rounded-full bg-gray-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Đồ uống phổ biến nhất</CardTitle>
                <CardDescription>Top 5 đồ uống được đặt nhiều nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Cà phê sữa đá</span>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[28%] rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Trà đào cam sả</span>
                      <span className="text-sm font-medium">22%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[22%] rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Cappuccino</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[15%] rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Latte</span>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[12%] rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Sinh tố bơ</span>
                      <span className="text-sm font-medium">8%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[8%] rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Món ăn phổ biến nhất</CardTitle>
                <CardDescription>Top 5 món ăn được đặt nhiều nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Bánh mì thịt nguội</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[25%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Sandwich gà nướng</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[20%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Bánh tiramisu</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[18%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khoai tây chiên</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[15%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Bánh flan</span>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[12%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Không gian làm việc ưa thích</CardTitle>
                <CardDescription>Phân bổ khách hàng theo loại không gian làm việc</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[250px] items-center justify-center">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                      <div className="relative h-32 w-32">
                        <div
                          className="absolute inset-0 rounded-full border-8 border-blue-500"
                          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-purple-500"
                          style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)" }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-green-500"
                          style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 50%)" }}
                        ></div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <span className="text-xs">Khu vực yên tĩnh (40%)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                          <span className="text-xs">Khu vực chung (35%)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">Phòng họp (25%)</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Buổi sáng (8:00 - 12:00)</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[35%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Buổi trưa (12:00 - 14:00)</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[15%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Buổi chiều (14:00 - 18:00)</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[40%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Buổi tối (18:00 - 22:00)</span>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[10%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Loyalty Tab */}
        <TabsContent value="loyalty">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Phân bổ cấp độ thành viên</CardTitle>
                <CardDescription>Phân bổ khách hàng theo cấp độ thành viên</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Silver</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[45%] rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Gold</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[35%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Platinum</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[20%] rounded-full bg-slate-600"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tần suất sử dụng dịch vụ</CardTitle>
                <CardDescription>Tần suất khách hàng sử dụng dịch vụ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Hàng ngày</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[10%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">2-3 lần/tuần</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[25%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">1 lần/tuần</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">2-3 lần/tháng</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[20%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Ít hơn 1 lần/tháng</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[15%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Hiệu quả chương trình khuyến mãi</CardTitle>
                <CardDescription>Tỷ lệ sử dụng và hiệu quả của các chương trình khuyến mãi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Giảm 20% cho đặt bàn sớm</span>
                        <span className="text-sm font-medium">85% sử dụng</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Combo Coworking + Cà phê</span>
                        <span className="text-sm font-medium">75% sử dụng</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[75%] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Happy Hour - Mua 1 tặng 1</span>
                        <span className="text-sm font-medium">90% sử dụng</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Ưu đãi sinh nhật</span>
                        <span className="text-sm font-medium">65% sử dụng</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[65%] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="mb-2 font-medium">Hiệu quả chuyển đổi</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Tỷ lệ chuyển đổi khách mới</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-full w-[35%] rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm">Tăng tần suất khách cũ</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div className="h-full w-[45%] rounded-full bg-blue-500"></div>
                        </div>
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
          <LineChart className="mr-2 h-4 w-4" /> Tạo báo cáo chi tiết
        </Button>
      </div>
    </div>
  )
}
