import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Cài đặt hệ thống</h1>
        <Button>Lưu thay đổi</Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="appearance">Giao diện</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
          <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cơ sở</CardTitle>
              <CardDescription>Cập nhật thông tin cơ bản về cơ sở kinh doanh của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Tên cơ sở</Label>
                  <Input id="business-name" defaultValue="Hashtag F&B & Coworking Space" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Mã số thuế</Label>
                  <Input id="tax-id" defaultValue="0123456789" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Địa chỉ</Label>
                <Input id="address" defaultValue="3 Trần Quý Kiên, Thạnh Mỹ Lợi, Thủ Đức" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" defaultValue="0987654321" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="contact@hashtag.vn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="hashtag.vn" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Giờ hoạt động</CardTitle>
              <CardDescription>Thiết lập giờ mở cửa và đóng cửa của cơ sở</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">F&B</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fb-open">Giờ mở cửa</Label>
                      <Input id="fb-open" type="time" defaultValue="07:00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fb-close">Giờ đóng cửa</Label>
                      <Input id="fb-close" type="time" defaultValue="22:00" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Coworking Space</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cw-open">Giờ mở cửa</Label>
                      <Input id="cw-open" type="time" defaultValue="08:00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cw-close">Giờ đóng cửa</Label>
                      <Input id="cw-close" type="time" defaultValue="22:00" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Giao diện</CardTitle>
              <CardDescription>Tùy chỉnh giao diện người dùng của ứng dụng</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Chế độ tối</Label>
                  <p className="text-sm text-muted-foreground">Bật chế độ tối mặc định cho ứng dụng</p>
                </div>
                <Switch id="dark-mode" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations">Hiệu ứng chuyển động</Label>
                  <p className="text-sm text-muted-foreground">Bật hiệu ứng chuyển động trong ứng dụng</p>
                </div>
                <Switch id="animations" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact-mode">Chế độ thu gọn</Label>
                  <p className="text-sm text-muted-foreground">Hiển thị giao diện thu gọn để tối ưu không gian</p>
                </div>
                <Switch id="compact-mode" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông báo</CardTitle>
              <CardDescription>Cấu hình cài đặt thông báo cho hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Thông báo qua email</Label>
                  <p className="text-sm text-muted-foreground">Nhận thông báo qua email khi có đơn hàng mới</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">Thông báo qua SMS</Label>
                  <p className="text-sm text-muted-foreground">Nhận thông báo qua SMS khi có đơn hàng mới</p>
                </div>
                <Switch id="sms-notifications" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Thông báo đẩy</Label>
                  <p className="text-sm text-muted-foreground">Nhận thông báo đẩy trên trình duyệt</p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt nâng cao</CardTitle>
              <CardDescription>Cấu hình các tùy chọn nâng cao cho hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-backup">Sao lưu tự động</Label>
                  <p className="text-sm text-muted-foreground">Tự động sao lưu dữ liệu hàng ngày</p>
                </div>
                <Switch id="auto-backup" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="analytics">Thu thập dữ liệu phân tích</Label>
                  <p className="text-sm text-muted-foreground">Thu thập dữ liệu sử dụng để cải thiện hệ thống</p>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Chế độ bảo trì</Label>
                  <p className="text-sm text-muted-foreground">Đặt hệ thống vào chế độ bảo trì</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" className="ml-auto">
                Xóa tất cả dữ liệu
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
