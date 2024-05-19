import React from "react"
import ContentLoader from "react-content-loader"
import clsx from "clsx"

export type MomentSkeletonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
  }

const MomentSkeleton: React.FC<MomentSkeletonProps> = ({ className }) => (
  <ContentLoader
    speed={5}
    // height={600}
    viewBox="0 0 600 590"
    backgroundColor="#bfbfbf"
    foregroundColor="#ffffff"
    className={className}
    // {...props}
  >
    <rect x="0" y="66" rx="0" ry="0" width="100%" height="391" />
    <rect x="0" y="464" rx="0" ry="0" width="20%" height="25" />
    <rect x="0" y="495" rx="0" ry="0" width="80%" height="25" />
    <rect x="0" y="529" rx="0" ry="0" width="80%" height="25" />
    <rect x="0" y="564" rx="0" ry="0" width="80%" height="25" />
    <circle cx="25" cy="39" r="22" />
    <rect x="55" y="29" rx="0" ry="0" width="99" height="18" />
  </ContentLoader>
)

export default MomentSkeleton
