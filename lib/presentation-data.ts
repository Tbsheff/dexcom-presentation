export const COMPANY_COLORS = {
  dexcom: "#58A618", // Dexcom green - primary brand
  abbott: "#3B82F6", // Blue-500
  medtronic: "#F97316", // Orange-500
  senseonics: "#8B5CF6", // Violet-500
} as const

// Consistent chart styling using CSS variables
export const CHART_THEME = {
  grid: "hsl(var(--border))",
  axis: "hsl(var(--muted-foreground))",
  label: "hsl(var(--foreground))",
  tooltip: {
    bg: "hsl(var(--card))",
    border: "hsl(var(--border))",
    radius: "var(--radius)",
  },
} as const

export const revenueData = [
  { year: "2020", Dexcom: 1.93, Abbott: 3.7, Medtronic: 2.36, Senseonics: 0.01 },
  { year: "2021", Dexcom: 2.45, Abbott: 4.3, Medtronic: 2.41, Senseonics: 0.01 },
  { year: "2022", Dexcom: 2.91, Abbott: 5.3, Medtronic: 2.42, Senseonics: 0.02 },
  { year: "2023", Dexcom: 3.62, Abbott: 5.9, Medtronic: 2.46, Senseonics: 0.02 },
  { year: "2024", Dexcom: 4.03, Abbott: 6.8, Medtronic: 2.49, Senseonics: 0.03 },
]

export const growthData = [
  { year: "2021", Dexcom: 27, Abbott: 16, Medtronic: 2, Senseonics: 15 },
  { year: "2022", Dexcom: 19, Abbott: 23, Medtronic: 0.4, Senseonics: 45 },
  { year: "2023", Dexcom: 24, Abbott: 11, Medtronic: 1.7, Senseonics: 35 },
  { year: "2024", Dexcom: 11, Abbott: 15, Medtronic: 1.2, Senseonics: 25 },
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
  { attr: "Accuracy", Dexcom: 95, Abbott: 80, Medtronic: 75, Senseonics: 85 },
  { attr: "Integration", Dexcom: 95, Abbott: 70, Medtronic: 85, Senseonics: 40 },
  { attr: "Wear Time", Dexcom: 70, Abbott: 75, Medtronic: 65, Senseonics: 100 },
  { attr: "Price", Dexcom: 50, Abbott: 85, Medtronic: 60, Senseonics: 40 },
  { attr: "Brand Trust", Dexcom: 90, Abbott: 75, Medtronic: 70, Senseonics: 45 },
  { attr: "Ease of Use", Dexcom: 90, Abbott: 85, Medtronic: 65, Senseonics: 50 },
]

export const COLORS = {
  dexcom: COMPANY_COLORS.dexcom,
  dexcomLight: "#6fc02e",
  dexcomDark: "#458012",
  abbott: COMPANY_COLORS.abbott,
  medtronic: COMPANY_COLORS.medtronic,
  senseonics: COMPANY_COLORS.senseonics,
}

// Financial Analysis Data (Section 01)
export const profitabilityMetrics = {
  revenue: "$4.033 Billion",
  ebitda: "$1.105 Billion",
  ebitdaMargin: "27%",
  netMargin: "14.3%",
  operatingMargin: "14.9%",
}

export const operatingMetrics = {
  operatingIncome: "$600 Million",
  operatingMargin: "14.9%",
  netIncome: "$576.2 Million",
}

export const financialRisk = {
  totalDebt: "$4.382 Billion",
  longTermDebt: "$1.237 Million",
  liabilitiesToAssets: "67.6%",
  debtToEquity: "2.08x",
  debtToEbitda: "3.97x",
}

export const financialMetricsOverTime = [
  { year: "2019", revenue: 1453, operatingIncome: 103, netIncome: 73 },
  { year: "2020", revenue: 1930, operatingIncome: 492, netIncome: 436 },
  { year: "2021", revenue: 2448, operatingIncome: 223, netIncome: 203 },
  { year: "2022", revenue: 2908, operatingIncome: 402, netIncome: 385 },
  { year: "2023", revenue: 3623, operatingIncome: 551, netIncome: 578 },
  { year: "2024", revenue: 4033, operatingIncome: 600, netIncome: 576 },
]

export const expenseAllocation = [
  { category: "Cost of Sales", amount: 1594.8, description: "Direct costs of producing and delivering CGM systems" },
  { category: "SG&A", amount: 1285.8, description: "Selling, general, and administrative expenses" },
  { category: "R&D", amount: 552.4, description: "Engineering, research, clinical trials, regulatory, quality assurance" },
]

