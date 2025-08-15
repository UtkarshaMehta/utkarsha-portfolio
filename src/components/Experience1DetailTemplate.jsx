import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Target, Lightbulb, TrendingUp, Award, AlertTriangle, CheckCircle, User, FileText, ChevronRight, ChevronDown, BarChart3, Settings, Building, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Experience1DetailTemplate = ({ experience }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Experience Not Found</h1>
          <p className="text-gray-600">The experience data could not be loaded.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/experience" className="inline-flex items-center text-michigan-blue hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Experience
        </Link>
      </div>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
              <p className="text-slate-200 text-lg">{experience.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="bg-slate-700 text-white rounded-lg px-4 py-2 border border-slate-600">
                <div className="text-sm font-medium text-white">{experience.category}</div>
                <div className="text-xs text-slate-300">{experience.duration}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="p-8">
          {/* Top Section - Project Info & Business Objective */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Project Info */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4">
                <Building className="h-5 w-5" />
                Project Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Building className="h-4 w-4 text-slate-600 mt-1" />
                  <div>
                    <div className="font-semibold text-sm text-slate-700">Company</div>
                    <div className="text-sm text-slate-600">{experience.company}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="h-4 w-4 text-slate-600 mt-1" />
                  <div>
                    <div className="font-semibold text-sm text-slate-700">Role</div>
                    <div className="text-sm text-slate-600">{experience.role}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-slate-600 mt-1" />
                  <div>
                    <div className="font-semibold text-sm text-slate-700">Duration</div>
                    <div className="text-sm text-slate-600">{experience.duration}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Objective */}
            <div className="lg:col-span-2 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-amber-800 mb-4">
                <Target className="h-5 w-5" />
                Business Objective
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {experience.problem?.description || "Transform disconnected engineering and procurement systems into a unified platform that eliminates manual rework, reduces errors, and enables real-time cost visibility across the entire product lifecycle."}
              </p>
            </div>
          </div>

          {/* Problem & Strategic Decision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Problem */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-red-800 mb-4">
                <CheckCircle className="h-5 w-5" />
                Challenge
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {experience.problem?.points?.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Decision */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-800 mb-4">
                <Lightbulb className="h-5 w-5" />
                Strategic Decision
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {experience.strategicDecision}
              </p>
            </div>
          </div>

          {/* Key Results & Transformation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Key Results */}
            <div className="bg-emerald-800 text-white rounded-lg p-4 h-80 flex flex-col">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <BarChart3 className="h-5 w-5" />
                Key Results
              </h3>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 gap-3">
                  {experience.results?.map((result, index) => (
                    <div key={index} className="bg-emerald-700 rounded-lg p-3 border border-emerald-600">
                      <div className="text-xl font-bold text-emerald-100 mb-1">
                        {typeof result === 'string' ? result.split(' ')[0] : result}
                      </div>
                      <div className="text-xs text-emerald-200">
                        {typeof result === 'string' ? result.split(' ').slice(1).join(' ') : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Before → After (Compact) */}
            <div className="bg-slate-800 text-white rounded-lg p-4 h-80 flex flex-col">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <TrendingUp className="h-5 w-5" />
                Before → After
              </h3>
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-2 gap-2">
                  {/* Before Column */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-red-300 mb-2 text-center">BEFORE</div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-red-300">Manual BOM→ERP mapping</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-red-300">Duplicate SKUs &gt;20%</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-red-300">3 disconnected systems</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-red-300">Manual RM aggregation</div>
                    </div>
                  </div>
                  
                  {/* After Column */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-green-300 mb-2 text-center">AFTER</div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-green-300">Auto-linked at release</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-green-300">~2%</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-green-300">Unified platform</div>
                    </div>
                    <div className="bg-slate-700 rounded p-2 border border-slate-600">
                      <div className="text-xs text-green-300">Logic-driven PBOM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action & Execution Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Action */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4">
                <Settings className="h-5 w-5" />
                Action Taken
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">Platform Design & Logic Definition</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {experience.action?.platformDesignLogic?.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">Phased Rollout & Governance</h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {experience.action?.phasedRolloutGovernance?.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Execution Strategy */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-800 mb-4">
                <TrendingUp className="h-5 w-5" />
                Execution Strategy
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {experience.executionStrategy?.description}
              </p>
            </div>
          </div>

          {/* Product Feature Table */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mb-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4">
              <CheckCircle className="h-5 w-5" />
              Platform Architecture
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Component</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Function</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.solution?.productInsight?.featureArchitecture?.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="border border-slate-300 px-4 py-2 text-slate-700 font-medium">{feature.component}</td>
                      <td className="border border-slate-300 px-4 py-2 text-slate-700">{feature.function}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Impact */}
          <div className="bg-slate-800 text-white rounded-lg p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Award className="h-5 w-5" />
              Strategic Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {experience.takeAway?.map((takeaway, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                  <p className="text-sm text-slate-200">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible Data Flow Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <button
              onClick={() => toggleSection('dataFlow')}
              className="flex items-center justify-between w-full text-left"
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
                <TrendingUp className="h-5 w-5" />
                Data Flow Transformation
              </h3>
              {expandedSections.dataFlow ? (
                <ChevronDown className="h-5 w-5 text-slate-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-slate-600" />
              )}
            </button>
            
            {expandedSections.dataFlow && (
              <div className="mt-6 space-y-6">
                {/* Before Data Flow */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Before Data Flow</h4>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h5 className="text-white text-lg font-semibold mb-4">Data flow Then:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">PLM</h6>
                        <p className="text-sm">Items (Teamcenter ID)</p>
                        <p className="text-sm mt-2">Used for Designing</p>
                      </div>
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">ERP</h6>
                        <p className="text-sm">Items (ERPNext ID)</p>
                        <p className="text-sm mt-2">Used for Purchasing</p>
                      </div>
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">In-house software</h6>
                        <p className="text-sm">Items (System Id)</p>
                        <p className="text-sm mt-2">Used for connecting PLM & ERP PN and creating PBOM</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">Quoting software</h6>
                        <p className="text-sm">Used for calculating the BOM Cost</p>
                      </div>
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">Excel</h6>
                        <p className="text-sm">Inventory records</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After Data Flow */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">After/Now Data Flow</h4>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h5 className="text-white text-lg font-semibold mb-4">Data flow Now:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">PLM</h6>
                        <p className="text-sm">Items (Teamcenter ID)</p>
                        <p className="text-sm mt-2">Used for Designing</p>
                      </div>
                      <div className="bg-blue-600 text-white rounded p-4">
                        <h6 className="font-semibold mb-2">ERP</h6>
                        <p className="text-sm">Items (ERPNext ID)</p>
                        <p className="text-sm mt-2">Used for Purchasing & Inventory Management</p>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <div className="bg-blue-600 text-white rounded p-4 max-w-md">
                        <h6 className="font-semibold mb-2">Quoting software</h6>
                        <p className="text-sm">Used for calculating the BOM Cost & Generating PBOM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Navigation */}
        <div className="px-8 pb-8">
          <div className="flex justify-between items-center">
            <Link to="/experience" className="inline-flex items-center px-4 py-2 bg-michigan-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Experience
            </Link>
            
            <Link to="/experience/2" className="inline-flex items-center px-4 py-2 bg-maize-yellow text-michigan-blue rounded-lg hover:bg-yellow-400 transition-colors">
              Next Experience
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience1DetailTemplate

