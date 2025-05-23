import { Skeleton } from "@/components/ui/skeleton"

export default function CRMLoading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-40" />
      </div>

      <Skeleton className="h-10 w-full max-w-md" />

      <div className="space-y-6 mt-6">
        <Skeleton className="h-[400px] w-full rounded-lg" />

        <div className="grid grid-cols-3 gap-6">
          <Skeleton className="h-[250px] w-full rounded-lg" />
          <Skeleton className="h-[250px] w-full rounded-lg" />
          <Skeleton className="h-[250px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