export const revenueSourcesData = [
  { category: "Sensor & Other Revenue", amount: 3800 },
  { category: "Hardware Revenue", amount: 233 },
]

// Industry Analysis Data (Section 02) - COMPREHENSIVE 21-SLIDE DATA

// Industry Definition (Slides 1-3)
export const industryDefinition = {
  statement: "Dexcom competes in the global continuous glucose monitoring (CGM) market within the medical device and digital health industry",
  products: [
    "Continuous glucose monitoring (CGM) systems",
    "Mobile apps",
    "Data-sharing platforms",
    "Connected health devices",
  ],
  businessActivities: [
    "Medical device design and manufacturing",
    "Digital health data integration and analytics",
    "Strategic partnerships with insulin pump and healthcare technology companies",
  ],
  naicsCode: "334510",
  naicsDescription: "Electromedical and Electrotherapeutic Apparatus Manufacturing",
  jobsToBeDone: {
    functional: [
      "Track and manage glucose levels continuously",
      "Reduce need for fingersticks",
      "Support treatment decisions",
    ],
    social: [
      "Empower users to share health data with family, caregivers, and healthcare providers",
      "Promote connected diabetes management",
    ],
    emotional: [
      "Feel confident, safe, and in control of health",
      "Reduce anxiety related to diabetes management",
    ],
  },
  customerSegments: [
    "People with Type 1 and Type 2 diabetes",
    "Healthcare providers and diabetes clinics",
    "Payers and insurance organizations",
    "Emerging segments: wellness-focused consumers and athletes",
  ],
}

// VRIO Analysis (Slides 4-7)
export const vrioAnalysis = {
  value: [
    "Industry-leading CGM technology delivering superior accuracy, reliability, and real-time data",
    "Trusted brand and strong clinical reputation built over years of proven outcomes",
    "Integrated data ecosystem connecting to apps, alerts, and device connectivity",
  ],
  rarity: [
    "Proven regulatory expertise and extensive clinical evidence base",
    "Deep integration partnerships with insulin pumps and digital health platforms",
    "Strong brand loyalty among patients and healthcare providers",
  ],
  inimitable: [
    "Proprietary sensor technology protected by patents",
    "Strong regulatory record and long-term clinical trust difficult to replicate",
    "Data network effects and user base create network lock-in",
  ],
  organized: [
    "Robust R&D and innovation pipeline (G7 and next-generation devices)",
    "Global supply chain investments and manufacturing expertise",
    "Strong payer relationships and market expansion strategy",
  ],
}

// Key Competitors (Slide 8)
export const keyCompetitors = [
  {
    company: "Abbott",
    product: "FreeStyle Libre",
    description: "Known for affordability and wide accessibility",
  },
  {
    company: "Medtronic",
    product: "Guardian Connect CGM",
    description: "Integrates directly with insulin pumps for automated insulin delivery",
  },
  {
    company: "Senseonics",
    product: "Eversense 365",
    description: "Specializes in implantable sensors, longest wear time among competitors",
  },
]

// Strategic Group Map (Slides 9-11)
export const strategicGroupMapData = [
  { name: "Abbott", tech: 68, access: 88, revenue: 6800 },
  { name: "Dexcom", tech: 88, access: 72, revenue: 4000 },
  { name: "Medtronic", tech: 55, access: 55, revenue: 2488 },
  { name: "Senseonics", tech: 42, access: 32, revenue: 22.5 },
]

export const strategicPositioning = [
  {
    company: "Dexcom",
    positioning: "Combines industry-leading technology with user-friendly design and integrated ecosystem for connected diabetes management",
  },
  {
    company: "Abbott",
    positioning: "Leads in affordability and broad distribution, prioritizing market penetration and accessibility over integration complexity",
  },
  {
    company: "Medtronic and Senseonics",
    positioning: "Serve narrower, more specialized markets through integrated pump systems (Medtronic) and implantable sensors (Senseonics)",
  },
]

export const capabilityComparison = [
  { company: "Dexcom", revenue: 4.0, digitalEcosystem: 9, easeOfUse: 7 },
  { company: "Abbott", revenue: 6.8, digitalEcosystem: 8, easeOfUse: 9 },
  { company: "Medtronic", revenue: 2.8, digitalEcosystem: 6, easeOfUse: 5 },
  { company: "Senseonics", revenue: 0.0225, digitalEcosystem: 4, easeOfUse: 4 },
]

