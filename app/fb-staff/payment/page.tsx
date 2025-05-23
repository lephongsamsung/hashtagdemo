"use client"

import { useState } from "react"
import { Calculator, Check, CreditCard, DollarSign, Printer, Receipt, Smartphone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaymentPage() {
  const [selectedTable, setSelectedTable] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("cash")
  const [amountReceived, setAmountReceived] = useState("")
  const [discountCode, setDiscountCode] = useState("")
  const [discountApplied, setDiscountApplied] = useState(false)
  const [paymentStep, setPaymentStep] = useState(1)
  const [paymentComplete, setPaymentComplete] = useState(false)

  // Tables with orders
  const tables = [
    { id: "A1", customers: 2, orderTime: "14:15", total: 125000 },
    { id: "A3", customers: 3, orderTime: "14:20", total: 210000 },
    { id: "B2", customers: 2, orderTime: "14:25", total: 95000 },
    { id: "C1", customers: 6, orderTime: "14:30", total: 350000 },
  ]

  // Order items for the selected table
  const orderItems = [
    { name: "Cà phê sữa đá", price: 35000, quantity: 2, total: 70000 },
    { name: "Bánh mì thịt nguội", price: 45000, quantity: 1, total: 45000 },
    { name: "Nước cam", price: 30000, quantity: 1, total: 30000 },
  ]

  // Quick amount buttons
  const quickAmounts = [50000, 100000, 200000, 500000]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const getSubtotal = () => {
    return orderItems.reduce((total, item) => total + item.total, 0)
  }

  const getTax = () => {
    return getSubtotal() * 0.08
  }

  const getDiscount = () => {
    return discountApplied ? getSubtotal() * 0.1 : 0
  }

  const getTotal = () => {
    return getSubtotal() + getTax() - getDiscount()
  }

  const getChange = () => {
    const received = Number.parseInt(amountReceived.replace(/\D/g, "")) || 0
    return received - getTotal()
  }

  const handleSelectTable = (tableId: string) => {
    setSelectedTable(tableId)
    setPaymentMethod("cash")
    setAmountReceived("")
    setDiscountCode("")
    setDiscountApplied(false)
    setPaymentStep(1)
    setPaymentComplete(false)
  }

  const handleApplyDiscount = () => {
    if (discountCode) {
      setDiscountApplied(true)
    }
  }

  const handleAmountReceived = (amount: number) => {
    setAmountReceived(formatPrice(amount))
  }

  const handlePayment = () => {
    if (paymentStep === 1) {
      setPaymentStep(2)
    } else {
      // Process payment
      setPaymentComplete(true)
    }
  }

  const handleNewPayment = () => {
    setSelectedTable("")
    setPaymentMethod("cash")
    setAmountReceived("")
    setDiscountCode("")
    setDiscountApplied(false)
    setPaymentStep(1)
    setPaymentComplete(false)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Thanh toán</h1>
        <p className="mt-2 text-muted-foreground">Xử lý thanh toán cho khách hàng</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Tables */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Bàn cần thanh toán</CardTitle>
              <CardDescription>Chọn bàn để xử lý thanh toán</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-300px)]">
                <div className="space-y-4">
                  {tables.map((table) => (
                    <div
                      key={table.id}
                      className={`cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted/50 ${
                        selectedTable === table.id ? "border-blue-500 bg-blue-50" : ""
                      }`}
                      onClick={() => handleSelectTable(table.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                            Bàn {table.id}
                          </div>
                          <span className="text-sm text-muted-foreground">{table.customers} người</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{table.orderTime}</div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm">Tổng tiền:</span>
                        <span className="font-medium">{formatPrice(table.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Payment */}
        <div className="lg:col-span-2">
          {!selectedTable ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Receipt className="h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Chưa chọn bàn</h3>
                <p className="mt-2 text-muted-foreground">
                  Vui lòng chọn bàn từ danh sách bên trái để xử lý thanh toán
                </p>
              </CardContent>
            </Card>
          ) : paymentComplete ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="rounded-full bg-green-100 p-3 text-green-700">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Thanh toán thành công</h3>
                <p className="mt-2 text-muted-foreground">
                  Bàn {selectedTable} đã được thanh toán thành công với số tiền {formatPrice(getTotal())}
                </p>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" onClick={handleNewPayment}>
                    Thanh toán mới
                  </Button>
                  <Button>
                    <Printer className="mr-2 h-4 w-4" /> In hóa đơn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Thanh toán cho bàn {selectedTable}</CardTitle>
                <CardDescription>Xử lý thanh toán và in hóa đơn</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="order" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="order">Chi tiết đơn hàng</TabsTrigger>
                    <TabsTrigger value="payment">Thanh toán</TabsTrigger>
                  </TabsList>
                  <TabsContent value="order">
                    <div className="space-y-4">
                      <div className="rounded-md border">
                        <div className="grid grid-cols-12 border-b bg-muted/50 p-3 text-sm font-medium">
                          <div className="col-span-6">Món</div>
                          <div className="col-span-2 text-right">Đơn giá</div>
                          <div className="col-span-2 text-right">SL</div>
                          <div className="col-span-2 text-right">Thành tiền</div>
                        </div>
                        <div className="divide-y">
                          {orderItems.map((item, index) => (
                            <div key={index} className="grid grid-cols-12 items-center p-3 text-sm">
                              <div className="col-span-6">{item.name}</div>
                              <div className="col-span-2 text-right">{formatPrice(item.price)}</div>
                              <div className="col-span-2 text-right">{item.quantity}</div>
                              <div className="col-span-2 text-right font-medium">{formatPrice(item.total)}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg bg-muted/50 p-4">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span>Tổng tiền món:</span>
                            <span>{formatPrice(getSubtotal())}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Thuế (8%):</span>
                            <span>{formatPrice(getTax())}</span>
                          </div>
                          {discountApplied && (
                            <div className="flex items-center justify-between text-green-600">
                              <span>Giảm giá (10%):</span>
                              <span>-{formatPrice(getDiscount())}</span>
                            </div>
                          )}
                          <Separator className="my-2" />
                          <div className="flex items-center justify-between font-bold">
                            <span>Tổng cộng:</span>
                            <span>{formatPrice(getTotal())}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Input
                          placeholder="Nhập mã giảm giá"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <Button
                          variant="outline"
                          onClick={handleApplyDiscount}
                          disabled={!discountCode || discountApplied}
                        >
                          Áp dụng
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="payment">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Phương thức thanh toán</Label>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash" className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4" /> Tiền mặt
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4" /> Thẻ
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ewallet" id="ewallet" />
                            <Label htmlFor="ewallet" className="flex items-center gap-2">
                              <Smartphone className="h-4 w-4" /> Ví điện tử
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "cash" && (
                        <div className="space-y-2">
                          <Label htmlFor="amount-received">Số tiền nhận</Label>
                          <Input
                            id="amount-received"
                            value={amountReceived}
                            onChange={(e) => setAmountReceived(e.target.value)}
                            placeholder="0đ"
                          />
                          <div className="flex flex-wrap gap-2">
                            {quickAmounts.map((amount) => (
                              <Button
                                key={amount}
                                variant="outline"
                                size="sm"
                                onClick={() => handleAmountReceived(amount)}
                              >
                                {formatPrice(amount)}
                              </Button>
                            ))}
                            <Button variant="outline" size="sm" onClick={() => handleAmountReceived(getTotal())}>
                              Đủ tiền
                            </Button>
                          </div>

                          {amountReceived && Number.parseInt(amountReceived.replace(/\D/g, "")) >= getTotal() && (
                            <div className="mt-4 rounded-lg bg-green-50 p-4">
                              <div className="flex items-center justify-between">
                                <span>Tiền thừa:</span>
                                <span className="font-bold text-green-600">{formatPrice(getChange())}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {paymentMethod === "card" && (
                        <div className="rounded-lg bg-blue-50 p-4 text-center">
                          <CreditCard className="mx-auto h-12 w-12 text-blue-600" />
                          <p className="mt-2">Vui lòng quẹt thẻ hoặc chạm thẻ vào máy POS</p>
                        </div>
                      )}

                      {paymentMethod === "ewallet" && (
                        <div className="rounded-lg bg-purple-50 p-4 text-center">
                          <Smartphone className="mx-auto h-12 w-12 text-purple-600" />
                          <p className="mt-2">Vui lòng quét mã QR hoặc nhập số điện thoại</p>
                          <div className="mt-4 flex justify-center">
                            <div className="h-32 w-32 rounded-lg bg-white p-2">
                              <div className="h-full w-full rounded border border-dashed border-gray-300 flex items-center justify-center text-xs text-muted-foreground">
                                Mã QR
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setSelectedTable("")}>
                  <X className="mr-2 h-4 w-4" /> Hủy
                </Button>
                <Button
                  onClick={handlePayment}
                  disabled={
                    (paymentMethod === "cash" &&
                      (!amountReceived || Number.parseInt(amountReceived.replace(/\D/g, "")) < getTotal())) ||
                    paymentStep === 2
                  }
                >
                  {paymentStep === 1 ? (
                    <>
                      <Calculator className="mr-2 h-4 w-4" /> Xác nhận thanh toán
                    </>
                  ) : (
                    <>
                      <Printer className="mr-2 h-4 w-4" /> In hóa đơn
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
