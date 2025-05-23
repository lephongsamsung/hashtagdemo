"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type RoleType = "customer" | "fb-staff" | "coworking-staff" | "admin" | "analytics"

interface RoleContextType {
  role: RoleType
  setRole: (role: RoleType) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<RoleType>("customer")

  return <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider")
  }
  return context
}
