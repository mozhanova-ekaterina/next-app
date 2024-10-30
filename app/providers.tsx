import { NextUIProvider } from "@nextui-org/system"
import React from "react"

export const Providers = ({ children } : {children: React.ReactNode}) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
