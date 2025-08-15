import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight, Target, Cog, TrendingDown, Users, CheckCircle, AlertTriangle, BarChart3, Zap, Settings, FileText, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experience12DetailTemplate = ({ experience }) => {
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

  const ActionCard = ({ action, index }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 text-white rounded-full flex items-center justify-center font-semibold" style={{background: '#1e40af'}}>
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">{action.title}</h4>
          
          <div className="space-y-3">
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
              <p className="text-sm font-medium text-red-800 mb-1">Problem:</p>
              <p className="text-sm text-red-700">{action.problem}</p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
              <p className="text-sm font-medium text-blue-800 mb-1">Action:</p>
              <p className="text-sm text-blue-700">{action.action}</p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
              <p className="text-sm font-medium text-green-800 mb-1">Outcome:</p>
              <p className="text-sm text-green-700">{action.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RiskCard = ({ risk, mitigation, index }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-2">{risk}</h4>
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <p className="text-sm font-medium text-green-800 mb-1">Mitigation:</p>
            <p className="text-sm text-green-700">{mitigation}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="text-white" style={{background: '#1e40af'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-3">{experience.title}</h1>
              <p className="text-lg text-blue-100 mb-4">{experience.subtitle}</p>
              <p className="text-base text-blue-50">{experience.description}</p>
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
                  <span className="text-blue-200">Functions:</span>
                  <span className="font-medium">{experience.functions?.join(', ')}</span>
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
            
            {/* Executive Summary */}
            <div className="text-white rounded-lg p-6" style={{background: '#1e40af'}}>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3" />
                Executive Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-100">Issue</h4>
                  <p className="text-sm">{experience.executiveSummary?.issue}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-100">Recommendation</h4>
                  <p className="text-sm">{experience.executiveSummary?.recommendation}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-100">Impact</h4>
                  <p className="text-sm">{experience.executiveSummary?.impact}</p>
                </div>
              </div>
            </div>

            {/* Business Problem & Measures */}
            <CollapsibleSection 
              title="Business Problem & Measures" 
              icon={AlertTriangle}
              sectionKey="businessProblem"
              defaultExpanded={true}
            >
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Business Problem</h4>
                  <p className="text-red-700">{experience.businessProblem}</p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-3">Key Measures</h4>
                  <ul className="space-y-2">
                    {experience.measures?.map((measure, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-orange-700">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CollapsibleSection>

            {/* Approach & Decisions */}
            <CollapsibleSection 
              title="Approach & Decisions" 
              icon={Settings}
              sectionKey="approach"
              defaultExpanded={true}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ul className="space-y-3">
                  {experience.approachDecisions?.points?.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CollapsibleSection>

            {/* Actions */}
            <CollapsibleSection 
              title="Key Actions & Implementation" 
              icon={Cog}
              sectionKey="actions"
              defaultExpanded={false}
            >
              <div className="space-y-6">
                {experience.actions?.map((action, index) => (
                  <ActionCard key={index} action={action} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Change Governance */}
            <CollapsibleSection 
              title="Change Governance: ECR/ECO Implementation" 
              icon={FileText}
              sectionKey="changeGovernance"
              defaultExpanded={false}
            >
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Problem</h4>
                  <p className="text-red-700 mb-3">{experience.changeGovernance?.problem}</p>
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-3">
                    <p className="text-yellow-800 font-medium">{experience.changeGovernance?.highlight}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Decision</h4>
                  <p className="text-blue-700">{experience.changeGovernance?.decision}</p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Solution Implementation</h4>
                  <div className="space-y-3">
                    <div className="bg-white border border-green-300 rounded p-3">
                      <p className="text-green-700"><strong>ECR:</strong> {experience.changeGovernance?.solution?.ecr}</p>
                    </div>
                    <div className="bg-white border border-green-300 rounded p-3">
                      <p className="text-green-700"><strong>ECO:</strong> {experience.changeGovernance?.solution?.eco}</p>
                    </div>
                    <div className="bg-white border border-green-300 rounded p-3">
                      <p className="text-green-700"><strong>Automation:</strong> {experience.changeGovernance?.solution?.automation}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Impact</h4>
                    <p className="text-purple-700">{experience.changeGovernance?.impact}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">My Role</h4>
                    <p className="text-blue-700">{experience.changeGovernance?.myRoleInChange}</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Risks & Mitigations */}
            <CollapsibleSection 
              title="Risks & Mitigations" 
              icon={AlertTriangle}
              sectionKey="risks"
              defaultExpanded={false}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.risksMitigations?.risks?.map((item, index) => (
                  <RiskCard key={index} risk={item.risk} mitigation={item.mitigation} index={index} />
                ))}
              </div>
            </CollapsibleSection>

            {/* Strategic Impact */}
            <CollapsibleSection 
              title="Strategic Impact for the Company" 
              icon={TrendingDown}
              sectionKey="strategicImpact"
              defaultExpanded={false}
            >
              <div className="space-y-4">
                {experience.strategicImpact?.impacts?.map((impact, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">{impact.area}</h4>
                    <p className="text-blue-700">{impact.description}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 rounded-lg p-6">
              <blockquote className="text-lg italic text-gray-700 mb-2">
                "{experience.quote}"
              </blockquote>
            </div>
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
                  const colors = ['green', 'blue', 'purple', 'orange', 'indigo', 'pink'];
                  const color = colors[index % colors.length];
                  return (
                    <ResultCard 
                      key={index}
                      metric={result.metric}
                      value={result.value}
                      detail={result.detail}
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
                <Users className="w-5 h-5 mr-2" style={{color: '#1e40af'}} />
                My Role
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-300">Duration:</span>
                  <span className="ml-2">{experience.duration}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Functions:</span>
                  <span className="ml-2">{experience.functions?.join(', ')}</span>
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
              onClick={() => navigate('/experience/11')}
              className="flex items-center space-x-2 px-6 py-3 text-white rounded-lg transition-colors"
              style={{background: '#1e40af'}}
              onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.background = '#1e40af'}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => navigate('/experience/13')}
              className="flex items-center space-x-2 px-6 py-3 text-white rounded-lg transition-colors"
              style={{background: '#1e40af'}}
              onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
              onMouseLeave={(e) => e.target.style.background = '#1e40af'}
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

export default Experience12DetailTemplate;

