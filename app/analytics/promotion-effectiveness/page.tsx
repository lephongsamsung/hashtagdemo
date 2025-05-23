import { BarChart, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PromotionEffectivenessPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Phân tích hiệu quả khuyến mãi</h1>
          <p className="mt-2 text-muted-foreground">Đánh giá hiệu quả của các chương trình khuyến mãi</p>
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
              <p className="text-sm font-medium text-muted-foreground">Tổng khuyến mãi</p>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-xs text-green-600">+2 so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Tỷ lệ sử dụng</p>
              <h3 className="text-2xl font-bold">68%</h3>
              <p className="text-xs text-green-600">+5.3% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Doanh thu từ khuyến mãi</p>
              <h3 className="text-2xl font-bold">125.5M đ</h3>
              <p className="text-xs text-green-600">+12.5% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">ROI trung bình</p>
              <h3 className="text-2xl font-bold">3.2x</h3>
              <p className="text-xs text-red-600">-0.5x so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="campaigns">Chiến dịch</TabsTrigger>
          <TabsTrigger value="channels">Kênh phân phối</TabsTrigger>
          <TabsTrigger value="roi">ROI</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Hiệu quả khuyến mãi theo thời gian</CardTitle>
                <CardDescription>Tỷ lệ sử dụng và doanh thu từ khuyến mãi theo thời gian</CardDescription>
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
                      {/* Usage Rate Line */}
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

                      {/* Revenue Line */}
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
                          <span className="text-xs">Tỷ lệ sử dụng</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">Doanh thu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phân bổ khuyến mãi theo loại</CardTitle>
                <CardDescription>Tỷ lệ các loại khuyến mãi được sử dụng</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[250px] items-center justify-center">
                  <div className="relative h-40 w-40">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-blue-500"
                      style={{ clipPath: "polygon(0 0, 40% 0, 40% 100%, 0 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-green-500"
                      style={{ clipPath: "polygon(40% 0, 75% 0, 75% 100%, 40% 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-yellow-500"
                      style={{ clipPath: "polygon(75% 0, 100% 0, 100% 100%, 75% 100%)" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs">Giảm giá (40%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Combo (35%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Tặng kèm (25%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả theo dịch vụ</CardTitle>
                <CardDescription>Hiệu quả khuyến mãi theo loại dịch vụ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">F&B</span>
                      <span className="text-sm font-medium">75% hiệu quả</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[75%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Coworking</span>
                      <span className="text-sm font-medium">65% hiệu quả</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[65%] rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Combo F&B + Coworking</span>
                      <span className="text-sm font-medium">85% hiệu quả</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Hiệu quả theo chiến dịch</CardTitle>
                <CardDescription>So sánh hiệu quả của các chiến dịch khuyến mãi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Giảm 20% cho đặt bàn sớm</span>
                      <span className="text-sm font-medium">ROI: 4.2x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[84%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Combo Coworking + Cà phê</span>
                      <span className="text-sm font-medium">ROI: 3.8x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[76%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Happy Hour - Mua 1 tặng 1</span>
                      <span className="text-sm font-medium">ROI: 3.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[70%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Ưu đãi sinh nhật</span>
                      <span className="text-sm font-medium">ROI: 2.9x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[58%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Chào mừng thành viên mới</span>
                      <span className="text-sm font-medium">ROI: 2.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[50%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khuyến mãi cuối tuần</span>
                      <span className="text-sm font-medium">ROI: 1.8x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[36%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tỷ lệ chuyển đổi</CardTitle>
                <CardDescription>Tỷ lệ chuyển đổi của các chiến dịch khuyến mãi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Giảm 20% cho đặt bàn sớm</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[35%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Combo Coworking + Cà phê</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[42%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Happy Hour - Mua 1 tặng 1</span>
                      <span className="text-sm font-medium">48%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[48%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Ưu đãi sinh nhật</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[65%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tác động đến doanh thu</CardTitle>
                <CardDescription>Tác động của khuyến mãi đến doanh thu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tăng doanh thu</span>
                      <span className="text-sm font-medium">+25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[25%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tăng số lượng khách hàng</span>
                      <span className="text-sm font-medium">+35%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[35%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tăng giá trị đơn hàng trung bình</span>
                      <span className="text-sm font-medium">+15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[15%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tăng tỷ lệ quay lại</span>
                      <span className="text-sm font-medium">+20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[20%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Channels Tab */}
        <TabsContent value="channels">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Hiệu quả theo kênh phân phối</CardTitle>
                <CardDescription>So sánh hiệu quả của các kênh phân phối khuyến mãi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Ứng dụng di động</span>
                      <span className="text-sm font-medium">ROI: 4.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Email marketing</span>
                      <span className="text-sm font-medium">ROI: 3.8x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[76%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Mạng xã hội</span>
                      <span className="text-sm font-medium">ROI: 3.2x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[64%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Website</span>
                      <span className="text-sm font-medium">ROI: 2.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[50%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tại cửa hàng</span>
                      <span className="text-sm font-medium">ROI: 1.8x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[36%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Phân bổ khuyến mãi theo kênh</CardTitle>
                <CardDescription>Tỷ lệ sử dụng khuyến mãi theo kênh phân phối</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[250px] items-center justify-center">
                  <div className="relative h-40 w-40">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-blue-500"
                      style={{ clipPath: "polygon(0 0, 45% 0, 45% 100%, 0 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-green-500"
                      style={{ clipPath: "polygon(45% 0, 70% 0, 70% 100%, 45% 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-yellow-500"
                      style={{ clipPath: "polygon(70% 0, 85% 0, 85% 100%, 70% 100%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-red-500"
                      style={{ clipPath: "polygon(85% 0, 100% 0, 100% 100%, 85% 100%)" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs">Ứng dụng (45%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Email (25%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Mạng xã hội (15%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">Khác (15%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tỷ lệ chuyển đổi theo kênh</CardTitle>
                <CardDescription>Tỷ lệ chuyển đổi của khuyến mãi theo kênh phân phối</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Ứng dụng di động</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[45%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Email marketing</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[35%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Mạng xã hội</span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Website</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[25%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tại cửa hàng</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[20%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ROI Tab */}
        <TabsContent value="roi">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>ROI theo thời gian</CardTitle>
                <CardDescription>Biến động ROI của các khuyến mãi theo thời gian</CardDescription>
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
                      {/* ROI Line */}
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
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chi phí vs Doanh thu</CardTitle>
                <CardDescription>So sánh chi phí và doanh thu từ khuyến mãi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Chi phí khuyến mãi</span>
                      <span className="text-sm font-medium">38.5M đ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[38.5%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Doanh thu từ khuyến mãi</span>
                      <span className="text-sm font-medium">125.5M đ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[100%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Lợi nhuận ròng</span>
                      <span className="font-bold text-green-600">87M đ</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROI theo loại khách hàng</CardTitle>
                <CardDescription>So sánh ROI theo loại khách hàng</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khách hàng mới</span>
                      <span className="text-sm font-medium">ROI: 2.8x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[56%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khách hàng thường xuyên</span>
                      <span className="text-sm font-medium">ROI: 4.2x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[84%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khách hàng VIP</span>
                      <span className="text-sm font-medium">ROI: 5.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[100%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khách hàng không thường xuyên</span>
                      <span className="text-sm font-medium">ROI: 1.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-red-500"></div>
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
          <PieChart className="mr-2 h-4 w-4" /> Tạo báo cáo chi tiết
        </Button>
      </div>
    </div>
  )
}
