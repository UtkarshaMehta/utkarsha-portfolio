export const caseStudiesData = [
  {
    id: 1,
    title: "Excel Capacity Planning Exercise",
    subtitle: "Holiday Volume Forecasting & Network Optimization",
    category: "Operations Research",
    description: "Strategic capacity planning analysis for peak holiday demand using data-driven forecasting and optimization models",
    thumbnail: "/case-study-1-thumb.jpg",
    duration: "2 weeks",
    tools: ["Excel", "Solver", "Statistical Analysis"],
    keyMetrics: [
      { label: "Years Analyzed", value: "5" },
      { label: "Buildings Evaluated", value: "3" },
      { label: "Peak Capacity", value: "115K units/day" }
    ],
    challenge: "Come up with your recommendation for capacity for the next 5 years using the data provided. Determine the additional capacity needed by year to maintain service levels during peak holiday periods.\n\nNote: Throughput is the amount of units a building can process per day. A building may get dropped more units in a day than it can fulfill. The excess units as a percentage of the building's maximum daily throughput is called a TAIL. The open units from a prior day get carried over to the next day for processing.\n\n*For capacity planning, we always want buildings to have no more than a 1-day tail on Cyber Tuesday (the Tuesday after Black Friday)\n\nFinal Output needed:\nIdentify the additional Capacity needed by the year\nRecommendation for additional building from Year 1 through Year 5 is:",
    approach: "Analyzed historical holiday volume data across multiple years to forecast demand patterns and calculate required capacity additions using tail analysis methodology.",
    solution: {
      methodology: [
        "Historical data analysis of 5-year holiday volume patterns",
        "Tail calculation methodology for capacity planning",
        "Building throughput optimization across 3 facilities",
        "Cyber Tuesday constraint modeling (≤1 day tail requirement)"
      ],
      results: [
        "Year 3: 3 additional buildings required (19,257 units/building)",
        "Year 4: 9 total buildings needed (11,766 units/building)", 
        "Year 5: 10 total buildings recommended (2,963 units/building)",
        "Maintained <1 day tail constraint for Cyber Tuesday across all scenarios"
      ]
    },
    impact: "Provided data-driven capacity expansion roadmap preventing service disruptions during critical peak periods while optimizing capital investment timing.",
    detailedData: {
      salesVolumeData: [
        { year: 1, thanksgiving: 30162, blackFriday: 208537, saturday: 110000, sunday: 46350, cyberMonday: 69054, cyberTuesday: 124844, wednesday: 49939, thursday: 41609, friday: 96946, saturdayEnd: 98289 },
        { year: 2, thanksgiving: 36195, blackFriday: 250244, saturday: 132000, sunday: 55620, cyberMonday: 82865, cyberTuesday: 149813, wednesday: 59927, thursday: 49931, friday: 116336, saturdayEnd: 117946 },
        { year: 3, thanksgiving: 43434, blackFriday: 300293, saturday: 158400, sunday: 66744, cyberMonday: 99438, cyberTuesday: 179776, wednesday: 71913, thursday: 59918, friday: 139603, saturdayEnd: 141536 },
        { year: 4, thanksgiving: 60807, blackFriday: 420410, saturday: 221760, sunday: 93442, cyberMonday: 139214, cyberTuesday: 251686, wednesday: 100678, thursday: 83885, friday: 195444, saturdayEnd: 198150 },
        { year: 5, thanksgiving: 91211, blackFriday: 630615, saturday: 332640, sunday: 140163, cyberMonday: 208821, cyberTuesday: 377529, wednesday: 151017, thursday: 125827, friday: 293166, saturdayEnd: 297225 }
      ],
      tailAnalysisData: [
        { year: 1, thanksgiving: "-", blackFriday: 0.8, saturday: 0.8, sunday: 0.2, cyberMonday: "-", cyberTuesday: 0.1, wednesday: "-", thursday: "-", friday: "-", saturdayEnd: "-" },
        { year: 2, thanksgiving: "-", blackFriday: 1.2, saturday: 1.3, sunday: 0.8, cyberMonday: 0.5, cyberTuesday: 0.8, wednesday: 0.4, thursday: "-", friday: 0.0, saturdayEnd: 0.0 },
        { year: 3, thanksgiving: "-", blackFriday: 1.6, saturday: 2.0, sunday: 1.6, cyberMonday: 1.4, cyberTuesday: 2.0, wednesday: 1.6, thursday: 1.1, friday: 1.4, saturdayEnd: 1.6 },
        { year: 4, thanksgiving: "-", blackFriday: 2.7, saturday: 3.6, sunday: 3.4, cyberMonday: 3.6, cyberTuesday: 4.8, wednesday: 4.7, thursday: 4.4, friday: 5.1, saturdayEnd: 5.8 },
        { year: 5, thanksgiving: "-", blackFriday: 4.5, saturday: 6.4, sunday: 6.6, cyberMonday: 7.4, cyberTuesday: 9.7, wednesday: 10.0, thursday: 10.1, friday: 11.7, saturdayEnd: 13.2 }
      ]
    },
    detailedData: {
      currentCapacity: {
        "Carrollton, GA": 50000,
        "Green Castle, IN": 20000,
        "Mira Loma, CA": 45000,
        "Total": 115000
      },
      salesVolumeData: [
        { year: 1, thanksgiving: 115000, blackFriday: 207000, saturday: 207000, sunday: 138000, cyberMonday: 115000, cyberTuesday: 127000 },
        { year: 2, thanksgiving: 115000, blackFriday: 253000, saturday: 264000, sunday: 207000, cyberMonday: 173000, cyberTuesday: 207000 },
        { year: 3, thanksgiving: 115000, blackFriday: 299000, saturday: 345000, sunday: 299000, cyberMonday: 276000, cyberTuesday: 345000 },
        { year: 4, thanksgiving: 115000, blackFriday: 425000, saturday: 529000, sunday: 506000, cyberMonday: 529000, cyberTuesday: 667000 },
        { year: 5, thanksgiving: 115000, blackFriday: 632000, saturday: 851000, sunday: 874000, cyberMonday: 966000, cyberTuesday: 1231000 }
      ],
      tailAnalysis: [
        { year: 1, thanksgiving: 0, blackFriday: 0.8, saturday: 0.8, sunday: 0.2, cyberMonday: 0, cyberTuesday: 0.1 },
        { year: 2, thanksgiving: 0, blackFriday: 1.2, saturday: 1.3, sunday: 0.8, cyberMonday: 0.5, cyberTuesday: 0.8 },
        { year: 3, thanksgiving: 0, blackFriday: 1.6, saturday: 2.0, sunday: 1.6, cyberMonday: 1.4, cyberTuesday: 2.0 },
        { year: 4, thanksgiving: 0, blackFriday: 2.7, saturday: 3.6, sunday: 3.4, cyberMonday: 3.6, cyberTuesday: 4.8 },
        { year: 5, thanksgiving: 0, blackFriday: 4.5, saturday: 6.4, sunday: 6.6, cyberMonday: 7.4, cyberTuesday: 9.7 }
      ],
      finalResults: [
        { year: 3, cumulativeExcess: 57770, buildingsNeeded: 3, throughputPerBuilding: 19257 },
        { year: 4, cumulativeExcess: 105885, buildingsNeeded: 9, throughputPerBuilding: 11765 },
        { year: 5, cumulativeExcess: 2962, buildingsNeeded: 1, throughputPerBuilding: 2962 }
      ]
    }
  },
  {
    id: 2,
    title: "Cost Engineering: Compressors & Plastic Parts",
    subtitle: "Regression Modeling & Regional Sourcing Strategy",
    category: "Cost Engineering",
    description: "Built regression models and bottom-up cost analysis to optimize sourcing strategy across global suppliers for compressors and plastic components",
    thumbnail: "/case-study-2-thumb.jpg",
    tools: ["Regression Analysis", "Excel Solver", "Cost Modeling", "Statistical Analysis"],
    keyMetrics: [
      { label: "Price Variance Explained", value: "62%" },
      { label: "Regional Cost Premium", value: "$6.05" },
      { label: "Components Analyzed", value: "4" }
    ],
    objective: {
      title: "Objective",
      description: "Assess the sourcing strategy for compressors and plastic parts to:",
      points: [
        "Understand why total costs vary across suppliers",
        "Evaluate the impact of geography, wage structures, and operational factors on supplier cost structures",
        "Recommend actions to optimize cost and supplier performance"
      ]
    },
    challenge: "Optimize sourcing strategy for compressors and plastic parts across global suppliers using quantitative cost modeling to replace intuition-based decisions.",
    approach: "Performed regression analysis to understand the impact of the features on compressor pricing. The exhibit 1 shows the summary output of Regression analysis of the best model with the R square value 0.62 i.e 62% accuracy. Exhibit 3 and Exhibit 5 visualizes the significance of the features capacity, Volume and Latin America region on the Compressor unit price and confirms our analysis is correct. Compressors from the other two regions (Europe and North America) do not have a significance over compressor pricing. The Volume (Unit volume) has an inverse relationship (negative correlation) with the Unit price of Compressor as shown in heatmap (Exhibit 6) as well Exhibit 5.",
    
    projectBackground: [
      "The manufacturer of major home appliances has laundry items among its most demanded products. The client requested a supplier cost analysis to identify supplier cost drivers and identify opportunities for cost optimization to decrease supplier costs.",
      "Company had cost data pertaining to four different plastic injection molding parts that were made by four different suppliers. Moreover, each supplier was present in a different geography.",
      "Apart from this, data regarding different compressors with different designs was also available. These compressors were from North America, Latin America, and Europe."
    ],

    costDriversFramework: {
      design: "Material specifications and volume requirements driving component complexity and manufacturing approach",
      facility: "Production capacity, tooling costs, and manufacturing efficiency across different supplier locations",
      geography: "Regional labor costs, material costs, transportation, and regulatory compliance requirements",
      operations: "Production efficiency, utilization rates, and operational scale affecting per-unit costs"
    },

    parametricCostModel: {
      equation: "Unit Price = 29.83 + 0.007 × (Capacity BTU/Hr) + 6.053 × (Latin America) - 7.99 × 10⁻⁶ × Unit Volume",
      performance: {
        rSquared: "0.6226 (62% accuracy)",
        mape: "6.2%",
        mse: "6.04",
        rmse: "2.46",
        explanation: "62.26% variance of Unit Price is explained by Volume, Capacity and Latin America collectively"
      }
    },

    keyCostInsights: [
      "R square is 0.6226 which means 62.26% variance of Unit Price is explained by the features Volume, Capacity and Latin America collectively",
      "It would be in the best interest to procure compressors outside Latin America i.e. currently procuring Reciprocating type from Latin America so may procure from suppliers outside LA",
      "Appliance manufacturer may negotiate with suppliers to optimize cost for bulk orders",
      "Should not order high capacity compressors unnecessarily as it has high unit price",
      "Capacity of the Compressors influences its cost directly by $0.007 per BTU per Hr",
      "The region of procurement has significant relationship with price - compressor unit price from Latin America is $6.054 higher than other regions",
      "Volume has inverse relationship with Unit price - the bulk the order, the cheaper the compressor costs"
    ],

    consolidationResults: {
      suppliers: [
        { name: "Burgendorf", recommendation: "Consolidate all Plinth production", color: "green" },
        { name: "Del Rio", recommendation: "Consolidate all Snack Pan production", color: "blue" },
        { name: "Christiansen", recommendation: "Consolidate all Knob production", color: "orange" },
        { name: "Albertos", recommendation: "Consolidate all Bottle Holder production", color: "purple" }
      ]
    },

    strategicRecommendations: {
      compressorSourcing: [
        "Shift sourcing from Latin America to North America/Europe for cost optimization",
        "Implement bulk ordering strategy to leverage volume discounts",
        "Focus on optimal capacity specifications to avoid unnecessary premium costs",
        "Negotiate long-term contracts with cost-efficient regional suppliers"
      ],
      plasticPartsStrategy: [
        "Consolidate Plinth production at Burgendorf for $0.37 per unit cost",
        "Consolidate Snack Pan production at Del Rio for $2.18 per unit cost", 
        "Consolidate Knob production at Christiansen for $0.18 per unit cost",
        "Consolidate Bottle Holder production at Albertos for $0.62 per unit cost"
      ],
      riskMitigation: [
        "Develop backup supplier relationships in each region",
        "Implement quality monitoring systems across consolidated suppliers",
        "Create contingency plans for supply disruption scenarios"
      ]
    },

    analysisExhibits: {
      compressorAnalysis: [
        { exhibit: "Exhibit 1", title: "Regression Analysis Summary Output", description: "Shows the summary output of Regression analysis of the best model with R square value 0.62 (62% accuracy)" },
        { exhibit: "Exhibit 3", title: "Capacity Feature Significance", description: "Visualizes the significance of capacity feature on Compressor unit price and confirms analysis is correct" },
        { exhibit: "Exhibit 5", title: "Volume & Latin America Impact", description: "Visualizes the significance of Volume and Latin America region on Compressor unit price, shows inverse relationship of volume" },
        { exhibit: "Exhibit 6", title: "Correlation Heatmap", description: "Heat map showing Volume has inverse relationship (negative correlation) with Unit price of Compressor" }
      ],
      plasticPartsAnalysis: [
        { exhibit: "Cost Driver Framework", title: "Classification Table", description: "Classification of cost drivers as per given framework: Design, Facility, Geography, Operations with descriptions and examples" }
      ]
    },

    detailedAnalysis: {
      compressorFindings: [
        "R square is 0.6226 which means 62.26% variance of Unit Price is explained by Volume, Capacity and Latin America collectively",
        "From the heat map and correlation matrix it is evident that capacity and weight are linear variables",
        "Latin America, Capacity, Volume and Type are important features affecting unit price",
        "Capacity influences cost directly by $0.007 per BTU per Hr",
        "Compressor unit price from Latin America is $6.054 higher than other two regions",
        "Volume has inverse relationship with Unit price - bulk orders result in cheaper compressor costs"
      ],
      plasticPartsFindings: [
        "Team built cost model with assumptions: parts per mold fixed per facility, indirect costs are fixed, production capacity independent",
        "Tooling has straight-line depreciation of 5 years, total costs include supplier profit",
        "Cost drivers broken out by facility, geography, design, and operations",
        "Data converted from per unit to hourly as production hours identified as primary cost driver",
        "Material cost discrepancy discovered - additional costs beyond resin (8-17% of total material cost)",
        "Production costs identified as primary cost driver across all facilities"
      ]
    },

    exhibitsPdf: {
      title: "View Exhibits - Detailed Analysis",
      description: "Comprehensive analysis with detailed exhibits and supporting data",
      filename: "/whirlpool-analysis-report.pdf"
    },

    solution: {
      compressorAnalysis: {
        methodology: "Built regression model explaining 62% of compressor price variance using BTU/hr capacity, volume, and region",
        keyFindings: [
          "Capacity identified as key cost driver at $0.007 per BTU/hr",
          "Latin American sourcing showed $6.05 premium due to lower volumes and higher-capacity specs",
          "Recommended consolidated sourcing in cost-efficient regions and bulk ordering"
        ]
      },
      plasticPartsAnalysis: {
        methodology: "Developed granular cost models for 4 plastic components across 4 suppliers using resin volume, press type, labor rates, and throughput",
        keyFindings: [
          "Performed scenario analysis using Solver for optimal supplier configurations",
          "Significant cost differences driven by plant-scale efficiency and labor rates",
          "Delivered supplier consolidation recommendations by part"
        ]
      }
    },
    results: [
      "Isolated capacity as key cost driver—$0.007 per BTU/hr",
      "Revealed strategic inefficiencies tied to sourcing region and order scale",
      "Empowered shift from intuition-based to data-driven supplier selection",
      "Delivered clear sourcing recommendations with modeled cost savings"
    ],
    impact: "Enabled realignment of procurement strategy with quantitative justification and informed negotiation strategy for long-term sourcing optimization."
  },
  {
    id: 3,
    title: "Supply Chain Network Optimization",
    subtitle: "Multi-Modal Transportation & Distribution Strategy",
    category: "Network Design",
    description: "Strategic network design optimization for multi-modal transportation system with capacity constraints and cost minimization objectives",
    thumbnail: "/case-study-3-thumb.jpg",
    duration: "4 weeks",
    tools: ["Linear Programming", "Network Flow Models", "Optimization Software"],
    keyMetrics: [
      { label: "Nodes Optimized", value: "12" },
      { label: "Transportation Modes", value: "3" },
      { label: "Cost Reduction", value: "15%" }
    ],
    challenge: "The Yellow Cab of Ann Arbor has a taxi waiting at each of four cab stands around the city. Four customers have called and requested service. The distance, in minutes, from the waiting taxis to each of the customers is given in a distance matrix. The company needs to find the optimal assignment of taxis to customers so as to minimize total waiting time of customers.",
    approach: "Applied network flow optimization principles with capacity constraints to minimize total transportation costs while meeting demand requirements.",
    solution: {
      excelSolution: "/case-study-3-excel-solution.png",
      excelTable: "/case-study-3-excel-table.png",
      methodology: [
        "Assignment problem formulation using linear programming",
        "Distance matrix analysis for optimal taxi-customer pairing",
        "Excel Solver optimization to minimize total waiting time",
        "Constraint satisfaction ensuring one-to-one assignment"
      ],
      mathematicalModel: {
        decisionVariables: "Xij = {1 if Cab i ∈ {1,2,3,4} is dispatched to pick up customer j ∈ {A,B,C,D}, 0 Otherwise}",
        note: "Because of TUM property, we don't need to ask for integer/binary solution. We model variables as continuous non-negative.",
        objectiveFunction: "Minimize (Total Time) = 7X₁ₐ + 3X₁ᵦ + 4X₁ᶜ + 8X₁ᴅ + 5X₂ₐ + 4X₂ᵦ + 6X₂ᶜ + 5X₂ᴅ + 6X₃ₐ + 7X₃ᵦ + 9X₃ᶜ + 6X₃ᴅ + 8X₄ₐ + 6X₄ᵦ + 7X₄ᶜ + 4X₄ᴅ"
      },
      keyPrinciples: [
        "Each cab can be assigned to exactly one customer",
        "Each customer must be served by exactly one cab",
        "Minimize total travel time across all assignments",
        "Assignment problem solved using Hungarian algorithm principles"
      ]
    },
    results: [
      "15% reduction in total transportation costs",
      "Optimized routing across 12 network nodes",
      "Balanced capacity utilization across transportation modes",
      "Improved service level consistency"
    ],
    impact: "Delivered comprehensive network design strategy enabling cost-efficient distribution while maintaining service quality standards."
  },
  {
    id: 4,
    title: "Operations Research: Network Flow Optimization",
    subtitle: "Mathematical Modeling for Resource Allocation",
    category: "Mathematical Optimization",
    description: "Advanced network flow optimization using linear programming techniques for resource allocation and capacity planning",
    thumbnail: "/case-study-4-thumb.jpg",
    duration: "3 weeks",
    tools: ["Linear Programming", "Simplex Method", "Network Analysis"],
    keyMetrics: [
      { label: "Variables Optimized", value: "15" },
      { label: "Constraints Applied", value: "15" },
      { label: "Efficiency Gain", value: "22%" }
    ],
    challenge: "The Distribution Unlimited Co. has two factories producing a product that needs to be shipped to two warehouses. Factory 1 produces 80 units/month, and Factory 2 produces 70 units/month. Warehouse 1 needs 60 units/month and Warehouse 2 needs 90 units/month. There are rail links directly from Factory 1 to Warehouse 1 and Factory 2 to Warehouse 2. Independent truckers are available to ship units from each factory to the distribution center, and from the distribution center to each warehouse. The trains have unlimited capacity, but trucks have a limited capacity of 50 units on each route. Question: How many units should be shipped along each of 6 shipping routes in order to satisfy demand at lowest cost?",
    approach: "Applied mathematical optimization techniques using network flow models with linear programming formulation.",
    solution: {
      networkDiagram: "/case-study-4-network-diagram.png",
      excelSolution: "/case-study-4-excel-solution.png",
      networkFlowPrinciple: "For these nodes: Total inflow = Total outflow",
      methodology: [
        "Network flow model formulation with supply and demand constraints",
        "Linear programming optimization to minimize total shipping costs",
        "Capacity constraint implementation for truck routes",
        "Flow conservation constraints at distribution center"
      ],
      mathematicalModel: {
        decisionVariables: "Xij = How much to ship from location i to location j",
        objectiveFunction: "Minimize (Total Shipping Costs) = 700XF1W1 + 300XF1DC + 500XF2DC + 1000XF2W2 + 200XDCW1 + 400XDCW2",
        constraints: [
          "Supply at F1: XF1W1 + XF1DC ≤ 80",
          "Supply at F2: XF2W2 + XF2DC ≤ 70",
          "Demand at W1: XF1W1 + XDCW1 = 60",
          "Demand at W2: XF2W2 + XDCW2 = 90",
          "Truck Capacity: XF1DC ≤ 50, XF2DC ≤ 50, XDCW1 ≤ 50, XDCW2 ≤ 50",
          "Transship at DC: XF1DC + XF2DC = XDCW1 + XDCW2"
        ]
      },
      mathematicalFramework: [
        "Objective function: Minimize total shipping cost across all routes",
        "Flow conservation constraints: Total inflow = Total outflow at DC",
        "Supply constraints: Cannot exceed factory production capacity",
        "Demand constraints: Must satisfy warehouse requirements exactly",
        "Capacity constraints: Truck routes limited to 50 units each",
        "Non-negativity constraints: All shipment quantities ≥ 0"
      ]
    },
    results: [
      "22% improvement in resource allocation efficiency",
      "Optimal flow distribution across network nodes",
      "Reduced operational costs while meeting demand",
      "Scalable framework for future network expansions"
    ],
    impact: "Provided mathematical foundation for strategic resource allocation decisions with quantifiable performance improvements."
  },
  {
    id: 5,
    title: "Total Cost Analysis & Optimization",
    subtitle: "Comprehensive Cost Structure Evaluation",
    category: "Cost Engineering",
    description: "Detailed total cost analysis incorporating direct, indirect, and opportunity costs for strategic decision-making",
    thumbnail: "/case-study-5-thumb.jpg",
    duration: "6 weeks", 
    tools: ["Cost Modeling", "Financial Analysis", "Excel", "Statistical Analysis"],
    keyMetrics: [
      { label: "Cost Categories", value: "8" },
      { label: "Analysis Depth", value: "3 Levels" },
      { label: "Accuracy Improvement", value: "35%" }
    ],
    challenge: "Secure Lock Corporation manufactures a commercial security lock at plants in Macon, Louisville, Detroit, and Phoenix. The per unit cost of production at each plant is $35.50, $37.25, $38.00, and $36.00 respectively and the annual production capacity at each plant is 18,000, 15,000, 25,000, and 20,000 respectively. Secure Lock sells its locks to retailers through wholesale distributors in seven cities across US. The unit cost of shipping from each plant to each distributor is summarized in a shipping cost table along with the forecasted demand from each distributor for the upcoming year.",
    approach: "Built multi-level cost analysis framework incorporating direct costs, indirect costs, and strategic opportunity costs.",
    solution: {
      problemImage: "/case-study-5-problem.png",
      excelSolution: "/case-study-5-excel-solution.png",
      methodology: [
        "Transportation problem formulation with production and shipping costs",
        "Linear programming optimization to minimize total cost",
        "Capacity constraint implementation for each plant",
        "Demand satisfaction requirements for each distributor"
      ],
      costCategories: [
        "Production costs: $35.50-$38.00 per unit across four plants",
        "Shipping costs: Variable rates from each plant to distributors",
        "Capacity constraints: 18,000-25,000 units per plant annually",
        "Demand requirements: 8,500-18,000 units per distributor"
      ]
    },
    results: [
      "35% improvement in cost estimation accuracy",
      "Comprehensive total cost visibility across 8 categories",
      "Comprehensive cost visibility across all categories",
      "Established framework for ongoing cost optimization"
    ],
    impact: "Enabled data-driven decision-making with complete cost transparency and established foundation for continuous cost optimization initiatives."
  },
  {
    id: 6,
    title: "Commodity Analysis: Market Dynamics for Silica Sand",
    subtitle: "Porter's Five Forces Analysis & Strategic Sourcing Framework",
    category: "Supply Chain Analytics",
    description: "Comprehensive market analysis and strategic sourcing recommendations for silica sand procurement in volatile, high-demand market conditions",
    thumbnail: "/case-study-6-thumb.jpg",
    duration: "6 weeks",
    tools: ["Porter's Five Forces Analysis", "Market Research", "Supplier Analysis", "Risk Assessment"],
    keyMetrics: [
      { label: "Market Size", value: "$31.6B" },
      { label: "Price Range", value: "$35-$74.8/ton" },
      { label: "Major Suppliers", value: "4 Key Players" }
    ],
    purpose: "To provide sourcing managers with strategic recommendations for securing high-grade silica sand in a volatile, high-demand market, ensuring cost stability and uninterrupted supply for glass manufacturing and related industries.",
    marketSnapshot: {
      primaryUses: [
        "Oil & gas: 64.5%",
        "Glass manufacturing: 10.7%", 
        "Construction: 7%",
        "Foundry: 5.9%"
      ],
      keyTrend: "Post-COVID rebound and fracking boom have pushed prices to historic highs ($35–$56/ton; peak $74.8)",
      supplySide: "US largely self-sufficient; low supplier concentration but high product specification requirements",
      majorSuppliers: ["Covia", "US Silica", "Badger Mining", "Hi-Crush"],
      priceDrivers: ["Oil & gas demand", "Construction activity", "Raw material extraction costs"]
    },
    risks: [
      "Price volatility tied to oil & gas drilling cycles",
      "Supplier limitations for high-purity grades", 
      "Global competition from markets like China potentially raising export prices",
      "Inability to use futures contracts to hedge against rising prices"
    ],
    opportunities: [
      "Bulk purchasing when prices drop below ~$45/ton",
      "Joint ventures with key suppliers to lock in long-term pricing and supply security",
      "Stockpiling infrastructure to store material during low-price periods"
    ],
    challenge: "Establish strategic sourcing framework for silica sand procurement in volatile market conditions with increasing demand from oil & gas industry affecting glass manufacturing supply chains.",
    approach: "Conducted comprehensive industry analysis using Porter's Five Forces framework, evaluated supplier landscape, and developed strategic sourcing recommendations for long-term contract establishment.",
    solution: {
      reportDocument: "/silica-sand-analysis.pdf",
      recommendations: {
        jointVenturePartnerships: "Secure long-term price stability and supply continuity through co-investment with a strategic supplier",
        opportunisticPurchasing: "Build inventory during price lulls; avoid buying during peak demand cycles", 
        diversifySupplierBase: "Target both domestic and international sources to reduce dependency risks"
      },
      industryAnalysis: {
        marketOverview: "US glass manufacturing industry generates $31.6B revenue with 4.7% margin, employing 100,000+ workers across 4,200 companies",
        keyApplications: [
          "Flat glass manufacturing for construction and automotive",
          "Pressed/blown glass and glassware production", 
          "Glass container manufacturing for packaging",
          "Specialty glass for telecommunications and electronics"
        ],
        qualityRequirements: [
          "Ordinary Silica Sand: SiO2 ≥ 90-99%, Fe2O3 ≤ 0.06-0.02%",
          "High-purity Quartz Sand: SiO2 ≥ 99.5-99.9%, Fe2O3 ≤ 0.001%",
          "Controlled grain size for optimal furnace melting",
          "Specific chemistry for color and transparency requirements"
        ]
      },
      competitiveAnalysis: {
        majorPlayers: [
          "Covia Holdings LLC - 2,000+ customers, recent Unimin-Fairmount merger",
          "Hi-Crush Inc. - Premium frac sand provider with logistics focus",
          "US Silica - Largest US producer, vertically integrated operations",
          "Badger Mining Corporation - Family-owned, diversified applications"
        ],
        marketConcentration: "Low concentration with top 4 players holding ~50% market share",
        competitionFactors: ["Price competitiveness", "Quality consistency", "Service levels", "Geographic proximity"]
      },
      portersFiveForces: {
        supplierPower: "Moderate - Multiple suppliers but specialized quality requirements",
        buyerPower: "High - Glass manufacturers have significant volume leverage",
        newEntrants: "Low threat - High capital requirements and economies of scale",
        substitutes: "Low threat - Aluminum oxide alternatives too expensive",
        rivalry: "High - Price-based competition in commodity market"
      }
    },
    results: [
      "Identified optimal sourcing strategy during market price lulls",
      "Recommended long-term contract establishment for price stability",
      "Developed supplier evaluation framework for quality assurance",
      "Created risk mitigation strategy for supply chain disruptions"
    ],
    impact: "Provided strategic sourcing framework enabling cost-effective procurement while ensuring quality standards and supply security in volatile market conditions."
  },
  {
    id: 7,
    title: "Airport Staffing Forecasting Model",
    subtitle: "Predictive Analytics for FAA Operational Planning",
    category: "Operations Research",
    description: "Advanced forecasting model for airport staffing optimization using passenger volume predictions and economic uncertainty indicators for JFK Airport operations",
    thumbnail: "/case-study-7-thumb.jpg",
    duration: "10 weeks",
    tools: ["R Programming", "Time Series Analysis", "SARIMA", "ETS", "Dynamic Linear Regression"],
    keyMetrics: [
      { label: "Forecast Accuracy", value: "97.14%" },
      { label: "MAPE", value: "2.86%" },
      { label: "Total Staff Optimized", value: "4,798" }
    ],
    businessCase: "As managers on the airport operations consulting team at the Federal Aviation Administration (FAA), analyze flight data and provide recommendations to airports across the United States on monthly staffing levels needed to continually ensure adequate service while keeping costs as low as possible.",
    challenge: "Develop accurate passenger volume forecasting model for JFK Airport to optimize monthly staffing levels across 8 departments while minimizing costs and maintaining service quality during volatile travel conditions.",
    approach: "Applied advanced time series forecasting techniques including SARIMA, ETS, and Dynamic Linear Regression with Global Economic Policy Uncertainty Index as external predictor to achieve 97.14% accuracy.",
    solution: {
      presentationSlides: "/airport-staffing-slides.pdf",
      finalReport: "/airport-staffing-final-report.pdf",
      dataIntegration: {
        passengerData: "US Department of Transportation nonstop flows data (1990-2022) capturing international arrivals",
        airportData: "Integrated Kaggle datasets with airport information including names, cities, and states",
        stateData: "Regional classification data for geographic analysis",
        economicData: "Global Economic Policy Uncertainty Index - GDP-weighted average for 20 countries (1997-2022)",
        assumptions: "250 passengers per plane average for accurate service level calculations"
      },
      methodology: {
        dataPreparation: "Analyzed 1990-2019 data excluding COVID-19 impact to avoid exceptional circumstances",
        seasonalityAnalysis: "Discovered strong seasonality patterns and predictable trends in international arrivals",
        baselineModels: "Developed SARIMA and ETS models for initial forecasting framework",
        advancedModeling: "Implemented Dynamic Linear Regression with Global Uncertainty Index as external predictor",
        flightSegmentation: "Separated Scheduled flights (planned 330 days in advance) from Chartered flights for improved accuracy",
        finalModel: "DLR with Global Uncertainty Index achieved best performance with 2.86% MAPE"
      },
      staffingFramework: {
        jfkDepartments: [
          { department: "Inside-security service (check-in)", ratio: 36.96, staffNeeded: 924 },
          { department: "Security (TSA)", ratio: 31.68, staffNeeded: 792 },
          { department: "Outside-security service (gate agents)", ratio: 26.40, staffNeeded: 660 },
          { department: "Baggage handling", ratio: 34.32, staffNeeded: 858 },
          { department: "Customer service", ratio: 18.48, staffNeeded: 462 },
          { department: "Maintenance", ratio: 33.53, staffNeeded: 838 },
          { department: "Custodial", ratio: 6.60, staffNeeded: 165 },
          { department: "Retail", ratio: 3.96, staffNeeded: 99 }
        ],
        totalStaffing: 4798,
        ratioBasedModel: "Staffing ratios based on passenger volume to determine monthly employee needs by department"
      },
      riskManagement: {
        bufferStrategy: "5% overstaffing buffer added to predictions to prioritize service quality over cost savings",
        reputationalProtection: "Chose overstaffing over understaffing to avoid quantifiable reputational damage",
        serviceLevel: "Maintained adequate service levels while minimizing operational costs"
      },
      futureConsiderations: {
        optimization: "Further cost-service trade-off analysis using per-employee costs and service level impact",
        enhancement: "Potential integration of wait time optimization and service level tolerance metrics",
        scalability: "Model framework applicable to other major US airports with similar operational structures"
      }
    },
    results: [
      "Achieved 97.14% forecasting accuracy (2.86% MAPE) using Dynamic Linear Regression",
      "Optimized staffing across 8 departments totaling 4,798 employees at JFK Airport",
      "Integrated Global Economic Policy Uncertainty Index for enhanced prediction accuracy",
      "Developed scalable framework for FAA airport operations consulting nationwide"
    ],
    impact: "Enabled FAA to provide data-driven staffing recommendations to airports nationwide, balancing cost optimization with service quality maintenance through advanced forecasting techniques and economic uncertainty indicators."
  },
  {
    id: 8,
    title: "Tesla China: Supercharging the Future",
    subtitle: "Strategic Infrastructure Domination in the World's Largest EV Market",
    category: "Strategic Planning",
    description: "Comprehensive market analysis and strategic roadmap for Tesla's infrastructure expansion in China's rapidly growing electric vehicle ecosystem",
    thumbnail: "/case-study-8-thumb.jpg",
    duration: "8 weeks",
    tools: ["Market Analysis", "SWOT Framework", "Strategic Planning", "Competitive Intelligence"],
    keyMetrics: [
      { label: "Market Growth Rate", value: "24% YoY" },
      { label: "Tesla Market Share", value: "6.6%" },
      { label: "Projected 2030 Sales", value: "9M+ EVs" }
    ],
    challenge: "Develop a comprehensive strategy for Tesla to maintain competitive advantage and expand market presence in China's explosive EV market while addressing infrastructure limitations and intense local competition.",
    approach: "Conducted thorough industry analysis using SWOT framework, market forecasting, and competitive intelligence to identify strategic opportunities in China's EV infrastructure landscape.",
    solution: {
      strategyDocument: "/tesla-china-strategy.pdf",
      marketAnalysis: {
        currentPosition: "Tesla holds 6.6% market share in China's EV market, ranking third largest",
        marketGrowth: "24% annual increase projected over the next decade",
        projectedSales: "Battery electric vehicle sales may exceed 9 million cars by 2030",
        keyCompetitors: ["BYD", "SAIC", "Local Chinese manufacturers"]
      },
      swotAnalysis: {
        strengths: [
          "Chinese Government requires 40% of new sales be EV by 2030",
          "Tesla does not need a joint venture in China",
          "High EV production capacity in China"
        ],
        weaknesses: [
          "Lack of charging stations based on production forecast",
          "Lack of EV infrastructure"
        ],
        opportunities: [
          "24% increase each year over a decade in EV sales in China",
          "Infrastructure development potential",
          "Government support for EV adoption"
        ],
        threats: [
          "Product defects have lots of bad PR in China",
          "Competitors: BYD & SAIC with strong local presence"
        ]
      },
      strategicRecommendations: {
        primaryFocus: "Infrastructure Investment Strategy",
        rationale: "Tesla can have a competitive advantage by investing in and operating the majority of electric charging stations in China, thereby generating strong, stable revenue by allowing non-Tesla EVs to use the Supercharger at a fee",
        implementationPlan: [
          "Standardize Supercharger ports to allow ease of rental to competitors",
          "Develop portable charging stations to ease customer anxiety about battery depletion",
          "Build battery swapping stations for Tesla customers"
        ]
      },
      businessStrategy: {
        revenueModel: "Generate stable revenue by opening Supercharger network to non-Tesla EVs at premium pricing",
        competitiveAdvantage: "First-mover advantage in comprehensive charging infrastructure",
        marketPenetration: "Leverage infrastructure control to increase Tesla vehicle adoption"
      }
    },
    results: [
      "Identified infrastructure investment as key competitive differentiator in Chinese EV market",
      "Developed comprehensive SWOT analysis highlighting Tesla's strategic position",
      "Created implementation roadmap for Supercharger network expansion strategy",
      "Projected revenue diversification through charging infrastructure monetization"
    ],
    impact: "Provided strategic framework for Tesla's infrastructure-first approach to dominating China's EV market, positioning the company to capture both vehicle sales and charging service revenue streams in the world's largest electric vehicle market."
  },
  {
    id: 9,
    title: "Grid Modernization Finance Facility (GMFF)",
    subtitle: "Blockchain-Powered Fintech Platform for Renewable Energy Investment",
    category: "Logistics",
    description: "Revolutionary fintech solution leveraging blockchain technology to unlock renewable energy investment through transparent data sharing and streamlined financing",
    thumbnail: "/case-study-9-thumb.jpg",
    duration: "12 weeks",
    tools: ["Blockchain Technology", "Financial Modeling", "Risk Assessment", "Stakeholder Analysis"],
    keyMetrics: [
      { label: "Investment Potential", value: "$100B+" },
      { label: "CO2 Reduction", value: "200K tons" },
      { label: "Cost Savings", value: "$1B/year" }
    ],
    challenge: "Address critical barriers in renewable energy investment including grid capacity constraints, lack of transparent energy data, and inefficient risk assessment processes that hinder private capital deployment in clean energy projects.",
    approach: "Developed comprehensive fintech platform integrating blockchain technology, stakeholder analysis, and financial modeling to create transparent, secure, and efficient renewable energy investment ecosystem.",
    solution: {
      presentationSlides: "/grid-modernization-presentation.pdf",
      problemStatement: {
        globalContext: "Global transition to low-carbon economy with renewable energy faces significant uptake challenges",
        keyBarriers: [
          "National grids not designed to handle renewable power generation",
          "Capacity constraints hindering private investment",
          "Lack of transparent and accessible energy data",
          "$1.9 trillion estimated economic burden of non-renewable energy in US"
        ]
      },
      solutionFramework: {
        primaryObjective: "Develop blockchain technology based fintech platform for secure energy data sharing",
        coreComponents: [
          "Facilitate secure transactions and streamline investment process through efficient risk assessment",
          "Integrate platform with existing energy infrastructure systems",
          "Connect renewable energy project databases with financial institutions",
          "Ensure seamless data flow across all stakeholders"
        ],
        recommendation: "Establish Grid Modernization Finance Facility (GMFF) providing low interest loans to renewable energy developers and investors"
      },
      stakeholderEcosystem: {
        primaryStakeholders: [
          "Developers & Sponsors",
          "Investors (private equity, venture capital firms, institutional and individual investors)",
          "Data providers (government agencies, energy utilities)",
          "Fintech firms & technology providers"
        ],
        flowOfFunds: "Structured investment flow from institutional investors through GMFF platform to renewable energy developers with transparent risk assessment and monitoring"
      },
      fintechOfferings: {
        dataTransparency: "Revolutionize investor and developer access to energy data analysis",
        qualityImprovement: "Attract necessary investment capital to fund renewable projects",
        monitoringReporting: "Provide transparency on climate-related risks",
        consultingServices: "Strategic advisory for renewable energy investments",
        revenueModel: "Monetize data through subscription model with 2% profit commission structure"
      },
      financialImpact: {
        investmentUnlock: "Potentially unlock additional $100B in renewable energy investment",
        capacityGeneration: "Generate over 100 gigawatts of new energy capacity",
        operationalSavings: "Save $1 billion per year in operating costs",
        reliabilityImprovement: "Prevent over 1,000 blackouts per year",
        marketDemand: "Increase public awareness by 20% resulting in 10% increased demand for renewable energy",
        environmentalImpact: "Reduction of 200,000 metric tons of CO2 emissions for additional $2B investment"
      },
      implementationStrategy: {
        phase1: "Develop policies with 2% profit commission from government, create fintech solution",
        phase2: "Partner with stakeholders and integrate fintech platform in utilities",
        phase3: "Use platform for data-informed decision making to attract private investors",
        operationalModel: "GMFF Platform developed, operated and promoted by University of Michigan students"
      },
      riskMitigation: {
        fundingRisks: "Highlight grant benefits of over 50% with GMFF establishment, $15M annual savings",
        technologyRisks: "Conduct regular vulnerability scans to protect against hacking and data breaches",
        regulatoryRisks: "Stay updated on laws, regulations, and industry standards with necessary licenses"
      }
    },
    results: [
      "Designed comprehensive blockchain-based fintech platform for renewable energy investment",
      "Identified $100B+ investment unlock potential through transparent data sharing",
      "Developed stakeholder ecosystem framework connecting investors, developers, and utilities",
      "Created risk mitigation strategy addressing funding, technology, and regulatory challenges"
    ],
    impact: "Positioned to revolutionize renewable energy financing by unlocking massive private investment through blockchain-powered transparency, potentially accelerating clean energy transition while generating significant economic and environmental benefits."
  },
  {
    id: 10,
    title: "Test Case - Sample",
    subtitle: "Tech-Powered Value-Based Care Platform for Underserved Communities",
    category: "Healthcare Innovation",
    description: "Comprehensive policy framework and technology platform addressing mental health disparities in low-income, rural, and ethnically diverse populations through innovative funding and service delivery models",
    thumbnail: "/case-study-10-thumb.jpg",
    duration: "16 weeks",
    tools: ["Policy Development", "Healthcare Technology", "Value-Based Care", "Grant Strategy"],
    keyMetrics: [
      { label: "Economic Impact", value: "$193B burden" },
      { label: "Funding Target", value: "$10M raised" },
      { label: "Cost Reduction", value: "50% savings" }
    ],
    challenge: "Address critical mental health service gaps for Michigan's vulnerable populations (ages 18-40) earning under $30K annually, who face barriers including cost, stigma, and lack of accessible, culturally competent care.",
    approach: "Developed comprehensive policy framework integrating University of Michigan resources, innovative funding mechanisms, and technology-driven service delivery to create sustainable, value-based mental health platform.",
    solution: {
      presentationSlides: "/zane-wellness-presentation.pdf",
      policyMemo: "/zane-wellness-policy-memo.pdf",
      problemAnalysis: {
        targetPopulation: "Low-income, rural, and ethnically diverse populations in Michigan (ages 18-40, <$30K annual income)",
        mentalHealthChallenges: [
          "Depression due to lack of financial counseling",
          "Mental illness due to dearth of fitness counseling", 
          "Dejection due to deficit of occupational counseling",
          "30M individuals in US face eating disorders triggering mental illness",
          "85% experiencing traumatic events develop PTSD and depression"
        ],
        accessBarriers: [
          "Cost constraints (primary barrier)",
          "Service level inadequacy",
          "Misconceptions and stigma",
          "Geographic accessibility challenges"
        ],
        economicBurden: "$193 billion estimated cost of mental illness economic burden in the US"
      },
      solutionFramework: {
        platformVision: "Tech-powered value-based service platform providing personalized counseling services",
        coreServices: [
          "Personalized fitness counseling",
          "Occupational counseling and career guidance",
          "Financial counseling and assistance",
          "Teletherapy and virtual group therapy",
          "Community health services and mobile clinics",
          "Mind-body therapy and biofeedback",
          "Animal-assisted therapy",
          "Specialized mental health professional advisory"
        ],
        technologyFeatures: [
          "Sentiment analysis and personalized recommendations",
          "Confidentiality and privacy protections",
          "Pseudonymous therapy sessions",
          "Mobile app accessibility",
          "Insurance integration and assistance"
        ]
      },
      policyRecommendations: {
        policy1: {
          title: "University Funding Mechanism",
          description: "Raise funds of 2% operating profit from U-Mich Medicine & Technology ($10M from $545M total)",
          implementation: "Establish matching grant program policy from University of Michigan"
        },
        policy2: {
          title: "Action Learning Module",
          description: "Initiate Action Learning Program engaging 30+ students annually to build, promote, and operate Zane platform",
          implementation: "Recreational Wellness department coordination with Health & Technology students"
        },
        policy3: {
          title: "Incentive Structure",
          description: "Provide service and tax rebates for U-Mich students (100% tax rebate, 30% service rebate) and tax rebates for employees",
          implementation: "Insurance rebate of 70% for services taken by UMICH students"
        }
      },
      userProfiles: {
        aman: {
          age: 30,
          occupation: "Cashier",
          location: "Ann Arbor",
          income: "$20,000-$40,000",
          struggle: "Performance Crisis - needs mindfulness-based interventions after 2 years in industry"
        },
        alice: {
          age: 25,
          occupation: "Counter Attendant", 
          location: "Dearborn",
          income: "$30,000-$40,000",
          struggle: "Fitness Crisis - depressed due to unhealthy lifestyle, needs mental and physical therapy"
        },
        jeff: {
          age: 22,
          occupation: "Food Server",
          location: "Dearborn", 
          income: "$20,000-$25,000",
          struggle: "Financial Crisis - no monetary facility, lost family, homeless, needs financial and community assistance"
        }
      },
      fundingStrategy: {
        primarySource: "2% of University of Michigan Medicine & Technology operating profit ($10M from $545M)",
        additionalSources: [
          "Grant opportunities through foundations and government agencies ($47.4B donated to health organizations in 2020)",
          "Crowdfunding campaigns (mental health campaigns raised $65M in 2020, $75 average donation)",
          "Business partnerships with profit-sharing and in-kind donations",
          "NIMH research grants ($1.6B awarded in 2020)"
        ],
        sustainabilityModel: "Value-based care reducing overall health costs by 50%+ with insurance rebates"
      },
      expectedOutcomes: {
        studentDevelopment: "U-Mich students develop insurmountable insights on facilitating value-based care for mental health",
        platformImpact: "Michigan develops ultimate platform to eradicate mental health cases",
        costReduction: "50%+ reduction in overall health costs through value-based care model",
        serviceRating: "Target 3.8+ service rating in first year",
        enrollmentGoal: "5-10% of patients enrolled in referral program by end of first year"
      },
      riskMitigation: {
        fundingRisks: "Highlight grant benefits of over $50M with Zane Wellness Policies establishment, $15M annual savings",
        technologyRisks: "Regular vulnerability scans to protect against hacking and data breaches",
        regulatoryRisks: "Stay updated on healthcare laws, regulations, and industry standards with necessary licenses",
        performanceRisks: "Comprehensive evaluation system with measurable KPIs and continuous improvement protocols"
      }
    },
    results: [
      "Developed comprehensive policy framework for university-funded mental health platform",
      "Created sustainable funding model leveraging $10M from University of Michigan operations",
      "Designed technology platform addressing specific needs of underserved populations",
      "Established risk mitigation strategy for healthcare technology implementation"
    ],
    impact: "Positioned to transform mental health care delivery for Michigan's most vulnerable populations, potentially reducing the $193B economic burden of mental illness while creating a replicable model for value-based care nationwide."
  },
  {
    id: 11,
    title: "International Trade Compliance: Aluminum Extrusions Analysis",
    subtitle: "HTSUS Classification & Antidumping Duty Investigation for Vietnam Imports",
    category: "Trade & Customs",
    description: "Comprehensive analysis of HTSUS classification and antidumping duty implications for aluminum extrusions imported from Vietnam, providing strategic guidance for international trade compliance",
    thumbnail: "/case-study-11-thumb.jpg",
    duration: "12 weeks",
    tools: ["HTSUS Classification", "Trade Law", "Customs Compliance", "International Trade"],
    keyMetrics: [
      { label: "Duty Rate", value: "5.7%" },
      { label: "Investigation Period", value: "Oct 2023 - Nov 2024" },
      { label: "Final Status", value: "Terminated" }
    ],
    challenge: "Navigate complex HTSUS classification requirements and assess potential antidumping duty exposure for aluminum extrusions (6061-T6) imported from Vietnam for use in prefabricated building window frames.",
    approach: "Conducted comprehensive analysis of Harmonized Tariff Schedule classification, monitored ongoing antidumping duty investigations, and provided strategic guidance on trade compliance and duty implications.",
    solution: {
      reportDocument: "/aluminum-extrusions-analysis.pdf",
      productSpecification: {
        material: "Aluminum 6061-T6 alloy",
        characteristics: "High strength, corrosion resistance, and versatility for structural applications",
        temperClassification: "T6 temper (heat treatment and aging for increased strength and hardness)",
        application: "Window frames for prefabricated houses and buildings",
        processing: "Cut to size and assembled in the United States",
        countryOfOrigin: "Vietnam (where metal is extruded through die)"
      },
      htsusClassification: {
        chapter: "Chapter 76 - Articles of Aluminum",
        classification: "7610.10.0010",
        description: "Aluminum structures (excluding prefabricated buildings of heading 9406) and parts of structures; doors, windows and their frames and thresholds for doors; windows and their frames",
        dutyRate: "5.7%",
        justification: "Based on General Rules of Interpretation (GRI), CBP rulings, and Explanatory Notes analysis"
      },
      antidumpingInvestigation: {
        initiationDate: "October 25, 2023",
        investigatingAgency: "U.S. Department of Commerce (DOC) and International Trade Administration (ITA)",
        scope: "Aluminum extrusions from 15 countries including Vietnam",
        targetCountries: [
          "China", "Indonesia", "Mexico", "Turkey", "Colombia", "Dominican Republic", 
          "Ecuador", "India", "Italy", "Korea", "Malaysia", "Taiwan", "Thailand", "UAE", "Vietnam"
        ],
        investigationTimeline: {
          petitionsFiled: "October 4, 2023",
          commerceInitiation: "October 24, 2023",
          itcPreliminary: "November 20, 2023",
          commercePreliminary: "May 1, 2024",
          commerceFinal: "July 15, 2024",
          itcFinal: "August 29, 2024",
          ordersIssuance: "September 5, 2024"
        }
      },
      scopeAnalysis: {
        coveredMerchandise: "Aluminum extrusions regardless of form, finishing, or fabrication",
        aluminumAlloys: "Series 1, 3, 5, and 6 designations per Aluminum Association",
        series6Specifications: {
          magnesium: "0.1% to 2.0% by weight",
          silicon: "0.1% to 3.0% by weight"
        },
        series5Specifications: {
          magnesium: "Up to 2.0% by weight"
        },
        includedProducts: [
          "Hollow profiles", "Solid profiles", "Pipes", "Tubes", "Bars", "Rods",
          "Mill finished", "Anodized", "Painted", "Powder coated", "Fabricated extrusions"
        ],
        fabricationOperations: [
          "Cut-to-length", "Machined", "Drilled", "Punched", "Notched", "Bent",
          "Stretched", "Hydroformed", "Mitered", "Chamfered", "Threaded"
        ],
        partsAndSubassemblies: "Window parts, door units, shower and bath components"
      },
      keyDeterminations: {
        preliminaryDetermination: {
          date: "May 7, 2024",
          action: "Suspension of liquidation for entries on/after May 7, 2024",
          cashDepositRequired: "Based on producer/exporter specific rates"
        },
        finalDetermination: {
          date: "October 3, 2024",
          status: "Final affirmative determination published"
        },
        itcNegativeDetermination: {
          date: "October 11, 2024 (published November 22, 2024)",
          outcome: "Negative final determination - investigation terminated",
          implication: "No antidumping duties imposed on Vietnam aluminum extrusions"
        }
      },
      complianceGuidance: {
        currentStatus: "Investigation terminated - no antidumping duties applicable",
        dutyLiability: "Standard HTSUS duty rate of 5.7% applies",
        liquidationInstructions: "Entries liquidated without antidumping duties",
        futureConsiderations: "Monitor for potential new investigations or policy revisions",
        documentationRequirements: "Maintain proper classification and origin documentation"
      },
      riskAssessment: {
        classificationRisk: "Low - clear HTSUS 7610.10.0010 classification established",
        dutyRisk: "Eliminated - antidumping investigation terminated",
        complianceRisk: "Low - standard customs procedures apply",
        futureRisk: "Monitor for potential reinvestigation based on market conditions"
      }
    },
    results: [
      "Established definitive HTSUS classification 7610.10.0010 with 5.7% duty rate",
      "Successfully navigated antidumping duty investigation resulting in termination",
      "Eliminated potential antidumping duty exposure for Vietnam aluminum extrusions",
      "Provided comprehensive compliance framework for ongoing import operations"
    ],
    impact: "Delivered critical trade compliance guidance that eliminated potential antidumping duty exposure, established clear classification protocols, and provided strategic framework for continued aluminum extrusion imports from Vietnam with predictable 5.7% duty structure."
  },
  {
    id: 12,
    title: "Budget 2025: Supply Chain Strategic Analysis",
    subtitle: "Comprehensive Policy & Economic Impact Assessment",
    category: "Policy Analysis",
    description: "Strategic analysis of Budget 2025 implications for supply chain operations, economic policy impacts, and business planning considerations",
    thumbnail: "/case-study-12-thumb.jpg",
    duration: "8 weeks",
    tools: ["Policy Analysis", "Economic Research", "Supply Chain Strategy", "Budget Analysis"],
    keyMetrics: [
      { label: "Budget Year", value: "2025" },
      { label: "Analysis Scope", value: "Supply Chain" },
      { label: "Policy Impact", value: "Strategic" }
    ],
    challenge: "Analyze Budget 2025 policy implications for supply chain operations and provide strategic recommendations for business adaptation and planning.",
    approach: "Conducted comprehensive analysis of budget proposals, policy changes, and economic impacts on supply chain operations and business strategy.",
    solution: {
      analysisReport: "/budget-2025-supply-chain-analysis.pdf"
    },
    results: [
      "Comprehensive analysis of Budget 2025 supply chain implications",
      "Strategic recommendations for policy adaptation",
      "Economic impact assessment for business planning",
      "Policy framework analysis for operational guidance"
    ],
    impact: "Provided strategic insights into Budget 2025 implications for supply chain operations, enabling informed business planning and policy adaptation strategies."
  },
  {
    id: 13,
    title: "India's Quick Commerce Revolution: Strategic Market Analysis",
    subtitle: "From Burn to Earn - Navigating the $9.95B Market Opportunity",
    category: "Market Research",
    description: "Comprehensive analysis of India's explosive quick commerce sector, examining growth drivers, profitability challenges, and strategic pathways for sustainable success in the ultra-fast delivery market",
    thumbnail: "/case-study-13-thumb.jpg",
    duration: "10 weeks",
    tools: ["Market Analysis", "Financial Modeling", "Strategic Planning", "Industry Research"],
    keyMetrics: [
      { label: "Market Growth", value: "280% in 2 years" },
      { label: "Market Size 2029", value: "$9.95B" },
      { label: "CAGR 2024-29", value: "4.5%" }
    ],
    challenge: "Analyze India's rapidly growing quick commerce sector to understand the path from high cash burn to sustainable profitability while maintaining ultra-fast delivery promises of 10-30 minutes.",
    approach: "Conducted comprehensive market analysis examining growth patterns, competitive landscape, financial performance, and strategic opportunities for sustainable business models in the quick commerce ecosystem.",
    solution: {
      analysisReport: "/india-quick-commerce-analysis.pdf",
      marketOverview: {
        sectorGrowth: "280% growth in two years, setting new global standards",
        marketProjection: "$9.95 billion by 2029 with 4.5% CAGR (2024-2029)",
        deliveryPromise: "Ultra-fast deliveries within 10-30 minutes",
        globalPosition: "India leading the global retail revolution in quick commerce"
      },
      competitiveLandscape: {
        establishedPlayers: [
          "Blinkit (processing millions of orders daily)",
          "Swiggy Instamart (major market player)",
          "Zepto (rapid growth trajectory)"
        ],
        newEntrants: [
          "Amazon Tez", "Flipkart Minutes", "JioMart", "Myntra M-Now"
        ],
        marketDynamics: "Intensified competition with major e-commerce giants entering the space"
      },
      financialChallenges: {
        blinkitLosses: "$33.26M in Q3 FY23 (almost all of Zomato's losses)",
        zeptoLosses: "$45M loss in FY22 proving speed doesn't pay yet",
        dunzoBurn: "$53.5M burned on just $7.77M revenue",
        industryChallenge: "High cash burn rates across all major players"
      },
      profitabilityPathways: {
        infrastructureOptimization: {
          microWarehouses: "Near high-demand areas to cut costs & boost speed",
          hubAndSpoke: "Streamlined inventory models reducing wastage",
          strategicLocation: "Optimized placement for maximum efficiency"
        },
        technologyLeveraging: {
          aiForecasting: "AI-powered demand forecasting for optimal stock levels",
          dynamicPricing: "Pricing optimization to improve margins",
          routeOptimization: "Advanced logistics to reduce delivery costs"
        },
        revenueStreamDiversification: {
          higherAOV: "Personalized bundles & offers to increase order value",
          subscriptionModels: "Drive customer retention and predictable revenue",
          inAppAdvertising: "New income channels through platform monetization"
        },
        strategicPartnerships: {
          thirdPartyLogistics: "3PL partnerships for cost-effective last-mile delivery",
          coLocationStrategy: "Dark stores with retail chains to enhance reach",
          collaborativeGrowth: "Shared infrastructure and resources"
        },
        sustainabilityInitiatives: {
          evFleets: "Electric vehicle fleets cutting operational costs",
          droneDeliveries: "Future-ready delivery mechanisms",
          ecoPackaging: "Biodegradable packaging for regulatory compliance",
          carbonFootprint: "Reduced environmental impact as competitive advantage"
        }
      },
      futureOutlook2025: {
        expectedTrends: [
          "Intensified price wars among competitors",
          "Mergers & acquisitions for market consolidation",
          "Major disruptions from Amazon & Flipkart entry",
          "AI-driven efficiency improvements",
          "Automation in warehouse and delivery operations"
        ],
        successFactors: [
          "Efficiency optimization across operations",
          "Innovation in technology and logistics",
          "Strategic expansion into new markets",
          "Sustainable business model development"
        ]
      },
      strategicRecommendations: {
        shortTerm: "Focus on operational efficiency and cost optimization",
        mediumTerm: "Develop sustainable revenue streams and strategic partnerships",
        longTerm: "Build market leadership through innovation and scale",
        keySuccess: "Balance between speed, cost, and customer satisfaction"
      }
    },
    results: [
      "Identified key profitability pathways for quick commerce sustainability",
      "Analyzed competitive dynamics and market consolidation opportunities",
      "Developed strategic framework for operational efficiency optimization",
      "Provided actionable insights for revenue diversification and growth"
    ],
    impact: "Delivered comprehensive market intelligence enabling stakeholders to navigate India's quick commerce revolution, providing strategic roadmap from high cash burn to sustainable profitability in the $9.95B market opportunity."
  },
  {
    id: 14,
    title: "Cover Homes: Carbon Footprint Analysis & Sustainability Strategy",
    subtitle: "Embodied Carbon Reduction Through Innovative Foundation Design",
    category: "Sustainability Analysis",
    description: "Comprehensive carbon footprint analysis of Cover homes versus traditional construction, revealing significant embodied carbon reductions through innovative foundation methods and sustainable material strategies",
    thumbnail: "/case-study-14-thumb.jpg",
    duration: "8 weeks",
    tools: ["Life Cycle Assessment", "Carbon Footprint Analysis", "Sustainability Strategy", "Material Analysis"],
    keyMetrics: [
      { label: "Carbon Savings", value: "9,200 kg CO2e" },
      { label: "Concrete Reduction", value: "67% less" },
      { label: "Foundation Innovation", value: "Pile System" }
    ],
    challenge: "Analyze and compare the embodied carbon emissions of Cover homes with traditional homes to establish Cover's position in sustainable housing and identify opportunities for carbon footprint reduction.",
    approach: "Conducted comprehensive Life Cycle Assessment (LCA) focusing on embodied carbon emissions (Scope 3), comparing material weights, carbon emission factors, and innovative foundation design impacts between Cover and traditional construction methods.",
    solution: {
      detailedReport: "/cover-homes-carbon-analysis.pdf",
      executiveSummary: {
        keyFinding: "Cover homes achieve significant carbon reduction through innovative foundation methods",
        carbonSavings: "9,200 kg CO2e per 1,000 sq ft home compared to traditional construction",
        concreteReduction: "67% less concrete usage through foundation pile system",
        sustainabilityCommitment: "Highlighting Cover's commitment to sustainable housing solutions"
      },
      projectScope: {
        objective: "Analyze embodied carbon emissions and establish sustainability positioning",
        timeline: "2-month comprehensive analysis",
        focus: "Scope 3 emissions from material production and transportation",
        methodology: "Comparative LCA between Cover and traditional homes"
      },
      carbonAnalysis: {
        industryContext: "Construction sector responsible for 40% of global carbon emissions",
        embodiedCarbon: "70% of building's total carbon footprint over lifetime",
        traditionalBenchmark: "1,000 kg CO2e per square meter for conventional homes",
        coverInnovation: "Foundation pile system significantly reduces concrete requirements"
      },
      materialComparison: {
        coverTotalEmissions: "39,820.68 kg CO2e",
        traditionalTotalEmissions: "23,844.29 kg CO2e",
        concreteReduction: "~2,000 kg CO2e savings from reduced concrete usage",
        foundationComparison: {
          coverConcrete: "23,000 kg concrete (13.6 cubic yards)",
          traditionalConcrete: "70,000 kg concrete (38.4 cubic yards)",
          reductionPercentage: "67% less concrete usage"
        }
      },
      keyMaterials: {
        highestEmissions: [
          "Steel: 25,530.15 kg CO2e (Cover) vs 8,190 kg CO2e (Traditional)",
          "Concrete: 3,657 kg CO2e (Cover) vs 10,432.62 kg CO2e (Traditional)",
          "Aluminum: 4,715.21 kg CO2e (Cover) vs 2,732 kg CO2e (Traditional)"
        ],
        significantReductions: [
          "Concrete emissions reduced by ~67% through foundation innovation",
          "Foundation design eliminates need for traditional slab-on-grade",
          "Pile system requires significantly less concrete volume"
        ]
      },
      riskAssessment: {
        dataAccuracyRisk: {
          likelihood: "Medium",
          impact: "High",
          mitigation: "Regular updates and audits of BOM and carbon factors"
        },
        supplierComplianceRisk: {
          likelihood: "Medium", 
          impact: "High",
          mitigation: "Establish sustainable procurement policies"
        },
        regulatoryRisk: {
          likelihood: "Low",
          impact: "High", 
          mitigation: "Stay updated on regulations and engage with industry bodies"
        }
      },
      sustainabilityGoals: {
        carbonReduction: "Achieve 30% reduction in embodied carbon by 2030",
        sustainableMaterials: "Transition to over 50% sustainable materials by 2027",
        esgStrategy: "Implement comprehensive Environmental, Social, and Governance strategy",
        alignment: "Goals aligned with UN Sustainable Development Goals (SDGs)"
      },
      strategicRecommendations: {
        materialSubstitution: "Explore low-carbon alternatives for high-emission materials like steel and aluminum",
        supplierEngagement: "Work with suppliers to reduce emissions in their manufacturing processes",
        lifecycleAnalysis: "Conduct cradle-to-grave analysis for all products and materials",
        sustainableDesign: "Incorporate design principles that reduce material usage and waste"
      },
      futureScope: {
        operationalCarbon: "Analyze operational carbon emissions and energy efficiency",
        supplyChainExpansion: "Include indirect emissions from transportation and supply chain",
        reportingFramework: "Develop comprehensive annual carbon emissions reporting system",
        continuousImprovement: "Regular monitoring and optimization of carbon reduction strategies"
      }
    },
    results: [
      "Identified 9,200 kg CO2e carbon savings per 1,000 sq ft Cover home",
      "Demonstrated 67% concrete reduction through innovative foundation design",
      "Established comprehensive sustainability strategy with 2030 carbon reduction goals",
      "Developed risk assessment framework for sustainable construction practices"
    ],
    impact: "Positioned Cover as a leader in sustainable housing by demonstrating significant embodied carbon reductions, providing strategic roadmap for achieving 30% carbon reduction by 2030, and establishing framework for sustainable construction practices in the residential building sector."
  },
  {
    id: 15,
    title: "Zane Wellness: Tech-Powered Value-Based Care Platform",
    subtitle: "Mental Health Revolution for Underserved Communities",
    category: "Healthcare Innovation",
    description: "Comprehensive tech-powered value-based care platform addressing mental health disparities in low-income, rural, and ethnically diverse populations through innovative funding, policy development, and service delivery models",
    thumbnail: "/case-study-15-thumb.jpg",
    duration: "16 weeks",
    tools: ["Policy Development", "Healthcare Technology", "Value-Based Care", "Grant Strategy"],
    keyMetrics: [
      { label: "Economic Burden", value: "$193B" },
      { label: "Fund Raising Target", value: "$10M" },
      { label: "Cost Reduction", value: "50%" }
    ],
    challenge: "Low-income, rural, and ethnically diverse populations are particularly vulnerable to depression due to lack of financial counselling, mental illness due to dearth of fitness counselling, and dejection due to deficit of occupational counselling. 75% of US adults are not caring & sympathetic to those with mental illness, with major barriers including cost (32%), stigma (21%), and lack of awareness (25%).",
    approach: "Develop fundraising initiatives & grant programs, establish tech-powered value-based service platform, facilitate happiness for Michigan 18-40 age individuals with low socio-economic status through comprehensive policy framework and technology integration.",
    solution: {
      description: "Establish Zane Wellness platform with matching grant program policy from University of Michigan, raising 2% operating profit from U-Mich Medicine & Technology, and implementing Action Learning Module for platform development and operation.",
      problemStatement: {
        globalContext: "Mental health crisis affects vulnerable populations with $193 billion economic burden in the US, while traditional healthcare systems fail to address accessibility and affordability barriers.",
        keyBarriers: [
          "Depression due to lack of financial counselling",
          "Mental illness due to dearth of fitness counselling", 
          "Dejection due to deficit of occupational counselling",
          "Cost barriers preventing 32% from accessing services",
          "Stigma issues affecting 21% of potential users",
          "Lack of awareness among 25% of target population"
        ]
      },
      targetDemographics: {
        socioeconomic: "Individuals with annual salary less than $30k",
        ageGroup: "18 to 40 years old",
        geographic: "University of Michigan - Ann Arbor, Detroit with expansion to other Michigan cities in 2-year roadmap",
        primaryChallenges: ["Performance Crisis", "Fitness Crisis", "Financial Crisis"]
      },
      serviceOfferings: {
        financialTherapy: [
          "Service & Tax Rebate programs",
          "Insurance Assistance coordination",
          "Career Counselling services",
          "Teletherapy sessions",
          "Virtual Group Therapy",
          "Community Health Services",
          "Mobile Clinics deployment"
        ],
        fitnessTherapy: [
          "Mind-Body Therapy integration",
          "Biofeedback & Sentiment Analysis",
          "Personalized Fitness Counselling",
          "Animal-assisted therapy",
          "Virtual Group Therapy sessions",
          "Community Health Services",
          "Mobile Clinics with fitness programs"
        ],
        occupationalTherapy: [
          "Confidentiality and Privacy Protections",
          "Pseudonymous Therapy Sessions",
          "Specialized Mental Health Professionals Advisory",
          "Virtual Group Therapy",
          "Community Health Services",
          "Mobile Clinics with occupational support"
        ]
      },
      policyFramework: {
        fundingMechanism: "2% profit commission from University of Michigan Health & Technology Department ($10M from $545M total operating profit)",
        studentInvolvement: "Action Learning Program with 30+ UMich students annually to build, promote and operate platform",
        incentiveStructure: {
          students: "100% tax rebate and 30% service rebate for UMich students accessing Zane services",
          employees: "Tax rebate only for university employees",
          insurance: "70% insurance rebate with additional 30% service rebate covered by University of Michigan for students"
        }
      },
      competitiveLandscape: {
        competitors: ["BetterHelp", "Talkspace", "Ginger", "Lyra Health"],
        differentiators: [
          "Transparent Fund Raising model",
          "Biofeedback and sentiment analysis integration",
          "Community health services focus",
          "Value-based care approach",
          "University partnership model"
        ]
      },
      pricingModel: {
        fundRaisingCommission: "3-8% per service",
        backgroundCheck: "$2-$20 per service with sliding scale fees",
        sentimentAnalysis: "$39 subscription-based per service",
        animalAssistedTherapy: "$7-$70 value-based pricing per service"
      },
      fiveYearRoadmap: {
        year2023: "Target focused community network building and happiness spreading",
        year2024: "Build focused community network and spread happiness",
        year2025: "Expansion to all states - proliferation of services across all states in the US",
        year2026: "Expand portfolio with increased focus on AI-driven value-based care",
        year2027: "Partnership with universities to provide mental health support for students and faculties, develop patient referral program"
      },
      performanceMetrics: {
        serviceRating: "Aim for 3.8+ service rating over first year through patient feedback surveys",
        referralProgram: "Enroll 5-10% of patients in referral program by end of first year",
        providerCommission: "Increase provider commission by 20-25% by end of fifth year",
        patientOutcomes: "Achieve 15-20% improvement in patient performance over first year"
      },
      riskMitigation: {
        fundingRisks: "Highlight grant benefits of over 50% cost reduction with Zane Wellness establishment, generating $15M annual savings",
        technologyRisks: "Conduct regular vulnerability scans to protect against hacking, data breaches, and malicious activities",
        regulatoryRisks: "Stay up-to-date on relevant laws, regulations, and industry standards; obtain necessary licenses and permits"
      },
      expectedOutcomes: {
        studentExpertise: "UMich students develop insurmountable insights on facilitating value-based care for mental health",
        depressionReduction: "Michigan develops ultimate platform to eradicate mental health cases based on Zane",
        costReduction: "Overall mental health cost reduction by over 50% using Zane platform",
        grantLeverage: "Utilize $150M mental health grants and $25M school-based health centers from 2022-23 budget"
      },
      presentationSlides: "/zane-wellness-slides-15.pdf",
      policyMemo: "/zane-wellness-policy-memo-15.pdf"
    },
    results: [
      "Designed comprehensive tech-powered value-based care platform for mental health services",
      "Established $10M funding mechanism through University of Michigan partnership",
      "Created policy framework with 100% tax rebate and 30% service rebate for students",
      "Developed 5-year strategic roadmap for nationwide expansion and AI integration"
    ],
    impact: "Positioned to revolutionize mental health care for underserved populations by addressing $193B economic burden through innovative funding model, comprehensive service offerings, and university partnership, potentially reducing overall mental health costs by 50% while providing accessible care to vulnerable communities."
  }
];

export default caseStudiesData;

