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
  coral: "#F97316", // Warm coral for problems/issues
  sage: "#58A618", // Sage green for solutions (using Dexcom green)
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

// Section 03 Part 1: Differentiation & Brand Image
export const differentiationFeatures = {
  superiorFeatures: [
    { feature: "Integrations with Insulin Pumps", description: "Seamless connectivity with leading AID systems including Tandem and Omnipod" },
    { feature: "Minimal Warmup", description: "30-minute warmup period vs competitors' longer initialization times" },
    { feature: "No Calibration Needed", description: "Factory-calibrated sensors eliminate the need for fingerstick calibrations" },
  ],
  brandAttributes: [
    { attribute: "Trusted by Doctors", description: "Dexcom is the most recommended CGM system by endocrinologists and healthcare providers" },
    { attribute: "Premium, State-of-the-Art, and Accurate", description: "Industry-leading accuracy with MARD <9% and cutting-edge sensor technology" },
  ],
}

export const strategyCanvasData = [
  { dimension: "Accuracy", "Dexcom G7": 95, "Libre 3": 75, "Guardian 4": 60, "Eversense E3": 85 },
  { dimension: "Duration", "Dexcom G7": 70, "Libre 3": 75, "Guardian 4": 50, "Eversense E3": 100 },
  { dimension: "Calibration", "Dexcom G7": 100, "Libre 3": 100, "Guardian 4": 50, "Eversense E3": 30 },
  { dimension: "Comfort", "Dexcom G7": 85, "Libre 3": 90, "Guardian 4": 65, "Eversense E3": 75 },
  { dimension: "Integration", "Dexcom G7": 100, "Libre 3": 60, "Guardian 4": 85, "Eversense E3": 50 },
]

export const brandImageData = {
  headline: "The Most Connected CGM System in the World",
  tagline: "Competitors offer a glucose reading. Dexcom offers a connected care network.",
  trustStatement: "Dexcom is a brand patients and doctors know they can trust",
  connections: [
    { type: "Insulin Pumps", partners: ["Tandem t:slim X2", "Omnipod 5", "Omnipod iLet"] },
    { type: "Wearables", partners: ["Apple Watch", "Garmin", "Fitbit"] },
    { type: "Mobile Apps", partners: ["Dexcom App", "Glooko", "Clarity"] },
    { type: "Care Network", partners: ["Clinicians", "Parents/Spouses", "Healthcare Providers"] },
  ],
}

// Section 03 Part 3: Value Chain & Consumption Chain
export const valueChainPrimary = [
  {
    title: "Inbound Logistics",
    description: "Procurement: Sourcing biosensing materials & components globally to fuel high-volume manufacturing",
  },
  {
    title: "Operations",
    description: "Manufacturing: High-precision, automated assembly of sensors & transmitters in large-scale facilities to achieve low unit cost",
  },
  {
    title: "Outbound Logistics",
    description: "Distribution: Managing supply chains to pharmacies, distributors, & direct-to-patient channels globally",
  },
  {
    title: "Marketing & Sales",
    description: "Advocacy: Campaigning for broad payer reimbursement & securing coverage for new patient populations. Commercial: Expanding the direct-to-consumer sales model to new wellness markets",
  },
  {
    title: "Service",
    description: "Support: Providing 24/7 technical & production assistance to ensure high user retention & confidence in the life-saving technology",
  },
]

export const valueChainSupport = [
  {
    title: "Firm Infrastructure",
    items: [
      {
        subtitle: "Compliance",
        description: "Maintaining a robust quality management system (QMS) & responding to regulatory requirements",
      },
      {
        subtitle: "Financial",
        description: "Managing large cash & liquid assets to fund global expansion and R&D",
      },
    ],
  },
  {
    title: "Human Resource Management",
    items: [
      {
        subtitle: "Talent",
        description: "Recruiting & training specialized engineers & clinical sales teams for a high-growth medical device market",
      },
    ],
  },
  {
    title: "Technology Development",
    items: [
      {
        subtitle: "R&D",
        description: "Continuous innovation on sensor accuracy, wear time, & software integration",
      },
      {
        subtitle: "AI/Software",
        description: "Integrating real-time data insights & AI into applications for enhanced user experience & clinical value",
      },
    ],
  },
  {
    title: "Procurement",
    items: [
      {
        subtitle: "Supplier Relations",
        description: "Building trust & reliability w/ critical, single-source component suppliers to mitigate supply chain risk",
      },
    ],
  },
]

