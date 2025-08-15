import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Target, TrendingUp, Users, CheckCircle, AlertTriangle, BarChart3, FileText, Clock, Building } from 'lucide-react'

const Experience8DetailTemplate = ({ experience }) => {
  const navigate = useNavigate()
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const CollapsibleSection = ({ title, children, icon: Icon, defaultOpen = false, sectionKey }) => {
    const isOpen = openSections[sectionKey] !== undefined ? openSections[sectionKey] : defaultOpen

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <Icon className="w-6 h-6 mr-3 text-blue-600" />
            {title}
          </h2>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            {children}
          </div>
        )}
      </div>
    )
  }

  const ComponentCard = ({ component, func }) => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
      <h4 className="font-semibold text-blue-800 mb-2">{component}</h4>
      <p className="text-blue-700">{func}</p>
    </div>
  )

  const ActionCard = ({ action, index }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">{action.title}</h4>
          <p className="text-gray-700 leading-relaxed">{action.description}</p>
        </div>
      </div>
    </div>
  )

  const ResultCard = ({ metric, value, icon: Icon, color }) => {
    const colorClasses = {
      green: 'bg-green-50 border-green-200 text-green-800',
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800'
    }

    return (
      <div className={`border rounded-lg p-4 ${colorClasses[color] || colorClasses.blue}`}>
        <div className="flex items-center mb-2">
          <Icon className={`w-5 h-5 mr-2 ${color === 'green' ? 'text-green-600' : 
                                            color === 'blue' ? 'text-blue-600' :
                                            color === 'purple' ? 'text-purple-600' :
                                            color === 'orange' ? 'text-orange-600' :
                                            'text-indigo-600'}`} />
          <span className="text-lg font-bold">{value}</span>
        </div>
        <h4 className="font-semibold">{metric}</h4>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{experience.detailTitle || experience.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{experience.subtitle}</p>
              <p className="text-blue-100 leading-relaxed">{experience.description}</p>
            </div>
            <div className="bg-blue-700 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Project Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-200">Company:</span>
                  <span className="font-medium">{experience.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Role:</span>
                  <span className="font-medium">{experience.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Duration:</span>
                  <span className="font-medium">{experience.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Functions:</span>
                  <span className="font-medium">{experience.functions?.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Business Driver */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-l-4 border-green-500 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                <Target className="w-6 h-6 mr-3" />
                Business Driver
              </h2>
              <p className="text-green-700 text-lg">{experience.businessDriver}</p>
            </div>

            {/* Context */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Building className="w-6 h-6 mr-3 text-gray-600" />
                Context
              </h2>
              <p className="text-gray-700 leading-relaxed">{experience.context}</p>
            </div>

            {/* Problem */}
            <CollapsibleSection 
              title="Problem Statement" 
              icon={AlertTriangle} 
              defaultOpen={true}
              sectionKey="problem"
            >
              <ul className="space-y-3">
                {experience.problem?.points?.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleSection>

            {/* Key Decision */}
            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 rounded-lg p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" />
                Key Decision
              </h2>
              <p className="text-yellow-700 text-lg">{experience.keyDecision}</p>
            </div>

            {/* Solution Components */}
            <CollapsibleSection 
              title="Solution Components" 
              icon={BarChart3} 
              defaultOpen={true}
              sectionKey="components"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.components?.map((comp, index) => (
                  <ComponentCard 
                    key={index}
                    component={comp.component}
                    func={comp.function}
                  />
                ))}
              </div>
            </CollapsibleSection>

            {/* Actions */}
            <CollapsibleSection 
              title="Key Actions & Implementation" 
              icon={CheckCircle} 
              defaultOpen={false}
              sectionKey="actions"
            >
              <div className="space-y-6">
                {experience.actions?.map((action, index) => (
                  <ActionCard key={index} action={action} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 rounded-lg p-6">
              <blockquote className="text-lg italic text-gray-700 mb-2">
                "{experience.quote}"
              </blockquote>
              <cite className="text-sm text-gray-600">— {experience.quoteAuthor}</cite>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Results & Impact */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Results & Impact
              </h3>
              <div className="space-y-4">
                {experience.results?.map((result, index) => {
                  const colors = ['green', 'blue', 'purple', 'orange', 'indigo'];
                  const color = colors[index % colors.length];
                  return (
                    <ResultCard 
                      key={index}
                      metric={result.metric}
                      value={result.value}
                      icon={TrendingUp}
                      color={color}
                    />
                  );
                })}
              </div>
            </div>

            {/* My Role */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                My Role
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Title:</span>
                  <p className="text-gray-600">{experience.myRole?.title}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Scope:</span>
                  <p className="text-gray-600">{experience.myRole?.scope}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Team Influenced:</span>
                  <p className="text-gray-600">{experience.myRole?.teamInfluenced}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Reporting Line:</span>
                  <p className="text-gray-600">{experience.myRole?.reportingLine}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Timeframe:</span>
                  <p className="text-gray-600">{experience.myRole?.timeframe}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/experience')}
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to Experience</span>
            </button>
            
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/experience/7')}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                onClick={() => navigate('/experience/9')}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience8DetailTemplate

