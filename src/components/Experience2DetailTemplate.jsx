import { ArrowLeft, ArrowRight, Target, Lightbulb, TrendingUp, Award, AlertTriangle, CheckCircle, User, FileText, Building, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Experience2DetailTemplate = ({ experience }) => {
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
                  <div className="text-slate-600">{experience.company}</div>
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
                  <p className="text-amber-700 mt-1">BOM costs and reactive, local sourcing were squeezing margins and limiting scale.</p>
                </div>
                <div>
                  <span className="font-semibold text-amber-800">Recommendation:</span>
                  <p className="text-amber-700 mt-1">Re-architect sourcing to a commodity-based, global model with design-to-cost governance and VMI.</p>
                </div>
                <div>
                  <span className="font-semibold text-amber-800">Impact:</span>
                  <p className="text-amber-700 mt-1">$2.2M annualized savings, $130k BOM cost down, record quarter (8 years' sales in 1Q), diversified supply across 5 regions.</p>
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
                  <div className="text-lg font-bold text-emerald-900">$130,000</div>
                  <div className="text-xs text-emerald-700">BOM Cost Reduction</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-lg font-bold text-emerald-900">$2.2M</div>
                  <div className="text-xs text-emerald-700">Annualized Savings</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-lg font-bold text-emerald-900">Record Quarter</div>
                  <div className="text-xs text-emerald-700">8 years' sales in 1Q</div>
                </div>
                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300">
                  <div className="text-lg font-bold text-emerald-900">5 Regions</div>
                  <div className="text-xs text-emerald-700">Supply Base Diversification</div>
                </div>
              </div>
            </div>

            {/* My Role */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-indigo-800">
                <User className="h-5 w-5" />
                My Role
              </h3>
              
              <div className="space-y-3 text-sm">
                <p className="text-indigo-700">
                  Co-architected sourcing logic and governance with Head of Supply Chain; led RFQs, supplier due diligence/onboarding; drove cross-functional adoption; implemented VMI; ran QBRs with scorecards.
                </p>
                <div>
                  <span className="font-semibold text-indigo-800">Team:</span>
                  <p className="text-indigo-700 mt-1">5+ contributors (sourcing, ops, design)</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-800">Timeframe:</span>
                  <p className="text-indigo-700 mt-1">Early savings in 6 weeks; full transformation in ~8–12 months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Business Objective */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-3 text-amber-600" />
                Business Objective
              </h2>
              <p className="text-amber-800">
                Enable cost-to-serve reduction and sourcing resiliency to support record volume delivery, margin improvement, and long-term operational scalability.
              </p>
            </div>

            {/* Problem */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Problem
              </h2>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  90%+ spend localized with limited price leverage or redundancy
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  No commodity classification → cost drivers hidden in SKU clutter
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Frequent design changes clashed with long MOQs and inconsistent vendors
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  No VMI → working capital spikes, stockouts, and high expedite fees
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  No supplier forecasting integration or feedback mechanisms
                </li>
              </ul>
            </div>

            {/* Strategic Solutions Framework */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 mr-3 text-blue-600" />
                Strategic Solutions Framework
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Commodity Strategy</h3>
                  <p className="text-sm text-blue-100">Built a standardized classification system to identify cost drivers and normalize part grouping- crate part families</p>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Global Sourcing Expansion</h3>
                  <p className="text-sm text-green-100">Piloted sourcing in India, Mexico; expanded to China, EU, Poland based on volume/value tiers</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.49.59-1.42 1.37L6.5 16H9v6h2v-6h2v6h2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Vendor Development</h3>
                  <p className="text-sm text-purple-100">Performed site due diligence, NDAs, compliance checks, and direct onboarding → ensured aligned cost-quality-risk</p>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Design-to-Cost Governance</h3>
                  <p className="text-sm text-orange-100">Partnered with Engineering to influence BOM simplification, volume consolidation, and ECO control</p>
                </div>

                <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-lg p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">VMI Implementation</h3>
                  <p className="text-sm text-teal-100">Reduced administrative efforts and costs while maintaining supply continuity and negotiating leverage</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg p-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Quarterly Cross-Functional Reviews</h3>
                  <p className="text-sm text-indigo-100">Established quarterly reviews Aligned Finance, Ops, and Design teams on sourcing performance, escalations, and forecast tracking</p>
                </div>
              </div>

              {/* Implementation Flow */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Implementation Flow</h3>
                <div className="flex items-center justify-center gap-4 overflow-x-auto">
                  <div className="flex items-center min-w-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="ml-2 text-center min-w-0">
                      <div className="text-sm font-medium text-blue-700">Commodity</div>
                      <div className="text-sm font-medium text-blue-700">Strategy</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div className="flex items-center min-w-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="ml-2 text-center min-w-0">
                      <div className="text-sm font-medium text-green-700">Global</div>
                      <div className="text-sm font-medium text-green-700">Sourcing</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div className="flex items-center min-w-0">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="ml-2 text-center min-w-0">
                      <div className="text-sm font-medium text-purple-700">Vendor</div>
                      <div className="text-sm font-medium text-purple-700">Development</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div className="flex items-center min-w-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="ml-2 text-center min-w-0">
                      <div className="text-sm font-medium text-orange-700">Design-to-Cost</div>
                      <div className="text-sm font-medium text-orange-700">Governance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges & Resolutions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Challenges & Resolutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">Change resistance / "local & fast"</h3>
                    <p className="text-sm text-green-700">Executive backing + quick-win pilots.</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">Time zones & communication</h3>
                    <p className="text-sm text-green-700">Established meeting time, Structured QBRs, clear SLAs.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">BOM volatility vs. MOQs</h3>
                    <p className="text-sm text-green-700">ECO discipline; volume consolidation.</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">Cultural gaps</h3>
                    <p className="text-sm text-green-700">On-site visits; single-threaded owners.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Impact */}
            <div className="bg-slate-800 rounded-lg shadow-sm p-6 text-white">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-6 w-6 mr-3 text-yellow-400" />
                Strategic Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-700 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-200 mb-2">Cost Transformation</h3>
                  <p className="text-sm text-slate-300">Achieved $2.2M annualized savings through strategic sourcing and commodity-based approach</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-200 mb-2">Supply Chain Resilience</h3>
                  <p className="text-sm text-slate-300">Diversified supply base across 5 regions, reducing single-source dependencies</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-200 mb-2">Operational Excellence</h3>
                  <p className="text-sm text-slate-300">Enabled record quarter performance with integrated design-to-cost governance</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-700 rounded-lg border-l-4 border-yellow-400">
                <p className="text-slate-200 italic">
                  "This transformation moved us from reactive, local sourcing to a strategic, global approach that directly enabled our record quarter performance."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link to="/experience" className="inline-flex items-center px-4 py-2 bg-michigan-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Experience
          </Link>
          
          <Link to="/experience/3" className="inline-flex items-center px-4 py-2 bg-maize-yellow text-michigan-blue rounded-lg hover:bg-yellow-400 transition-colors">
            Next Experience
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience2DetailTemplate;