export const valueChainTakeaways1 = {
  category: "Core Differentiators",
  takeaways: [
    {
      title: "Technology development is paramount",
      description: "The most critical activity is R&D. Their ability to shrink sensors, reduce warm-up time, & improve accuracy justifies their premium price point over competitors.",
    },
    {
      title: "Regulatory & Reimbursement Mastery",
      description: "The Marketing & Sales and Firm Infrastructure functions are central to turning innovation into revenue. Dexcom has mastered the process of securing payer reimbursement & navigating global regulatory approvals, this unlocks huge revenue streams.",
    },
  ],
}

export const valueChainTakeaways2 = {
  category: "Cost & Efficiency Focus",
  takeaways: [
    {
      title: "Scale for Cost Control",
      description: "Operations is focused on achieving massive scale & automation. This drives down COGS for high-volume products like the G7 & to make low-cost products like Stelo profitable.",
    },
    {
      title: "Supplier Dependence Risk",
      description: "The Procurement activity shows a potential risk. Relying on specialized, single-sourced suppliers for unique biosensing materials is necessary for product quality but creates a supply chain vulnerability that must be managed carefully.",
    },
  ],
}

export const valueChainTakeaways3 = {
  category: "Future Strategy Alignment",
  takeaways: [
    {
      title: "Service Drives Retention",
      description: "The Service activity is key to retaining users. Providing 24/7 tech support helps w/ patient frustration, renewal rates, & solidifies customer loyalty against competitors.",
    },
    {
      title: "HR for Innovation",
      description: "The HRM function support innovation by recruiting & retaining highly specialized engineering talent required to advance sensor tech & software integration ahead of its rivals.",
    },
  ],
}

export const consumptionChain1 = [
  {
    question: "How do consumers become aware of a need for your product/service?",
    answer: "Doctor diagnoses diabetes; recommend CGM technology.",
  },
  {
    question: "How do consumers find your offering?",
    answer: "Doctor writes prescription; patient goes to pharmacy",
  },
  {
    question: "How do consumers make their final selection (priority of attributes)?",
    answer: "Accuracy, alerts, size, & pump compatibility matter most",
  },
  {
    question: "How do consumers order & purchase your product?",
    answer: "Prescription filled at pharmacy or distributor; pay copay.",
  },
  {
    question: "How is your product/service delivered?",
    answer: "Picked up at pharmacy or shipped directly to door.",
  },
]

export const consumptionChain2 = [
  {
    question: "How is your product/service paid for?",
    answer: "Insurance pays bulk; patient pays negotiated copay/cash.",
  },
  {
    question: "How is your product stored/moved around?",
    answer: "Stored at room temperature; worn on body/in pocket.",
  },
  {
    question: "What is your product really used for?",
    answer: "Real-time glucose tracking; informs treatment decisions.",
  },
  {
    question: "What do consumers need help with when they use the product?",
    answer: "Sensor application, adhesive issues, and phone app setup.",
  },
  {
    question: "How is your product/service disposed of?",
    answer: "Applicator & sensor disposed as biohazard waste.",
  },
]

export const consumptionChainTakeaways1 = {
  category: "Awareness & Purchase Stages",
  takeaways: [
    {
      title: "Physician as the Gatekeeper",
      description: "The chain clearly shows that the physician is the most critical factor in initiating the sale & ensuring the transaction. Dexcom's strategy must heavily focus on clinical evidence & physician education.",
    },
    {
      title: "Insurance Dictates Access",
      description: 'The complexity of "How is your product/service paid for?" highlights that insurance coverage & reimbursement are the biggest hurdles to access, not necessarily consumer awareness.',
    },
  ],
}

export const consumptionChainTakeaways2 = {
  category: "Usage & Post-Purchase Stages",
  takeaways: [
    {
      title: "Ease-of-Use is Paramount",
      description: "The questions about what consumers need help with show that the sensor application & technical setup are major pain points. Improvements here directly reduce customer friction & increase loyalty.",
    },
    {
      title: "Data is the Product",
      description: 'The answer to "What is your product really used for?" confirms that the physical sensor is simply a delivery mechanism; the true product value is the real-time data & actionable health insights.',
    },
    {
      title: "Disposal is a Hassle",
      description: "The final step indicates that disposal is a known inconvenience that adds complexity to the user experience, particularly compared to competitors w/ smaller, less wasteful applicators.",
    },
  ],
}

