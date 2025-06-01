export function SkeletonCard() {
  return (
    <div className="bg-card rounded-lg p-6 space-y-4">
      <div className="skeleton h-4 w-3/4 rounded"></div>
      <div className="skeleton h-3 w-1/2 rounded"></div>
      <div className="space-y-2">
        <div className="skeleton h-3 w-full rounded"></div>
        <div className="skeleton h-3 w-5/6 rounded"></div>
      </div>
      <div className="flex gap-2">
        <div className="skeleton h-6 w-16 rounded-full"></div>
        <div className="skeleton h-6 w-20 rounded-full"></div>
        <div className="skeleton h-6 w-14 rounded-full"></div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`skeleton h-4 rounded ${i === lines - 1 ? "w-3/4" : "w-full"}`}></div>
      ))}
    </div>
  )
}

export function SkeletonImage({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-lg ${className}`}></div>
}
