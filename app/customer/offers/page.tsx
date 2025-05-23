import { Calendar, Clock, CreditCard, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OffersPage() {
  // Promotions data
  const activePromotions = [
    {
      id: 1,
      title: "Giảm 20% cho đặt bàn sớm",
      description: "Đặt bàn trước 3 ngày để nhận ưu đãi đặc biệt",
      code: "EARLYBIRD20",
      validUntil: "30/06/2025",
      type: "f&b",
      discount: "20%",
      minSpend: "200.000đ",
    },
    {
      id: 2,
      title: "Combo Coworking + Cà phê",
      description: "Làm việc 4 giờ + 1 cà phê đặc biệt chỉ 150.000đ",
      code: "WORKCOFFEE",
      validUntil: "Không giới hạn",
      type: "combo",
      discount: "25%",
      minSpend: "Không",
    },
    {
      id: 3,
      title: "Happy Hour - Mua 1 tặng 1",
      description: "Áp dụng cho tất cả đồ uống từ 15:00 - 17:00 các ngày trong tuần",
      code: "HAPPY1FOR1",
      validUntil: "31/07/2025",
      type: "f&b",
      discount: "Mua 1 tặng 1",
      minSpend: "Không",
    },
    {
      id: 4,
      title: "Ưu đãi sinh nhật",
      description: "Giảm 30% cho hóa đơn F&B trong tháng sinh nhật của bạn",
      code: "BIRTHDAY30",
      validUntil: "31/12/2025",
      type: "f&b",
      discount: "30%",
      minSpend: "Không",
    },
  ]

  const usedPromotions = [
    {
      id: 5,
      title: "Chào mừng thành viên mới",
      description: "Giảm 50.000đ cho đơn hàng đầu tiên",
      code: "WELCOME50K",
      usedOn: "15/05/2025",
      type: "f&b",
    },
    {
      id: 6,
      title: "Khuyến mãi cuối tuần",
      description: "Giảm 15% cho đặt chỗ Coworking vào cuối tuần",
      code: "WEEKEND15",
      usedOn: "10/05/2025",
      type: "coworking",
    },
  ]

  // Membership tiers
  const membershipTiers = [
    {
      name: "Silver",
      points: "0 - 999",
      benefits: ["Tích điểm 5% trên mỗi đơn hàng", "Ưu đãi sinh nhật"],
    },
    {
      name: "Gold",
      points: "1,000 - 2,999",
      benefits: [
        "Tích điểm 7% trên mỗi đơn hàng",
        "Ưu đãi sinh nhật",
        "Giảm 10% cho đặt phòng họp",
        "Đồ uống miễn phí mỗi tháng x1",
      ],
      current: true,
    },
    {
      name: "Platinum",
      points: "3,000+",
      benefits: [
        "Tích điểm 10% trên mỗi đơn hàng",
        "Ưu đãi sinh nhật",
        "Giảm 20% cho đặt phòng họp",
        "Đồ uống miễn phí mỗi tháng x2",
        "Ưu tiên đặt chỗ",
        "Giờ làm việc miễn phí x2/tháng",
      ],
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Ưu đãi của tôi</h1>
        <p className="mt-2 text-muted-foreground">Khám phá các ưu đãi và khuyến mãi đặc biệt dành cho bạn</p>
      </div>

      {/* Membership Status */}
      <Card className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Thành viên Gold</h2>
              <p className="text-blue-100">1,250 điểm</p>
              <div className="mt-2">
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>Gold</span>
                  <span>Platinum</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-blue-800">
                  <div className="h-full w-[42%] bg-yellow-400" />
                </div>
                <p className="mt-1 text-xs text-blue-100">Còn 1,750 điểm nữa để lên Platinum</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">Xem lịch sử điểm</Button>
              <p className="text-sm text-blue-100">Điểm sẽ hết hạn vào: 31/12/2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promotions */}
      <div className="mb-8">
        <Tabs defaultValue="active">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Ưu đãi hiện có ({activePromotions.length})</TabsTrigger>
            <TabsTrigger value="used">Đã sử dụng ({usedPromotions.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            {activePromotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`flex w-full items-center justify-center p-6 md:w-1/4 ${
                      promo.type === "f&b"
                        ? "bg-blue-100 text-blue-700"
                        : promo.type === "coworking"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold">{promo.discount}</div>
                      <div className="text-sm font-medium">
                        {promo.type === "f&b"
                          ? "F&B"
                          : promo.type === "coworking"
                            ? "Coworking"
                            : "Combo F&B + Coworking"}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <CardTitle>{promo.title}</CardTitle>
                    <CardDescription className="mt-2">{promo.description}</CardDescription>
                    <div className="mt-4 grid gap-2 text-sm md:grid-cols-3">
                      <div>
                        <div className="font-medium">Mã ưu đãi</div>
                        <div className="mt-1 rounded-md bg-gray-100 px-2 py-1 font-mono">{promo.code}</div>
                      </div>
                      <div>
                        <div className="font-medium">Có hiệu lực đến</div>
                        <div>{promo.validUntil}</div>
                      </div>
                      <div>
                        <div className="font-medium">Chi tiêu tối thiểu</div>
                        <div>{promo.minSpend}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      {promo.type === "f&b" ? (
                        <Button className="flex-1" size="sm">
                          <ShoppingBag className="mr-2 h-4 w-4" /> Đặt món ngay
                        </Button>
                      ) : promo.type === "coworking" ? (
                        <Button className="flex-1" size="sm">
                          <Calendar className="mr-2 h-4 w-4" /> Đặt chỗ ngay
                        </Button>
                      ) : (
                        <Button className="flex-1" size="sm">
                          <CreditCard className="mr-2 h-4 w-4" /> Dùng ngay
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Điều kiện
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="used" className="space-y-4">
            {usedPromotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden opacity-70">
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`flex w-full items-center justify-center p-6 md:w-1/4 ${
                      promo.type === "f&b" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-xl font-medium">Đã sử dụng</div>
                      <div className="text-sm">{promo.usedOn}</div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <CardTitle>{promo.title}</CardTitle>
                    <CardDescription className="mt-2">{promo.description}</CardDescription>
                    <div className="mt-4">
                      <div className="font-medium">Mã ưu đãi</div>
                      <div className="mt-1 rounded-md bg-gray-100 px-2 py-1 font-mono">{promo.code}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Membership Tiers */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Cấp độ thành viên</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {membershipTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`${tier.current ? "border-blue-500 ring-2 ring-blue-500 ring-offset-2" : ""}`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{tier.name}</span>
                  {tier.current && (
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                      Cấp độ hiện tại
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{tier.points} điểm</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {tier.current ? (
                  <Button className="w-full" variant="outline">
                    <Clock className="mr-2 h-4 w-4" /> Nâng cấp còn thiếu 1,750 điểm
                  </Button>
                ) : (
                  <Button className="w-full" variant="outline">
                    Xem chi tiết
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