// Competitor Response Analysis Data (Section 03 Part 2)
export const competitorResponse = {
  futureGoals: {
    dexcom: [
      "Expand into the Type 2 Non-Insulin Market",
      "Drive Product Innovation & Convenience",
      "Grow Global Market Access & Coverage",
      "Establish a Metabolic Health Platform",
    ],
    abbott: [
      "Expand Global CGM Market Leadership",
      "Innovate for Access & Affordability",
      "Drive integration & Next-gen Features",
      "Sustain Growth in Core Medical Devices",
    ],
    medtronic: [
      "Become a standalone Company",
      "Strengthen Automated Insulin Delivery",
      "Embrace Interoperability",
      "Expand Patient Acces",
    ],
    senseonics: [
      "Launch the 365 - Day Sensor",
      "Integrate w/ AID Pumps",
      "Transition to Direct Commercialization",
      "Build a Comprehensible Solution",
    ],
  },
  assumptions: {
    dexcom: [
      "Reimbursement for all Type 2",
      "Primary care widely adopts CGM",
      "G7/G8 maintains their accuracy lead",
      "Non-diabetics will buy Stelo for health",
    ],
    abbott: [
      "FreeStyle Libre remains cheapest",
      "Non-insulin users widely adopt",
      "Dual sensor beats competitors",
      "Global adoption accelerates easily",
    ],
    medtronic: [
      "MiniMed spin-off creates value",
      "Integrated AID is preferred",
      "New sensor closes accuracy gap",
      "Regulatory approval remains smooth",
    ],
    senseonics: [
      "Year-long sensor overcomes cost",
      "High patient retention continues",
      "Physicians embrace procedure",
      "Direct sales model succeeds",
    ],
  },
  currentStrategy: {
    dexcom: [
      "Expand into Type 2 market",
      "Launch 15 - day G7 sensor",
      "Maintain superior accuracy advantage",
      "Build massive global scale",
      "Drive metabolic health adoption",
    ],
    abbott: [
      "Lead global price & access",
      "Seamlessly integrate w/ pumps",
      "Increase sensor wear time",
      "Broaden over-the-counter sales",
      "Launch advanced Libre Plus",
    ],
    medtronic: [
      "Spin off diabetes business",
      "Focus on integrated pump systems",
      "Achieve high Time in Range",
      "Improve sensor tech.",
      "Pursue interoperable components",
    ],
    senseonics: [
      "Aggressively market 365 - day sensor",
      "Take over commercialization fully",
      "Partner w/ AID pump companies",
      "Build strong physician network",
    ],
  },
  capabilities: {
    dexcom: [
      "Industry-leading accuracy (MARD)",
      "Best real-time data sharing",
      "Strong pump integration network",
      "Rapid sensor warm-up time",
      "High-volume manufacturing",
    ],
    abbott: [
      "Extremely low production costs",
      "Highest volume global sales",
      "Smallest, thinnest sensor size",
      "Broad market distribution reach",
      "Highly diversified parent company",
    ],
    medtronic: [
      "Pioneer insulin pump tech",
      "Closed-loop system integration",
      "Full diabetes therapy ecosystem",
      "Deep hospital system relationships",
      "Large global service infrastructure",
    ],
    senseonics: [
      "Longest sensor wear time (365 days)",
      "Fully implantable sensor design",
      "Removable, reusable transmitter",
      "Very low patient interaction",
    ],
  },
  responses: {
    abbott: {
      title: "Abbott",
      response: "Abbott's immediate response will likely be to aggressively counter Dexcom's pricing & expanded market reach by lowering the FreeStyle Libre price & accelerating the development of a 15-day sensor to match the G7. They will also likely strengthen critical pump integration deals & push new monitoring tech like the dual glucose-ketone sensor.",
    },
    medtronic: {
      title: "Medtronic",
      response: "Medtronic will likely focus on its end-to-end diabetes management system, leveraging the ongoing business spin-off to gain focus. The core strategy involves rapidly rolling out the Simplera Sync CGM and finalizing the integration of Abbot's more accurate Libre sensors. This will solidify their MiniMed 780G as a superior, fully automated closed-loop solution.",
    },
    senseonics: {
      title: "Senseonics",
      response: "Senseonics will likely aggressively market the unique advantage of its 365-day, fully implantable sensor, emphasizing patient freedom & less frequent changes, which is a key differentiator from Dexcom's 10- or 15-day wear. They will also likely launch long-wear pump integration & highlight the \"no sensor waste\" benefit to appeal to the value-conscious user.",
    },
  },
}

