"use client"

import { useState } from "react"
import { Minus, Plus, ShoppingCart, Star, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  isPopular?: boolean
  isNew?: boolean
  sizes?: { name: string; price: number }[]
  addOns?: { name: string; price: number }[]
}

interface CartItem extends MenuItem {
  quantity: number
  selectedSize?: string
  selectedAddOns?: string[]
  specialRequest?: string
  totalPrice: number
}

export default function OrderOnlinePage() {
  const [selectedCategory, setSelectedCategory] = useState("coffee")
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [itemDialogOpen, setItemDialogOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState("")
  const [orderType, setOrderType] = useState("pickup")

  // Menu categories
  const categories = [
    { id: "coffee", name: "Cà phê", icon: "☕" },
    { id: "drinks", name: "Đồ uống", icon: "🥤" },
    { id: "food", name: "Đồ ăn", icon: "🍽️" },
    { id: "desserts", name: "Tráng miệng", icon: "🍰" },
    { id: "snacks", name: "Đồ ăn vặt", icon: "🍿" },
  ]

  // Sample menu items
  const menuItems: MenuItem[] = [
    // Coffee
    {
      id: "coffee-1",
      name: "Cà phê sữa đá",
      description: "Cà phê phin truyền thống với sữa đặc, phục vụ với đá",
      price: 35000,
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      rating: 4.8,
      isPopular: true,
      sizes: [
        { name: "Nhỏ", price: 0 },
        { name: "Vừa", price: 5000 },
        { name: "Lớn", price: 10000 },
      ],
    },
    {
      id: "coffee-2",
      name: "Cappuccino",
      description: "Espresso với sữa nóng và foam mịn, rắc bột cacao",
      price: 45000,
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      rating: 4.7,
      sizes: [
        { name: "Nhỏ", price: 0 },
        { name: "Vừa", price: 5000 },
        { name: "Lớn", price: 10000 },
      ],
    },
    {
      id: "coffee-3",
      name: "Latte",
      description: "Espresso với nhiều sữa nóng, tạo hình latte art đẹp mắt",
      price: 50000,
      image: "/placeholder.svg?height=200&width=200",
      category: "coffee",
      rating: 4.9,
      isNew: true,
      sizes: [
        { name: "Nhỏ", price: 0 },
        { name: "Vừa", price: 5000 },
        { name: "Lớn", price: 10000 },
      ],
    },

    // Drinks
    {
      id: "drink-1",
      name: "Trà đào cam sả",
      description: "Trà xanh pha với đào, cam tươi và sả thơm",
      price: 40000,
      image: "/placeholder.svg?height=200&width=200",
      category: "drinks",
      rating: 4.6,
      isPopular: true,
      sizes: [
        { name: "Vừa", price: 0 },
        { name: "Lớn", price: 8000 },
      ],
    },
    {
      id: "drink-2",
      name: "Sinh tố bơ",
      description: "Sinh tố bơ tươi với sữa đặc và đá xay",
      price: 55000,
      image: "/placeholder.svg?height=200&width=200",
      category: "drinks",
      rating: 4.5,
      sizes: [
        { name: "Vừa", price: 0 },
        { name: "Lớn", price: 10000 },
      ],
    },

    // Food
    {
      id: "food-1",
      name: "Bánh mì thịt nguội",
      description: "Bánh mì giòn với thịt nguội, pate, rau sống và gia vị",
      price: 45000,
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      rating: 4.7,
      isPopular: true,
      addOns: [
        { name: "Thêm thịt", price: 15000 },
        { name: "Thêm pate", price: 8000 },
        { name: "Thêm trứng", price: 10000 },
      ],
    },
    {
      id: "food-2",
      name: "Sandwich gà nướng",
      description: "Sandwich với gà nướng, rau xanh, cà chua và sốt mayonnaise",
      price: 65000,
      image: "/placeholder.svg?height=200&width=200",
      category: "food",
      rating: 4.8,
      addOns: [
        { name: "Thêm gà", price: 20000 },
        { name: "Thêm phô mai", price: 12000 },
        { name: "Thêm bơ", price: 8000 },
      ],
    },

    // Desserts
    {
      id: "dessert-1",
      name: "Bánh tiramisu",
      description: "Bánh tiramisu Ý truyền thống với mascarpone và cà phê",
      price: 75000,
      image: "/placeholder.svg?height=200&width=200",
      category: "desserts",
      rating: 4.9,
      isNew: true,
    },
    {
      id: "dessert-2",
      name: "Bánh flan",
      description: "Bánh flan mềm mịn với caramel thơm ngon",
      price: 35000,
      image: "/placeholder.svg?height=200&width=200",
      category: "desserts",
      rating: 4.4,
    },

    // Snacks
    {
      id: "snack-1",
      name: "Khoai tây chiên",
      description: "Khoai tây chiên giòn rụm, ăn kèm với sốt cà chua",
      price: 30000,
      image: "/placeholder.svg?height=200&width=200",
      category: "snacks",
      rating: 4.3,
      addOns: [
        { name: "Sốt mayonnaise", price: 5000 },
        { name: "Sốt BBQ", price: 5000 },
        { name: "Phô mai", price: 10000 },
      ],
    },
  ]

  // Branches
  const branches = [
    { id: "lang-ha", name: "Hashtag Láng Hạ", address: "123 Láng Hạ, Ba Đình, Hà Nội" },
    { id: "tran-duy-hung", name: "Hashtag Trần Duy Hưng", address: "45 Trần Duy Hưng, Cầu Giấy, Hà Nội" },
    { id: "nguyen-chi-thanh", name: "Hashtag Nguyễn Chí Thanh", address: "67 Nguyễn Chí Thanh, Đống Đa, Hà Nội" },
  ]

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory)

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setItemDialogOpen(true)
  }

  const addToCart = (item: MenuItem, quantity: number, size?: string, addOns?: string[], specialRequest?: string) => {
    let totalPrice = item.price * quantity

    // Add size price
    if (size && item.sizes) {
      const sizeOption = item.sizes.find((s) => s.name === size)
      if (sizeOption) {
        totalPrice += sizeOption.price * quantity
      }
    }

    // Add add-ons price
    if (addOns && item.addOns) {
      addOns.forEach((addOnName) => {
        const addOn = item.addOns?.find((a) => a.name === addOnName)
        if (addOn) {
          totalPrice += addOn.price * quantity
        }
      })
    }

    const cartItem: CartItem = {
      ...item,
      quantity,
      selectedSize: size,
      selectedAddOns: addOns,
      specialRequest,
      totalPrice,
    }

    setCartItems((prev) => [...prev, cartItem])
    setItemDialogOpen(false)
  }

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  const updateCartItemQuantity = (index: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(index)
      return
    }

    setCartItems((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const basePrice = item.price
          let totalPrice = basePrice * newQuantity

          // Add size price
          if (item.selectedSize && item.sizes) {
            const sizeOption = item.sizes.find((s) => s.name === item.selectedSize)
            if (sizeOption) {
              totalPrice += sizeOption.price * newQuantity
            }
          }

          // Add add-ons price
          if (item.selectedAddOns && item.addOns) {
            item.selectedAddOns.forEach((addOnName) => {
              const addOn = item.addOns?.find((a) => a.name === addOnName)
              if (addOn) {
                totalPrice += addOn.price * newQuantity
              }
            })
          }

          return { ...item, quantity: newQuantity, totalPrice }
        }
        return item
      }),
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Gọi món Online</h1>
          <p className="mt-2 text-muted-foreground">Đặt món yêu thích và nhận tại quầy hoặc giao hàng</p>
        </div>
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
          <SheetTrigger asChild>
            <Button className="relative">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Giỏ hàng
              {cartItems.length > 0 && (
                <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs">{cartItems.length}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>Giỏ hàng ({cartItems.length})</SheetTitle>
              <SheetDescription>Xem lại đơn hàng của bạn</SheetDescription>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-muted-foreground">Giỏ hàng trống</p>
                  <p className="text-sm text-muted-foreground">Thêm món để bắt đầu đặt hàng</p>
                </div>
              ) : (
                <>
                  <ScrollArea className="flex-1">
                    <div className="space-y-4">
                      {cartItems.map((item, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium">{item.name}</h4>
                                {item.selectedSize && (
                                  <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                                )}
                                {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                                  <p className="text-sm text-muted-foreground">
                                    Thêm: {item.selectedAddOns.join(", ")}
                                  </p>
                                )}
                                {item.specialRequest && (
                                  <p className="text-sm text-muted-foreground">Ghi chú: {item.specialRequest}</p>
                                )}
                                <div className="mt-2 flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => removeFromCart(index)}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                                <span className="font-medium">{formatPrice(item.totalPrice)}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="space-y-4 border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Tổng cộng:</span>
                      <span>{formatPrice(getTotalPrice())}</span>
                    </div>

                    <div className="space-y-2">
                      <Label>Chọn chi nhánh</Label>
                      <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn chi nhánh" />
                        </SelectTrigger>
                        <SelectContent>
                          {branches.map((branch) => (
                            <SelectItem key={branch.id} value={branch.id}>
                              {branch.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Hình thức nhận hàng</Label>
                      <RadioGroup value={orderType} onValueChange={setOrderType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <Label htmlFor="pickup">Nhận tại quầy</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <Label htmlFor="delivery">Giao hàng (phí 20.000đ)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      className="w-full"
                      disabled={cartItems.length === 0 || !selectedBranch}
                      onClick={() => {
                        // Handle checkout
                        alert("Đặt hàng thành công!")
                        setCartItems([])
                        setCartOpen(false)
                      }}
                    >
                      Đặt hàng • {formatPrice(getTotalPrice() + (orderType === "delivery" ? 20000 : 0))}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Categories */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Danh mục</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted ${
                      selectedCategory === category.id ? "bg-blue-50 text-blue-700" : ""
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{categories.find((c) => c.id === selectedCategory)?.name}</h2>
            <span className="text-sm text-muted-foreground">{filteredItems.length} món</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer transition-all hover:shadow-md"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />
                  {item.isPopular && <Badge className="absolute left-2 top-2 bg-red-500">Phổ biến</Badge>}
                  {item.isNew && <Badge className="absolute left-2 top-2 bg-green-500">Mới</Badge>}
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">{formatPrice(item.price)}</span>
                    <Button size="sm">Thêm</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Item Detail Dialog */}
      {selectedItem && (
        <ItemDetailDialog
          item={selectedItem}
          open={itemDialogOpen}
          onOpenChange={setItemDialogOpen}
          onAddToCart={addToCart}
        />
      )}
    </div>
  )
}

function ItemDetailDialog({
  item,
  open,
  onOpenChange,
  onAddToCart,
}: {
  item: MenuItem
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddToCart: (item: MenuItem, quantity: number, size?: string, addOns?: string[], specialRequest?: string) => void
}) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(item.sizes?.[0]?.name || "")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [specialRequest, setSpecialRequest] = useState("")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const calculateTotalPrice = () => {
    let total = item.price * quantity

    // Add size price
    if (selectedSize && item.sizes) {
      const sizeOption = item.sizes.find((s) => s.name === selectedSize)
      if (sizeOption) {
        total += sizeOption.price * quantity
      }
    }

    // Add add-ons price
    if (item.addOns) {
      selectedAddOns.forEach((addOnName) => {
        const addOn = item.addOns?.find((a) => a.name === addOnName)
        if (addOn) {
          total += addOn.price * quantity
        }
      })
    }

    return total
  }

  const handleAddOnChange = (addOnName: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns((prev) => [...prev, addOnName])
    } else {
      setSelectedAddOns((prev) => prev.filter((name) => name !== addOnName))
    }
  }

  const handleAddToCart = () => {
    onAddToCart(item, quantity, selectedSize, selectedAddOns, specialRequest)
    // Reset form
    setQuantity(1)
    setSelectedSize(item.sizes?.[0]?.name || "")
    setSelectedAddOns([])
    setSpecialRequest("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={400}
            height={200}
            className="h-48 w-full rounded-lg object-cover"
          />

          {/* Size selection */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="space-y-2">
              <Label>Chọn size</Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                {item.sizes.map((size) => (
                  <div key={size.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={size.name} id={size.name} />
                      <Label htmlFor={size.name}>{size.name}</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {size.price > 0 ? `+${formatPrice(size.price)}` : ""}
                    </span>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Add-ons */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="space-y-2">
              <Label>Thêm món (tùy chọn)</Label>
              <div className="space-y-2">
                {item.addOns.map((addOn) => (
                  <div key={addOn.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={addOn.name}
                        checked={selectedAddOns.includes(addOn.name)}
                        onChange={(e) => handleAddOnChange(addOn.name, e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor={addOn.name}>{addOn.name}</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">+{formatPrice(addOn.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special request */}
          <div className="space-y-2">
            <Label htmlFor="special-request">Ghi chú đặc biệt (tùy chọn)</Label>
            <Textarea
              id="special-request"
              placeholder="Ví dụ: Ít đường, không đá..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
          </div>

          {/* Quantity and price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label>Số lượng:</Label>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold">{formatPrice(calculateTotalPrice())}</div>
            </div>
          </div>

          <Button className="w-full" onClick={handleAddToCart}>
            Thêm vào giỏ hàng • {formatPrice(calculateTotalPrice())}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
