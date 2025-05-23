"use client"

import { useState } from "react"
import { CalendarIcon, ChevronRight, Clock, Laptop, Users } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export default function CoworkingBookingPage() {
  const [date, setDate] = useState<Date>()
  const [startTime, setStartTime] = useState<string>("")
  const [duration, setDuration] = useState<string>("2")
  const [guests, setGuests] = useState<string>("1")
  const [location, setLocation] = useState<string>("")
  const [spaceType, setSpaceType] = useState<string>("")
  const [step, setStep] = useState(1)

  // Locations data
  const locations = [
    { id: "lang-ha", name: "Hashtag Láng Hạ", address: "123 Láng Hạ, Ba Đình, Hà Nội" },
    { id: "tran-duy-hung", name: "Hashtag Trần Duy Hưng", address: "45 Trần Duy Hưng, Cầu Giấy, Hà Nội" },
    { id: "nguyen-chi-thanh", name: "Hashtag Nguyễn Chí Thanh", address: "67 Nguyễn Chí Thanh, Đống Đa, Hà Nội" },
  ]

  // Available time slots
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ]

  // Duration options
  const durationOptions = [
    { value: "1", label: "1 giờ" },
    { value: "2", label: "2 giờ" },
    { value: "4", label: "4 giờ" },
    { value: "8", label: "8 giờ (Cả ngày)" },
  ]

  // Space types
  const spaceTypes = [
    {
      id: "quiet",
      name: "Khu vực yên tĩnh",
      description: "Không gian yên tĩnh, phù hợp cho công việc cần tập trung",
      price: 50000,
    },
    {
      id: "common",
      name: "Khu vực chung",
      description: "Không gian mở, phù hợp cho làm việc nhóm và trao đổi",
      price: 40000,
    },
    {
      id: "meeting-small",
      name: "Phòng họp nhỏ (2-4 người)",
      description: "Phòng họp riêng tư cho nhóm nhỏ",
      price: 150000,
    },
    {
      id: "meeting-large",
      name: "Phòng họp lớn (5-8 người)",
      description: "Phòng họp rộng rãi cho nhóm lớn",
      price: 250000,
    },
  ]

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle booking submission
    alert("Đặt chỗ thành công!")
    // Reset form or redirect
  }

  // Calculate end time based on start time and duration
  const calculateEndTime = () => {
    if (!startTime) return ""
    const [hours, minutes] = startTime.split(":").map(Number)
    const durationHours = Number.parseInt(duration)
    const endHours = hours + durationHours
    const endMinutes = minutes

    // Format end time
    return `${endHours.toString().padStart(2, "0")}:${endMinutes.toString().padStart(2, "0")}`
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!spaceType) return 0
    const selectedSpace = spaceTypes.find((type) => type.id === spaceType)
    if (!selectedSpace) return 0

    const durationHours = Number.parseInt(duration)
    const guestsCount = Number.parseInt(guests)

    // Base price calculation
    let price = selectedSpace.price * durationHours

    // Additional guests fee for meeting rooms
    if (spaceType.includes("meeting") && guestsCount > 2) {
      price += (guestsCount - 2) * 20000 * durationHours // 20,000 VND per additional person per hour
    }

    return price
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Đặt chỗ Coworking</h1>
        <p className="mt-2 text-muted-foreground">Đặt chỗ làm việc tại Hashtag Space</p>
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Progress steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step >= 1 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
                }`}
              >
                1
              </div>
              <span className="mt-2 text-sm">Thời gian</span>
            </div>
            <div className="h-1 flex-1 bg-gray-200">
              <div className={`h-full ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`} />
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step >= 2 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
                }`}
              >
                2
              </div>
              <span className="mt-2 text-sm">Không gian</span>
            </div>
            <div className="h-1 flex-1 bg-gray-200">
              <div className={`h-full ${step >= 3 ? "bg-blue-600" : "bg-gray-200"}`} />
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step >= 3 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
                }`}
              >
                3
              </div>
              <span className="mt-2 text-sm">Xác nhận</span>
            </div>
          </div>
        </div>

        {/* Step 1: Date, Time, Duration, Guests */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Chọn thời gian và số người</CardTitle>
              <CardDescription>Vui lòng chọn ngày, giờ và thời lượng cho đặt chỗ của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="date">Ngày</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: vi }) : "Chọn ngày"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={vi}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Giờ bắt đầu</Label>
                  <Select value={startTime} onValueChange={setStartTime}>
                    <SelectTrigger id="start-time" className="w-full">
                      <SelectValue placeholder="Chọn giờ">
                        {startTime ? (
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {startTime}
                          </div>
                        ) : (
                          "Chọn giờ"
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Thời lượng</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger id="duration" className="w-full">
                      <SelectValue placeholder="Chọn thời lượng" />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {startTime && duration && (
                <div className="rounded-md bg-blue-50 p-3 text-sm">
                  <div className="flex items-center text-blue-700">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>
                      Thời gian: {startTime} - {calculateEndTime()}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="guests">Số người</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger id="guests" className="w-full">
                    <SelectValue placeholder="Chọn số người">
                      {guests ? (
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          {guests} người
                        </div>
                      ) : (
                        "Chọn số người"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} người
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => window.history.back()}>
                Quay lại
              </Button>
              <Button onClick={handleNextStep} disabled={!date || !startTime || !duration || !guests}>
                Tiếp tục <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: Location and Space Type */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Chọn chi nhánh và loại không gian</CardTitle>
              <CardDescription>Vui lòng chọn chi nhánh và loại không gian bạn muốn đặt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Chi nhánh</Label>
                <RadioGroup value={location} onValueChange={setLocation} className="space-y-3">
                  {locations.map((loc) => (
                    <div key={loc.id} className="flex items-start space-x-3">
                      <RadioGroupItem value={loc.id} id={loc.id} className="mt-1" />
                      <Label htmlFor={loc.id} className="flex flex-col space-y-1 font-normal">
                        <span className="font-medium">{loc.name}</span>
                        <span className="text-sm text-muted-foreground">{loc.address}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Loại không gian</Label>
                <RadioGroup value={spaceType} onValueChange={setSpaceType} className="space-y-3">
                  {spaceTypes.map((type) => (
                    <div key={type.id} className="flex items-start space-x-3">
                      <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                      <Label htmlFor={type.id} className="flex flex-1 flex-col space-y-1 font-normal">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{type.name}</span>
                          <span className="font-medium text-blue-600">{formatPrice(type.price)}/giờ</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{type.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Quay lại
              </Button>
              <Button onClick={handleNextStep} disabled={!location || !spaceType}>
                Tiếp tục <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Xác nhận đặt chỗ</CardTitle>
              <CardDescription>Vui lòng kiểm tra thông tin đặt chỗ của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Ngày</div>
                    <div className="font-medium">{date ? format(date, "PPP", { locale: vi }) : ""}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Thời gian</div>
                    <div className="font-medium">
                      {startTime} - {calculateEndTime()} ({duration} giờ)
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Số người</div>
                    <div className="font-medium">{guests} người</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Chi nhánh</div>
                    <div className="font-medium">{locations.find((loc) => loc.id === location)?.name || ""}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Loại không gian</div>
                    <div className="font-medium">{spaceTypes.find((type) => type.id === spaceType)?.name || ""}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Tổng tiền</div>
                    <div className="font-medium text-blue-600">{formatPrice(calculateTotalPrice())}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Yêu cầu đặc biệt (không bắt buộc)</Label>
                <Input id="notes" placeholder="Ví dụ: Tôi cần ổ cắm điện gần chỗ ngồi" />
              </div>

              <div className="space-y-2">
                <Label>Dịch vụ thêm (không bắt buộc)</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="service-1" className="rounded border-gray-300" />
                    <Label htmlFor="service-1" className="flex items-center justify-between w-full font-normal">
                      <span>Thuê laptop</span>
                      <span className="text-sm text-muted-foreground">+100.000đ</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="service-2" className="rounded border-gray-300" />
                    <Label htmlFor="service-2" className="flex items-center justify-between w-full font-normal">
                      <span>Máy in (10 trang)</span>
                      <span className="text-sm text-muted-foreground">+20.000đ</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="service-3" className="rounded border-gray-300" />
                    <Label htmlFor="service-3" className="flex items-center justify-between w-full font-normal">
                      <span>Combo cà phê</span>
                      <span className="text-sm text-muted-foreground">+50.000đ</span>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-800">
                <p>
                  <strong>Lưu ý:</strong> Vui lòng đến đúng giờ. Chúng tôi sẽ giữ chỗ trong vòng 30 phút sau giờ đặt.
                  Nếu bạn muốn hủy hoặc thay đổi, vui lòng thông báo trước ít nhất 2 giờ.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Quay lại
              </Button>
              <Button onClick={handleSubmit}>
                <Laptop className="mr-2 h-4 w-4" /> Xác nhận đặt chỗ
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
