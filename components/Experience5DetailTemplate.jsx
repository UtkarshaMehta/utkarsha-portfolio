import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Target, TrendingUp, CheckCircle, AlertTriangle, Award, BarChart3, Clock, Eye, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const Experience5DetailTemplate = ({ experience }) => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-6 flex justify-between items-center">
          <Link to="/experience" className="inline-flex items-center text-michigan-blue hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Experience
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold michigan-blue mb-4">
                {experience.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {experience.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </div>
            
            {/* Key Info & Results - Optimized Layout */}
            <div className="space-y-4">
              {/* Project Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold michigan-blue mb-4">Project Details</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{experience.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{experience.role}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{experience.category}</span>
                  </div>
                </div>
              </div>

              {/* Results Infographic - Optimized */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Key Results
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="bg-green-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <Clock className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-green-800 text-sm">50% Time Saved</div>
                      <div className="text-xs text-green-600">Manual reporting eliminated</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <Eye className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-blue-800 text-sm">7-Day Refresh</div>
                      <div className="text-xs text-blue-600">From 30-day lag</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="bg-purple-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-purple-800 text-sm">Team Alignment</div>
                      <div className="text-xs text-purple-600">Improved transparency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        {experience.executiveSummary && (
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-6 mb-6">
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

        {/* Context & Business Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Context
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {experience.context}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Business Objective
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {experience.businessObjective}
            </p>
          </div>
        </div>

        {/* Problem Statement */}
        {experience.problem && (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h2 className="text-xl font-bold michigan-blue mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              {experience.problem.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {experience.problem.points.map((point, index) => (
                <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <AlertTriangle className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decision Trade-offs */}
        {experience.decisionTradeoffs && (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h2 className="text-xl font-bold michigan-blue mb-4">Decision Trade-offs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Decision</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Options Considered</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.decisionTradeoffs.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 font-medium">{item.decision}</td>
                      <td className="border border-gray-200 px-4 py-2" dangerouslySetInnerHTML={{ __html: item.optionsConsidered }}></td>
                      <td className="border border-gray-200 px-4 py-2">{item.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Solution Infographic */}
        {experience.solution && (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h2 className="text-xl font-bold michigan-blue mb-6 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              {experience.solution.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experience.solution.initiatives.map((initiative, index) => {
                const icons = [
                  <BarChart3 className="h-6 w-6" />,
                  <Target className="h-6 w-6" />,
                  <Eye className="h-6 w-6" />,
                  <CheckCircle className="h-6 w-6" />,
                  <Zap className="h-6 w-6" />
                ];
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-green-500 to-green-600', 
                  'from-purple-500 to-purple-600',
                  'from-orange-500 to-orange-600',
                  'from-indigo-500 to-indigo-600'
                ];
                
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border hover:shadow-md transition-shadow">
                    <div className={`bg-gradient-to-r ${colors[index % 5]} text-white rounded-lg p-3 mb-3 flex items-center justify-center`}>
                      {icons[index % 5]}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">
                      {initiative.name}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Link
            to="/experience/4"
            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Experience
          </Link>
          
          <Link
            to="/experience"
            className="inline-flex items-center px-4 py-2 bg-michigan-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Experience
          </Link>
          
          <Link
            to="/experience/7"
            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Next Experience
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Experience5DetailTemplate

