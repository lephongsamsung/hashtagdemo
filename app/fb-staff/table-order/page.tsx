"use client"

import { useState } from "react"
import { Check, Minus, Plus, Search, ShoppingBag, Trash, X } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  preparationTime: string
}

interface OrderItem extends MenuItem {
  quantity: number
  specialRequest?: string
  totalPrice: number
}

export default function TableOrderPage() {
  const searchParams = useSearchParams()
  const tableId = searchParams.get("table") || "A1"

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [specialRequest, setSpecialRequest] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("cash")

  // Menu categories
  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "coffee", name: "Cà phê" },
    { id: "drinks", name: "Đồ uống" },
    { id: "food", name: "Đồ ăn" },
    { id: "desserts", name: "Tráng miệng" },
    { id: "snacks", name: "Đồ ăn vặt" },
  ]

  // Menu items
  const menuItems: MenuItem[] = [
    // Coffee
    {
      id: "coffee-1",
      name: "Cà phê sữa đá",
      description: "Cà phê phin truyền thống với sữa đặc, phục vụ với đá",
      price: 35000,
      category: "coffee",
      preparationTime: "3-5 phút",
    },
    {
      id: "coffee-2",
      name: "Cappuccino",
      description: "Espresso với sữa nóng và foam mịn, rắc bột cacao",
      price: 45000,
      category: "coffee",
      preparationTime: "5-7 phút",
    },
    {
      id: "coffee-3",
      name: "Latte",
      description: "Espresso với nhiều sữa nóng, tạo hình latte art đẹp mắt",
      price: 50000,
      category: "coffee",
      preparationTime: "5-7 phút",
    },

    // Drinks
    {
      id: "drink-1",
      name: "Trà đào cam sả",
      description: "Trà xanh pha với đào, cam tươi và sả thơm",
      price: 40000,
      category: "drinks",
      preparationTime: "5-7 phút",
    },
    {
      id: "drink-2",
      name: "Sinh tố bơ",
      description: "Sinh tố bơ tươi với sữa đặc và đá xay",
      price: 55000,
      category: "drinks",
      preparationTime: "7-10 phút",
    },

    // Food
    {
      id: "food-1",
      name: "Bánh mì thịt nguội",
      description: "Bánh mì giòn với thịt nguội, pate, rau sống và gia vị",
      price: 45000,
      category: "food",
      preparationTime: "10-15 phút",
    },
    {
      id: "food-2",
      name: "Sandwich gà nướng",
      description: "Sandwich với gà nướng, rau xanh, cà chua và sốt mayonnaise",
      price: 65000,
      category: "food",
      preparationTime: "10-15 phút",
    },

    // Desserts
    {
      id: "dessert-1",
      name: "Bánh tiramisu",
      description: "Bánh tiramisu Ý truyền thống với mascarpone và cà phê",
      price: 75000,
      category: "desserts",
      preparationTime: "Sẵn sàng",
    },
    {
      id: "dessert-2",
      name: "Bánh flan",
      description: "Bánh flan mềm mịn với caramel thơm ngon",
      price: 35000,
      category: "desserts",
      preparationTime: "Sẵn sàng",
    },

    // Snacks
    {
      id: "snack-1",
      name: "Khoai tây chiên",
      description: "Khoai tây chiên giòn rụm, ăn kèm với sốt cà chua",
      price: 30000,
      category: "snacks",
      preparationTime: "10-15 phút",
    },
  ]

  // Filter menu items based on search query and category
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToOrder = (item: MenuItem) => {
    const existingItemIndex = orderItems.findIndex((orderItem) => orderItem.id === item.id)

    if (existingItemIndex !== -1) {
      // Item already exists in order, increase quantity
      const updatedItems = [...orderItems]
      updatedItems[existingItemIndex].quantity += 1
      updatedItems[existingItemIndex].totalPrice =
        updatedItems[existingItemIndex].price * updatedItems[existingItemIndex].quantity
      setOrderItems(updatedItems)
    } else {
      // Add new item to order
      const newItem: OrderItem = {
        ...item,
        quantity: 1,
        totalPrice: item.price,
      }
      setOrderItems([...orderItems, newItem])
    }
  }

  const removeFromOrder = (index: number) => {
    setOrderItems((prev) => prev.filter((_, i) => i !== index))
  }

  const updateOrderItemQuantity = (index: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromOrder(index)
      return
    }

    setOrderItems((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity }
        }
        return item
      }),
    )
  }

  const updateSpecialRequest = (index: number, request: string) => {
    setOrderItems((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          return { ...item, specialRequest: request }
        }
        return item
      }),
    )
  }

  const getTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.totalPrice, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const handleSubmitOrder = () => {
    // Handle order submission
    alert(`Đã gửi đơn hàng cho bàn ${tableId}!`)
    // Reset form or redirect
    setOrderItems([])
    setSpecialRequest("")
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Gọi món tại bàn</h1>
          <p className="mt-2 text-muted-foreground">Bàn {tableId}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => window.history.back()}>
            <X className="mr-2 h-4 w-4" /> Hủy
          </Button>
          <Button disabled={orderItems.length === 0} onClick={handleSubmitOrder}>
            <Check className="mr-2 h-4 w-4" /> Gửi đơn hàng
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Menu */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Menu</CardTitle>
              <CardDescription>Chọn món ăn và đồ uống cho bàn {tableId}</CardDescription>
              <div className="mt-2 flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Tìm kiếm món..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="space-y-4">
                  {filteredItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-muted-foreground">Không tìm thấy món ăn</p>
                    </div>
                  ) : (
                    filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50"
                      >
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-sm font-medium">{formatPrice(item.price)}</span>
                            <span className="text-xs text-muted-foreground">• {item.preparationTime}</span>
                          </div>
                        </div>
                        <Button size="sm" onClick={() => addToOrder(item)}>
                          Thêm
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Đơn hàng</CardTitle>
              <CardDescription>Bàn {tableId}</CardDescription>
            </CardHeader>
            <CardContent>
              {orderItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Chưa có món nào được chọn</p>
                  <p className="text-sm text-muted-foreground">Thêm món từ menu bên trái</p>
                </div>
              ) : (
                <ScrollArea className="h-[calc(100vh-500px)]">
                  <div className="space-y-4">
                    {orderItems.map((item, index) => (
                      <div key={index} className="space-y-2 rounded-lg border p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{formatPrice(item.price)} / món</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-red-500"
                            onClick={() => removeFromOrder(index)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateOrderItemQuantity(index, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateOrderItemQuantity(index, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <div className="ml-auto font-medium">{formatPrice(item.totalPrice)}</div>
                        </div>
                        <div>
                          <Input
                            placeholder="Ghi chú đặc biệt"
                            value={item.specialRequest || ""}
                            onChange={(e) => updateSpecialRequest(index, e.target.value)}
                            className="h-8 text-sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}

              <Separator className="my-4" />

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tổng tiền món</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Thuế (8%)</span>
                  <span>{formatPrice(getTotalPrice() * 0.08)}</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span>Tổng cộng</span>
                  <span>{formatPrice(getTotalPrice() * 1.08)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="w-full space-y-2">
                <Label htmlFor="special-request">Ghi chú đơn hàng</Label>
                <Textarea
                  id="special-request"
                  placeholder="Ghi chú đặc biệt cho đơn hàng này"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                />
              </div>

              <div className="w-full space-y-2">
                <Label>Phương thức thanh toán</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Tiền mặt</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Thẻ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ewallet" id="ewallet" />
                    <Label htmlFor="ewallet">Ví điện tử</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button className="w-full" disabled={orderItems.length === 0} onClick={handleSubmitOrder}>
                <Check className="mr-2 h-4 w-4" /> Gửi đơn hàng
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
