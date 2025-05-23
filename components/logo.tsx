import Link from "next/link"
import { Coffee } from "lucide-react"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-coffee-600 text-white">
        <Coffee className="h-5 w-5" />
      </div>
      <div className="hidden sm:block">
        <div className="text-lg font-semibold text-coffee-800">Hashtag Space</div>
        <div className="text-xs text-muted-foreground">3 Trần Quý Kiên, Thạnh Mỹ Lợi, Thủ Đức</div>
      </div>
    </Link>
  )
}
