import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Target, Lightbulb, TrendingUp, Award, AlertTriangle, CheckCircle, User, FileText, ChevronRight, ChevronDown, BarChart3, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

const Experience3DetailTemplate = ({ experience }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-medium border border-slate-600">
              {experience.category}
            </div>
            <div className="text-sm text-gray-600">{experience.duration}</div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{experience.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{experience.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Information */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-slate-800">
                <FileText className="h-5 w-5" />
                Project Info
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-slate-700">Company/Organization:</div>
                  <div className="text-slate-600">Refraction AI</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-700">Role:</div>
                  <div className="text-slate-600">{experience.role}</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-700">Duration:</div>
                  <div className="text-slate-600">{experience.duration}</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-700">Category:</div>
                  <div className="text-slate-600">{experience.category}</div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-amber-800">
                <Target className="h-5 w-5" />
                Executive Summary
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-amber-800">Issue:</span>
                  <p className="text-amber-700 mt-1">Ad-hoc buying through marketplaces created quality failures, stockouts, and vendor churn; no onboarding, no KPIs, no governance.</p>
                </div>
                <div>
                  <span className="font-semibold text-amber-800">Recommendation:</span>
                  <p className="text-amber-700 mt-1">Stand up a lightweight Supplier Approval System with SCOR-based scorecards, pre-spend gates, and automated intake—independent of ERP.</p>
                </div>
                <div>
                  <span className="font-semibold text-amber-800">Impact:</span>
                  <p className="text-amber-700 mt-1">100% supplier data accuracy, stockouts −5%, operational efficiency +20%, better vendor decisions via performance/risk filters.</p>
                </div>
              </div>
            </div>

            {/* Key Results */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-emerald-800">
                <TrendingUp className="h-5 w-5" />
                Key Results
              </h3>
              
              <div className="space-y-3">
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-sm font-bold text-emerald-900">Supplier Data Accuracy</div>
                  <div className="text-xs text-emerald-700">100% via automated intake</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-sm font-bold text-emerald-900">Stockouts Reduced</div>
                  <div className="text-xs text-emerald-700">↓ 5% across tracked SKUs</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-sm font-bold text-emerald-900">Operational Efficiency</div>
                  <div className="text-xs text-emerald-700">↑ 20% via better vendor selection & lead time control</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-sm font-bold text-emerald-900">Defect Rate</div>
                  <div className="text-xs text-emerald-700">Decreased significantly by eliminating high-risk suppliers</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-sm font-bold text-emerald-900">Decision Quality</div>
                  <div className="text-xs text-emerald-700">Improved through performance scorecards & risk filters</div>
                </div>
              </div>
            </div>

            {/* Situation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-blue-800">
                <AlertTriangle className="h-5 w-5" />
                Situation
              </h3>
              
              <p className="text-blue-700 text-sm">
                Series-2 robotics firm scaling without sourcing infrastructure. Supplier data scattered across sheets/emails; no common metrics or approval workflow.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Problem (Baseline) */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Problem (Baseline)
              </h2>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  No formal onboarding or approval; high-risk vendors added ad hoc
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  No shared KPIs (lead-time reliability, MOQ fit, defect rate, RMA)
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Zero performance tracking; buying decisions not evidence-based
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Suppliers going out of business mid-cycle; unpredictable lead times
                </li>
              </ul>
            </div>

            {/* Action - Collapsible */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection('action')}
              >
                <h2 className="text-xl font-semibold text-indigo-900 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-indigo-600" />
                  Action
                </h2>
                {expandedSections.action ? 
                  <ChevronDown className="h-5 w-5 text-indigo-600" /> : 
                  <ChevronRight className="h-5 w-5 text-indigo-600" />
                }
              </div>
              
              {expandedSections.action && (
                <div className="mt-4 space-y-4 text-sm text-gray-700">
                  <p className="font-medium">
                    Led the development and execution of cross-functional supplier management and supply chain optimization programs for both a Series B construction startup and a Series 2 robotics company, focusing on driving measurable improvements in cost management, quality control, and risk mitigation across a diverse supplier base.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Conducted a supplier spend analysis to understand the diverse supplier base, revealing that most were from e-commerce or digital marketplaces for retail parts.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Orchestrated cross-departmental collaboration with design, engineering, accounting, and executive leadership to define supplier selection metrics aligned with long-term growth and technical requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Developed and implemented supplier selection and approval frameworks using SCOR-based KPIs, addressing critical factors such as manufacturing flexibility, MOQ, lead time reliability, and return processes.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Created a vendor approval process and supplier assessment criteria to conduct due diligence before onboarding vendors.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Automated the data collection process using a VBA macro, ensuring 100% accuracy in data management.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Developed a supplier performance measurement system, including a balanced scorecard, to monitor supplier performance, enabling informed decisions on contract renegotiations, supplier development, quality improvements, or supplier selection for future orders.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Managed program rollout and change management, iterating frameworks based on feedback and ensuring stakeholder buy-in across departments.
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      Created a vendor approval process and supplier assessment criteria, ensuring thorough due diligence prior to vendor onboarding, significantly improving the quality and reliability of the supplier base.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Challenges & Resolutions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Challenges & Resolutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">Ad-hoc culture</h3>
                  <p className="text-sm text-green-700">Quick wins + leadership backing to shift behavior.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">Mixed part profiles</h3>
                  <p className="text-sm text-green-700">Tiered rules for high-volume vs. custom parts.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">Linking scores to actions</h3>
                  <p className="text-sm text-green-700">Pilots before commercial consequences.</p>
                </div>
              </div>
            </div>

            {/* Solution Framework */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 mr-3 text-blue-600" />
                Solution Framework
              </h2>
              
              <div className="mb-6">
                {/* Custom Supply Chain Management Framework */}
                <div className="bg-gray-50 rounded-lg p-6 border">
                  <h3 className="text-center text-lg font-semibold text-gray-800 mb-6">Supply Chain Management Framework</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* SCOR-Based KPIs */}
                    <div className="bg-purple-500 text-white rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-sm">SCOR-Based KPIs</h4>
                      <p className="text-xs mt-1 opacity-90">Lead-Time Reliability, MOQ Flexibility, Defect Rate</p>
                    </div>

                    {/* Cross-Functional Alignment */}
                    <div className="bg-red-500 text-white rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
                        <Settings className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-sm">Cross-Functional Alignment</h4>
                      <p className="text-xs mt-1 opacity-90">Workshops, Playbooks, Engineering</p>
                    </div>

                    {/* Approval Governance */}
                    <div className="bg-yellow-500 text-white rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-sm">Approval Governance</h4>
                      <p className="text-xs mt-1 opacity-90">Pre-Spend Vendor Approval</p>
                    </div>

                    {/* Onboarding Framework */}
                    <div className="bg-green-500 text-white rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-sm">Onboarding Framework</h4>
                      <p className="text-xs mt-1 opacity-90">SOPs, Approval Flows</p>
                    </div>

                    {/* Automation */}
                    <div className="bg-blue-500 text-white rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-sm">Automation</h4>
                      <p className="text-xs mt-1 opacity-90">VBA Macro-Based Intake Form</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Built a supplier approval system—with scorecards and pre-spend gates—to cut risk, improve quality, and stabilize delivery through systematic vendor evaluation and performance monitoring.
              </p>
            </div>

            {/* Assessment Frameworks */}
            <div className="space-y-6">
              {/* Supplier Selection Framework */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Supplier Selection Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 text-sm mb-2">Quality</h4>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Product Warranty</li>
                      <li>• Compliance & RMA</li>
                      <li>• Lead Time</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 text-sm mb-2">Cost</h4>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Unit Price</li>
                      <li>• Volume Discounts</li>
                      <li>• Payment Terms</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 text-sm mb-2">Reliability</h4>
                    <ul className="text-xs text-purple-700 space-y-1">
                      <li>• On-time Delivery</li>
                      <li>• Supply Stability</li>
                      <li>• Risk Assessment</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 text-sm mb-2">Service</h4>
                    <ul className="text-xs text-orange-700 space-y-1">
                      <li>• Technical Support</li>
                      <li>• Communication</li>
                      <li>• Flexibility</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vendor Performance Evaluation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendor Performance Scorecard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-red-800 text-sm">Critical Issues</h4>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">1-2</span>
                    </div>
                    <p className="text-xs text-red-700">Immediate action required</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-yellow-800 text-sm">Needs Improvement</h4>
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">3-4</span>
                    </div>
                    <p className="text-xs text-yellow-700">Monitor and improve</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-800 text-sm">Excellent</h4>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">4-5</span>
                    </div>
                    <p className="text-xs text-green-700">Preferred supplier</p>
                  </div>
                </div>
              </div>

              {/* Vendor Assessment Criteria */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendor Assessment Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-yellow-100 border border-yellow-300 rounded p-3">
                      <h4 className="font-semibold text-sm text-gray-800">Commodity Specific</h4>
                      <p className="text-xs text-gray-600">Capacity, Accreditations, Quality Management</p>
                    </div>
                    <div className="bg-green-100 border border-green-300 rounded p-3">
                      <h4 className="font-semibold text-sm text-gray-800">Supplier Specific</h4>
                      <p className="text-xs text-gray-600">Financial Stability, Communication, Compliance</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-100 border border-blue-300 rounded p-3">
                      <h4 className="font-semibold text-sm text-gray-800">Quality Standards</h4>
                      <p className="text-xs text-gray-600">ISO Certification, Testing Procedures, Continuous Improvement</p>
                    </div>
                    <div className="bg-purple-100 border border-purple-300 rounded p-3">
                      <h4 className="font-semibold text-sm text-gray-800">Risk Assessment</h4>
                      <p className="text-xs text-gray-600">Economic Stability, Credit Rating, Business Continuity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4">
              <FileText className="h-5 w-5" />
              Additional Resources
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">Supplier Selection Framework</h4>
                  <p className="text-sm text-gray-600">Detailed framework for supplier evaluation and selection criteria</p>
                </div>
                <a 
                  href="/supplier-selection-framework.png" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Framework
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex justify-between items-center">
            <Link to="/experience" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Experience
            </Link>
            
            <Link to="/experience/2" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Experience
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            to="/experience" 
            className="flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Experience
          </Link>
          
          <Link 
            to="/experience/4" 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Experience3DetailTemplate