// SWOT Analysis Data (Section 06)
export const swotAnalysis = {
  strengths: [
    {
      title: "Leader in Glucose Monitoring",
      description: "Dexcom is known for being easy to use, accurate, and providing real-time data for users",
    },
    {
      title: "Trusted Brand",
      description: "Dexcom is associated with good quality & reliable CGM which has led to customer loyalty",
    },
    {
      title: "Partnerships",
      description: "Dexcom has partnered with healthcare providers, insulin pump manufacturers, and pharmaceutical companies which has expanded their reach",
    },
    {
      title: "Patented Technology",
      description: "Dexcom's technology is protected",
    },
  ],
  weaknesses: [
    {
      title: "Expensive",
      description: "CGM systems can be expensive, which is a barrier for users without insurance.",
    },
    {
      title: "Niche product",
      description: "Limited market that they are heavily reliant on.",
    },
    {
      title: "Subscription-based",
      description: "Revenue comes from subscriptions, which means Dexcom needs customer retention",
    },
    {
      title: "Market Dependency",
      description: "Dexcom depends on U.S. customers heavily for a significant portion of their revenue.",
    },
  ],
  opportunities: [
    {
      title: "Expanding Market",
      description: "The global diabetes population is expected to continue growing. Additionally, there is an increasing interest by non-insulin users who are interested in Dexcom for wellness tracking. This presents a significant growth opportunity for Dexcom globally.",
    },
    {
      title: "Technological Advancements",
      description: "Advancements in sensor technology and additional integrations would help Dexcom to further enhance its CGM systems, making them more accurate, user-friendly, and integrated with other healthcare devices.",
    },
    {
      title: "Telehealth Integration",
      description: "As telehealth and remote patient monitoring becomes increasingly common, there is an opportunity for Dexcom to integrate its CGM systems with telehealth platforms, enabling healthcare providers to remotely monitor and manage patients' glucose levels.",
    },
  ],
  threats: [
    {
      title: "Competition",
      description: "Companies are introducing their own CGM systems. This competition is from both existing companies and new entrants which could impact their market share. As competition increases, there may be pressure to lower prices, which could decrease Dexcom's profit margins.",
    },
    {
      title: "Regulations",
      description: "The medical device industry is subject to strict regulatory requirements. Any delays or difficulties in obtaining regulatory approvals could slow Dexcom's growth.",
    },
    {
      title: "New Technology",
      description: "Technological advancements could lead to new diabetes management solutions that could potentially disrupt Dexcom's market position.",
    },
  ],
}

