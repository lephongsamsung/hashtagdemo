"use client"

import { useState } from "react"
import { CalendarIcon, ChevronRight, Clock, Users } from "lucide-react"
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

export default function TableBookingPage() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>("")
  const [guests, setGuests] = useState<string>("2")
  const [location, setLocation] = useState<string>("")
  const [tableType, setTableType] = useState<string>("")
  const [step, setStep] = useState(1)

  // Locations data
  const locations = [
    { id: "lang-ha", name: "Hashtag Láng Hạ", address: "123 Láng Hạ, Ba Đình, Hà Nội" },
    { id: "tran-duy-hung", name: "Hashtag Trần Duy Hưng", address: "45 Trần Duy Hưng, Cầu Giấy, Hà Nội" },
    { id: "nguyen-chi-thanh", name: "Hashtag Nguyễn Chí Thanh", address: "67 Nguyễn Chí Thanh, Đống Đa, Hà Nội" },
  ]

  // Available time slots
  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ]

  // Table types
  const tableTypes = [
    { id: "standard", name: "Bàn tiêu chuẩn", description: "Phù hợp cho ăn uống và trò chuyện" },
    { id: "window", name: "Bàn cạnh cửa sổ", description: "Tầm nhìn đẹp, ánh sáng tự nhiên" },
    { id: "private", name: "Bàn khu vực riêng tư", description: "Không gian yên tĩnh, riêng tư hơn" },
  ]

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    // Handle booking submission
    alert("Đặt bàn thành công!")
    // Reset form or redirect
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Đặt bàn</h1>
        <p className="mt-2 text-muted-foreground">Đặt bàn tại Hashtag Space để có trải nghiệm tuyệt vời</p>
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
              <span className="mt-2 text-sm">Chi nhánh</span>
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

        {/* Step 1: Date, Time, Guests */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Chọn thời gian và số người</CardTitle>
              <CardDescription>Vui lòng chọn ngày, giờ và số người cho đặt bàn của bạn</CardDescription>
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

              <div className="space-y-2">
                <Label htmlFor="time">Giờ</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time" className="w-full">
                    <SelectValue placeholder="Chọn giờ">
                      {time ? (
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
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
                    <SelectItem value="9+">9+ người (gọi trực tiếp)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => window.history.back()}>
                Quay lại
              </Button>
              <Button onClick={handleNextStep} disabled={!date || !time || !guests}>
                Tiếp tục <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: Location and Table Type */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Chọn chi nhánh và loại bàn</CardTitle>
              <CardDescription>Vui lòng chọn chi nhánh và loại bàn bạn muốn đặt</CardDescription>
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
                <Label>Loại bàn</Label>
                <RadioGroup value={tableType} onValueChange={setTableType} className="space-y-3">
                  {tableTypes.map((type) => (
                    <div key={type.id} className="flex items-start space-x-3">
                      <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                      <Label htmlFor={type.id} className="flex flex-col space-y-1 font-normal">
                        <span className="font-medium">{type.name}</span>
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
              <Button onClick={handleNextStep} disabled={!location || !tableType}>
                Tiếp tục <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Xác nhận đặt bàn</CardTitle>
              <CardDescription>Vui lòng kiểm tra thông tin đặt bàn của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Ngày và giờ</div>
                    <div className="font-medium">
                      {date ? format(date, "PPP", { locale: vi }) : ""} • {time}
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
                    <div className="text-sm font-medium text-muted-foreground">Loại bàn</div>
                    <div className="font-medium">{tableTypes.find((type) => type.id === tableType)?.name || ""}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Ghi chú đặc biệt (không bắt buộc)</Label>
                <Input id="notes" placeholder="Ví dụ: Tôi muốn bàn yên tĩnh để làm việc" />
              </div>

              <div className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-800">
                <p>
                  <strong>Lưu ý:</strong> Vui lòng đến đúng giờ. Chúng tôi sẽ giữ bàn trong vòng 15 phút sau giờ đặt.
                  Nếu bạn muốn hủy hoặc thay đổi, vui lòng thông báo trước ít nhất 2 giờ.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Quay lại
              </Button>
              <Button onClick={handleSubmit}>Xác nhận đặt bàn</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
