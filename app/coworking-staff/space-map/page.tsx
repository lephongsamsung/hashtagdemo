"use client"

import { useState } from "react"
import { Check, ChevronDown, Clock, Laptop, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SpaceMapPage() {
  const [selectedSeat, setSelectedSeat] = useState<SeatData | null>(null)
  const [seatDialogOpen, setSeatDialogOpen] = useState(false)

  // Seat data
  const seats: SeatData[] = [
    // Quiet Zone
    { id: "A1", zone: "quiet", status: "occupied", customer: "Nguyễn Văn A", checkIn: "09:30", checkOut: "13:30" },
    { id: "A2", zone: "quiet", status: "reserved", customer: "Phạm Thị D", checkIn: "15:00", checkOut: "18:00" },
    { id: "A3", zone: "quiet", status: "available" },
    { id: "A4", zone: "quiet", status: "available" },
    { id: "A5", zone: "quiet", status: "occupied", customer: "Vũ Thị H", checkIn: "10:00", checkOut: "16:00" },
    { id: "A6", zone: "quiet", status: "available" },
    { id: "A7", zone: "quiet", status: "maintenance" },
    { id: "A8", zone: "quiet", status: "available" },

    // Common Area
    { id: "B1", zone: "common", status: "available" },
    { id: "B2", zone: "common", status: "available" },
    { id: "B3", zone: "common", status: "occupied", customer: "Lê Văn C", checkIn: "11:30", checkOut: "17:30" },
    { id: "B4", zone: "common", status: "available" },
    { id: "B5", zone: "common", status: "occupied", customer: "Trần Văn I", checkIn: "13:00", checkOut: "15:00" },
    { id: "B6", zone: "common", status: "available" },
    { id: "B7", zone: "common", status: "available" },
    { id: "B8", zone: "common", status: "occupied", customer: "Ngô Thị J", checkIn: "12:30", checkOut: "16:30" },

    // Meeting Rooms
    {
      id: "M1",
      zone: "meeting",
      status: "occupied",
      customer: "Trần Thị B",
      checkIn: "10:00",
      checkOut: "12:00",
      isRoom: true,
      capacity: 4,
    },
    { id: "M2", zone: "meeting", status: "available", isRoom: true, capacity: 4 },
    {
      id: "M3",
      zone: "meeting",
      status: "reserved",
      customer: "Hoàng Văn E",
      checkIn: "16:00",
      checkOut: "18:00",
      isRoom: true,
      capacity: 8,
    },
  ]

  const handleSeatClick = (seat: SeatData) => {
    setSelectedSeat(seat)
    setSeatDialogOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 border-green-300"
      case "occupied":
        return "bg-red-100 border-red-300"
      case "reserved":
        return "bg-blue-100 border-blue-300"
      case "maintenance":
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
        return "Đang sử dụng"
      case "reserved":
        return "Đã đặt trước"
      case "maintenance":
        return "Bảo trì"
      default:
        return "Không xác định"
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Sơ đồ không gian</h1>
          <p className="mt-2 text-muted-foreground">Quản lý trạng thái chỗ ngồi và phòng họp</p>
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
              <DropdownMenuItem>Khu vực yên tĩnh</DropdownMenuItem>
              <DropdownMenuItem>Khu vực chung</DropdownMenuItem>
              <DropdownMenuItem>Phòng họp</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <Laptop className="mr-2 h-4 w-4" /> Đặt chỗ mới
          </Button>
        </div>
      </div>

      {/* Seat status legend */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-green-500" />
          <span>Trống</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500" />
          <span>Đang sử dụng</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-500" />
          <span>Đã đặt trước</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-500" />
          <span>Bảo trì</span>
        </div>
      </div>

      {/* Zones */}
      <div className="space-y-8">
        {/* Quiet Zone */}
        <Card>
          <CardHeader>
            <CardTitle>Khu vực yên tĩnh</CardTitle>
            <CardDescription>Không gian làm việc yên tĩnh, phù hợp cho công việc tập trung</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {seats
                .filter((seat) => seat.zone === "quiet")
                .map((seat) => (
                  <div
                    key={seat.id}
                    className={`flex h-24 cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-2 transition-all hover:shadow-md ${getStatusColor(
                      seat.status,
                    )}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <div className="text-lg font-bold">Chỗ {seat.id}</div>
                    <div
                      className={`mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                        seat.status === "available"
                          ? "bg-green-500 text-white"
                          : seat.status === "occupied"
                            ? "bg-red-500 text-white"
                            : seat.status === "reserved"
                              ? "bg-blue-500 text-white"
                              : "bg-yellow-500 text-white"
                      }`}
                    >
                      {getStatusText(seat.status)}
                    </div>
                    {seat.customer && <div className="mt-1 text-xs truncate max-w-full">{seat.customer}</div>}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Area */}
        <Card>
          <CardHeader>
            <CardTitle>Khu vực chung</CardTitle>
            <CardDescription>Không gian làm việc chung, phù hợp cho trao đổi và làm việc nhóm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {seats
                .filter((seat) => seat.zone === "common")
                .map((seat) => (
                  <div
                    key={seat.id}
                    className={`flex h-24 cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-2 transition-all hover:shadow-md ${getStatusColor(
                      seat.status,
                    )}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <div className="text-lg font-bold">Chỗ {seat.id}</div>
                    <div
                      className={`mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                        seat.status === "available"
                          ? "bg-green-500 text-white"
                          : seat.status === "occupied"
                            ? "bg-red-500 text-white"
                            : seat.status === "reserved"
                              ? "bg-blue-500 text-white"
                              : "bg-yellow-500 text-white"
                      }`}
                    >
                      {getStatusText(seat.status)}
                    </div>
                    {seat.customer && <div className="mt-1 text-xs truncate max-w-full">{seat.customer}</div>}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Meeting Rooms */}
        <Card>
          <CardHeader>
            <CardTitle>Phòng họp</CardTitle>
            <CardDescription>Phòng họp riêng tư cho các cuộc họp và thảo luận nhóm</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {seats
                .filter((seat) => seat.zone === "meeting")
                .map((seat) => (
                  <div
                    key={seat.id}
                    className={`flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 p-4 transition-all hover:shadow-md ${getStatusColor(
                      seat.status,
                    )}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    <div className="text-xl font-bold">Phòng {seat.id}</div>
                    <div className="text-sm">{seat.capacity} người</div>
                    <div
                      className={`mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                        seat.status === "available"
                          ? "bg-green-500 text-white"
                          : seat.status === "occupied"
                            ? "bg-red-500 text-white"
                            : seat.status === "reserved"
                              ? "bg-blue-500 text-white"
                              : "bg-yellow-500 text-white"
                      }`}
                    >
                      {getStatusText(seat.status)}
                    </div>
                    {seat.customer && <div className="mt-1 text-sm">{seat.customer}</div>}
                    {(seat.status === "occupied" || seat.status === "reserved") && seat.checkIn && seat.checkOut && (
                      <div className="mt-1 text-xs text-muted-foreground">
                        {seat.checkIn} - {seat.checkOut}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seat dialog */}
      {selectedSeat && (
        <Dialog open={seatDialogOpen} onOpenChange={setSeatDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {selectedSeat.isRoom ? "Phòng" : "Chỗ"} {selectedSeat.id}
              </DialogTitle>
              <DialogDescription>
                {getStatusText(selectedSeat.status)}
                {selectedSeat.checkIn &&
                  selectedSeat.checkOut &&
                  ` • ${selectedSeat.checkIn} - ${selectedSeat.checkOut}`}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {(selectedSeat.status === "occupied" || selectedSeat.status === "reserved") && (
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="grid gap-2 md:grid-cols-2">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Khách hàng</div>
                      <div className="font-medium">{selectedSeat.customer}</div>
                    </div>
                    {selectedSeat.isRoom && (
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Sức chứa</div>
                        <div className="font-medium">{selectedSeat.capacity} người</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Check-in</div>
                      <div className="font-medium">{selectedSeat.checkIn}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Check-out</div>
                      <div className="font-medium">{selectedSeat.checkOut}</div>
                    </div>
                  </div>
                </div>
              )}

              {selectedSeat.status === "occupied" && (
                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1">
                    <User className="mr-2 h-4 w-4" /> Hỗ trợ
                  </Button>
                  <Button className="flex-1">
                    <Check className="mr-2 h-4 w-4" /> Check-out
                  </Button>
                </div>
              )}

              {selectedSeat.status === "reserved" && (
                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1">
                    <X className="mr-2 h-4 w-4" /> Hủy đặt chỗ
                  </Button>
                  <Button className="flex-1">
                    <Check className="mr-2 h-4 w-4" /> Check-in
                  </Button>
                </div>
              )}

              {selectedSeat.status === "available" && (
                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1">
                    <Clock className="mr-2 h-4 w-4" /> Đặt trước
                  </Button>
                  <Button className="flex-1">
                    <User className="mr-2 h-4 w-4" /> Check-in ngay
                  </Button>
                </div>
              )}

              {selectedSeat.status === "maintenance" && (
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
    </div>
  )
}

interface SeatData {
  id: string
  zone: "quiet" | "common" | "meeting"
  status: "available" | "occupied" | "reserved" | "maintenance"
  customer?: string
  checkIn?: string
  checkOut?: string
  isRoom?: boolean
  capacity?: number
}
