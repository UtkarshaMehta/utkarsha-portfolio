import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight, Target, Globe, Users, TrendingUp, TrendingDown, BarChart3, FileText, Truck, Building, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experience9DetailTemplate = ({ experience }) => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CollapsibleSection = ({ title, children, icon: Icon, defaultExpanded = false, sectionKey }) => {
    const isExpanded = expandedSections[sectionKey] ?? defaultExpanded;
    
    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="w-5 h-5 text-blue-600" />}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-100">
            {children}
          </div>
        )}
      </div>
    );
  };

  const ResultCard = ({ metric, value, detail, icon: Icon, color = "blue" }) => (
    <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 rounded-lg p-4 border border-${color}-200`}>
      <div className="flex items-center justify-between mb-2">
        {Icon && <Icon className={`w-6 h-6 text-${color}-600`} />}
        <span className={`text-2xl font-bold text-${color}-700`}>{value}</span>
      </div>
      <h4 className={`font-semibold text-${color}-800 mb-1`}>{metric}</h4>
      {detail && <p className={`text-sm text-${color}-600`}>{detail}</p>}
    </div>
  );

  const InitiativeCard = ({ initiative, index }) => {
    const icons = {
      "Logistics Optimization": Truck,
      "Supplier Portfolio Management": Building,
      "Collaboration & Cross-functional Alignment": HandHeart
    };
    
    const Icon = icons[initiative.title] || Target;
    
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{initiative.title}</h4>
            <div className="space-y-2">
              {initiative.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{experience.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{experience.subtitle}</p>
              <p className="text-lg text-blue-50">{experience.description}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
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
                  <span className="text-blue-200">Category:</span>
                  <span className="font-medium">{experience.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Context */}
            <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-green-800">
                <Target className="w-6 h-6 mr-3" />
                Context
              </h2>
              <p className="text-green-700">{experience.context}</p>
            </div>

            {/* Key Initiatives & Execution */}
            <CollapsibleSection
              title="Key Initiatives & Execution"
              icon={BarChart3}
              defaultExpanded={true}
              sectionKey="initiatives"
            >
              <div className="space-y-6">
                {experience.keyInitiatives?.sections?.map((initiative, index) => (
                  <InitiativeCard key={index} initiative={initiative} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Impact */}
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-800">
                <TrendingUp className="w-6 h-6 mr-3" />
                Impact
              </h2>
              <div className="space-y-3">
                {experience.impact?.results?.map((result, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            {experience.quote && (
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 rounded-lg p-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "{experience.quote}"
                </blockquote>
                <cite className="text-sm font-medium text-gray-600">— {experience.quoteAuthor}</cite>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Results & Impact */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                Results & Impact
              </h3>
              <div className="space-y-4">
                {experience.results?.map((result, index) => {
                  const colors = ['green', 'blue', 'purple', 'orange'];
                  const color = colors[index % colors.length];
                  
                  // Use TrendingDown for cost reductions, TrendingUp for improvements/savings
                  let icon = TrendingUp;
                  if (result.metric.toLowerCase().includes('cost reduction') || 
                      result.metric.toLowerCase().includes('material cost')) {
                    icon = TrendingDown;
                  }
                  
                  return (
                    <ResultCard 
                      key={index}
                      metric={result.metric}
                      value={result.value}
                      detail={result.detail}
                      icon={icon}
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

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/experience')}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Experience</span>
          </button>
          
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/experience/8')}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => navigate('/experience/10')}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience9DetailTemplate;

