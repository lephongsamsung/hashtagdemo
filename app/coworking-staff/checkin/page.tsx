"use client"

import { useState } from "react"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Booking {
  id: string
  customer: {
    name: string
    phone: string
    email: string
  }
  date: string
  time: string
  duration: string
  space: string
  seat: string
  status: "pending" | "checked-in" | "checked-out" | "cancelled"
}

export default function CheckinPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [bookingDetailsOpen, setBookingDetailsOpen] = useState(false)
  const [checkInDialogOpen, setCheckInDialogOpen] = useState(false)
  const [checkOutDialogOpen, setCheckOutDialogOpen] = useState(false)
  const [additionalTime, setAdditionalTime] = useState("")

  // Bookings data
  const bookings: Booking[] = [
    {
      id: "CWS-1001",
      customer: {
        name: "Nguyễn Văn A",
        phone: "0912345678",
        email: "nguyenvana@example.com",
      },
      date: "23/05/2025",
      time: "09:00 - 13:00",
      duration: "4 giờ",
      space: "Khu vực yên tĩnh",
      seat: "A5",
      status: "pending",
    },
    {
      id: "CWS-1002",
      customer: {
        name: "Trần Thị B",
        phone: "0923456789",
        email: "tranthib@example.com",
      },
      date: "23/05/2025",
      time: "10:00 - 12:00",
      duration: "2 giờ",
      space: "Phòng họp nhỏ",
      seat: "M1",
      status: "pending",
    },
    {
      id: "CWS-1003",
      customer: {
        name: "Lê Văn C",
        phone: "0934567890",
        email: "levanc@example.com",
      },
      date: "23/05/2025",
      time: "11:30 - 17:30",
      duration: "6 giờ",
      space: "Khu vực chung",
      seat: "B3",
      status: "checked-in",
    },
    {
      id: "CWS-1004",
      customer: {
        name: "Phạm Thị D",
        phone: "0945678901",
        email: "phamthid@example.com",
      },
      date: "23/05/2025",
      time: "15:00 - 18:00",
      duration: "3 giờ",
      space: "Khu vực yên tĩnh",
      seat: "A2",
      status: "pending",
    },
    {
      id: "CWS-1005",
      customer: {
        name: "Hoàng Văn E",
        phone: "0956789012",
        email: "hoangvane@example.com",
      },
      date: "23/05/2025",
      time: "16:00 - 18:00",
      duration: "2 giờ",
      space: "Phòng họp lớn",
      seat: "M3",
      status: "pending",
    },
  ]

  // Filter bookings based on search query and selected date
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.phone.includes(searchQuery) ||
      booking.space.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.seat.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDate = selectedDate ? booking.date === format(selectedDate, "dd/MM/yyyy", { locale: vi }) : true

    return matchesSearch && matchesDate
  })

  const handleViewBooking = (booking: Booking) => {
    setSelectedBooking(booking)
    setBookingDetailsOpen(true)
  }

  const handleCheckIn = (booking: Booking) => {
    setSelectedBooking(booking)
    setCheckInDialogOpen(true)
  }

  const handleCheckOut = (booking: Booking) => {
    setSelectedBooking(booking)
    setCheckOutDialogOpen(true)
  }

  const confirmCheckIn = () => {
    // Handle check-in logic
    alert(`Đã check-in thành công cho ${selectedBooking?.customer.name}!`)
    setCheckInDialogOpen(false)
    setBookingDetailsOpen(false)
  }

  const confirmCheckOut = () => {
    // Handle check-out logic
    alert(`Đã check-out thành công cho ${selectedBooking?.customer.name}!`)
    setCheckOutDialogOpen(false)
    setBookingDetailsOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">Chờ check-in</span>
        )
      case "checked-in":
        return (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Đã check-in</span>
        )
      case "checked-out":
        return (
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">Đã check-out</span>
        )
      case "cancelled":
        return <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">Đã hủy</span>
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Check-in / Check-out</h1>
        <p className="mt-2 text-muted-foreground">Quản lý check-in và check-out cho khách hàng</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Filters */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Bộ lọc</CardTitle>
              <CardDescription>Lọc danh sách đặt chỗ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Tìm kiếm</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Tìm theo tên, số điện thoại, mã đặt chỗ..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Ngày</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP", { locale: vi }) : "Chọn ngày"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      locale={vi}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Button variant="default" className="w-full" onClick={() => setSelectedDate(undefined)}>
                  Xóa bộ lọc
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings List */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Danh sách đặt chỗ</CardTitle>
              <CardDescription>
                {filteredBookings.length} đặt chỗ{" "}
                {selectedDate ? `vào ngày ${format(selectedDate, "dd/MM/yyyy", { locale: vi })}` : ""}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex flex-col rounded-lg border p-4 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="mb-4 sm:mb-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{booking.customer.name}</span>
                          {getStatusBadge(booking.status)}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          <p>Mã đặt chỗ: {booking.id}</p>
                          <p>
                            {booking.date} | {booking.time} | {booking.space} - {booking.seat}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleViewBooking(booking)}>
                          Chi tiết
                        </Button>
                        {booking.status === "pending" && (
                          <Button variant="default" size="sm" onClick={() => handleCheckIn(booking)}>
                            Check-in
                          </Button>
                        )}
                        {booking.status === "checked-in" && (
                          <Button variant="default" size="sm" onClick={() => handleCheckOut(booking)}>
                            Check-out
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground">Không tìm thấy đặt chỗ nào phù hợp với bộ lọc</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Booking Details Dialog */}
      <Dialog open={bookingDetailsOpen} onOpenChange={setBookingDetailsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chi tiết đặt chỗ</DialogTitle>
            <DialogDescription>Mã đặt chỗ: {selectedBooking?.id}</DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Khách hàng</h4>
                  <p className="font-medium">{selectedBooking.customer.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Trạng thái</h4>
                  <div>{getStatusBadge(selectedBooking.status)}</div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Số điện thoại</h4>
                  <p>{selectedBooking.customer.phone}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                  <p>{selectedBooking.customer.email}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Ngày</h4>
                  <p>{selectedBooking.date}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Thời gian</h4>
                  <p>{selectedBooking.time}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Khu vực</h4>
                  <p>{selectedBooking.space}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Vị trí</h4>
                  <p>{selectedBooking.seat}</p>
                </div>
              </div>

              <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <Button variant="outline" onClick={() => setBookingDetailsOpen(false)}>
                  Đóng
                </Button>
                {selectedBooking.status === "pending" && (
                  <Button variant="default" onClick={() => handleCheckIn(selectedBooking)}>
                    Check-in
                  </Button>
                )}
                {selectedBooking.status === "checked-in" && (
                  <Button variant="default" onClick={() => handleCheckOut(selectedBooking)}>
                    Check-out
                  </Button>
                )}
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Check-in Dialog */}
      <Dialog open={checkInDialogOpen} onOpenChange={setCheckInDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Xác nhận check-in</DialogTitle>
            <DialogDescription>
              Xác nhận check-in cho khách hàng {selectedBooking?.customer.name} (Mã đặt chỗ: {selectedBooking?.id})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Ngày</h4>
                <p>{selectedBooking?.date}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Thời gian</h4>
                <p>{selectedBooking?.time}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Khu vực</h4>
                <p>{selectedBooking?.space}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Vị trí</h4>
                <p>{selectedBooking?.seat}</p>
              </div>
            </div>

            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button variant="outline" onClick={() => setCheckInDialogOpen(false)}>
                Hủy
              </Button>
              <Button variant="default" onClick={confirmCheckIn}>
                Xác nhận check-in
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {/* Check-out Dialog */}
      <Dialog open={checkOutDialogOpen} onOpenChange={setCheckOutDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Xác nhận check-out</DialogTitle>
            <DialogDescription>
              Xác nhận check-out cho khách hàng {selectedBooking?.customer.name} (Mã đặt chỗ: {selectedBooking?.id})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Ngày</h4>
                <p>{selectedBooking?.date}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Thời gian</h4>
                <p>{selectedBooking?.time}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Khu vực</h4>
                <p>{selectedBooking?.space}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Vị trí</h4>
                <p>{selectedBooking?.seat}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-time">Thêm giờ (nếu có)</Label>
              <Select value={additionalTime} onValueChange={setAdditionalTime}>
                <SelectTrigger id="additional-time">
                  <SelectValue placeholder="Không có thêm giờ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Không có thêm giờ</SelectItem>
                  <SelectItem value="30">30 phút</SelectItem>
                  <SelectItem value="60">1 giờ</SelectItem>
                  <SelectItem value="90">1 giờ 30 phút</SelectItem>
                  <SelectItem value="120">2 giờ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button variant="outline" onClick={() => setCheckOutDialogOpen(false)}>
                Hủy
              </Button>
              <Button variant="default" onClick={confirmCheckOut}>
                Xác nhận check-out
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
