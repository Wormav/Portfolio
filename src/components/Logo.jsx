import clsx from "clsx"

export function Logo({ className }) {
  return (
    <div className={clsx("whitespace-nowrap font-display", className)}>
      <span>Portfolio</span>
    </div>
  )
}