// Financial Comparison (Slides 12-13)
export const competitorFinancials = {
  revenueComparison: [
    { company: "Abbott", revenue: 6800, segment: "Diabetes Care Segment" },
    { company: "Dexcom", revenue: 4033, segment: "All diabetes products" },
    { company: "Medtronic", revenue: 2488, segment: "Diabetes segment" },
    { company: "Senseonics", revenue: 22.5, segment: "All diabetes products" },
  ],
  operatingMargins: {
    industryAverage: 17.5,
    dexcom: 17.1,
  },
}

// Five Forces Analysis (Slides 14-19)
export const fiveForcesDetailed = {
  competitiveRivalry: {
    rating: "HIGH",
    points: [
      "Dexcom faces strong competition from major players like Abbott (FreeStyle Libre), Medtronic (Guardian Sensor), and Senseonics (Eversense)",
      "The CGM market is rapidly growing but crowded, with companies competing on sensor accuracy, wear duration, comfort, and integration with insulin pumps",
      "Brand loyalty and clinical performance help Dexcom remain a leader, but competitors' lower prices and longer wear sensors increase rivalry pressure",
    ],
  },
  supplierPower: {
    rating: "MODERATE",
    points: [
      "Dexcom relies on specialized suppliers for advanced sensors, adhesives, and microelectronics",
      "Because components require high precision and regulatory compliance, switching suppliers can be costly",
      "However, as Dexcom scales and vertically integrates (e.g., in-house sensor manufacturing), its supplier dependence decreases, giving it more control over cost and quality",
    ],
  },
  buyerPower: {
    rating: "MODERATE",
    points: [
      "Buyers include patients, healthcare providers, and payers (insurance companies)",
      "Insurance coverage significantly impacts purchasing decisions, giving payers some leverage over pricing",
      "However, Dexcom's strong brand reputation, proven clinical accuracy, and integration with insulin pumps (like Tandem and Omnipod) limit buyer switching, balancing this power",
    ],
  },
  threatOfSubstitution: {
    rating: "MODERATE",
    points: [
      "Primary substitutes include fingerstick glucose meters, which are cheaper but less convenient and less continuous",
      "Advances in noninvasive glucose monitoring (e.g., rumored Apple Watch tech or optical sensors) could become future substitutes",
      "Currently, Dexcom's continuous, real-time data and clinical reliability make substitution risk manageable but emerging",
    ],
  },
  threatOfNewEntry: {
    rating: "LOW",
    points: [
      "Barriers to entry are very high due to FDA regulations, clinical testing requirements, and technological complexity",
      "Significant capital investment and brand trust are required to compete with established CGM firms",
      "Dexcom's long history of R&D expertise and data integration partnerships (like with Apple and insulin pump manufacturers) further protect its market position",
    ],
  },
  keyInsights: [
    "Competitive rivalry is the biggest threat",
    "Vertical integration strengthens Dexcom's supply control",
    "Buyer power is balanced by brand and commitment to the Dexcom ecosystem",
    "Substitution risk is emerging, but not immediately",
    "High barriers to entry help protect Dexcom's market share",
  ],
}

// EPIC PEST Analysis (Slide 20)
export const epicPestAnalysis = {
  political: "Changes in government healthcare policies, especially regarding FDA regulations and reimbursement rates, will affect accessibility to Dexcom and their revenue",
  economic: "Dexcom's growth is influenced by insurance and payer coverage",
  sociocultural: "The market is expanding due to the prevalence of diagnosed diabetes increasing in addition to a growing interest in discreet digital wellness technology",
  technological: "Continuous advancements in sensor technology (seeking smaller, more accurate, and non-invasive devices) and integration with smart devices will lead to innovation and further competitive differentiation",
}

// Market Summary (Slide 21) + Market Landscape data
export const industryAnalysisData = {
  marketSize: {
    current: "$12.5B",
    projected2030: "$28.6B",
    cagr: "12.8%",
  },
  marketShare: {
    dexcom: "19%",
    abbott: "54%",
    medtronic: "16%",
    others: "11%",
  },
  competitiveFactors: [
    { factor: "Technology Leadership", dexcom: 95, abbott: 80, medtronic: 75 },
    { factor: "Market Reach", dexcom: 70, abbott: 95, medtronic: 80 },
    { factor: "Product Portfolio", dexcom: 85, abbott: 90, medtronic: 95 },
    { factor: "Brand Recognition", dexcom: 90, abbott: 85, medtronic: 80 },
  ],
}

