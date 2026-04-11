'use client'

import RevealAnimation from '../animation/RevealAnimation'
import { useEffect, useState } from 'react'

const FeatureListTwo = () => {
  return (
    <div className="bg-background-2 dark:bg-background-5 w-full rounded-[20px] p-5 md:p-8 lg:w-3/5 xl:p-[50px] relative">

      <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-2.5">

        {/* Live Order Card */}
        <RevealAnimation delay={0.3} direction="up">
          <div className="dark:bg-background-6 w-full rounded-2xl bg-white p-6 sm:w-3/5">
            <h5 className="mb-4">
              Manage Better
            </h5>

            <div className="mb-6 space-y-2">
              <h5>Order tracking from checkout to delivery.</h5>
              <p className="text-sm text-secondary/60 dark:text-accent/60">
                Bulk actions on orders, vendors, members.
              </p>
            </div>

            <div className="h-[1px] w-full bg-secondary/10 dark:bg-accent/10 mb-4"></div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                Delivered 2 hours ago
              </p>
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                Live
              </span>
            </div>
          </div>
        </RevealAnimation>

        {/* Revenue Overview Card */}
        <RevealAnimation delay={0.3}>
          <div className="dark:bg-background-6 w-full rounded-2xl bg-white p-6 sm:w-2/5">
            <h5 className="mb-4">In-depth business analytics</h5>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-2xl font-semibold text-secondary dark:text-accent">
                  ₹4.8L
                </p>
                <p className="text-xs text-secondary/60 dark:text-accent/60">
                  Monthly Sales
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  126 Vendors
                </p>
                <p className="text-xs text-secondary/60 dark:text-accent/60">
                  43 Orders Today
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>

      </div>

      {/* Floating Vendor Card */}
      <RevealAnimation delay={0.5} direction="right">
        <FloatingVendorCard />
      </RevealAnimation>

    </div>
  )
}

const FloatingVendorCard = () => {
  const [isOpen, setIsOpen] = useState(true)

  // Auto collapse after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-[140px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          absolute left-6 w-full max-w-[420px]
          rounded-2xl bg-secondary dark:bg-background-9
          p-6 shadow-xl cursor-pointer
          transition-all duration-700 ease-in-out
          ${isOpen ? 'top-0' : 'top-[90px]'}
        `}
      >
        <h5 className="text-accent mb-1">
          Automated profit calculations.
        </h5>
        <p className="text-accent/60 text-sm">
          126 Active • 43 Orders Today
        </p>
      </div>
    </div>
  )
}

FeatureListTwo.displayName = 'FeatureListTwo'
export default FeatureListTwo