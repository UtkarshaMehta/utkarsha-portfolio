import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Database, FileText, BarChart3, Shield, DollarSign, Clock, Users, Target } from 'lucide-react';

const Experience11DetailTemplate = ({ experience }) => {
  const [openSections, setOpenSections] = useState({
    problem: false,
    actions: false,
    results: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Title */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-2">{experience.title}</h1>
              <p className="text-lg text-red-100 mb-4">{experience.subtitle}</p>
              <p className="text-red-100 leading-relaxed">{experience.description}</p>
            </div>
            
            {/* Project Details */}
            <div className="bg-red-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Project Details
              </h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Company:</span> {experience.company}</div>
                <div><span className="font-medium">Role:</span> {experience.role}</div>
                <div><span className="font-medium">Duration:</span> {experience.duration}</div>
                <div><span className="font-medium">Functions:</span> Data Governance, Finance, Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Executive Summary */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Executive Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-700 mb-2">Issue</h3>
                  <p className="text-sm text-gray-700">{experience.executiveSummary.issue}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-700 mb-2">Recommendation</h3>
                  <p className="text-sm text-gray-700">{experience.executiveSummary.recommendation}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-700 mb-2">Impact</h3>
                  <p className="text-sm text-gray-700">{experience.executiveSummary.impact}</p>
                </div>
              </div>
            </div>

            {/* Context */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Context & Business Objective
              </h2>
              <p className="text-gray-700 mb-4">{experience.context}</p>
              <div className="bg-orange-100 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2">Business Objective</h3>
                <p className="text-gray-700">{experience.businessObjective}</p>
              </div>
            </div>

            {/* Root Causes Analysis - Collapsible */}
            <div className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleSection('problem')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-red-600" />
                  {experience.problem.title}
                </h2>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${openSections.problem ? 'rotate-90' : ''}`} />
              </button>
              {openSections.problem && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.problem.rootCauses.map((item, index) => (
                      <div key={index} className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                        <h3 className="font-semibold text-red-700 mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          {item.issue}
                        </h3>
                        <p className="text-sm text-gray-700">{item.rootCause}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Key Actions - Collapsible */}
            <div className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleSection('actions')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Key Actions & Implementation
                </h2>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${openSections.actions ? 'rotate-90' : ''}`} />
              </button>
              {openSections.actions && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.keyActions.map((action, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                        <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-2">
                            {index + 1}
                          </div>
                          {action.domain}
                        </h3>
                        <p className="text-sm text-gray-700">{action.intervention}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results - Collapsible */}
            <div className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleSection('results')}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                  Results & Impact
                </h2>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${openSections.results ? 'rotate-90' : ''}`} />
              </button>
              {openSections.results && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.results.map((result, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                        <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {result.outcome}
                        </h3>
                        <p className="text-sm text-gray-700">{result.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Strategic Outcome */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Strategic Outcome
              </h2>
              <p className="text-gray-700">{experience.strategicOutcome}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t">
              <Link 
                to="/experience" 
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Experience
              </Link>
              <div className="flex space-x-4">
                <Link 
                  to="/experience/10" 
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Link>
                <Link 
                  to="/experience/12" 
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Results Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-red-600" />
                Key Results
              </h3>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Inventory Accuracy</span>
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-lg font-bold text-red-600">$1B+ → Verified Parity</div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Audit Readiness</span>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-lg font-bold text-green-600">Series C Prep Cleared</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">System Maturity</span>
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-blue-600">Governance Institutionalized</div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Data Records Cleaned</span>
                    <Database className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-lg font-bold text-purple-600">1000+ Records</div>
                </div>
              </div>
            </div>

            {/* My Role */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-600" />
                My Role
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Title:</span>
                  <div className="text-gray-600">{experience.role}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Scope:</span>
                  <div className="text-gray-600">Led cross-functional initiative to restore ERP data integrity and establish inventory controls</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Team Influenced:</span>
                  <div className="text-gray-600">Finance, Operations, IT, Supply Chain, Audit</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Reporting:</span>
                  <div className="text-gray-600">CEO, CFO</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Duration:</span>
                  <div className="text-gray-600">{experience.duration}</div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-red-600" />
                Program Metrics
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Timeline</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="font-medium">6 months</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Investment Impact</span>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                    <span className="font-medium text-green-600">Series C Ready</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Data Quality</span>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-blue-600" />
                    <span className="font-medium text-blue-600">Audit Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience11DetailTemplate;

