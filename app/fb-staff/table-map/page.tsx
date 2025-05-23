"use client"

import { useState } from "react"
import { Check, ChevronDown, Clock, Coffee, CreditCard, Utensils, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TableData {
  id: string
  status: "available" | "occupied" | "reserved" | "cleaning"
  customers?: number
  order?: string
  time?: string
  total?: string
  reservationName?: string
}

export default function TableMapPage() {
  const [selectedTable, setSelectedTable] = useState<TableData | null>(null)
  const [tableDialogOpen, setTableDialogOpen] = useState(false)
  const [orderDialogOpen, setOrderDialogOpen] = useState(false)

  // Table data
  const tables: TableData[] = [
    { id: "A1", status: "occupied", customers: 2, order: "ORD-12345", time: "14:15", total: "125.000đ" },
    { id: "A2", status: "reserved", customers: 4, time: "15:00", reservationName: "Nguyễn Văn A" },
    { id: "A3", status: "occupied", customers: 3, order: "ORD-12346", time: "14:20", total: "210.000đ" },
    { id: "A4", status: "available" },
    { id: "B1", status: "available" },
    { id: "B2", status: "occupied", customers: 2, order: "ORD-12347", time: "14:25", total: "95.000đ" },
    { id: "B3", status: "available" },
    { id: "B4", status: "cleaning" },
    { id: "C1", status: "occupied", customers: 6, order: "ORD-12348", time: "14:30", total: "350.000đ" },
    { id: "C2", status: "available" },
    { id: "C3", status: "reserved", customers: 2, time: "16:30", reservationName: "Trần Thị B" },
    { id: "C4", status: "available" },
  ]

  // Sample order items
  const orderItems = [
    { name: "Cà phê sữa đá", price: "35.000đ", quantity: 2, total: "70.000đ" },
    { name: "Bánh mì thịt nguội", price: "45.000đ", quantity: 1, total: "45.000đ" },
    { name: "Nước cam", price: "30.000đ", quantity: 1, total: "30.000đ" },
  ]

  const handleTableClick = (table: TableData) => {
    setSelectedTable(table)
    setTableDialogOpen(true)
  }

  const handleOrderClick = () => {
    setTableDialogOpen(false)
    setOrderDialogOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 border-green-300"
      case "occupied":
        return "bg-red-100 border-red-300"
      case "reserved":
        return "bg-blue-100 border-blue-300"
      case "cleaning":
        return "bg-yellow-100 border-yellow-300"
      default:
        return "bg-gray-100 border-gray-300"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Trống"
      case "occupied":
        return "Đang phục vụ"
      case "reserved":
        return "Đã đặt trước"
      case "cleaning":
        return "Đang dọn dẹp"
      default:
        return "Không xác định"
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Sơ đồ bàn</h1>
          <p className="mt-2 text-muted-foreground">Quản lý trạng thái bàn và đặt món</p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Khu vực <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Tất cả khu vực</DropdownMenuItem>
              <DropdownMenuItem>Khu vực trong nhà</DropdownMenuItem>
              <DropdownMenuItem>Khu vực ngoài trời</DropdownMenuItem>
              <DropdownMenuItem>Khu vực yên tĩnh</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <Coffee className="mr-2 h-4 w-4" /> Đặt bàn mới
          </Button>
        </div>
      </div>

      {/* Table status legend */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-green-500" />
          <span>Trống</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500" />
          <span>Đang phục vụ</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-500" />
          <span>Đã đặt trước</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-500" />
          <span>Đang dọn dẹp</span>
        </div>
      </div>

      {/* Table grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 transition-all hover:shadow-md ${getStatusColor(
              table.status,
            )}`}
            onClick={() => handleTableClick(table)}
          >
            <div className="text-2xl font-bold">Bàn {table.id}</div>
            <div
              className={`mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                table.status === "available"
                  ? "bg-green-500 text-white"
                  : table.status === "occupied"
                    ? "bg-red-500 text-white"
                    : table.status === "reserved"
                      ? "bg-blue-500 text-white"
                      : "bg-yellow-500 text-white"
              }`}
            >
              {getStatusText(table.status)}
            </div>
            {table.customers && (
              <div className="mt-1 text-sm">
                {table.customers} {table.customers > 1 ? "người" : "người"}
              </div>
            )}
            {table.time && <div className="mt-1 text-sm">{table.time}</div>}
          </div>
        ))}
      </div>

      {/* Table dialog */}
      {selectedTable && (
        <Dialog open={tableDialogOpen} onOpenChange={setTableDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Bàn {selectedTable.id}</DialogTitle>
              <DialogDescription>
                {getStatusText(selectedTable.status)}
                {selectedTable.time && ` • ${selectedTable.time}`}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {selectedTable.status === "occupied" && (
                <>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="grid gap-2 md:grid-cols-2">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Mã đơn hàng</div>
                        <div className="font-medium">{selectedTable.order}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Số người</div>
                        <div className="font-medium">{selectedTable.customers} người</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Thời gian</div>
                        <div className="font-medium">{selectedTable.time}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Tổng tiền</div>
                        <div className="font-medium">{selectedTable.total}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    <Button variant="outline" className="flex-1" onClick={handleOrderClick}>
                      <Utensils className="mr-2 h-4 w-4" /> Gọi món
                    </Button>
                    <Button className="flex-1">
                      <CreditCard className="mr-2 h-4 w-4" /> Thanh toán
                    </Button>
                  </div>
                </>
              )}

              {selectedTable.status === "reserved" && (
                <>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="grid gap-2 md:grid-cols-2">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Tên khách hàng</div>
                        <div className="font-medium">{selectedTable.reservationName}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Số người</div>
                        <div className="font-medium">{selectedTable.customers} người</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Thời gian</div>
                        <div className="font-medium">{selectedTable.time}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    <Button variant="outline" className="flex-1">
                      <X className="mr-2 h-4 w-4" /> Hủy đặt bàn
                    </Button>
                    <Button className="flex-1">
                      <Check className="mr-2 h-4 w-4" /> Check-in
                    </Button>
                  </div>
                </>
              )}

              {selectedTable.status === "available" && (
                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1">
                    <Coffee className="mr-2 h-4 w-4" /> Đặt bàn
                  </Button>
                  <Button className="flex-1">
                    <Utensils className="mr-2 h-4 w-4" /> Gọi món
                  </Button>
                </div>
              )}

              {selectedTable.status === "cleaning" && (
                <div className="flex justify-center">
                  <Button>
                    <Check className="mr-2 h-4 w-4" /> Đánh dấu đã sẵn sàng
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Order dialog */}
      <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Gọi món - Bàn {selectedTable?.id}</DialogTitle>
            <DialogDescription>Thêm món ăn và đồ uống cho bàn này</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="current">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="current">Đơn hiện tại</TabsTrigger>
              <TabsTrigger value="new">Thêm món mới</TabsTrigger>
            </TabsList>
            <TabsContent value="current" className="mt-4 space-y-4">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-medium">Đơn hàng hiện tại</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {selectedTable?.time}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {orderItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">
                            {item.quantity}x {item.name}
                          </span>
                          <div className="text-sm text-muted-foreground">{item.price} / món</div>
                        </div>
                        <div className="font-medium">{item.total}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-between border-t pt-4">
                    <div className="font-medium">Tổng cộng</div>
                    <div className="text-lg font-bold">{selectedTable?.total}</div>
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1">
                    In phiếu bếp
                  </Button>
                  <Button className="flex-1">
                    <CreditCard className="mr-2 h-4 w-4" /> Thanh toán
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="new" className="mt-4">
              <div className="text-center">
                <Button
                  onClick={() => {
                    setOrderDialogOpen(false)
                    window.location.href = "/fb-staff/table-order?table=" + selectedTable?.id
                  }}
                >
                  <Utensils className="mr-2 h-4 w-4" /> Mở màn hình gọi món
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  )
}
