"use client"

import { useState } from "react"
import { Calendar, CreditCard, Download, Filter, Plus, Receipt, Search } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function PaymentsPage() {
  const [date, setDate] = useState<Date>()
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [addCardOpen, setAddCardOpen] = useState(false)
  const [invoiceDetailsOpen, setInvoiceDetailsOpen] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null)

  // Payment methods
  const paymentMethods = [
    {
      id: "card-1",
      type: "visa",
      name: "Visa ****4242",
      expiry: "05/26",
      isDefault: true,
    },
    {
      id: "card-2",
      type: "mastercard",
      name: "Mastercard ****8888",
      expiry: "12/25",
      isDefault: false,
    },
  ]

  // Invoices data
  const invoices = [
    {
      id: "INV-12345",
      date: "22/05/2025",
      amount: "125.000đ",
      type: "F&B",
      branch: "Hashtag Láng Hạ",
      status: "paid",
      items: [
        { name: "Cà phê sữa đá", quantity: 2, price: "35.000đ", total: "70.000đ" },
        { name: "Bánh mì thịt nguội", quantity: 1, price: "45.000đ", total: "45.000đ" },
      ],
    },
    {
      id: "INV-12344",
      date: "20/05/2025",
      amount: "350.000đ",
      type: "Coworking",
      branch: "Hashtag Trần Duy Hưng",
      status: "paid",
      items: [
        { name: "Chỗ ngồi khu vực yên tĩnh (4 giờ)", quantity: 1, price: "200.000đ", total: "200.000đ" },
        { name: "Combo cà phê", quantity: 3, price: "50.000đ", total: "150.000đ" },
      ],
    },
    {
      id: "INV-12343",
      date: "15/05/2025",
      amount: "210.000đ",
      type: "F&B",
      branch: "Hashtag Nguyễn Chí Thanh",
      status: "paid",
      items: [
        { name: "Trà đào cam sả", quantity: 3, price: "40.000đ", total: "120.000đ" },
        { name: "Bánh tiramisu", quantity: 2, price: "45.000đ", total: "90.000đ" },
      ],
    },
    {
      id: "INV-12342",
      date: "10/05/2025",
      amount: "450.000đ",
      type: "Coworking",
      branch: "Hashtag Láng Hạ",
      status: "paid",
      items: [
        { name: "Phòng họp nhỏ (2 giờ)", quantity: 1, price: "300.000đ", total: "300.000đ" },
        { name: "Dịch vụ in ấn", quantity: 1, price: "50.000đ", total: "50.000đ" },
        { name: "Combo cà phê", quantity: 2, price: "50.000đ", total: "100.000đ" },
      ],
    },
  ]

  const handleViewInvoice = (invoice: any) => {
    setSelectedInvoice(invoice)
    setInvoiceDetailsOpen(true)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Thanh toán & Hóa đơn</h1>
        <p className="mt-2 text-muted-foreground">Quản lý phương thức thanh toán và xem lịch sử hóa đơn</p>
      </div>

      <Tabs defaultValue="payment-methods">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="payment-methods">
            <CreditCard className="mr-2 h-4 w-4" /> Phương thức thanh toán
          </TabsTrigger>
          <TabsTrigger value="invoices">
            <Receipt className="mr-2 h-4 w-4" /> Lịch sử hóa đơn
          </TabsTrigger>
        </TabsList>

        {/* Payment Methods Tab */}
        <TabsContent value="payment-methods">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Phương thức thanh toán của tôi</h2>
            <Button onClick={() => setAddCardOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Thêm phương thức mới
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paymentMethods.map((method) => (
              <Card key={method.id} className={method.isDefault ? "border-blue-500" : ""}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {method.type === "visa" ? (
                        <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                          <CreditCard className="h-5 w-5" />
                        </div>
                      ) : (
                        <div className="rounded-md bg-red-100 p-2 text-red-700">
                          <CreditCard className="h-5 w-5" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium">{method.name}</h3>
                        <p className="text-sm text-muted-foreground">Hết hạn: {method.expiry}</p>
                      </div>
                    </div>
                    {method.isDefault && (
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                        Mặc định
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Chỉnh sửa
                    </Button>
                    {!method.isDefault && (
                      <Button variant="outline" size="sm" className="flex-1">
                        Đặt mặc định
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="flex h-full cursor-pointer flex-col items-center justify-center border-dashed p-6 text-center hover:border-blue-500 hover:bg-blue-50/50">
              <div className="flex flex-col items-center justify-center" onClick={() => setAddCardOpen(true)}>
                <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-700">
                  <Plus className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Thêm phương thức thanh toán</h3>
                <p className="mt-1 text-sm text-muted-foreground">Thêm thẻ tín dụng, thẻ ghi nợ hoặc ví điện tử</p>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold">Lịch sử hóa đơn</h2>
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Tìm kiếm hóa đơn..." className="w-full pl-10 md:w-60" />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Lọc
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h3 className="font-medium">Lọc hóa đơn</h3>
                    <div className="space-y-2">
                      <Label>Ngày</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP", { locale: vi }) : "Chọn ngày"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            locale={vi}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Loại</Label>
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
                      <Label>Chi nhánh</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tất cả chi nhánh" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tất cả chi nhánh</SelectItem>
                          <SelectItem value="lang-ha">Hashtag Láng Hạ</SelectItem>
                          <SelectItem value="tran-duy-hung">Hashtag Trần Duy Hưng</SelectItem>
                          <SelectItem value="nguyen-chi-thanh">Hashtag Nguyễn Chí Thanh</SelectItem>
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

          <div className="rounded-md border">
            <div className="grid grid-cols-12 border-b bg-muted/50 p-3 text-sm font-medium">
              <div className="col-span-2">Mã hóa đơn</div>
              <div className="col-span-2">Ngày</div>
              <div className="col-span-2">Loại</div>
              <div className="col-span-3">Chi nhánh</div>
              <div className="col-span-2 text-right">Số tiền</div>
              <div className="col-span-1"></div>
            </div>
            <div className="divide-y">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="grid grid-cols-12 items-center p-3 text-sm">
                  <div className="col-span-2 font-medium">{invoice.id}</div>
                  <div className="col-span-2">{invoice.date}</div>
                  <div className="col-span-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        invoice.type === "F&B" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {invoice.type}
                    </span>
                  </div>
                  <div className="col-span-3">{invoice.branch}</div>
                  <div className="col-span-2 text-right font-medium">{invoice.amount}</div>
                  <div className="col-span-1 flex justify-end">
                    <Button variant="ghost" size="icon" onClick={() => handleViewInvoice(invoice)}>
                      <Receipt className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Payment Method Dialog */}
      <Dialog open={addCardOpen} onOpenChange={setAddCardOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Thêm phương thức thanh toán</DialogTitle>
            <DialogDescription>Thêm thẻ tín dụng, thẻ ghi nợ hoặc ví điện tử</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">Số thẻ</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Ngày hết hạn</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">Mã bảo mật (CVC)</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Tên chủ thẻ</Label>
              <Input id="name" placeholder="NGUYEN VAN A" />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="default" className="rounded border-gray-300" />
              <Label htmlFor="default" className="font-normal">
                Đặt làm phương thức thanh toán mặc định
              </Label>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setAddCardOpen(false)}>
                Hủy
              </Button>
              <Button onClick={() => setAddCardOpen(false)}>Lưu</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Invoice Details Dialog */}
      {selectedInvoice && (
        <Dialog open={invoiceDetailsOpen} onOpenChange={setInvoiceDetailsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Chi tiết hóa đơn</DialogTitle>
              <DialogDescription>
                {selectedInvoice.id} • {selectedInvoice.date}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Chi nhánh:</span>
                    <span>{selectedInvoice.branch}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Loại:</span>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        selectedInvoice.type === "F&B" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {selectedInvoice.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Trạng thái:</span>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                      Đã thanh toán
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-medium">Chi tiết đơn hàng</h3>
                <div className="space-y-2">
                  {selectedInvoice.items.map((item: any, index: number) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <div className="text-xs text-muted-foreground">{item.price} / đơn vị</div>
                      </div>
                      <div className="font-medium">{item.total}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-center justify-between font-medium">
                    <span>Tổng cộng</span>
                    <span>{selectedInvoice.amount}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setInvoiceDetailsOpen(false)}>
                  Đóng
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Tải hóa đơn
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
