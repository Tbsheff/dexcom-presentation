"use client"

import { createContext, useContext } from "react"

const ExportContext = createContext(false)

export function ExportProvider({ isExport, children }: { isExport: boolean; children: React.ReactNode }) {
  return <ExportContext.Provider value={isExport}>{children}</ExportContext.Provider>
}

export function useExportMode() {
  return useContext(ExportContext)
}