export const marketDrivers = [
  { driver: "Rising Diabetes Prevalence", impact: "High", description: "Global diabetes cases expected to reach 700M by 2045" },
  { driver: "Technology Adoption", impact: "High", description: "Shift from SMBG to CGM accelerating across all patient segments" },
  { driver: "Insurance Coverage", impact: "Medium", description: "Expanding reimbursement improving access and affordability" },
  { driver: "Digital Health Integration", impact: "Medium", description: "Integration with pumps, smartphones, and health platforms" },
]

// Market Summary (Slide 21)
export const marketSummary = {
  strengths: [
    "Industry-leading sensor accuracy and reliability",
    "Strong brand equity and clinical reputation among endocrinologists",
    "Premium market positioning with demonstrated superior outcomes",
    "Robust R&D capabilities driving continuous innovation",
    "Extensive intellectual property portfolio (1,600+ patents)",
  ],
  opportunities: [
    "Wellness and metabolic health market expansion (100M+ addressable users)",
    "International market penetration in underdeveloped regions",
    "Type 2 diabetes segment growth through value-tier offerings",
    "Digital health ecosystem integration and data monetization",
    "Strategic partnerships with tech companies and healthcare systems",
  ],
  threats: [
    "Abbott's market dominance and aggressive pricing strategy",
    "Non-invasive glucose monitoring technologies in development",
    "Payer pressure on reimbursement rates and coverage criteria",
    "Regulatory risks and approval delays for new products",
    "Economic downturns affecting patient out-of-pocket spending",
  ],
  recommendations: [
    "Develop value-tier CGM product to compete in Type 2 segment",
    "Invest in non-invasive technology R&D to stay ahead of disruption",
    "Expand digital health platform and ecosystem integrations",
    "Strengthen payer relationships and demonstrate health economic value",
    "Accelerate international expansion in high-growth markets",
  ],
}

// Core Competencies Data (Section 03)
export const coreCompetencies = {
  technicalCapabilities: [
    { capability: "Sensor Accuracy", strength: "Industry-leading accuracy", impact: "Clinical trust & adoption" },
    { capability: "Miniaturization", strength: "Smallest form factor in market", impact: "Patient comfort & adherence" },
    { capability: "Algorithm Development", strength: "Predictive glucose monitoring", impact: "Proactive diabetes management" },
    { capability: "Manufacturing Scale", strength: "Vertical integration & automation", impact: "Cost efficiency & reliability" },
  ],
  organizationalCapabilities: [
    { capability: "R&D Excellence", description: "13.7% of revenue invested in innovation", strength: "High" },
    { capability: "Clinical Partnerships", description: "Strong relationships with endocrinologists", strength: "High" },
    { capability: "Direct-to-Consumer", description: "Effective DTC marketing capabilities", strength: "Medium" },
    { capability: "Regulatory Expertise", description: "Track record of FDA approvals", strength: "High" },
  ],
  strategicResources: [
    { resource: "Intellectual Property", details: "1,600+ patents protecting core technology", type: "Intangible" },
    { resource: "Brand Equity", details: "Strongest brand recognition in CGM category", type: "Intangible" },
    { resource: "Manufacturing Facilities", details: "Automated production in Mesa, AZ and Malaysia", type: "Tangible" },
    { resource: "Clinical Data", details: "Extensive real-world evidence database", type: "Intangible" },
  ],
}

export const vrinAnalysis = [
  { criterion: "Valuable", rating: "High", explanation: "Technology directly addresses critical patient needs" },
  { criterion: "Rare", rating: "High", explanation: "Few competitors match accuracy and reliability" },
  { criterion: "Inimitable", rating: "Medium-High", explanation: "Patents, data, and brand are hard to replicate quickly" },
  { criterion: "Non-substitutable", rating: "Medium", explanation: "CGM category growing but invasive/non-invasive alternatives emerging" },
]

