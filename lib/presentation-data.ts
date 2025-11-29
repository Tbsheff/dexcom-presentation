export const COMPANY_COLORS = {
  dexcom: "#58A618", // Dexcom green - primary brand
  abbott: "#5B8FB9", // Steel blue
  medtronic: "#E07A5F", // Coral/terracotta
  senseonics: "#6B9080", // Sage green
} as const

export const revenueData = [
  { year: "2020", Dexcom: 1.93, Abbott: 3.7, Medtronic: 2.36 },
  { year: "2021", Dexcom: 2.45, Abbott: 4.3, Medtronic: 2.41 },
  { year: "2022", Dexcom: 2.91, Abbott: 5.3, Medtronic: 2.42 },
  { year: "2023", Dexcom: 3.62, Abbott: 5.9, Medtronic: 2.46 },
  { year: "2024", Dexcom: 4.03, Abbott: 6.8, Medtronic: 2.49 },
]

export const growthData = [
  { year: "2021", Dexcom: 27, Abbott: 16, Medtronic: 2 },
  { year: "2022", Dexcom: 19, Abbott: 23, Medtronic: 0.4 },
  { year: "2023", Dexcom: 24, Abbott: 11, Medtronic: 1.7 },
  { year: "2024", Dexcom: 11, Abbott: 15, Medtronic: 1.2 },
]

// X = Technology Integration, Y = User Accessibility, Z = bubble size (market share)
export const strategicGroupData = [
  { name: "Abbott", tech: 68, access: 88, z: 3500 },
  { name: "Dexcom", tech: 88, access: 72, z: 2400 },
  { name: "Medtronic", tech: 55, access: 55, z: 2000 },
  { name: "Senseonics", tech: 42, access: 32, z: 800 },
]

export const fiveForces = [
  { force: "Rivalry", value: 90 },
  { force: "Supplier", value: 50 },
  { force: "Buyer", value: 50 },
  { force: "Substitutes", value: 50 },
  { force: "New Entry", value: 25 },
]

export const differentiationRadar = [
  { attr: "Accuracy", Dexcom: 95, Abbott: 80, Medtronic: 75 },
  { attr: "Integration", Dexcom: 95, Abbott: 70, Medtronic: 85 },
  { attr: "Wear Time", Dexcom: 70, Abbott: 75, Medtronic: 65 },
  { attr: "Price", Dexcom: 50, Abbott: 85, Medtronic: 60 },
  { attr: "Brand Trust", Dexcom: 90, Abbott: 75, Medtronic: 70 },
  { attr: "Ease of Use", Dexcom: 90, Abbott: 85, Medtronic: 65 },
]

export const COLORS = {
  dexcom: COMPANY_COLORS.dexcom,
  dexcomLight: "#6fc02e",
  dexcomDark: "#458012",
  abbott: COMPANY_COLORS.abbott,
  medtronic: COMPANY_COLORS.medtronic,
  senseonics: COMPANY_COLORS.senseonics,
  // Legacy colors for other chart elements
  blue: "#5b8fb9",
  sage: "#7a9e7e",
  coral: "#c97b63",
  slate: "#6b7a8f",
  amber: "#f5a21c",
}

export const slides = [
  { id: "title", title: "DEXCOM", section: "intro" },
  { id: "agenda", title: "Agenda", section: "intro" },
  { id: "diabetes", title: "Understanding Diabetes", section: "intro" },
  { id: "cgm", title: "What is a CGM?", section: "intro" },
  { id: "company", title: "Company Overview", section: "intro" },
  { id: "mission", title: "Mission & Values", section: "intro" },
  { id: "financials", title: "Financial Position", section: "industry" },
  { id: "revenue-comparison", title: "Revenue Comparison", section: "industry" },
  { id: "growth-comparison", title: "Growth Trajectory", section: "industry" },
  { id: "industry", title: "Industry Definition", section: "industry" },
  { id: "competitors", title: "Competitive Landscape", section: "industry" },
  { id: "strategic-map", title: "Strategic Positioning", section: "industry" },
  { id: "five-forces", title: "Market Attractiveness", section: "industry" },
  { id: "pest", title: "Industry Drivers", section: "industry" },
  { id: "consumer-wants", title: "Consumer Needs", section: "core" },
  { id: "differentiation", title: "Differentiation Strategy", section: "core" },
  { id: "why-dexcom", title: "Competitive Advantage", section: "core" },
  { id: "resources", title: "Resources", section: "core" },
  { id: "capabilities", title: "Capabilities", section: "core" },
  { id: "imitation", title: "Imitation Barriers", section: "core" },
  { id: "swot", title: "SWOT Analysis", section: "core" },
  { id: "issue1", title: "Strategic Issue #1", section: "recommendations" },
  { id: "issue2", title: "Strategic Issue #2", section: "recommendations" },
  { id: "thanks", title: "Thank You", section: "outro" },
]