// Section 07: Recommendations Data (Pages 35-40)
export const recommendationsSection07 = {
  issue1: {
    title: "Limited Market with Fragmented Competition",
    points: [
      "Too reliant on Core Market (Type 1 diabetes). This is a smaller population compared to Type 2 diabetes.",
      "CGM market is highly competitive, especially with Abbott's FreeStyle Libre system.",
      "CGM devices & their supplies are expensive, varying insurance coverage acts as a major barrier to wider adoption.",
      "Too focused on Insulin Users, this leaves the growing population of non-insulin-dependent Type 2 patients underserved.",
    ],
  },
  solution1: {
    title: "Market to Athletes and Health Industry",
    points: [
      "Capture the Non-Insulin-Dependent T2D Market. This is the largest potential growth area for Dexcom. Highlight how CGM shows the immediate impact of food & physical activity.",
      "Create a Lifestyle/Performance Segment (Athletes). Invest in NIL Programs & Sponsorships, help normalize the device.",
      "Shift the marketing narrative to focusing on broader metabolic health. Educate Primary Care Physicians rather than just endocrinologists.",
    ],
  },
  issue2: {
    title: "Competitors Replicating Dexcom's Integration",
    points: [
      "Dexcom was the first to offer integration with AID systems & popular digital health apps. Competitors now are forming their own partnerships & developing their own AID compatibility systems.",
      "Unique features, like real-time data transmission & high accuracy are now standard across the industry.",
      "Digital Health Apps Compete with Dexcom's Clarity data analytics platform.",
    ],
  },
  solution2: {
    title: "Create a product that lasts for greater amount of time than competition",
    points: [
      "Reduce replacement frequency. Move beyond the industry standard of 14-15 days.",
      "Continue R&D efforts toward a 21-day or 30-day wear sensor.",
      "Address patient fatigue and cost. Longer wear time addresses the two biggest pain points for CGM users: convenience & cost/waste.",
      "Counter the Implantable Threat (Eversense).",
    ],
  },
  issue3: {
    title: "Erosion of Physician Loyalty & Recommendation Rates",
    points: [
      "Competitors have ramped up their professional marketing efforts.",
      "Focused shift more to Direct-To-Consumer rather than focusing on educating the prescribing physician.",
      "As Dexcom expands to Type 2 & general wellness, they must educate a wider range of providers.",
      "Dexcom's systems still require physician's assistance with prescriptions, onboarding, & interpreting data.",
    ],
  },
  solution3: {
    title: "Market at Medical Conferences & Provide Samples to Clinics",
    points: [
      "Maximize impact at Medical Conferences: Present clinical evidence & give hands-on experience.",
      "Provide no-cost samples to clinics to build trust. Encourage the use of Professional CGM samples in clinics for diagnostic purposes. Streamline the sample request process.",
      "Physicians who receive samples & see positive, real-world outcomes will gain confidence.",
    ],
  },
}
// Main Presentation Slides
export const presentationSlides = [
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
  // Section 03: Unique Value & Competitor Analysis (18 slides)
  { id: "unique-value-divider", title: "Section 03: Unique Value & Competitor Analysis", section: "analysis-03" },
  { id: "differentiation-strategy", title: "Differentiation Strategy", section: "analysis-03" },
  { id: "strategy-canvas", title: "Strategy Canvas", section: "analysis-03" },
  { id: "brand-image", title: "Brand Image", section: "analysis-03" },
  { id: "future-goals", title: "Future Goals", section: "analysis-03" },
  { id: "assumptions", title: "Assumptions", section: "analysis-03" },
  { id: "current-strategy", title: "Current Strategy", section: "analysis-03" },
  { id: "capabilities-comparison-detailed", title: "Capabilities Comparison", section: "analysis-03" },
  { id: "competitor-response-analysis", title: "Competitor Response Analysis", section: "analysis-03" },
  { id: "value-chain-primary", title: "Value Chain: Primary Activities", section: "analysis-03" },
  { id: "value-chain-support", title: "Value Chain: Support Activities", section: "analysis-03" },
  { id: "value-chain-takeaways-1", title: "Value Chain Takeaways: Core Differentiators", section: "analysis-03" },
  { id: "value-chain-takeaways-2", title: "Value Chain Takeaways: Cost & Efficiency", section: "analysis-03" },
  { id: "value-chain-takeaways-3", title: "Value Chain Takeaways: Future Strategy", section: "analysis-03" },
  { id: "consumption-chain-1", title: "Consumption Chain (Part 1)", section: "analysis-03" },
  { id: "consumption-chain-2", title: "Consumption Chain (Part 2)", section: "analysis-03" },
  { id: "consumption-chain-takeaways-1", title: "Consumption Chain Takeaways: Awareness & Purchase", section: "analysis-03" },
  { id: "consumption-chain-takeaways-2", title: "Consumption Chain Takeaways: Usage & Post-Purchase", section: "analysis-03" },
  // Section 04: Resources & Capabilities (5 slides)
  { id: "resources-capabilities-divider", title: "Section 04: Resources & Capabilities", section: "analysis-04" },
  { id: "resources-detailed", title: "Resources", section: "analysis-04" },
  { id: "capabilities-comprehensive", title: "Capabilities", section: "analysis-04" },
  { id: "limitations-resources", title: "Limitations of Resources", section: "analysis-04" },
  { id: "limitations-capabilities", title: "Limitations of Capabilities", section: "analysis-04" },
  // Section 05: Imitation Barriers (4 slides)
  { id: "imitation-barriers-divider", title: "Section 05: Imitation Barriers", section: "analysis-05" },
  { id: "imitation-barriers-created", title: "Imitation Barriers Created", section: "analysis-05" },
  { id: "imitation-barriers-faced", title: "Imitation Barriers Faced", section: "analysis-05" },
  { id: "imitation-barriers-insights", title: "Imitation Barriers Key Insights", section: "analysis-05" },
  // Section 06: SWOT Analysis (5 slides)
  { id: "swot-divider", title: "Section 06: SWOT Analysis", section: "analysis-06" },
  { id: "swot-strengths", title: "SWOT: Strengths", section: "analysis-06" },
  { id: "swot-weaknesses", title: "SWOT: Weaknesses", section: "analysis-06" },
  { id: "swot-opportunities", title: "SWOT: Opportunities", section: "analysis-06" },
  { id: "swot-threats", title: "SWOT: Threats", section: "analysis-06" },
  // Section 07: Recommendations (4 slides)
  { id: "recommendations-divider", title: "Section 07: Recommendations", section: "analysis-07" },
  { id: "issue-1-detailed", title: "Recommendation #1: Expand Market Reach", section: "analysis-07" },
  { id: "issue-2-detailed", title: "Recommendation #2: Innovate on Convenience", section: "analysis-07" },
  { id: "issue-3-detailed", title: "Recommendation #3: Rebuild Physician Network", section: "analysis-07" },
]

// Combined slides (for backwards compatibility)
export const slides = [...presentationSlides, ...analysisSlides]