// Strategic Issues Data (Section 04)
export const strategicIssues = {
  issue1: {
    title: "Market Share Erosion in Type 2 Segment",
    description: "Abbott FreeStyle Libre's aggressive pricing and retail strategy capturing Type 2 market",
    impact: "High",
    urgency: "High",
    dataPoints: [
      "Abbott holds 54% market share vs Dexcom's 19%",
      "Type 2 diabetes represents 95% of total diabetes population",
      "Dexcom premium pricing limits Type 2 penetration",
    ],
    rootCauses: [
      "Premium positioning limits accessibility for price-sensitive Type 2 patients",
      "Abbott's pharmacy channel strategy increases convenience",
      "Limited insurance coverage for Type 2 non-insulin users",
    ],
  },
  issue2: {
    title: "Rising Competition from Non-Invasive Technologies",
    description: "Emerging non-invasive glucose monitoring threatens long-term CGM market position",
    impact: "Medium-High",
    urgency: "Medium",
    dataPoints: [
      "Multiple companies developing optical/spectroscopic solutions",
      "Apple reportedly investing in non-invasive glucose monitoring",
      "Patient preference shifting toward non-invasive options",
    ],
    rootCauses: [
      "Inherent limitation of invasive sensor technology",
      "Technology advancement in optical sensing and AI",
      "Consumer wellness market expanding beyond diabetes",
    ],
  },
}

// Recommendations Data (Section 05)
export const recommendations = [
  {
    title: "Launch Value-Tier CGM for Type 2 Market",
    priority: "High",
    timeframe: "6-12 months",
    description: "Develop simplified, lower-cost CGM specifically for Type 2 diabetes segment",
    rationale: [
      "Type 2 market is 5x larger than Type 1 but underserved by current portfolio",
      "Abbott's success proves market exists for value-positioned CGM",
      "Pharmacy channel distribution can accelerate adoption",
    ],
    implementation: [
      "Create 'Dexcom Essential' line with reduced features but maintained accuracy",
      "Target $75-100/month price point vs current $300+",
      "Partner with major pharmacy chains for OTC distribution",
      "Leverage Stelo platform as foundation",
    ],
    expectedImpact: "15-20% market share gain in Type 2 segment within 2 years",
  },
  {
    title: "Accelerate Non-Invasive R&D Investment",
    priority: "High",
    timeframe: "24-36 months",
    description: "Establish dedicated non-invasive glucose monitoring research division",
    rationale: [
      "First-mover advantage in next-generation technology",
      "Defensive strategy against Apple and other tech entrants",
      "Wellness market expansion opportunity beyond diabetes",
    ],
    implementation: [
      "Increase R&D budget allocation to non-invasive technologies",
      "Acquire or partner with optical sensing startups",
      "Build multidisciplinary team (optical, AI/ML, clinical)",
      "Target: working prototype within 18 months",
    ],
    expectedImpact: "Future-proof market position, expand TAM to 50M+ wellness users",
  },
  {
    title: "Expand Ecosystem Integration Partnerships",
    priority: "Medium",
    timeframe: "12-18 months",
    description: "Deepen integration with insulin pumps, health apps, and digital therapeutics platforms",
    rationale: [
      "Increase switching costs through ecosystem lock-in",
      "Enhance value proposition beyond glucose data",
      "Create platform for adjacent revenue streams",
    ],
    implementation: [
      "Open API for third-party health app developers",
      "Exclusive partnerships with leading pump manufacturers",
      "Integrate with Apple Health, Google Fit, and telehealth platforms",
      "Develop SDK for digital therapeutics companies",
    ],
    expectedImpact: "30% increase in customer lifetime value, improved retention",
  },
]

