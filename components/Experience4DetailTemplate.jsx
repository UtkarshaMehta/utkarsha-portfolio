import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Target, TrendingUp, CheckCircle, AlertTriangle, Award, Globe, Shield, FileText, BarChart3, Clock, Eye } from 'lucide-react'

const Experience4DetailTemplate = ({ experience }) => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/experience" 
            className="inline-flex items-center text-michigan-blue hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Experience
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold michigan-blue mb-3">
                {experience.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {experience.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                {experience.description}
              </p>
            </div>
            
            {/* Key Info & Results - Compact */}
            <div className="space-y-4">
              {/* Project Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold michigan-blue mb-3 text-sm">Project Details</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 text-gray-500 mr-2" />
                    <span className="text-xs">{experience.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 text-gray-500 mr-2" />
                    <span className="text-xs">{experience.role}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 text-gray-500 mr-2" />
                    <span className="text-xs">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-3 w-3 text-gray-500 mr-2" />
                    <span className="text-xs">{experience.regions?.length} Regions</span>
                  </div>
                </div>
              </div>

              {/* Results Infographic - Compact */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-bold text-green-800 mb-3 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Key Results
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center bg-white rounded-lg p-2 shadow-sm">
                    <div className="bg-green-100 rounded-full p-1.5 mr-2 flex-shrink-0">
                      <Clock className="h-3 w-3 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-800 text-xs">30% Faster</div>
                      <div className="text-xs text-green-600">Customs clearance</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white rounded-lg p-2 shadow-sm">
                    <div className="bg-blue-100 rounded-full p-1.5 mr-2 flex-shrink-0">
                      <Shield className="h-3 w-3 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 text-xs">30K+ Products</div>
                      <div className="text-xs text-blue-600">Classified accurately</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white rounded-lg p-2 shadow-sm">
                    <div className="bg-purple-100 rounded-full p-1.5 mr-2 flex-shrink-0">
                      <BarChart3 className="h-3 w-3 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-purple-800 text-xs">$X M Savings</div>
                      <div className="text-xs text-purple-600">Annual cost reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        {experience.executiveSummary && (
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Executive Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center text-white">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Issue
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {experience.executiveSummary.issue}
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center text-white">
                  <Target className="h-4 w-4 mr-2" />
                  Recommendation
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {experience.executiveSummary.recommendation}
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center text-white">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Impact
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {experience.executiveSummary.impact}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Context & Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold michigan-blue mb-4">Context</h2>
            <p className="text-gray-700 leading-relaxed">
              {experience.strategicContext}
            </p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              {experience.problem.title}
            </h2>
            <ul className="space-y-2">
              {experience.problem.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-red-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Approach - Solution Infographic */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold michigan-blue mb-6 flex items-center">
            <Target className="h-6 w-6 mr-2" />
            {experience.approach.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.approach.initiatives.map((initiative, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4 flex-shrink-0">
                    {index === 0 && <Globe className="h-6 w-6 text-blue-600" />}
                    {index === 1 && <FileText className="h-6 w-6 text-blue-600" />}
                    {index === 2 && <BarChart3 className="h-6 w-6 text-blue-600" />}
                    {index === 3 && <Shield className="h-6 w-6 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-800 mb-2">{initiative.name}</h3>
                    <p className="text-blue-700 text-sm leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Execution & Governance */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            {experience.executionGovernance.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experience.executionGovernance.points.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Resolutions */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold michigan-blue mb-6 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            {experience.challengesResolutions.title}
          </h2>
          <div className="space-y-4">
            {experience.challengesResolutions.items.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Challenge</h4>
                  <p className="text-orange-700 text-sm">{item.challenge}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Resolution</h4>
                  <p className="text-green-700 text-sm">{item.resolution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-bold michigan-blue mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Results
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Outcome</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Result</th>
                </tr>
              </thead>
              <tbody>
                {experience.results.map((result, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{result.metric}</td>
                    <td className="py-3 px-4 font-semibold text-green-600">{result.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Management */}
        {experience.riskManagement && (
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-8 border border-purple-200">
            <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              {experience.riskManagement.title}
            </h2>
            <p className="text-purple-700 leading-relaxed">
              {experience.riskManagement.description}
            </p>
          </div>
        )}

        {/* Voice of Adoption */}
        {experience.voiceOfAdoption && (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">"</div>
              <p className="text-xl italic mb-4">{experience.voiceOfAdoption}</p>
              <div className="text-sm opacity-75">Voice of Adoption</div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            to="/experience/3"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous Experience
          </Link>
          
          <Link 
            to="/experience/5"
            className="inline-flex items-center px-6 py-3 bg-michigan-blue text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Next Experience
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Experience4DetailTemplate

