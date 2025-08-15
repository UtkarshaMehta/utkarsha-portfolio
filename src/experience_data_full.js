const fullExperienceData = [
  {
    id: 1,
    title: "PLM-to-ERP PBOM Generation",
    subtitle: "Unified engineering and supply chain systems through platform logic—eliminating 1,600+ hours/year of rework and enabling real-time quoting and procurement.",
    description: "At Cover Technologies, engineering BOMs were disconnected from procurement workflows. PLM (Teamcenter), ERP (ERPNext), and quoting systems operated in silos. As a result, every part release required manual intervention—delaying procurement, creating errors, and obstructing cost visibility.",
    company: "Cover Technologies, Inc",
    role: "Supply Chain Program Manager",
    duration: "6-8 months",
    category: "Change Management & Systems Integration",
    skills: ["PLM Integration", "ERP Systems", "Process Automation", "Cross-functional Leadership", "Data Architecture"],
    results: [
      "Eliminated 1,600+ hours/year of manual rework",
      "Saved $64K annually in operational costs",
      "Reduced duplicate SKUs from 20%+ to 2%",
      "Unified 3 disconnected systems into single platform",
      "Enabled real-time quoting and procurement"
    ],
    
    // Complete structure from HOMEPAGE.docx
    context: "At Cover Technologies, engineering BOMs were disconnected from procurement workflows. PLM (Teamcenter), ERP (ERPNext), and quoting systems operated in silos. As a result, every part release required manual intervention—delaying procurement, creating errors, and obstructing cost visibility.",
    
    problem: {
      title: "Problem",
      description: "Nearly 100% of BOM items lacked direct ERP linkage. Procurement relied on a deprecated tool (Matrix) to manually translate part data. Engineering BOMs couldn't be actioned until this linking occurred, creating:",
      points: [
        "Manual edits across 3+ disconnected systems",
        "20%+ duplicate SKUs", 
        "Delays in quoting and procurement",
        "Poor cost rollups and margin inconsistency"
      ]
    },
    
    strategicDecision: "Patchwork fixes would only intensify technical debt. Instead, we re-designed the shared logic that defines when a part becomes 'purchasable' and encoded that behaviour directly into the platform—creating a single, execution-ready source of truth across engineering, supply chain, and finance. In partnership with the Supply Chain Manager, Product Manager, and Software Lead, I co-led a platform logic initiative to define clear purchasing behavior using standardized attributes (PurchaseType, MadeFrom, and dimensional logic).",
    
    action: {
      title: "Action",
      platformDesignLogic: {
        title: "Platform Design & Logic Definition:",
        points: [
          "Created a logic framework that standardized how BOMs convert into PBOMs using traversals, commodity logic, and dimensional behavior.",
          "Defined clear part behavior rules across engineering, operations, and procurement in collaboration with Engineering, Manufacturing and Supply Chain team"
        ]
      },
      phasedRolloutGovernance: {
        title: "Phased Rollout & Governance:",
        points: [
          "Led 3-phase execution: taxonomy setup → logic implementation → phased onboarding.",
          "Facilitated working sessions with design, manufacturing, procurement, and software to iterate logic rules.",
          "Designed dashboards to audit part readiness and PBOM integrity pre- and post-launch."
        ]
      }
    },
    
    executionStrategy: {
      title: "Execution Strategy",
      description: "Structured the rollout in three phases: design taxonomy → logic implementation → phased cross-functional migration. Facilitated weekly alignment across product, engineering, supply chain, and software. Defined governance standards and drove consensus through working sessions. Used dashboard audits and feedback loops to manage adoption velocity and readiness for system deprecation."
    },
    
    beforeAfter: {
      title: "Before - After",
      comparisons: [
        { before: "BOMs manually mapped to ERP", after: "Auto-linked at release" },
        { before: "20%+ duplicate SKUs", after: "Reduced to 2%" },
        { before: "3 disconnected systems", after: "Unified platform" },
        { before: "Manual RM aggregation", after: "Logic-driven PBOM" }
      ]
    },
    
    solution: {
      productInsight: {
        featureArchitecture: [
          { component: "PurchaseType & MadeFrom", function: "Define if part is direct, commodity, assembly, or intangible" },
          { component: "Dimensional Commodities", function: "Normalize RM quantity via linear, mass, volume logic" },
          { component: "BOM Traversal Logic", function: "Walks to lowest purchasable unit; aggregates RM" },
          { component: "ERPNext Sync", function: "ID linking + cost ingestion via API & manual validation" }
        ],
        mvpScope: [
          "Enabled PBOM generation across 2,000+ parts",
          "Created logic to aggregate raw material needs from BOM", 
          "Linked CoverItems directly to ERP items, bypassing Matrix"
        ]
      },
      executionStrategy: "Structured the rollout in three phases: design taxonomy → logic implementation → phased cross-functional migration. Facilitated weekly alignment across product, engineering, supply chain, and software. Defined governance standards and drove consensus through working sessions. Used dashboard audits and feedback loops to manage adoption velocity and readiness for system deprecation."
    },
    
    businessImpact: [
      { metric: "Time saved (PBOM editing)", value: "1,600 hours/year (~$64K)" },
      { metric: "Procurement communication errors", value: "↓ 30%" },
      { metric: "Inventory visibility", value: "↑ 100%" },
      { metric: "Lead time clarity & quote accuracy", value: "Improved significantly" },
      { metric: "Systems & data governance", value: "Standardized, scalable" }
    ],
    
    takeAway: [
      "Platform logic beats tool patching. Encoding purchasing behaviour at the data-model level removes entire rework loops.",
      "Cross-functional taxonomy is the tipping point. Shared attribute definitions unlock end-to-end automation.",
      "Governance dashboards speed adoption. Real-time readiness metrics equal faster executive trust and de-risked cut-overs."
    ],
    
    myRole: {
      title: "Supply Chain Program Manager",
      scope: "Defined platform logic and part behavior model; co-led platform execution alongside PM and software team",
      teamInfluenced: "6+ across software, design, supply chain, product",
      reportingLine: "Supply Chain Manager; partnered with executive leadership for milestone approvals",
      timeframe: "8–10 months from scoping to full adoption"
    },
    
    visualTimeline: [
      { phase: "Phase 1: Design Taxonomy", status: "🟢" },
      { phase: "Phase 2: Logic Implementation", status: "🟡" },
      { phase: "Phase 3: Cross-Functional Rollout", status: "🔵" }
    ],
    timelineCaption: "Weekly syncs across supply chain, software, and engineering enabled smooth adoption and deprecation of legacy tools.",
    
    beforeAfter: [
      { before: "BOMs manually mapped to ERP", after: "Auto-linked at release" },
      { before: "20%+ duplicate SKUs", after: "Reduced to 2%" },
      { before: "3 disconnected systems", after: "Unified platform" },
      { before: "Manual RM aggregation", after: "Logic-driven PBOM" }
    ]
  },
  {
    id: 2,
    title: "From Margin Squeeze to Profitable Scalable Growth",
    subtitle: "Rebuilding the Global Supply Chain for Scalable Cost Reduction",
    description: "Integrated Global Sourcing with Design-to-Cost Thinking to Cut BOM Spend and Unlock Scalable Production",
    company: "Series B modular construction startup",
    role: "Global Supply Manager",
    duration: "8-12 months",
    category: "Supply Chain Transformation",
    context: "A Series B modular construction startup faced unsustainable BOM costs and limited scalability due to local sourcing, fragmented vendors, and a lack of visibility into cost drivers. This margin pressure directly hindered customer pricing, delayed production, and threatened the ability to scale manufacturing in pace with demand.",
    businessObjective: "Enable cost-to-serve reduction and sourcing resiliency to support record volume delivery, margin improvement, and long-term operational scalability.",
    problem: {
      title: "Pre-Transformation Baseline",
      description: "Pre-transformation sourcing logic was reactive, fragmented, and lacked cost governance.",
      points: [
        "90%+ spend localized with limited price leverage or redundancy",
        "No commodity classification → cost drivers hidden in SKU clutter",
        "Frequent design changes clashed with long MOQs and inconsistent vendors",
        "No VMI → working capital spikes, stockouts, and high expedite fees",
        "No supplier forecasting integration or feedback mechanisms"
      ]
    },
    decisionLogic: "Rather than isolate sourcing improvements to renegotiations, we took a platform-wide approach. I partnered with the Supply Chain Manager and Engineering VP to re-architect sourcing logic around commodities, redesign the BOM cost structure, and build an execution framework that made cost and resilience visible at every stage—from design to delivery.",
    solution: {
      initiatives: [
        { name: "Commodity Strategy", description: "Built a standardized classification system to identify cost drivers and normalize part grouping- crate part families" },
        { name: "Global Sourcing Expansion", description: "Piloted sourcing in India, Mexico; expanded to China, EU, Poland based on volume/value tiers" },
        { name: "Vendor Development", description: "Performed site due diligence, NDAs, compliance checks, and direct onboarding → ensured aligned cost-quality-risk" },
        { name: "Design-to-Cost Governance", description: "Partnered with Engineering to influence BOM simplification, volume consolidation, and ECO control" },
        { name: "VMI Implementation", description: "Reduced administrative efforts and costs while maintaining supply continuity and negotiating leverage" },
        { name: "Quarterly Cross-Functional Reviews", description: "Established quarterly reviews Aligned Finance, Ops, and Design teams on sourcing performance, escalations, and forecast tracking" }
      ]
    },
    executionStrategy: [
      { phase: "Phase 1 (Weeks 1-5)", description: "Commodity mapping, spend analysis, RFQs for high-impact SKUs, and pilot supplier engagement (India, Mexico)", outcome: "Early BOM cost savings landed within 6 weeks" },
      { phase: "Phase 2 (Months 2–4)", description: "Launched VMI pilots, implemented BOM changes for top-volume SKUs, and set up initial supplier scorecards." },
      { phase: "Phase 3 (Months 5–8)", description: "Expanded sourcing to China and Europe, formalized QBRs, and scaled the commodity classification system to the broader supply base." }
    ],
    governanceCollaboration: [
      "Partnered with Engineering on cost-informed BOM structuring",
      "Ran monthly checkpoints with Finance to track landed cost variance",
      "Integrated sourcing data into dashboards for exec visibility"
    ],
    challenges: [
      "Cultural & communication gaps (high-context vs. low-context regions)",
      "Change resistance from teams used to \"local + fast\" procurement",
      "Dynamic BOM changes during supplier onboarding → required agile ECO governance",
      "Time zone lags with suppliers across 5 continents",
      "Resistance to change across design and ops teams",
      "Balancing volume uncertainty with MOQ thresholds across vendors"
    ],
    results: [
      { metric: "BOM Cost Reduction", value: "$130,000" },
      { metric: "Annualized Savings", value: "$2.2 million" },
      { metric: "Sales Uplift", value: "Record-breaking quarter: 8 years’ worth of sales in 1 Q" },
      { metric: "Inventory Optimization", value: "Enabled by VMI + supplier stocking agreements" },
      { metric: "Sourcing Resilience", value: "Built network across 5 regions for key commodities" }
    ],
    strategicOutcome: "This transformation enabled the startup to evolve from high-cost, reactive sourcing to a proactive global supply chain model. Design teams now operate with real-time cost insight. Procurement gained leverage and resilience. VMI and supplier diversification also advanced sustainability goals—reducing understocks, minimizing expedite emissions.",
    quote: "We didn’t just renegotiate—we rebuilt how we spec, source, and scale. That’s how we protected margin and unlocked operational flexibility.",
    myRole: {
      title: "Global Supply Manager",
      scope: [
        "Co-architected sourcing logic and governance framework with Supply Chain Manager",
        "Led RFQ pilots, supplier due diligence, and onboarding playbooks",
        "Drove change adoption across Engineering, Finance, and Ops",
        "Built and facilitated cross-functional QBRs with scorecards",
        "Implemented VMI program for fasteners and consumables"
      ],
      stakeholdersInfluenced: "Supply Chain Manager, Finance, Engineering, Legal, Executive Team",
      teamLed: "5+ contributors across sourcing, ops, design",
      timeframe: "Early cost savings in 6 weeks; full transformation in ~8-12 months"
    }
  },
  {
    id: 3,
    title: "Marketplace → Managed Supply",
    subtitle: "Built a supplier approval system—with scorecards and pre-spend gates—to cut risk, improve quality, and stabilize delivery",
    description: "Built a supplier approval system—with scorecards and pre-spend gates—to cut risk, improve quality, and stabilize delivery",
    company: "Refraction AI",
    role: "Supply Chain Program Manager",
    duration: "10-12 months",
    category: "Vendor Management",
    skills: ["Supplier Selection", "Vendor Management", "Risk Assessment", "Performance Scorecards", "Process Automation"],
    results: [
      {
        outcome: "Supplier Data Accuracy",
        impact: "100% via automated intake"
      },
      {
        outcome: "Stockouts Reduced",
        impact: "↓ 5% across tracked SKUs"
      },
      {
        outcome: "Operational Efficiency",
        impact: "↑ 20% via better vendor selection & lead time control"
      },
      {
        outcome: "Defect Rate",
        impact: "Decreased significantly by eliminating high-risk suppliers"
      },
      {
        outcome: "Decision Quality",
        impact: "Improved through performance scorecards & risk filters"
      }
    ],
    context: "The Series B construction startup and a Series 2 robotics firm were scaling with minimal sourcing infrastructure. Sourcing was transactional, fragmented, and lacked accountability. Critical parts were procured via online marketplaces—without supplier due diligence, cost controls, or lead time visibility.",
    businessRisk: "Repeated part failures, unvetted vendors going out of business mid-cycle, and no ability to measure or manage supplier performance",
    executiveSummary: {
      issue: "Ad-hoc buying through marketplaces created quality failures, stockouts, and vendor churn; no onboarding, no KPIs, no governance.",
      recommendation: "Stand up a lightweight Supplier Approval System with SCOR-based scorecards, pre-spend gates, and automated intake—independent of ERP.",
      impact: "100% supplier data accuracy, stockouts −5%, operational efficiency +20%, better vendor decisions via performance/risk filters."
    },
    problem: {
      title: "Problem (Baseline)",
      points: [
        "No formal onboarding or approval; high-risk vendors added ad hoc",
        "No shared KPIs (lead-time reliability, MOQ fit, defect rate, RMA)",
        "Zero performance tracking; buying decisions not evidence-based",
        "Suppliers going out of business mid-cycle; unpredictable lead times"
      ]
    },
    action: {
      description: "Led the development and execution of cross-functional supplier management and supply chain optimization programs for both a Series B construction startup and a Series 2 robotics company, focusing on driving measurable improvements in cost management, quality control, and risk mitigation across a diverse supplier base.",
      points: [
        "Conducted a supplier spend analysis to understand the diverse supplier base, revealing that most were from e-commerce or digital marketplaces for retail parts.",
        "Orchestrated cross-departmental collaboration with design, engineering, accounting, and executive leadership to define supplier selection metrics aligned with long-term growth and technical requirements",
        "Developed and implemented supplier selection and approval frameworks using SCOR-based KPIs, addressing critical factors such as manufacturing flexibility, MOQ, lead time reliability, and return processes.",
        "Created a vendor approval process and supplier assessment criteria to conduct due diligence before onboarding vendors.",
        "Automated the data collection process using a VBA macro, ensuring 100% accuracy in data management.",
        "Developed a supplier performance measurement system, including a balanced scorecard, to monitor supplier performance, enabling informed decisions on contract renegotiations, supplier development, quality improvements, or supplier selection for future orders.",
        "Managed program rollout and change management, iterating frameworks based on feedback and ensuring stakeholder buy-in across departments.",
        "Created a vendor approval process and supplier assessment criteria, ensuring thorough due diligence prior to vendor onboarding, significantly improving the quality and reliability of the supplier base."
      ]
    },
    challengesResolutions: [
      {
        challenge: "Ad-hoc culture",
        resolution: "Quick wins + leadership backing to shift behavior"
      },
      {
        challenge: "Mixed part profiles",
        resolution: "Tiered rules for high-volume vs. custom parts"
      },
      {
        challenge: "Linking scores to actions",
        resolution: "Pilots before commercial consequences"
      }
    ],
    strategicDecision: "Instead of reacting to individual failures, we built a proactive supplier governance model. I partnered with Engineering, Product, and Finance to design and deploy a centralized supplier approval system, standardizing onboarding, performance tracking, and risk mitigation across all vendors.",
    solution: {
      initiatives: [
        { name: "Supplier Approval Model", description: "Developed a tiered approval process based on criticality and spend, including financial health checks, quality audits, and capacity assessments." },
        { name: "Onboarding Framework", description: "Created standardized onboarding playbooks, including legal agreements, technical specifications, and communication protocols." },
        { name: "Performance Governance", description: "Implemented SCOR-based KPIs (Delivery, Quality, Cost, Responsiveness) and automated scorecards for continuous supplier evaluation." },
        { name: "Risk Mitigation", description: "Established a dual-sourcing strategy for critical components and developed contingency plans for single-source dependencies." }
      ]
    },
    executionStrategy: [
      { phase: "Phase 1: Design & Pilot (Months 1-3)", description: "Defined approval criteria, developed initial workflows, and piloted the system with 5 key suppliers." },
      { phase: "Phase 2: Rollout & Integration (Months 4-7)", description: "Integrated the system with existing procurement tools and rolled out to all active suppliers. Conducted training for procurement and engineering teams." },
      { phase: "Phase 3: Optimization & Scale (Months 8-12)", description: "Refined KPIs based on feedback, automated reporting, and expanded the system to include new vendor categories and global regions." }
    ],
    governanceCollaboration: [
      "Established a cross-functional Supplier Council with representatives from Engineering, Quality, and Finance.",
      "Implemented monthly performance reviews with top-tier suppliers and quarterly business reviews with strategic partners.",
      "Developed a centralized supplier database for real-time visibility and data-driven decision-making."
    ],
    challenges: [
      "Resistance to new processes from long-standing suppliers and internal teams.",
      "Data migration from disparate sources into a unified system.",
      "Ensuring global compliance with varying regional regulations.",
      "Balancing the need for speed with thorough due diligence during onboarding."
    ],
    results: [
      { metric: "Supplier Quality Defects", value: "↓ 40%" },
      { metric: "On-Time Delivery", value: "↑ 25%" },
      { metric: "Cost Savings from Sourcing", value: "$500K+ annually" },
      { metric: "Supplier Risk Exposure", value: "↓ 30%" },
      { metric: "Procurement Cycle Time", value: "↓ 15%" }
    ],
    strategicOutcome: "This initiative transformed a chaotic, reactive sourcing environment into a structured, performance-driven supplier ecosystem. By establishing clear governance and robust processes, we significantly improved product quality, reduced operational costs, and built a more resilient supply chain capable of supporting rapid scaling.",
    quote: "We moved from hoping our suppliers would perform to knowing they would. This system gave us the control and visibility we needed to truly scale.",
    myRole: {
      title: "Supply Chain Program Manager",
      scope: "Designed and deployed the supplier logic and operating model; led cross-functional implementation.",
      teamInfluenced: "Procurement, Engineering, Quality, Finance, Legal",
      reportingLine: "Head of Supply Chain",
      timeframe: "10-12 months"
    }
  },
  {
    id: 4,
    title: "Trade Compliance: HTS, Tariffs & Import SOPs",
    subtitle: "Standardized HTS and import SOPs, modeled tariff exposure, and stood up a risk register to cut delays and prevent duty leakage.",
    description: "Standardized HTS classification and import SOPs across multiple regions, modeled tariff exposure scenarios, and established enterprise risk register to reduce customs delays by 30% and achieve significant annual savings.",
    company: "Atlas Copco & Cover",
    role: "Trade Compliance & Sourcing Lead",
    duration: "6-9 months",
    category: "Trade Compliance & Regulatory Risk",
    regions: ["USA", "China", "EU", "Turkey", "South Africa", "India"],
    
    executiveSummary: {
      issue: "Expanding cross-border trade with inconsistent HTS classification, unclear tariff exposure, and ad-hoc import processes—causing cost leakage, delays, and audit risk.",
      recommendation: "Stand up a governed, multi-region compliance program: standardized HTS, SOP-driven imports, tariff exposure modeling, and an enterprise risk register with controls.",
      impact: "$X M annual savings (classification accuracy/duty avoidance), customs delays −30%, 20+ risks tracked with owners/dates, improved audit readiness and landed-cost accuracy."
    },
    
    strategicContext: "Global growth increased regulatory scrutiny (e.g., Section 232/301, EU measures). Compliance artifacts were fragmented across brokers, spreadsheets, and email, limiting visibility and control.",
    
    problem: {
      title: "Problem (Baseline)",
      points: [
        "Unquantified duty impact (AD/CVD on steel/aluminum); no drawback analysis.",
        "No import SOPs; inconsistent broker handoffs; long dwell times.",
        "Siloed, undocumented classifications; weak rationale/audit trail."
      ]
    },
    
    approach: {
      title: "Approach",
      initiatives: [
        {
          name: "Global HTS Classification Program",
          description: "Standardized taxonomy and workflows across USA, China, EU, Turkey, South Africa, India. Decision trees + audit trails to document rationale and rulings."
        },
        {
          name: "Inbound Logistics Compliance (Cover)",
          description: "Authored and deployed import SOPs; broker/warehouse RACI; pre-clearance checks. Embedded compliance gates to cut rework and dwell time."
        },
        {
          name: "Tariff Exposure Analysis",
          description: "Modeled 232/301 and WTO remedies; scenario-tested duty rates and sourcing shifts. Identified duty-drawback and FTA/COO opportunities."
        },
        {
          name: "Enterprise Risk Register & Mitigation",
          description: "Central repository of regulatory, financial, operational risks. Preventive controls, sample audits, escalation triggers, and ownership."
        }
      ]
    },
    
    executionGovernance: {
      title: "Execution & Governance",
      points: [
        "Weekly classification stand-ups; monthly compliance reviews with Finance/Ops.",
        "Broker scorecards; exception logs; sampling plan for post-entry audits.",
        "Training for procurement/logistics; quick-reference guides by region."
      ]
    },
    
    challengesResolutions: {
      title: "Challenges & Resolutions",
      items: [
        {
          challenge: "Divergent local rules",
          resolution: "Localized playbooks; single global schema."
        },
        {
          challenge: "Historical data gaps",
          resolution: "Backfill via broker entry files; rolling re-classification."
        },
        {
          challenge: "Change adoption",
          resolution: "Role-based training and SOP sign-off tied to PO rights."
        }
      ]
    },
    
    results: [
      { metric: "Product Classification", value: "30,000+ products classified across 7 regions with accurate HS codes" },
      { metric: "Annual savings", value: "$X M (duty accuracy, drawback, correct HTS)" },
      { metric: "Customs clearance delays", value: "−30% via SOP and broker governance" },
      { metric: "Risk visibility", value: "20+ risks tracked with owners/timelines" },
      { metric: "Audit readiness", value: "Documented rationale; reduced penalty exposure" },
      { metric: "Landed-cost accuracy", value: "↑ Duty prediction accuracy; cleaner quotes" }
    ],
    
    riskManagement: {
      title: "Risk Management & Response (Individually Led — 2025)",
      description: "Solo assessment of tariff/regulatory risk across global supply base (Series-B modular housing). Mitigations: supplier realignment, Incoterms updates, refreshed classifications. Continuity: Maintained delivery reliability through policy shifts."
    },
    
    strategicOutcome: "Transformed fragmented compliance processes into a governed, multi-region program that provides visibility, control, and proactive risk management across global trade operations.",
    
    voiceOfAdoption: "This gave us the visibility and control to navigate volatility without regulatory surprises.",
    
    myRole: {
      title: "Trade Compliance & Sourcing Lead",
      scope: "Designed global HTS program; authored import SOPs; built tariff models; created risk register; trained teams.",
      stakeholders: "Engineering, Procurement, Logistics, Finance, Legal, Executive team",
      timeframe: "Initial impact in <90 days; full program in ~6–9 months",
      systems: "Broker portals, customs entry docs, SOPs, risk register, HTS decision trees, classification log"
    }
  },
  {
    id: 5,
    title: "Power BI Automation for Real-Time Team Visibility",
    subtitle: "Automated performance reporting in Power BI to eliminate manual effort and enable real-time visibility into team capacity, throughput, and division workloads.",
    description: "Automated performance reporting in Power BI; centralized data ingestion, standardized KPI logic, and enabled drilldowns for leaders and team leads, eliminating 50% of manual reporting effort.",
    company: "Atlas Copco",
    role: "Trade Compliance Engineer",
    duration: "3 weeks",
    category: "Program Management",
    skills: ["Power BI", "Data Analytics", "Process Automation", "KPI Development", "Dashboard Design"],
    
    executiveSummary: {
      issue: "Monthly, manual reporting blocked leadership visibility into team capacity, throughput, and division workloads.",
      recommendation: "Automate performance reporting in Power BI; centralize data ingestion, standardize KPI logic, and enable drilldowns for leaders and team leads.",
      impact: "50% less manual reporting effort (16–20 hrs/analyst/month eliminated) and near real-time visibility into output, efficiency, and resource allocation."
    },
    
    context: "A multi-division classification program (HTS/HS across regions) needed timely insight into hours, items processed, and workload by division/person/status. Static monthly decks were stale on arrival.",
    
    businessObjective: "Transform manual, time-intensive reporting processes into an automated, real-time visibility platform that enables proactive management decisions and improves operational efficiency across all trade compliance divisions.",
    
    problem: {
      title: "Problem (Baseline)",
      points: [
        "Manual overhead: Spreadsheet consolidation + time-log stitching each month.",
        "Lagging visibility: Performance assessed only retrospectively; limited mid-cycle course correction.",
        "Data silos & definitions: Disparate sheets/logs; no shared KPI definitions or drilldowns."
      ]
    },
    
    actions: [
      {
        title: "Built End-to-End Power BI Dashboard",
        description: "Designed and deployed a dynamic dashboard aggregating key classification metrics. Automated data ingestion and visualization from time-tracking and task logs."
      },
      {
        title: "Integrated Performance Metrics",
        description: "Visualized total hours logged, items classified per division, per-division time allocation, and individual team member efficiency. Created filters to enable both macro and micro-level analysis."
      },
      {
        title: "Validated with Cross-Functional Leads",
        description: "Partnered with division heads and team managers to ensure metric definitions, data integrity, and usability aligned with operational needs."
      }
    ],
    
    decisionTradeoffs: [
      { 
        decision: "Platform", 
        optionsConsidered: "Custom app vs. Power BI", 
        rationale: "Faster time-to-value, lower cost, existing skills" 
      },
      { 
        decision: "Ownership", 
        optionsConsidered: "Analyst-only vs. central build + lead validation", 
        rationale: "Ensure credibility + adoption of metrics" 
      },
      { 
        decision: "Freshness", 
        optionsConsidered: "Real-time vs. scheduled (weekly) refresh", 
        rationale: "Balance stability and effort; sufficient for ops cadence" 
      }
    ],
    
    solution: {
      title: "Solution (Architecture & Features)",
      initiatives: [
        { name: "Automated ingestion", description: "Connect time logs and classification trackers to Power BI; clean/wrangle for consistency." },
        { name: "Standard KPIs", description: "Hours, items classified, per-division effort, per-person throughput, backlog/aging." },
        { name: "Filters & drilldowns", description: "View by division, person, commodity, status, week; click-through from exec to team view." },
        { name: "Data validation", description: "Co-defined KPI logic with BU heads; data dictionary for definitions and thresholds." },
        { name: "Ops integration", description: "Dashboards embedded into weekly ops reviews and monthly business reviews." }
      ]
    },
    
    results: [
      { metric: "Analyst time for monthly reporting", value: "↓ 50% (manual effort eliminated)" },
      { metric: "Visibility lag", value: "↓ from 30 days to 7-day refresh cycle" },
      { metric: "Cross-team transparency", value: "Improved operational alignment across all divisions" },
      { metric: "Team accountability", value: "Increased due to real-time feedback and accessible metrics" }
    ],
    
    strategicOutcome: "The Power BI automation transformed manual, time-intensive reporting into a real-time visibility platform, enabling proactive management decisions and significantly improving operational efficiency across all divisions."
  },

  {
    id: 7,
    title: "Overseeing End-to-End Supply Chain for Cover Technologies",
    subtitle: "From Sourcing to Delivery: Facilitating Ramp Readiness, Cost Reductions, and Process Streamlining",
    description: "Oversaw the end-to-end supply chain for Cover Technologies, managing everything from strategic sourcing and vendor relationships to manufacturing ramp readiness, cost reduction initiatives, design change implementation, and process streamlining to ensure efficient and scalable operations.",
    company: "Cover Technologies",
    role: "Global Supply Manager",
    duration: "18 months",
    category: "Strategic Program Execution",
    context: "Cover Technologies, an innovative modular housing startup, was rapidly scaling its operations, requiring a robust and agile supply chain to support aggressive production targets and new product introductions. The existing supply chain lacked the maturity and integration needed to handle this growth, leading to potential bottlenecks, cost overruns, and delays.",
    businessObjective: "Build and manage a highly efficient, resilient, and cost-effective end-to-end supply chain capable of supporting rapid scaling, new product development, and continuous cost reduction for modular housing manufacturing.",
    problem: {
      points: [
        "Fragmented sourcing processes with limited supplier diversification.",
        "Lack of clear ramp readiness protocols for new product introductions.",
        "Inefficient cost structures and limited visibility into total landed costs.",
        "Challenges in managing rapid design changes and their impact on production.",
        "Suboptimal operational processes leading to inefficiencies and waste."
      ]
    },
    strategicDecision: "I implemented a holistic approach to supply chain management, integrating strategic sourcing with operational execution and continuous improvement. This involved establishing robust processes for supplier management, NPI ramp readiness, cost engineering, and change control, all underpinned by a focus on data-driven decision-making.",
    solution: {
      initiatives: [
        { name: "Strategic Sourcing & Vendor Management", description: "Developed and executed sourcing strategies for key materials, negotiated contracts, and built strong relationships with critical suppliers." },
        { name: "NPI Ramp Readiness", description: "Established a structured NPI process, ensuring supply chain readiness for new product launches, including capacity planning and material availability." },
        { name: "Cost Reduction Initiatives", description: "Identified and implemented cost-saving opportunities through design-to-cost, value engineering, and supplier negotiations." },
        { name: "Design Change Management", description: "Created a streamlined process for managing engineering change orders (ECOs) to minimize disruption to production and supply." },
        { name: "Process Streamlining & Optimization", description: "Analyzed and optimized key supply chain processes, leveraging lean principles to improve efficiency and reduce waste." }
      ]
    },
    executionStrategy: [
      { phase: "Phase 1: Assessment & Foundation (Months 1-6)", description: "Conducted a comprehensive supply chain audit, identified critical gaps, and established foundational processes for sourcing and NPI." },
      { phase: "Phase 2: Optimization & Integration (Months 7-12)", description: "Implemented cost reduction programs, streamlined ECO processes, and integrated supply chain functions more tightly with engineering and manufacturing." },
      { phase: "Phase 3: Scale & Continuous Improvement (Months 13-18)", description: "Focused on scaling operations to support increased production volumes, establishing robust performance metrics, and fostering a culture of continuous improvement." }
    ],
    challenges: [
      "Managing rapid growth and fluctuating demand in a nascent industry.",
      "Navigating complex global supply chains and geopolitical uncertainties.",
      "Integrating supply chain considerations early in the product design cycle.",
      "Balancing aggressive cost targets with quality and lead time requirements."
    ],
    results: [
      { metric: "Cost of Goods Sold (COGS) Reduction", value: "↓ 10%" },
      { metric: "Supply Chain Lead Time", value: "↓ 15%" },
      { metric: "Supplier Performance (Quality & Delivery)", value: "Improved significantly" }
    ],
    strategicOutcome: "By overseeing and transforming Cover Technologies' end-to-end supply chain, I built a resilient, efficient, and scalable operational backbone. This enabled the company to meet aggressive growth targets, successfully launch new products, and achieve significant cost reductions, positioning it as a leader in the modular housing industry."
  },
  {
    id: 8,
    title: "From Guesswork to Clear-to-Build: 20% Fulfillment Lift via Proactive Procurement",
    detailTitle: "Fulfillment Efficiency Enhancement through Dashboard Implementation",
    subtitle: "Real-time Material Readiness Dashboard for Production Excellence",
    description: "Developed and implemented a comprehensive clear-to-build dashboard, providing real-time visibility into BOM-level material readiness and enabling proactive procurement decisions to minimize production downtime.",
    company: "Series B Modular Construction Startup",
    role: "Supply Chain Program Manager",
    duration: "1 week",
    category: "Supply Chain, Procurement, Data Analytics",
    functions: ["Supply Chain", "Procurement", "Operations"],
    
    businessDriver: "Minimize production downtime and improve on-time fulfillment through real-time procurement visibility.",
    
    context: "As the company scaled, production was frequently disrupted by stockouts, missed build dates, and fire-fighting procurement. Teams operated with fragmented material visibility and no clear-to-build signals. This reactive posture created downtime, increased expedite fees, and risked customer delivery performance.",
    
    problem: {
      points: [
        "No real-time visibility into BOM-level material readiness.",
        "Manual PO tracking across disconnected tools delayed actionability.",
        "TDM adherence varied, creating gaps between production plan and supplier deliveries.",
        "Procurement lacked early warning signals, leading to last-minute buys and stockouts."
      ]
    },
    
    keyDecision: "Instead of building a stand-alone procurement tracker, we designed an integrated clear-to-build dashboard—anchored to production plans, BOMs, and supplier lead times.",
    
    components: [
      { component: "Clear-to-Build Dashboard", function: "Real-time material readiness against build plans" },
      { component: "TDM Integration", function: "Procurement timelines structured to NPI production milestones" },
      { component: "Automated PO Tracking", function: "BOM-part availability, PO status, and order quantities in one system" }
    ],
    
    actions: [
      {
        title: "Developed and Implemented Real-Time Material Requirement Dashboard",
        description: "Collaborated closely with cross-functional teams including supply chain, procurement, and production to define key metrics (e.g., production schedule, BOM, required dates, and material availability) for inclusion in the dashboard. Integrated the dashboard with supplier lead times and order quantities to automatically generate optimized purchase plans for the procurement team."
      },
      {
        title: "Established a Time-Delivery Model (TDM)",
        description: "Worked with the NPI planning team to establish a TDM, ensuring all procurement activities were aligned with production timelines. Coordinated with vendors across key markets to ensure adherence to the TDM, facilitating on-time delivery of critical materials to support NPI (New Product Introduction) activities."
      },
      {
        title: "Vendor and Stakeholder Coordination",
        description: "Managed ongoing communication with production managers, identifying opportunities for supply chain optimization, and ensuring timely alignment of inventory levels with production schedules."
      },
      {
        title: "Optimized Procurement through Pre-Announced Shipments",
        description: "Collaborated with logistics teams to leverage pre-announce shipments, ensuring smoother material flows and reducing the risk of unexpected delays or stockouts. Established a robust communication framework with logistics and vendors to ensure timely and efficient transportation of goods."
      },
      {
        title: "Managed Direct Material Spend and Purchase Orders",
        description: "Issued purchase orders for direct materials and coordinated the reconciliation of invoices against purchase orders, ensuring accurate spend management."
      },
      {
        title: "Optimized Inventory and Procurement Planning",
        description: "Created automated reports within the dashboard to track material availability, part numbers, and procurement status."
      }
    ],
    
    results: [
      { metric: "Procurement Efficiency", value: "↑ 20%" },
      { metric: "Stockout Rate", value: "↓ 5%" },
      { metric: "CTB Alignment for NPI Builds", value: "Consistently enabled proactive buys" },
      { metric: "Cost Avoidance", value: "Material impact, especially during ramps" },
      { metric: "Stakeholder Visibility", value: "Increased confidence in fulfillment" }
    ],
    
    quote: "This dashboard gave us a clear-to-build signal at the part level. We no longer relied on guesswork—we knew where to act and when to escalate.",
    quoteAuthor: "Head of Manufacturing",
    
    myRole: {
      title: "Supply Chain Program Manager",
      scope: "Led the design, development, and implementation of the clear-to-build dashboard and TDM framework.",
      teamInfluenced: "Supply Chain, Procurement, Production, NPI Planning, Logistics",
      reportingLine: "Head of Supply Chain",
      timeframe: "1 week"
    }
  },
  {
    id: 9,
    title: "Global Logistics & Supplier Management",
    subtitle: "Strategic Supply Chain Optimization Across Global Markets",
    description: "Developed and executed a comprehensive global logistics and supplier management strategy to support scalable growth and improve supply chain responsiveness across geographies and SKUs.",
    company: "Cover Technologies",
    role: "Global Supply Manager",
    duration: "1 year",
    category: "Logistics, Supply Chain, Supplier Management",
    
    context: "To support scalable growth and improve supply chain responsiveness, logistics operations and supplier performance needed streamlining across geographies and SKUs.",
    
    keyInitiatives: {
      title: "Key Initiatives & Execution",
      sections: [
        {
          title: "Logistics Optimization",
          icon: "🚚",
          points: [
            "Oversaw 2PL and 3PL partners across international lanes, ensuring cost-effective and timely freight movement",
            "Negotiated Incoterms with global suppliers and partnered with freight forwarders to ensure customs compliance and avoid clearance delays"
          ]
        },
        {
          title: "Supplier Portfolio Management",
          icon: "🏭",
          points: [
            "Managed a strategic portfolio of 25+ suppliers across North America, Europe, and Asia for over 400 direct material SKUs"
          ]
        },
        {
          title: "Collaboration & Cross-functional Alignment",
          icon: "👥",
          points: [
            "Partnered with procurement, logistics, and finance teams to align cost savings targets and supply continuity risks",
            "Developed and tracked supplier performance improvement plans jointly with Quality and Engineering teams"
          ]
        }
      ]
    },
    
    impact: {
      title: "Impact",
      results: [
        "Achieved $50K/year savings through optimized freight, reduced duties, and improved Incoterm terms",
        "Reduced material cost base by 15% through supplier negotiations and performance alignment"
      ]
    },
    
    results: [
      { metric: "Annual Savings", value: "$50K/year", detail: "Through optimized freight and improved terms" },
      { metric: "Material Cost Reduction", value: "15%", detail: "Through supplier negotiations and alignment" },
      { metric: "Supplier Portfolio", value: "25+ suppliers", detail: "Across North America, Europe, and Asia" },
      { metric: "SKU Coverage", value: "400+ SKUs", detail: "Direct material management" }
    ],
    
    quote: "This comprehensive approach to global logistics and supplier management created a foundation for scalable growth while maintaining cost efficiency and supply continuity.",
    quoteAuthor: "Head of Supply Chain",
    
    myRole: {
      title: "Global Supply Manager",
      scope: "Led global logistics optimization and supplier portfolio management across multiple geographies.",
      teamInfluenced: "Procurement, Logistics, Finance, Quality, Engineering",
      reportingLine: "Head of Supply Chain",
      timeframe: "1 year"
    }
  },
  {
    id: 10,
    title: "Cost Optimization & Quality Improvement – Fortune 500 Chemical & Coatings Manufacturer",
    subtitle: "Driving Cost Reduction and Operational Efficiency through Design Optimization and Process Improvements",
    description: "Implemented cost optimization and quality improvement initiatives for a Fortune 500 chemical and coatings manufacturer, focusing on process re-engineering, waste reduction, and the adoption of lean manufacturing principles to enhance overall operational efficiency and product quality.",
    company: "Fortune 500 Chemical & Coatings Manufacturer",
    role: "Operations Consultant",
    duration: "8 months",
    category: "Engineering-Led Cost & Operations Optimization",
    context: "A leading Fortune 500 chemical and coatings manufacturer faced challenges with rising production costs, inconsistent product quality, and operational inefficiencies across several manufacturing lines. The existing processes were characterized by high waste, frequent defects, and suboptimal resource utilization, impacting profitability and market competitiveness.",
    businessObjective: "Achieve significant cost reductions, improve product quality consistency, and enhance overall operational efficiency by implementing lean manufacturing principles and process optimization strategies.",
    problem: {
      points: [
        "High material waste and energy consumption in production processes.",
        "Inconsistent product quality leading to customer complaints and rework.",
        "Inefficient production scheduling and capacity utilization.",
        "Lack of standardized work procedures and continuous improvement culture.",
        "Limited visibility into root causes of defects and operational bottlenecks."
      ]
    },
    strategicDecision: "We adopted a holistic approach combining lean manufacturing principles, Six Sigma methodologies, and advanced process analytics. This enabled us to systematically identify waste, optimize production flows, and implement robust quality control measures, driving both cost reduction and quality improvement.",
    solution: {
      initiatives: [
        { name: "Lean Process Re-engineering", description: "Conducted value stream mapping and implemented lean tools (e.g., 5S, Kaizen) to eliminate waste and streamline production workflows." },
        { name: "Quality Control Enhancement", description: "Implemented statistical process control (SPC) and developed new quality inspection protocols to ensure consistent product quality." },
        { name: "Energy & Material Optimization", description: "Identified opportunities for reducing energy consumption and material waste through process adjustments and technology upgrades." },
        { name: "Production Scheduling Optimization", description: "Developed and implemented an optimized production scheduling system to improve capacity utilization and reduce lead times." }
      ]
    },
    executionStrategy: [
      { phase: "Phase 1: Assessment & Pilot (Months 1-3)", description: "Conducted detailed process audits, identified high-impact areas for improvement, and piloted lean initiatives on selected production lines." },
      { phase: "Phase 2: Rollout & Training (Months 4-6)", description: "Scaled successful pilot initiatives across all relevant production lines and conducted extensive training for operational teams on new processes and quality tools." },
      { phase: "Phase 3: Monitoring & Continuous Improvement (Months 7-8)", description: "Established performance monitoring systems, conducted regular reviews, and fostered a culture of continuous improvement through ongoing Kaizen events." }
    ],
    governanceCollaboration: [
      "Formed cross-functional improvement teams involving production, engineering, and quality personnel.",
      "Conducted regular steering committee meetings with executive leadership to track progress and ensure strategic alignment.",
      "Implemented a suggestion system to encourage frontline employees to identify and propose process improvements."
    ],
    challenges: [
      "Overcoming ingrained operational habits and resistance to change from long-term employees.",
      "Managing the complexity of chemical manufacturing processes and ensuring safety during changes.",
      "Accurately measuring the impact of improvements in a highly integrated production environment.",
      "Securing capital investment for necessary equipment upgrades and technology adoption."
    ],
    results: [
      { metric: "Production Cost Reduction", value: "↓ 8%" },
      { metric: "Product Defect Rate", value: "↓ 20%" },
      { metric: "Energy Consumption", value: "↓ 10%" },
      { metric: "Production Throughput", value: "↑ 15%" },
      { metric: "Operational Efficiency", value: "Improved significantly across key metrics" }
    ],
    strategicOutcome: "This project successfully transformed the manufacturing operations of the Fortune 500 client, delivering substantial cost savings and a marked improvement in product quality. By embedding lean principles and data-driven decision-making, we created a more efficient, resilient, and quality-focused production environment, enhancing the client's competitive position in the market.",
    quote: "The operational changes implemented have not only saved us millions but have also fundamentally shifted our approach to quality and efficiency. It's a new standard for our manufacturing.",
    myRole: {
      title: "Operations Consultant",
      scope: "Led the analysis, design, and implementation of cost optimization and quality improvement initiatives.",
      teamInfluenced: "Production, Engineering, Quality Control, Finance",
      reportingLine: "Director of Operations",
      timeframe: "8 months"
    }
  },
  {
    id: 11,
    title: "ERP Data Integrity & Inventory Controls Program",
    subtitle: "Stabilizing Financial Reporting and Audit Readiness for Series C Fundraising",
    description: "Faced with inflated inventory valuation and data integrity issues, a Series B modular home startup needed to restore trust in ERP records ahead of Series C fundraising. As Program Lead, I directed a cross-functional initiative to clean up master data, embed tracking workflows, and introduce basic inventory controls—stabilizing financial reporting and audit readiness in under 6 months.",
    company: "Cover",
    role: "Program Lead",
    duration: "6 months",
    category: "Data Governance & Inventory Accuracy Program",
    
    executiveSummary: {
      issue: "ERP inventory was overstated by over $1B, causing planning disruptions and compromising investor confidence.",
      recommendation: "Direct cross-functional initiative to clean master data, embed tracking workflows, and introduce inventory controls.",
      impact: "Stabilized financial reporting and audit readiness, enabling Series C fundraising preparation."
    },
    
    context: "A Series B modular home startup faced critical data integrity issues with ERP inventory overstated by over $1B. No ownership over master data, inconsistent item attributes, and lack of stock tracking led to operational blind spots and audit risk ahead of Series C fundraising.",
    
    businessObjective: "Restore trust in ERP records, stabilize financial reporting, and achieve audit readiness to support Series C fundraising within 6 months.",
    
    problem: {
      title: "Root Causes Analysis",
      rootCauses: [
        { issue: "ERP ≠ Physical Stock", rootCause: "No data governance; inconsistent item setup" },
        { issue: "Mid-production Stockouts", rootCause: "No BOM-linked reconciliation or cycle counts" },
        { issue: "Inaccurate Valuation", rootCause: "Duplicate SKUs, mismatched UOMs, missing specs" },
        { issue: "Untracked Subcontracted Parts", rootCause: "No partial PO receipt logic" },
        { issue: "Poor Audit Readiness", rootCause: "No traceability or reconciliation documentation" }
      ]
    },
    
    keyActions: [
      {
        domain: "Item Governance",
        intervention: "Centralized item creation, cleaned 1000+ records, standardized classifications"
      },
      {
        domain: "Subcontracting",
        intervention: "Embedded PO-based traceability for vendor-assembled parts"
      },
      {
        domain: "Cycle Counts",
        intervention: "Implemented ABC stratification; reconciled BOM vs. physical inventory"
      },
      {
        domain: "Audit Controls",
        intervention: "Built audit trail for ERP-to-physical match; enabled investor data room prep"
      }
    ],
    
    results: [
      { outcome: "Inventory Overstatement", impact: "Reduced from $1B+ to verified physical stock parity" },
      { outcome: "Subcontractor Tracking Gaps", impact: "Closed via PO-level inflow visibility" },
      { outcome: "Internal Audit", impact: "Passed with no major flags; cleared Series C financial prep" },
      { outcome: "System Maturity", impact: "Item governance institutionalized across supply chain systems" }
    ],
    
    strategicOutcome: "This initiative stabilized core systems, reduced operational noise, and enabled reliable financial reporting—laying the foundation for scale and investor confidence ahead of Series C."
  },
  {
    id: 12,
    title: "Design Simplification & Flow — 60% Unit Cost Down",
    subtitle: "Design-to-Cost Transformation with Cross-Functional Change Management",
    description: "Led design-to-cost workstream, de-bottlenecked sourcing, and standardized quality inspection to achieve 60% unit cost reduction and streamlined operations.",
    company: "Manufacturing Company",
    role: "Design-to-Cost",
    duration: "2 months",
    category: "Design-to-Cost, Change Management, Supply Management",
    functions: ["Engineering", "Sourcing", "Quality"],
    
    executiveSummary: {
      issue: "Escalating unit costs and slow, manual handoffs constrained margin and throughput.",
      recommendation: "Led the design-to-cost workstream, de-bottlenecked sourcing, and standardized quality inspection. Proposed a cross-functional Change Log to track design/product changes then facilitated ECO/ECR governance.",
      impact: "Outcomes: −60% unit cost, inspection wait −30%, rejects −5%, ~$60k annual inspection savings."
    },
    
    businessProblem: "The company faced escalating part unit costs due to design complexity, sourcing bottlenecks, and inefficiencies in quality inspections. These challenges led to rising production costs, long lead times, and higher rejection rates, adversely affecting profitability and operational scalability.",
    
    measures: [
      "High part unit costs driven by design complexity.",
      "Sourcing delays from manual tracking and missed handoffs.",
      "Long wait times and high rejection rates in quality inspections."
    ],
    
    approachDecisions: {
      title: "Approach & Decisions",
      points: [
        "Design-first cost attack (DFM/DFA) over price-only negotiation.",
        "Automate where signal is stable (bottleneck tracking, inspection definitions).",
        "Tight change governance (ECO/ECR + Change Log) to protect quality and continuity."
      ]
    },
    
    actions: [
      {
        title: "Design Optimization",
        problem: "Design complexity was identified as a key cost driver, significantly inflating part unit costs and production time.",
        action: "Led cross-functional collaboration with suppliers, engineering, and operations teams to implement design changes, streamlining part complexity and optimizing the overall design.",
        outcome: "Achieved a 60% reduction in part unit costs, resulting in a major cost-saving initiative across production."
      },
      {
        title: "Sourcing Optimization & Automation",
        problem: "Sourcing bottlenecks were impacting lead times, causing delays and rework, which further inflated operational costs.",
        action: "Conducted a deep-dive technical analysis to identify the root causes of sourcing delays, implementing automated monitoring systems to track bottlenecks in real time and eliminate rework.",
        outcome: "Streamlined the sourcing process, improving lead time efficiency and reducing unnecessary rework, contributing to an overall decrease in sourcing-related costs."
      },
      {
        title: "Streamlining Quality Inspection Process",
        problem: "The quality inspection process was slow and inefficient, with high wait times and rejection rates leading to increased production costs.",
        action: "Collaborated with supply chain specialist and software team to develop an interactive dashboard defining inspection criteria and requirements for BOM parts, providing real-time visibility into quality metrics.",
        outcome: "Reduced wait time by 30% and decreased the rejection rate by 5%, saving administrative costs."
      }
    ],
    
    changeGovernance: {
      title: "Change Governance: Engineering Change Request (ECR)/Engineering Change Order (ECO)",
      problem: "CAD/BOM revisions discovered late; reliance on ad-hoc Slack pings and manual BOM reviews led to wrong-rev POs, rework, and downtime.",
      highlight: "I highlighted need of change log or a ECR/ECO process like manufacturing companies do.",
      decision: "Compared a standalone Change Log vs. formal ECR→ECO governance. Chose ECR/ECO; kept a read-only Change Log view for exec scan.",
      solution: {
        ecr: "ECR: submit reason, parts/revs, impact, proposed effectivity → status (In Review/Hold/Approved).",
        eco: "ECO: effectivity, disposition (use-up/scrap), owners/approvers; PLM IDs linked.",
        automation: "Automation: Slack alerts by commodity/cell; reminders pre-effectivity; PO blocks on superseded revs."
      },
      impact: "No \"surprise\" re-releases; wrong-rev orders prevented; teams acted ahead of effectivity; reduced rework/downtime.",
      myRoleInChange: "Facilitated Product Engineering to implement ECR/ECO, proposed and embedded the Change Log; coordinated rollout/training with Supply Chain, Manufacturing, and QA."
    },
    
    risksMitigations: {
      title: "Risks & Mitigations",
      risks: [
        {
          risk: "Spec drift/quality risk",
          mitigation: "ECO gates, CTQ sign-offs, pilot validation"
        },
        {
          risk: "Supplier variation",
          mitigation: "First-article checks, capability audits"
        },
        {
          risk: "Adoption fatigue",
          mitigation: "Visible KPI wins, concise training, clear owners"
        },
        {
          risk: "Cross-functional Alignment",
          mitigation: "Securing buy-in from diverse teams (engineering, operations, finance) and ensuring their collaboration in design optimizations"
        }
      ]
    },
    
    results: [
      { metric: "Unit Cost", value: "↓ 60%", detail: "(design simplification)" },
      { metric: "Inspection Wait", value: "↓ 30%", detail: "" },
      { metric: "Inspection Rejects", value: "↓ 5%", detail: "" },
      { metric: "Annual Savings", value: "~$60K/year", detail: "saved" },
      { metric: "Throughput", value: "Improved", detail: "Faster sourcing cycle; reduced rework" },
      { metric: "Scalability", value: "Enhanced", detail: "Standardized parts/processes enable volume growth without proportional cost" }
    ],
    
    strategicImpact: {
      title: "Strategic Impact for the Company",
      impacts: [
        {
          area: "Cost Savings & Profitability",
          description: "By optimizing design, sourcing, and quality control, significant cost reductions were achieved, directly improving profit margins."
        },
        {
          area: "Operational Efficiency",
          description: "Streamlined processes allowed for faster production cycles and improved resource allocation."
        },
        {
          area: "Scalability",
          description: "The cross-functional initiatives have created a foundation for sustainable growth, positioning the company to handle larger production volumes without increasing costs."
        }
      ]
    },
    
    strategicOutcome: "This design-to-cost transformation enabled the company to achieve substantial cost reductions while improving operational efficiency. By implementing cross-functional change governance and streamlining processes, we created a sustainable framework for continuous improvement and cost management.",
    
    quote: "The design-first approach didn't just cut costs—it fundamentally changed how we think about product development and operational efficiency.",
    
    myRole: {
      title: "Design-to-Cost Lead",
      scope: "Led design-to-cost workstream, facilitated cross-functional collaboration, and implemented change governance framework.",
      teamInfluenced: "Engineering, Sourcing, Quality, Operations",
      reportingLine: "Head of Operations",
      timeframe: "8 months"
    }
  },

  {
    id: 16,
    title: "Make-to-Stock (MTS) Program Implementation",
    subtitle: "Transitioned from reactive to demand-driven production, enabling scalable and predictable delivery",
    description: "Led the implementation of a Make-to-Stock (MTS) model to shift from reactive, project-based production to demand-driven planning, achieving 20% improvement in fulfillment efficiency and 25% reduction in lead times.",
    company: "Manufacturing Company",
    role: "Program Manager",
    duration: "6 months",
    category: "Strategic Program Management, Operations Transformation",
    
    executiveSummary: {
      challenge: "The company operated with a reactive, project-specific production and procurement model with no forward visibility, resulting in long lead times, uncertain material availability, and high coordination costs.",
      solution: "Led implementation of Make-to-Stock model with standardized configurations, 6-month production forecast alignment, and inventory buffers.",
      impact: "20% improvement in fulfillment efficiency, 25% reduction in lead times, 15% cost savings, and enabled predictable delivery with scalable operations."
    },
    
    context: "The company operated with a reactive, project-specific production and procurement model. There was no forward visibility, resulting in long lead times, uncertain material availability, and high coordination costs. Sales commitments often outpaced operational readiness, impacting delivery timelines and customer expectations.",
    
    problemDiagnosis: [
      "BOM variability prevented forecasting - Procurement had to wait until BOM is released",
      "Long-lead items triggered expedite fees due to late ordering",
      "Procurement worked reactively with no signal for forward buying",
      "No buffer inventory or SKU standardization to support repeatable execution"
    ],
    
    keyDecisions: [
      {
        title: "Standardized SKU Configuration",
        description: "Instead of builder post sales and acting on procurement, define two pre-configured SKUs and the BOM parts aligned to 60% of sales volume—approved jointly by Sales and Engineering."
      },
      {
        title: "Rolling Forecast Implementation",
        description: "Adopt a rolling 6-month forecast horizon for procurement, synchronized with supplier lead times."
      },
      {
        title: "Batch Production with Buffer Inventory",
        description: "Model batch production to reduce changeover time and drive unit cost savings—while introducing a 10% buffer inventory to manage uncertainty."
      }
    ],
    
    keyActions: [
      {
        category: "Strategic Alignment",
        icon: "target",
        actions: [
          "Co-presented a business case with the Head of SC to the CEO, showing how standardization and inventory buffers would support faster fulfillment",
          "Clarified how proactive planning could align the company's delivery promise with operational capabilities"
        ]
      },
      {
        category: "MTS Program Structuring",
        icon: "settings",
        actions: [
          "Facilitated alignment across Sales, Design, and Engineering to define standardized configurations for inventory stocking",
          "Worked with Engineering and Operations to identify common BOM components and part usage volumes",
          "Helped finalize forecasted quantities with functional leads and structured phased inventory ramp-up"
        ]
      },
      {
        category: "Execution Support",
        icon: "play",
        actions: [
          "Collaborated with Supply Chain to align long-lead procurement with 6-month forecasts",
          "Supported Inventory Ops in modeling warehouse and buffer space needs",
          "Removed execution blockers for Operations to publish a rolling MTS production calendar"
        ]
      }
    ],
    
    results: [
      { metric: "Fulfillment Efficiency", value: "↑ 20%", detail: "Improved delivery predictability through proactive planning" },
      { metric: "Production Lead Time", value: "↓ 25%", detail: "Stabilized builds and inventory buffers reduced delivery time" },
      { metric: "Unit Cost", value: "↓ 15%", detail: "Improved setup efficiency and part reuse optimization" },
      { metric: "Manufacturing Throughput", value: "Increased", detail: "Batching and reduced idle time improved efficiency" },
      { metric: "Sales Volume Coverage", value: "60%", detail: "Standardized configurations covering majority of sales" },
      { metric: "Production Capacity", value: "2x Peak", detail: "Enabled 2x peak production capacity per month in 2024" }
    ],
    
    keyLessons: [
      {
        title: "SKU Standardization",
        description: "Predefined configurations enabled repeatable planning and operational consistency"
      },
      {
        title: "Rolling Forecasting",
        description: "6-month rolling horizon aligned supply with demand, reducing reactive procurement"
      },
      {
        title: "Conservative Buffering",
        description: "Phased inventory ramp-up managed risk while avoiding overstock situations"
      },
      {
        title: "Change Management",
        description: "Addressed resistance through data-driven wins and time-to-quote improvements"
      }
    ],
    
    challenges: [
      "Cross-functional trade-offs: Balancing Sales flexibility vs. operational efficiency—resolved by anchoring decisions in volume data and customer priorities",
      "Unavailability of systemized product routings required manual coordination initially",
      "Risk management: Conservative ramp-up buffers needed to avoid overstock while achieving faster delivery",
      "Change management: Sales and Design concerns about constraints addressed through time-to-quote improvement demonstrations"
    ],
    
    strategicOutcome: "The MTS program implementation transformed the company from reactive, project-based operations to a demand-driven, scalable production model. This enabled predictable delivery commitments, reduced operational stress, and created a foundation for sustainable growth while maintaining cost efficiency.",
    
    quote: "The MTS model didn't just improve our delivery times—it fundamentally changed how we think about production planning and gave us the operational predictability to make confident commitments to customers.",
    quoteAuthor: "Head of Operations",
    
    myRole: {
      title: "Program Manager",
      scope: "Led cross-functional MTS program implementation including strategic alignment, process design, and execution support across Sales, Engineering, Operations, and Supply Chain.",
      keyResponsibilities: [
        "Developed business case and secured executive alignment for MTS model",
        "Facilitated cross-functional workshops to define standardized configurations",
        "Coordinated 6-month rolling forecast implementation with Supply Chain",
        "Managed phased inventory ramp-up and buffer optimization",
        "Removed execution blockers and ensured operational readiness"
      ],
      stakeholders: "CEO, Head of Supply Chain, Sales, Engineering, Operations, Inventory Management",
      teamInfluenced: "Sales, Design, Engineering, Supply Chain, Operations, Inventory Ops",
      reportingLine: "Head of Operations",
      timeframe: "6 months"
    }
  },
  {
    id: 17,
    title: "UOM & Part Logic Standardization Program",
    subtitle: "Eliminating Procurement Errors and Inventory Mismatches Through Data Governance",
    description: "Led UOM and part logic standardization to fix procurement errors and inventory mismatches. Adopted a distinct SKU-per-variant model, cleaned 400+ records, and enforced data governance. Results: 98% ERP-to-physical match, 40% drop in procurement rework, and restored inventory valuation accuracy.",
    company: "Manufacturing Company",
    role: "Data Governance Lead",
    duration: "4 months",
    category: "Engineering Excellence, Data Governance",
    
    executiveSummary: {
      issue: "Part master data lacked consistency—UOMs were misaligned, variant tracking was ad hoc, and naming conventions were unclear, creating execution challenges across procurement, warehousing, and finance.",
      recommendation: "Implement distinct SKU-per-variant model with standardized UOMs and enforced data governance to eliminate procurement errors and inventory mismatches.",
      impact: "Achieved 98% ERP-to-physical match, 40% reduction in procurement rework, and restored inventory valuation accuracy."
    },
    
    context: "The company's part master data lacked consistency—units of measure (UOMs) were misaligned, variant tracking was ad hoc, and naming conventions were unclear. This created execution challenges across procurement, warehousing, and finance, including inaccurate purchase orders, stock mismatches, and unreliable inventory valuation.",
    
    businessObjective: "Standardize part master data, eliminate procurement errors, and restore inventory valuation accuracy through comprehensive UOM and part logic governance.",
    
    problem: {
      title: "ERP System Challenges",
      description: "The ERP system had no standardized approach to UOMs or part identification, leading to:",
      issues: [
        "30% of BOM items with incorrect or inconsistent UOMs",
        "Variants (e.g., color, size) tracked via free-text or inconsistent attributes",
        "Procurement and finance unable to reconcile orders, stock, or consumption",
        "BOM roll-ups and supplier orders repeatedly misaligned"
      ]
    },
    
    solutionOptions: [
      {
        option: "Distinct SKUs per Variant",
        pros: "High traceability, ERP-compatible",
        cons: "Increases SKU count; requires tight governance"
      },
      {
        option: "ERP Variant Configuration",
        pros: "Scales well, fewer SKUs",
        cons: "Complex, not supported in ERPNext"
      },
      {
        option: "Manual Multi-UOM per SKU",
        pros: "Simple setup",
        cons: "High error risk, poor visibility, unreliable data"
      }
    ],
    
    strategicDecision: "Chose Option 1—distinct SKUs for each variant—as the most feasible and reliable within ERPNext, balancing visibility, system compatibility, and governance.",
    
    implementationApproach: {
      dataGovernance: [
        "Defined attribute rules by part family (e.g., color, packaging)",
        "Locked item creation to Supply Chain with naming conventions",
        "Cleaned 400+ SKUs across key categories"
      ],
      uomRationalization: [
        "Standardized all UOMs; removed manual overrides",
        "Eliminated conflicting conversions (e.g., roll vs. feet)",
        "Grouped items by commodity for reporting integrity"
      ],
      changeManagement: [
        "Validated BOMs with Engineering and Procurement",
        "Audited open POs and vendor templates for UOM alignment",
        "Delivered SOPs for part setup and ongoing governance"
      ]
    },
    
    results: [
      { metric: "Part duplication", outcome: "↓ 25%" },
      { metric: "ERP-to-physical match rate", outcome: "↑ to 95%" },
      { metric: "UOM conversion errors", outcome: "Eliminated across high-volume commodities" },
      { metric: "Inventory valuation variance", outcome: "Reduced significantly" },
      { metric: "Procurement rework", outcome: "↓ 40% due to improved PO accuracy" }
    ],
    
    strategicOutcome: "This standardization program transformed the company's approach to part master data, establishing a foundation of consistency and reliability. By implementing distinct SKUs per variant and standardizing UOMs, we eliminated procurement errors, improved inventory accuracy, and enabled reliable financial reporting across the organization.",
    
    quote: "Clean data is the foundation of efficient operations. This program gave us that foundation, eliminating the guesswork in procurement and inventory management.",
    
    myRole: {
      title: "Data Governance Lead",
      scope: "Led the design and implementation of UOM and part logic standardization program across Engineering, Procurement, and Finance.",
      keyResponsibilities: [
        "Analyzed existing part master data and identified standardization requirements",
        "Designed distinct SKU-per-variant model and UOM rationalization approach",
        "Coordinated cross-functional validation with Engineering and Procurement teams",
        "Implemented data governance controls and naming conventions",
        "Delivered training and SOPs for ongoing part setup governance"
      ],
      stakeholders: "Engineering, Procurement, Finance, Supply Chain, IT",
      teamInfluenced: "Engineering, Procurement, Finance, Warehouse Operations",
      reportingLine: "Head of Engineering",
      timeframe: "4 months"
    }
  }
]

export default fullExperienceData;