// Main Presentation Slides
export const presentationSlides = [
  { id: "title", title: "DEXCOM", section: "intro" },
  { id: "agenda", title: "Agenda", section: "intro" },
  { id: "diabetes", title: "Understanding Diabetes", section: "intro" },
  { id: "cgm", title: "What is a CGM?", section: "intro" },
  { id: "how-cgm-works", title: "How CGM Works", section: "intro" },
  { id: "company", title: "Company Overview", section: "intro" },
  { id: "mission", title: "Mission & Values", section: "intro" },
  { id: "financials", title: "Financial Position", section: "industry" },
  { id: "key-competitors", title: "Key Competitors", section: "industry" },
  { id: "revenue-comparison", title: "Revenue Comparison", section: "industry" },
  { id: "growth-comparison", title: "Growth Trajectory", section: "industry" },
  { id: "industry", title: "Industry Definition", section: "industry" },
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

// Analysis Deep Dive Slides
export const analysisSlides = [
  // Section 01: Company Overview Analysis
  { id: "analysis-divider-01", title: "Section 01: Company Overview Analysis", section: "analysis-01" },
  { id: "profitability-analysis", title: "Profitability Metrics", section: "analysis-01" },
  { id: "operating-efficiency-analysis", title: "Operating Efficiency", section: "analysis-01" },
  { id: "financial-risk-analysis", title: "Financial Risk", section: "analysis-01" },
  { id: "financial-trends-analysis", title: "Financial Trends", section: "analysis-01" },
  { id: "expense-analysis", title: "Expense Allocation", section: "analysis-01" },
  { id: "revenue-sources-analysis", title: "Revenue Sources", section: "analysis-01" },
  // Section 02: Industry Analysis
  { id: "analysis-divider-02", title: "Section 02: Industry Analysis", section: "analysis-02" },
  { id: "industry-definition-intro", title: "Industry Definition", section: "analysis-02" },
  { id: "industry-definition-framework-1", title: "Industry Framework (Part 1)", section: "analysis-02" },
  { id: "industry-definition-framework-2", title: "Industry Framework (Part 2)", section: "analysis-02" },
  { id: "vrio-value", title: "VRIO: Value", section: "analysis-02" },
  { id: "vrio-rarity", title: "VRIO: Rarity", section: "analysis-02" },
  { id: "vrio-inimitable", title: "VRIO: Inimitable", section: "analysis-02" },
  { id: "vrio-organized", title: "VRIO: Organized", section: "analysis-02" },
  { id: "key-competitors-overview", title: "Key Competitors", section: "analysis-02" },
  { id: "strategic-group-map-visual", title: "Strategic Group Map", section: "analysis-02" },
  { id: "strategic-group-map-positioning", title: "Strategic Positioning", section: "analysis-02" },
  { id: "strategic-group-map-data", title: "Capability Comparison", section: "analysis-02" },
  { id: "financial-comparison-revenue", title: "Revenue Comparison", section: "analysis-02" },
  { id: "financial-comparison-margins", title: "Operating Margins", section: "analysis-02" },
  { id: "five-forces-rivalry", title: "Five Forces: Competitive Rivalry", section: "analysis-02" },
  { id: "five-forces-supplier", title: "Five Forces: Supplier Power", section: "analysis-02" },
  { id: "five-forces-buyer", title: "Five Forces: Buyer Power", section: "analysis-02" },
  { id: "five-forces-substitution", title: "Five Forces: Threat of Substitution", section: "analysis-02" },
  { id: "five-forces-new-entry", title: "Five Forces: Threat of New Entry", section: "analysis-02" },
  { id: "five-forces-insights", title: "Five Forces: Key Insights", section: "analysis-02" },
  { id: "epic-pest-analysis", title: "EPIC PEST Analysis", section: "analysis-02" },
  { id: "market-summary", title: "Market Summary", section: "analysis-02" },
  // Section 03: Core Competencies Analysis
  { id: "analysis-divider-03", title: "Section 03: Core Competencies Analysis", section: "analysis-03" },
  { id: "technical-capabilities-analysis", title: "Technical Capabilities", section: "analysis-03" },
  { id: "organizational-capabilities-analysis", title: "Organizational Capabilities", section: "analysis-03" },
  { id: "strategic-resources-analysis", title: "Strategic Resources", section: "analysis-03" },
  { id: "vrin-analysis", title: "VRIN Analysis", section: "analysis-03" },
  // Section 04: Strategic Issues Analysis
  { id: "analysis-divider-04", title: "Section 04: Strategic Issues Analysis", section: "analysis-04" },
  { id: "issue1-deep-dive", title: "Issue #1: Market Share Erosion", section: "analysis-04" },
  { id: "issue2-deep-dive", title: "Issue #2: Non-Invasive Competition", section: "analysis-04" },
  // Section 05: Recommendations Analysis
  { id: "analysis-divider-05", title: "Section 05: Recommendations Analysis", section: "analysis-05" },
  { id: "recommendation1-analysis", title: "Recommendation: Value-Tier CGM", section: "analysis-05" },
  { id: "recommendation2-analysis", title: "Recommendation: Non-Invasive R&D", section: "analysis-05" },
  { id: "recommendation3-analysis", title: "Recommendation: Ecosystem Integration", section: "analysis-05" },
]

// Combined slides (for backwards compatibility)
export const slides = [...presentationSlides, ...analysisSlides]
