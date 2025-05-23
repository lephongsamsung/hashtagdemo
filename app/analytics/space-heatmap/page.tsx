import { BarChart, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SpaceHeatmapPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Phân tích không gian</h1>
          <p className="mt-2 text-muted-foreground">Bản đồ nhiệt và phân tích sử dụng không gian</p>
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
              <p className="text-sm font-medium text-muted-foreground">Tổng lượt sử dụng</p>
              <h3 className="text-2xl font-bold">1,245</h3>
              <p className="text-xs text-green-600">+8% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Tỷ lệ sử dụng</p>
              <h3 className="text-2xl font-bold">72%</h3>
              <p className="text-xs text-green-600">+5% so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Thời gian sử dụng TB</p>
              <h3 className="text-2xl font-bold">3.5h</h3>
              <p className="text-xs text-green-600">+0.5h so với tháng trước</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Khu vực phổ biến</p>
              <h3 className="text-2xl font-bold">Khu A</h3>
              <p className="text-xs text-muted-foreground">85% tỷ lệ sử dụng</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="heatmap">
        <TabsList className="mb-6">
          <TabsTrigger value="heatmap">Bản đồ nhiệt</TabsTrigger>
          <TabsTrigger value="usage">Thống kê sử dụng</TabsTrigger>
          <TabsTrigger value="traffic">Lưu lượng</TabsTrigger>
          <TabsTrigger value="optimization">Tối ưu hóa</TabsTrigger>
        </TabsList>

        {/* Heatmap Tab */}
        <TabsContent value="heatmap">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Bản đồ nhiệt không gian</CardTitle>
                <CardDescription>Mật độ sử dụng các khu vực trong không gian làm việc</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[500px] w-full rounded-lg border bg-muted/20 p-2">
                  {/* Floor Plan Grid */}
                  <div className="grid h-full grid-cols-6 grid-rows-6 gap-1">
                    {/* Reception */}
                    <div className="col-span-2 row-span-1 rounded bg-blue-100 p-2 text-center text-xs font-medium">
                      Lễ tân
                    </div>

                    {/* Corridor */}
                    <div className="col-span-4 row-span-1 rounded bg-gray-100 p-2 text-center text-xs font-medium">
                      Hành lang
                    </div>

                    {/* Meeting Rooms */}
                    <div className="col-span-1 row-span-2 rounded bg-red-200 p-2 text-center text-xs font-medium">
                      P.Họp 1
                    </div>
                    <div className="col-span-1 row-span-2 rounded bg-red-300 p-2 text-center text-xs font-medium">
                      P.Họp 2
                    </div>

                    {/* Open Space */}
                    <div className="col-span-4 row-span-3 rounded bg-orange-300 p-2 text-center text-xs font-medium">
                      Không gian làm việc chung
                    </div>

                    {/* Private Offices */}
                    <div className="col-span-1 row-span-1 rounded bg-yellow-200 p-2 text-center text-xs font-medium">
                      VP 1
                    </div>
                    <div className="col-span-1 row-span-1 rounded bg-yellow-300 p-2 text-center text-xs font-medium">
                      VP 2
                    </div>
                    <div className="col-span-1 row-span-1 rounded bg-green-200 p-2 text-center text-xs font-medium">
                      VP 3
                    </div>
                    <div className="col-span-1 row-span-1 rounded bg-green-300 p-2 text-center text-xs font-medium">
                      VP 4
                    </div>

                    {/* Cafe Area */}
                    <div className="col-span-2 row-span-2 rounded bg-purple-200 p-2 text-center text-xs font-medium">
                      Khu cafe
                    </div>

                    {/* Restrooms */}
                    <div className="col-span-1 row-span-1 rounded bg-blue-200 p-2 text-center text-xs font-medium">
                      WC Nam
                    </div>
                    <div className="col-span-1 row-span-1 rounded bg-pink-200 p-2 text-center text-xs font-medium">
                      WC Nữ
                    </div>

                    {/* Storage */}
                    <div className="col-span-2 row-span-1 rounded bg-gray-200 p-2 text-center text-xs font-medium">
                      Kho
                    </div>
                  </div>

                  {/* Heatmap Overlay */}
                  <div className="absolute inset-0 opacity-60">
                    <div className="absolute left-[40%] top-[30%] h-32 w-32 rounded-full bg-red-500 blur-xl"></div>
                    <div className="absolute left-[60%] top-[40%] h-24 w-24 rounded-full bg-red-500 blur-xl"></div>
                    <div className="absolute left-[30%] top-[50%] h-20 w-20 rounded-full bg-orange-500 blur-xl"></div>
                    <div className="absolute left-[70%] top-[60%] h-16 w-16 rounded-full bg-yellow-500 blur-xl"></div>
                    <div className="absolute left-[20%] top-[70%] h-16 w-16 rounded-full bg-green-500 blur-xl"></div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">Rất đông</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                    <span className="text-xs">Đông</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Trung bình</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Ít</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Khu vực phổ biến</CardTitle>
                  <CardDescription>Các khu vực được sử dụng nhiều nhất</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Không gian làm việc chung</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[85%] rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Khu cafe</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[75%] rounded-full bg-orange-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Phòng họp 2</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[65%] rounded-full bg-yellow-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Phòng họp 1</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[60%] rounded-full bg-yellow-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Văn phòng riêng</span>
                        <span className="text-sm font-medium">50%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[50%] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Thời gian cao điểm</CardTitle>
                  <CardDescription>Thời gian sử dụng nhiều nhất trong ngày</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">9:00 - 11:00</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[90%] rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">14:00 - 16:00</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[85%] rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">11:00 - 13:00</span>
                        <span className="text-sm font-medium">70%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[70%] rounded-full bg-orange-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">16:00 - 18:00</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[65%] rounded-full bg-orange-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">7:00 - 9:00</span>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-full w-[40%] rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Thống kê sử dụng theo ngày</CardTitle>
                <CardDescription>Tỷ lệ sử dụng không gian theo ngày trong tuần</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full flex-col">
                    <div className="flex h-8 items-center justify-between border-b text-xs text-muted-foreground">
                      <div>T2</div>
                      <div>T3</div>
                      <div>T4</div>
                      <div>T5</div>
                      <div>T6</div>
                      <div>T7</div>
                      <div>CN</div>
                    </div>
                    <div className="relative mt-4 flex-1">
                      {/* Usage bars */}
                      <div className="absolute inset-0 flex items-end justify-between px-2">
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[70%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">70%</span>
                        </div>
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[85%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">85%</span>
                        </div>
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[80%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">80%</span>
                        </div>
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[90%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">90%</span>
                        </div>
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[75%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">75%</span>
                        </div>
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[40%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">40%</span>
                        </div>
                        <div className="flex w-8 flex-col items-center">
                          <div className="h-[20%] w-8 rounded-t bg-blue-500"></div>
                          <span className="mt-2 text-xs">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thời lượng sử dụng</CardTitle>
                <CardDescription>Thời gian sử dụng trung bình theo khu vực</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Không gian làm việc chung</span>
                      <span className="text-sm font-medium">4.5 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Phòng họp</span>
                      <span className="text-sm font-medium">1.5 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khu cafe</span>
                      <span className="text-sm font-medium">2.0 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[40%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Văn phòng riêng</span>
                      <span className="text-sm font-medium">5.5 giờ</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[100%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tỷ lệ sử dụng theo thời gian</CardTitle>
                <CardDescription>Biến động tỷ lệ sử dụng theo thời gian</CardDescription>
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
                      {/* Usage Line */}
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
          </div>
        </TabsContent>

        {/* Traffic Tab */}
        <TabsContent value="traffic">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Lưu lượng người dùng</CardTitle>
                <CardDescription>Biểu đồ lưu lượng người dùng theo thời gian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full flex-col">
                    <div className="flex h-8 items-center justify-between border-b text-xs text-muted-foreground">
                      <div>7:00</div>
                      <div>9:00</div>
                      <div>11:00</div>
                      <div>13:00</div>
                      <div>15:00</div>
                      <div>17:00</div>
                      <div>19:00</div>
                      <div>21:00</div>
                    </div>
                    <div className="relative mt-4 flex-1">
                      {/* Traffic Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M0,200 C40,180 80,120 120,80 C160,40 200,20 240,40 C280,60 320,100 360,120 C400,140 440,160 480,140 C520,120 560,100 600,80 C640,60 680,80 720,120 C760,160 800,200 840,220 C880,240 920,260 960,240"
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
                <CardTitle>Thời gian cao điểm</CardTitle>
                <CardDescription>Các khoảng thời gian có lưu lượng cao nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">9:00 - 11:00</span>
                      <span className="text-sm font-medium">90 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">14:00 - 16:00</span>
                      <span className="text-sm font-medium">85 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[85%] rounded-full bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">11:00 - 13:00</span>
                      <span className="text-sm font-medium">70 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[70%] rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">16:00 - 18:00</span>
                      <span className="text-sm font-medium">65 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[65%] rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">7:00 - 9:00</span>
                      <span className="text-sm font-medium">40 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[40%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lưu lượng theo khu vực</CardTitle>
                <CardDescription>Lưu lượng người dùng theo khu vực</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Không gian làm việc chung</span>
                      <span className="text-sm font-medium">45 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[90%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Khu cafe</span>
                      <span className="text-sm font-medium">30 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[60%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Phòng họp</span>
                      <span className="text-sm font-medium">15 người</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[30%] rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Văn phòng riêng</span>
                      <span className="text-sm font-medium">10 người</span>
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

        {/* Optimization Tab */}
        <TabsContent value="optimization">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Đề xuất tối ưu hóa</CardTitle>
                <CardDescription>Các đề xuất để tối ưu hóa không gian</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium">Mở rộng không gian làm việc chung</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Khu vực này luôn đạt công suất tối đa vào giờ cao điểm. Nên cân nhắc mở rộng thêm 20% diện tích.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium">Thêm phòng họp nhỏ</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Các phòng họp hiện tại thường xuyên kín lịch. Nên bổ sung thêm 2-3 phòng họp nhỏ cho 2-4 người.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium">Tối ưu khu vực cafe</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Khu vực cafe có mật độ sử dụng cao. Nên bố trí lại để tăng số lượng chỗ ngồi và cải thiện luồng di
                      chuyển.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-sm font-medium">Giảm diện tích kho</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Khu vực kho có mật độ sử dụng thấp. Có thể giảm 30% diện tích để tận dụng cho các mục đích khác.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dự báo nhu cầu</CardTitle>
                <CardDescription>Dự báo nhu cầu sử dụng không gian trong tương lai</CardDescription>
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
                      {/* Current Usage Line */}
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

                      {/* Forecast Line */}
                      <div className="absolute inset-0">
                        <svg className="h-full w-full">
                          <path
                            d="M480,20 C520,10 560,0 600,0 C640,0 680,10 720,20 C760,30 800,40 840,50 C880,60 920,70 960,80"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                          />
                        </svg>
                      </div>

                      {/* Legend */}
                      <div className="absolute bottom-0 right-0 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <span className="text-xs">Hiện tại</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">Dự báo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Phân tích ROI</CardTitle>
                <CardDescription>Phân tích ROI cho các đề xuất tối ưu hóa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Mở rộng không gian làm việc chung</span>
                      <span className="text-sm font-medium">ROI: 3.5x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[70%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Thêm phòng họp nhỏ</span>
                      <span className="text-sm font-medium">ROI: 4.2x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[84%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Tối ưu khu vực cafe</span>
                      <span className="text-sm font-medium">ROI: 2.8x</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-full w-[56%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Giảm diện tích kho</span>
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
          <Download className="mr-2 h-4 w-4" /> Tải báo cáo chi tiết
        </Button>
      </div>
    </div>
  )
}
